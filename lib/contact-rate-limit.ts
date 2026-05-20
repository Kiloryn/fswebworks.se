const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 8;

const hits = new Map<string, number[]>();

/** Enkel burst-skydd per IP (bäst på en instans; räcker ofta för små sajter). */
export function isContactRateLimited(clientKey: string): boolean {
  const now = Date.now();
  const recent = (hits.get(clientKey) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    return true;
  }
  recent.push(now);
  hits.set(clientKey, recent);
  return false;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}
