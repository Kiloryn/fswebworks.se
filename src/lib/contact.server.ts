import { SITE, SUBJECTS } from "@/lib/site";

export type ContactResult = { ok: true } | { ok: false; error: string };

const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function tooMany(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function oneLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function env(name: string) {
  return (globalThis.process?.env?.[name] ?? "").trim();
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMail(
  raw: {
    name?: unknown;
    email?: unknown;
    phone?: unknown;
    subject?: unknown;
    message?: unknown;
    website?: unknown;
  },
  ip = "unknown",
): Promise<ContactResult> {
  try {
    const website = String(raw.website ?? "").trim();
    if (website) return { ok: true };

    const name = oneLine(String(raw.name ?? ""));
    const email = oneLine(String(raw.email ?? ""));
    const phone = oneLine(String(raw.phone ?? ""));
    const subject = oneLine(String(raw.subject ?? ""));
    const message = String(raw.message ?? "").trim();

    if (!name || !email || !message) {
      return { ok: false, error: "Fyll i namn, e-post och meddelande." };
    }
    if (!EMAIL_RE.test(email) || name.length > 120 || email.length > 200 || message.length > 4000) {
      return { ok: false, error: "Ange en giltig e-postadress." };
    }
    if (tooMany(ip)) {
      return { ok: false, error: "För många försök. Vänta en stund och prova igen." };
    }

    const key = env("RESEND_API_KEY");
    if (!key) {
      console.error("[contact] RESEND_API_KEY saknas");
      return {
        ok: false,
        error: "Kunde inte skicka just nu. Skriv till oss på " + SITE.email + ".",
      };
    }

    const to = env("CONTACT_EMAIL") || SITE.email;
    const from = env("RESEND_FROM") || "FSwebworks <beth.t@example.com>";
    const subjectLabel =
      SUBJECTS.find((s) => s.value === subject)?.label ?? "Förfrågan från webbplatsen";

    const text = [
      "Ny förfrågan från fswebworks.se",
      "",
      `Namn: ${name}`,
      `E-post: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      `Ämne: ${subjectLabel}`,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Ny förfrågan: ${subjectLabel}`,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] Resend", res.status, detail.slice(0, 400));
      return {
        ok: false,
        error: "Kunde inte skicka just nu. Skriv till oss på " + SITE.email + ".",
      };
    }

    return { ok: true };
  } catch (err) {
    console.error("[contact]", err);
    return {
      ok: false,
      error: "Kunde inte skicka just nu. Skriv till oss på " + SITE.email + ".",
    };
  }
}
