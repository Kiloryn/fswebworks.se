/**
 * CDN cache for public marketing HTML. Static /fonts /images /videos are
 * handled in vercel.json (those files never hit this function).
 *
 * Never cache /api/* or non-GET. Do not set HTML cache headers on security
 * middleware — keep that file security-only.
 */
import {
  HTML_DOCUMENT_CACHE,
  shouldCacheHtmlDocument,
} from "../../scripts/cache-headers.mjs";

interface CacheHeadersEvent {
  url: URL;
  req: { method: string; headers: Headers };
}

function withCacheControl(response: Response, value: string): Response {
  try {
    response.headers.set("Cache-Control", value);
    return response;
  } catch {
    const headers = new Headers(response.headers);
    headers.set("Cache-Control", value);
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }
}

export default async function cacheHeadersMiddleware(
  event: CacheHeadersEvent,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const result = await next();
  if (!(result instanceof Response)) return result;
  if (!shouldCacheHtmlDocument(event.req.method, event.url.pathname)) return result;
  const type = String(result.headers.get("content-type") ?? "");
  if (!type.includes("text/html")) return result;
  return withCacheControl(result, HTML_DOCUMENT_CACHE);
}
