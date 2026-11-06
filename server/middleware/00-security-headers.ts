/**
 * Always-on security headers for every HTML/API response, plus framing
 * protection on the public production hosts only.
 *
 * Numbered so Nitro registers this *before* grok-pwa.ts (outer onion): Grok
 * install/manifest early-returns still get nosniff / referrer-policy, and
 * preview iframes are not given frame-ancestors 'self'.
 *
 * HTML CDN cache lives in cache-headers.ts and vercel.json, not here.
 */
import {
  ALWAYS_SECURITY_HEADERS,
  framingSecurityHeaders,
} from "../../scripts/grok-pwa-shared.mjs";

interface SecurityHeadersEvent {
  url: URL;
  req: { method: string; headers: Headers };
}

function requestHost(event: SecurityHeadersEvent): string {
  return (
    event.req.headers.get("x-forwarded-host") ?? event.req.headers.get("host") ?? event.url.host
  );
}

function applySecurityHeaders(response: Response, host: string): Response {
  const extra = {
    ...ALWAYS_SECURITY_HEADERS,
    ...framingSecurityHeaders(host),
  };
  try {
    for (const [key, value] of Object.entries(extra)) {
      response.headers.set(key, value);
    }
    return response;
  } catch {
    const headers = new Headers(response.headers);
    for (const [key, value] of Object.entries(extra)) {
      headers.set(key, value);
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }
}

export default async function securityHeadersMiddleware(
  event: SecurityHeadersEvent,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const result = await next();
  if (result instanceof Response) {
    return applySecurityHeaders(result, requestHost(event));
  }
  return result;
}
