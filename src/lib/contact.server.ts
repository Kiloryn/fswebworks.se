import { SITE, SUBJECTS } from "@/lib/site";
import {
  clientIpFromHeaders,
  isAllowedContactOrigin,
  validateContactInput,
} from "@/lib/contact-guard";

export type ContactFailureCode = "validation" | "rate_limit" | "origin" | "config" | "send";
export type ContactResult = { ok: true } | { ok: false; error: string; code: ContactFailureCode };

const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function tooMany(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

function env(name: string) {
  return (globalThis.process?.env?.[name] ?? "").trim();
}

const SEND_ERROR = "Kunde inte skicka just nu. Skriv till oss på " + SITE.email + ".";

export function contactOriginAllowed(request: Request): boolean {
  return isAllowedContactOrigin({
    origin: request.headers.get("origin"),
    referer: request.headers.get("referer"),
    host: request.headers.get("x-forwarded-host") ?? request.headers.get("host"),
  });
}

export function contactClientIp(request: Request): string {
  return clientIpFromHeaders((name) => request.headers.get(name));
}

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

    const parsed = validateContactInput(raw);
    if (!parsed.ok) {
      return { ok: false, error: parsed.error, code: "validation" };
    }
    const { name, email, phone, subject, message } = parsed.fields;

    // Best-effort on serverless: in-memory Map is per-isolate. Bucket by both
    // IP and email so rotating the spoofable identity still hits a limit.
    const ipLimited = tooMany(`ip:${ip}`);
    const emailLimited = tooMany(`email:${email.toLowerCase()}`);
    if (ipLimited || emailLimited) {
      return {
        ok: false,
        error: "För många försök. Vänta en stund och prova igen.",
        code: "rate_limit",
      };
    }

    const key = env("RESEND_API_KEY");
    const from = env("RESEND_FROM");
    if (!key) {
      console.error("[contact] RESEND_API_KEY saknas");
      return { ok: false, error: SEND_ERROR, code: "config" };
    }
    if (!from) {
      console.error("[contact] RESEND_FROM saknas");
      return { ok: false, error: SEND_ERROR, code: "config" };
    }

    const to = env("CONTACT_EMAIL") || SITE.email;
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
      return { ok: false, error: SEND_ERROR, code: "send" };
    }

    return { ok: true };
  } catch (err) {
    console.error("[contact]", err);
    return { ok: false, error: SEND_ERROR, code: "send" };
  }
}
