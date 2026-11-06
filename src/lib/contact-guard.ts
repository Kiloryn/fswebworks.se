export const CONTACT_LIMITS = {
  name: 120,
  email: 200,
  phone: 40,
  message: 4000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function oneLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function hops(value: string | null): string[] {
  return (value ?? "")
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
}

/**
 * Prefer platform-controlled IP headers. The first x-forwarded-for hop is
 * attacker-settable; Vercel appends the connecting address last and also
 * sets x-vercel-forwarded-for / x-real-ip.
 */
export function clientIpFromHeaders(getHeader: (name: string) => string | null): string {
  const vercel = hops(getHeader("x-vercel-forwarded-for"))[0];
  if (vercel) return vercel;
  const real = (getHeader("x-real-ip") ?? "").trim();
  if (real) return real;
  const forwarded = hops(getHeader("x-forwarded-for"));
  if (forwarded.length > 0) return forwarded[forwarded.length - 1]!;
  return "unknown";
}

export function hostnameFromHostHeader(header: string | null | undefined): string {
  let host = String(header ?? "")
    .split(",")[0]
    .trim()
    .toLowerCase();
  if (!host) return "";
  if (host.startsWith("[")) {
    const end = host.indexOf("]");
    return end >= 0 ? host.slice(0, end + 1) : host;
  }
  const colon = host.lastIndexOf(":");
  if (colon !== -1 && /^\d+$/.test(host.slice(colon + 1))) {
    host = host.slice(0, colon);
  }
  return host;
}

export function isAllowedContactHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  if (host === "fswebworks.se" || host === "www.fswebworks.se") return true;
  if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
  if (host === "vercel.app" || host.endsWith(".vercel.app")) return true;
  if (host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com")) return true;
  if (host === "grok.me" || host.endsWith(".grok.me")) return true;
  return false;
}

function parseHttpUrl(value: string | null | undefined): URL | null {
  const raw = String(value ?? "").trim();
  if (!raw) return null;
  try {
    return new URL(raw.includes("://") ? raw : `https://${raw}`);
  } catch {
    return null;
  }
}

function originMatchesRequest(url: URL, requestHost: string): boolean {
  const host = url.hostname.toLowerCase();
  if (host !== requestHost) return false;
  if (!isAllowedContactHost(host)) return false;
  const local = host === "localhost" || host === "127.0.0.1" || host === "[::1]";
  if (local) return url.protocol === "http:" || url.protocol === "https:";
  return url.protocol === "https:";
}

/**
 * Same-origin posts from apex and www are allowed. Cross-site Origin is
 * rejected. Missing Origin falls back to Referer so older clients still work.
 */
export function isAllowedContactOrigin(opts: {
  origin: string | null;
  referer: string | null;
  host: string | null;
}): boolean {
  const requestHost = hostnameFromHostHeader(opts.host);
  if (!requestHost || !isAllowedContactHost(requestHost)) return false;

  const originUrl = parseHttpUrl(opts.origin);
  if (originUrl) return originMatchesRequest(originUrl, requestHost);

  const refererUrl = parseHttpUrl(opts.referer);
  if (refererUrl) return originMatchesRequest(refererUrl, requestHost);

  return false;
}

export type ContactFields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type ContactValidation =
  | { ok: true; fields: ContactFields }
  | { ok: false; error: string };

export function validateContactInput(raw: {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
}): ContactValidation {
  const name = oneLine(String(raw.name ?? ""));
  const email = oneLine(String(raw.email ?? ""));
  const phone = oneLine(String(raw.phone ?? ""));
  const subject = oneLine(String(raw.subject ?? ""));
  const message = String(raw.message ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Fyll i namn, e-post och meddelande." };
  }
  if (!EMAIL_RE.test(email) || email.length > CONTACT_LIMITS.email) {
    return { ok: false, error: "Ange en giltig e-postadress." };
  }
  if (name.length > CONTACT_LIMITS.name) {
    return { ok: false, error: "Namnet är för långt." };
  }
  if (phone.length > CONTACT_LIMITS.phone) {
    return { ok: false, error: "Telefonnumret är för långt." };
  }
  if (message.length > CONTACT_LIMITS.message) {
    return { ok: false, error: "Meddelandet är för långt." };
  }
  return { ok: true, fields: { name, email, phone, subject, message } };
}
