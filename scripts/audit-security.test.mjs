import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import {
  framingSecurityHeaders,
  isProductionPublicHost,
  shouldServeGrokPwa,
} from "./grok-pwa-shared.mjs";
import {
  HTML_DOCUMENT_CACHE,
  STATIC_ASSET_CACHE,
  shouldCacheHtmlDocument,
} from "./cache-headers.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(ROOT, rel), "utf8");

test("vercel.json keeps security headers on the catch-all and adds cache on specific sources", () => {
  const json = JSON.parse(read("vercel.json"));
  const global = json.headers.find((entry) => entry.source === "/(.*)");
  assert.ok(global);
  const keys = Object.fromEntries(global.headers.map((h) => [h.key, h.value]));
  assert.equal(keys["X-Content-Type-Options"], "nosniff");
  assert.equal(keys["Referrer-Policy"], "strict-origin-when-cross-origin");
  assert.equal(keys["Cache-Control"], undefined);
  assert.equal(keys["X-Frame-Options"], undefined);
  assert.equal(keys["Content-Security-Policy"], undefined);

  const home = json.headers.find((entry) => entry.source === "/");
  assert.ok(home);
  const homeCache = home.headers.find((h) => h.key === "Cache-Control")?.value;
  assert.equal(homeCache, HTML_DOCUMENT_CACHE);

  const demos = json.headers.find((entry) =>
    String(entry.source).includes("vvs"),
  );
  assert.ok(demos);
  assert.equal(
    demos.headers.find((h) => h.key === "Cache-Control")?.value,
    HTML_DOCUMENT_CACHE,
  );

  for (const prefix of ["/fonts/(.*)", "/images/(.*)", "/videos/(.*)"]) {
    const entry = json.headers.find((item) => item.source === prefix);
    assert.ok(entry, prefix);
    const cache = entry.headers.find((h) => h.key === "Cache-Control")?.value;
    assert.equal(cache, STATIC_ASSET_CACHE);
    assert.equal(String(cache).includes("immutable"), false);
  }

  const serialized = JSON.stringify(json);
  assert.equal(serialized.includes("/api/"), false);
});

test("security-headers middleware exists and gates framing", () => {
  const source = read("server/middleware/00-security-headers.ts");
  assert.match(source, /framingSecurityHeaders/);
  assert.match(source, /ALWAYS_SECURITY_HEADERS/);
  assert.match(read("server/middleware/grok-pwa.ts"), /shouldServeGrokPwa/);
  assert.match(read("scripts/grok-pwa-plugin.mjs"), /shouldServeGrokPwa/);
  const root = read("src/routes/__root.tsx");
  assert.doesNotMatch(root, /__grok/);
  assert.doesNotMatch(root, /extensions\.js/);
});

test("shouldServeGrokPwa is off for the public production site", () => {
  assert.equal(isProductionPublicHost("fswebworks.se"), true);
  assert.equal(isProductionPublicHost("www.fswebworks.se:443"), true);
  assert.equal(isProductionPublicHost("localhost:8080"), false);
  assert.equal(shouldServeGrokPwa("fswebworks.se"), false);
  assert.equal(shouldServeGrokPwa("www.fswebworks.se"), false);
  assert.equal(shouldServeGrokPwa("localhost:8080"), true);
  assert.equal(shouldServeGrokPwa("127.0.0.1:8080"), true);
  assert.equal(shouldServeGrokPwa("preview.grok-sandbox.com"), true);
  assert.equal(shouldServeGrokPwa("wild-race.grok.me"), true);
  assert.equal(shouldServeGrokPwa("something.vercel.app", { VERCEL_ENV: "production" }), false);
  assert.equal(shouldServeGrokPwa("something.vercel.app", { VERCEL_ENV: "preview" }), true);
  assert.equal(shouldServeGrokPwa("localhost", { VERCEL_ENV: "production" }), true);
});

test("framing headers only apply on the public production hosts", () => {
  assert.equal(Object.keys(framingSecurityHeaders("fswebworks.se")).length > 0, true);
  assert.match(
    framingSecurityHeaders("www.fswebworks.se")["Content-Security-Policy"],
    /frame-ancestors 'self'/,
  );
  assert.deepEqual(framingSecurityHeaders("localhost:8080"), {});
  assert.deepEqual(framingSecurityHeaders("abc.vercel.app"), {});
  assert.deepEqual(framingSecurityHeaders("guest.grok-sandbox.com"), {});
});

test("example demo routes send noindex", () => {
  for (const file of [
    "src/routes/vvs.tsx",
    "src/routes/elektriker.tsx",
    "src/routes/salong.tsx",
    "src/routes/restaurang.tsx",
    "src/routes/malare.tsx",
    "src/routes/konsult.tsx",
  ]) {
    const source = read(file);
    assert.match(source, /NOINDEX_ROBOTS_META/, file);
  }
});

test("robots.txt and sitemap cover marketing pages and omit demos", () => {
  const robots = read("public/robots.txt");
  assert.match(robots, /Sitemap: https:\/\/fswebworks\.se\/sitemap\.xml/);
  assert.match(robots, /Allow: \//);

  const sitemap = read("public/sitemap.xml");
  assert.match(sitemap, /https:\/\/fswebworks\.se\/</);
  assert.match(sitemap, /https:\/\/fswebworks\.se\/process/);
  assert.match(sitemap, /https:\/\/fswebworks\.se\/integritet/);
  assert.doesNotMatch(sitemap, /\/vvs/);
  assert.doesNotMatch(sitemap, /\/elektriker/);
  assert.doesNotMatch(sitemap, /\/salong/);
  assert.doesNotMatch(sitemap, /\/restaurang/);
  assert.doesNotMatch(sitemap, /\/malare/);
  assert.doesNotMatch(sitemap, /\/konsult/);
});

test("error UI is Swedish and does not interpolate error.message", () => {
  const source = read("src/lib/error-component.tsx");
  assert.match(source, /Något gick fel/);
  assert.match(source, /Ett oväntat fel uppstod/);
  assert.doesNotMatch(source, /error\.message/);
  assert.doesNotMatch(source, /Something went wrong/);
});

test("shouldCacheHtmlDocument covers marketing GET HTML and skips the contact API", () => {
  assert.equal(shouldCacheHtmlDocument("GET", "/"), true);
  assert.equal(shouldCacheHtmlDocument("GET", "/vvs"), true);
  assert.equal(shouldCacheHtmlDocument("POST", "/"), false);
  assert.equal(shouldCacheHtmlDocument("GET", "/api/contact"), false);
  assert.equal(shouldCacheHtmlDocument("GET", "/integritet"), false);
});

test("hero and studio font preloads live on the homepage route only", () => {
  const root = read("src/routes/__root.tsx");
  assert.doesNotMatch(root, /hero-poster/);
  assert.doesNotMatch(root, /fraunces-latin/);
  const home = read("src/routes/index.tsx");
  assert.match(home, /hero-poster\.jpg/);
  assert.match(home, /fraunces-latin\.woff2/);
  assert.match(home, /outfit-latin\.woff2/);
  const examples = read("src/components/home/page.tsx");
  assert.doesNotMatch(examples, /priority/);
});

test("vvs self-hosts IBM Plex and does not load Google Fonts", () => {
  const vvs = read("src/routes/vvs.tsx");
  assert.doesNotMatch(vvs, /fonts\.googleapis\.com/);
  assert.match(vvs, /Vad gör jag om det läcker\?/);
  assert.match(read("src/styles.css"), /ibm-plex-sans-latin-400\.woff2/);
  assert.equal(existsSync(join(ROOT, "public/fonts/ibm-plex-sans-latin-400.woff2")), true);
  assert.equal(existsSync(join(ROOT, "public/fonts/ibm-plex-sans-latin-500.woff2")), true);
  assert.equal(existsSync(join(ROOT, "public/fonts/ibm-plex-sans-latin-600.woff2")), true);
});

test("voice and first-party OG description match the locked Swedish strings", () => {
  const site = read("src/lib/site.ts");
  assert.match(site, /Design efter er verksamhet, inte en mall\./);
  assert.match(site, /Vi hjälper dig när behovet uppstår\. Du betalar bara för den hjälp du behöver\./);
  assert.match(site, /Du behöver inte ha allt klart från början\. Vi hjälper dig att strukturera innehållet\./);
  assert.match(site, /Vi kan sköta drift och teknik så du slipper det\. Vill du flytta sidan senare går det\./);
  assert.match(site, /Tydliga priser och ingen inlåsning/);
  assert.doesNotMatch(site, /ingen bindning/);
  assert.match(site, /label: "Välj"/);
  assert.doesNotMatch(site, /— Välj —/);
  const og = JSON.parse(read("src/lib/og/site.json"));
  assert.match(og.description, /ingen inlåsning/);
  assert.doesNotMatch(og.description, /ingen bindning/);
  assert.match(read("src/components/home/page.tsx"), /Hör av dig/);
  assert.match(read("src/routes/__root.tsx"), /og:description/);
});

test("homepage alignment and wrapping CSS land", () => {
  const css = read("src/styles.css");
  assert.match(css, /object-position:\s*top/);
  assert.match(css, /\.home-extra-services article h3/);
  assert.match(css, /\.home-faq summary[\s\S]*text-wrap:\s*pretty/);
  const header = read("src/components/site/header.tsx");
  assert.match(header, /max-w-\[75rem\].*px-6/);
  const footer = read("src/components/site/footer.tsx");
  assert.match(footer, /max-w-\[75rem\]/);
  assert.match(footer, /md:pe-28/);
  assert.match(footer, /basis-full md:basis-auto/);
});
