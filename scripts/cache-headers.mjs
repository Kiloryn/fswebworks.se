/** CDN cache values for public marketing HTML and unhashed static assets. */
export const HTML_DOCUMENT_CACHE =
  "public, s-maxage=60, stale-while-revalidate=86400";
export const STATIC_ASSET_CACHE =
  "public, max-age=86400, stale-while-revalidate=604800";

export const MARKETING_HTML_PATHS = [
  "/",
  "/vvs",
  "/elektriker",
  "/salong",
  "/restaurang",
  "/malare",
  "/konsult",
];

export function shouldCacheHtmlDocument(method, pathname) {
  if (String(method ?? "GET").toUpperCase() !== "GET") return false;
  const path = String(pathname ?? "");
  if (path.startsWith("/api/")) return false;
  return MARKETING_HTML_PATHS.includes(path);
}
