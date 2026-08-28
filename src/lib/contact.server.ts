import { getRequest } from "@tanstack/react-start/server";
import { SITE, SUBJECTS } from "@/lib/site";
import type { ContactResult } from "@/lib/contact";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function clientIp() {
  const req = getRequest();
  const forwarded = req?.headers.get("x-forwarded-for") ?? "";
  return forwarded.split(",")[0]?.trim() || req?.headers.get("x-real-ip") || "unknown";
}

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

export async function sendContactMail(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
}): Promise<ContactResult> {
  if (data.website.trim()) return { ok: true };

  const ip = clientIp();
  if (tooMany(ip)) {
    return { ok: false, error: "För många försök. Vänta en stund och prova igen." };
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("[contact] RESEND_API_KEY saknas");
    return {
      ok: false,
      error: "Kunde inte skicka just nu. Skriv till oss på " + SITE.email + ".",
    };
  }

  const to = process.env.CONTACT_EMAIL?.trim() || SITE.email;
  const from =
    process.env.RESEND_FROM?.trim() || "FSwebworks <beth.t@example.com>";
  const subjectLabel =
    SUBJECTS.find((s) => s.value === data.subject)?.label ?? "Förfrågan från webbplatsen";

  const text = [
    `Ny förfrågan från fswebworks.se`,
    "",
    `Namn: ${oneLine(data.name)}`,
    `E-post: ${oneLine(data.email)}`,
    data.phone ? `Telefon: ${oneLine(data.phone)}` : null,
    `Ämne: ${subjectLabel}`,
    "",
    data.message.trim(),
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
      reply_to: oneLine(data.email),
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
}
