import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
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

test("example pages use an opaque sticky bar and hide BackToTop", () => {
  const banner = read("src/components/site/demo-banner.tsx");
  assert.match(banner, /sticky top-0 z-\[60\] border-b border-line\/60 bg-canvas text-fg/);
  assert.doesNotMatch(banner, /bg-canvas\/95/);
  const backToTop = read("src/components/site/back-to-top.tsx");
  assert.match(backToTop, /EXAMPLES\.some/);
  assert.match(backToTop, /if \(isExample \|\| !show\) return null/);
  const footer = read("src/components/site/footer.tsx");
  assert.match(footer, /md:pe-28/);
});

test("malare and konsult header CTAs do not wrap", () => {
  const malare = read("src/routes/malare.tsx");
  assert.match(malare, /whitespace-nowrap[\s\S]*Kostnadsfri offert/);
  const konsult = read("src/routes/konsult.tsx");
  assert.match(konsult, /whitespace-nowrap[\s\S]*Boka 30 minuter/);
});

test("vvs team placeholders use the locked Voice string", () => {
  const vvs = read("src/routes/vvs.tsx");
  assert.match(vvs, /Här lägger vi in era foton\. Namn, roll, en bild från vardagen\./);
  assert.match(vvs, /Er bild läggs här/);
  assert.doesNotMatch(vvs, /Bild på personal/);
});

test("example pages self-host Newsreader, Oswald and DM Sans without Google Fonts", () => {
  const css = read("src/styles.css");
  const root = read("src/routes/__root.tsx");
  assert.doesNotMatch(css, /fonts\.googleapis\.com/);
  assert.doesNotMatch(css, /fonts\.gstatic\.com/);
  assert.doesNotMatch(root, /newsreader-latin|oswald-latin|dm-sans-latin/);
  for (const [family, file] of [
    ["Newsreader", "newsreader-latin-400.woff2"],
    ["Newsreader", "newsreader-latin-600.woff2"],
    ["Oswald", "oswald-latin-400.woff2"],
    ["Oswald", "oswald-latin-600.woff2"],
    ["DM Sans", "dm-sans-latin-400.woff2"],
    ["DM Sans", "dm-sans-latin-600.woff2"],
  ]) {
    assert.match(css, new RegExp(file.replaceAll(".", "\\.")));
    assert.equal(existsSync(join(ROOT, `public/fonts/${file}`)), true);
    assert.match(css, new RegExp(`font-family: "?${family}"?`));
  }
  assert.match(css, /\.demo-konsult \{[\s\S]*font-family: "IBM Plex Sans"/);
  assert.match(css, /\.demo-konsult \{[\s\S]*--font-display: "Fraunces"/);
  assert.doesNotMatch(css, /\.demo-konsult \{[\s\S]*font-family: "Outfit"/);
  for (const rel of [
    "src/routes/elektriker.tsx",
    "src/routes/malare.tsx",
    "src/routes/restaurang.tsx",
    "src/routes/vvs.tsx",
    "src/routes/konsult.tsx",
    "src/routes/salong.tsx",
  ]) {
    assert.doesNotMatch(read(rel), /fonts\.googleapis\.com/);
    assert.doesNotMatch(read(rel), /fonts\.gstatic\.com/);
  }
});

test("example service rows follow the salon price model", () => {
  const elektriker = read("src/routes/elektriker.tsx");
  const malare = read("src/routes/malare.tsx");
  assert.doesNotMatch(elektriker, /md:grid-cols-\[12rem_1fr_auto\]/);
  assert.doesNotMatch(malare, /md:grid-cols-\[12rem_1fr_auto\]/);
  assert.match(elektriker, /flex min-w-0 items-baseline justify-between gap-4/);
  assert.match(malare, /flex min-w-0 items-baseline justify-between gap-4/);
  assert.match(elektriker, /min-w-0 font-display text-xl/);
  assert.match(malare, /min-w-0 font-display text-xl/);
  assert.match(elektriker, /mt-2 max-w-xl/);
  assert.match(malare, /mt-2 max-w-xl/);
  const restaurang = read("src/routes/restaurang.tsx");
  assert.match(restaurang, /min-w-0 font-display text-xl/);
  assert.doesNotMatch(restaurang, /min-w-0 font-display text-2xl/);
  assert.match(restaurang, /bg-\[#eadccb\] px-6 py-8/);
  const vvs = read("src/routes/vvs.tsx");
  assert.match(vvs, /id="offert" className="bg-\[#1a2420\]/);
  assert.doesNotMatch(vvs, /id="offert" className="bg-\[#c45c3a\]/);
  assert.match(vvs, /font-display text-2xl text-\[#1a2420\]/);
  assert.doesNotMatch(vvs, /text-5xl text-\[#1a2420\]\/25/);
  assert.match(elektriker, /font-display text-2xl text-\[#14181f\]/);
  assert.doesNotMatch(elektriker, /text-5xl text-\[#14181f\]\/25/);
  assert.match(vvs, /bg-\[#eef3ef\]/);
  assert.doesNotMatch(vvs, /bg-\[#24302c\]/);
});

test("salong self-hosts Cormorant and does not load Google Fonts", () => {
  const salong = read("src/routes/salong.tsx");
  assert.doesNotMatch(salong, /fonts\.googleapis\.com/);
  assert.doesNotMatch(salong, /fonts\.gstatic\.com/);
  assert.match(read("src/styles.css"), /cormorant-garamond-latin-400\.woff2/);
  assert.match(read("src/styles.css"), /cormorant-garamond-latin-600\.woff2/);
  assert.equal(existsSync(join(ROOT, "public/fonts/cormorant-garamond-latin-400.woff2")), true);
  assert.equal(existsSync(join(ROOT, "public/fonts/cormorant-garamond-latin-600.woff2")), true);
});

test("example heroes are local files with recorded stock attribution", () => {
  const credits = read("public/images/ATTRIBUTION.md");
  for (const [creator, source, license] of [
    [
      "Maria Orlova",
      "https://www.pexels.com/photo/kitchen-restaurant-4947388/",
      "Pexels License",
    ],
    [
      "Rachel Claire",
      "https://www.pexels.com/photo/wooden-desk-and-shelves-in-room-5490294/",
      "Pexels License",
    ],
    [
      "stevepb",
      "https://pixabay.com/photos/plumbing-pipe-wrenches-plumber-840835/",
      "Pixabay Content License",
    ],
    [
      "ranjeet .",
      "https://www.pexels.com/photo/electrical-circuit-breaker-panel-with-color-coded-wiring-28950842/",
      "Pexels License",
    ],
  ]) {
    assert.match(credits, new RegExp(`creator: ${creator.replace(".", "\\.")}`));
    assert.match(credits, new RegExp(`source_page: ${source.replaceAll("/", "\\/")}`));
    assert.match(credits, new RegExp(`license: ${license}`));
  }
  assert.match(credits, /editorial_only: no/);
  assert.match(credits, /cc_nc: no/);
  assert.match(credits, /paid_plus_premium: no/);
  assert.match(credits, /unsplash_plus: no/);
  assert.match(credits, /sponsored_paid_result: no/);
  assert.match(credits, /source_host: pexels\.com/);
  assert.match(credits, /source_host: pixabay\.com/);
  assert.doesNotMatch(credits, /unsplash\.com\/plus/);
  assert.doesNotMatch(credits, /istockphoto\.com/);
  assert.doesNotMatch(credits, /CC BY-NC/);
  assert.doesNotMatch(credits, /unsplash_plus: yes/);
  assert.doesNotMatch(credits, /sponsored_paid_result: yes/);
  const kib = (rel) => statSync(join(ROOT, rel)).size / 1024;
  const caps = {
    restaurang: { jpeg: 300, webp: 131.6 },
    konsult: { jpeg: 178.3, webp: 77.3 },
    vvs: { jpeg: 126.7, webp: 55.3 },
    elektriker: { jpeg: 193.7, webp: 82.8 },
  };
  for (const [stem, cap] of Object.entries(caps)) {
    assert.equal(existsSync(join(ROOT, `public/images/${stem}.jpg`)), true);
    assert.equal(existsSync(join(ROOT, `public/images/${stem}.webp`)), true);
    assert.ok(kib(`public/images/${stem}.jpg`) <= cap.jpeg, `${stem}.jpg`);
    assert.ok(kib(`public/images/${stem}.webp`) <= cap.webp, `${stem}.webp`);
  }
  const restaurang = read("src/routes/restaurang.tsx");
  assert.match(restaurang, /restaurang\.jpg\?v=10/);
  assert.match(read("src/routes/konsult.tsx"), /konsult\.jpg\?v=9/);
  assert.match(read("src/routes/vvs.tsx"), /vvs\.jpg\?v=9/);
  assert.match(read("src/routes/elektriker.tsx"), /elektriker\.jpg\?v=9/);
  assert.doesNotMatch(restaurang, /pexels\.com\/photos/);
  assert.doesNotMatch(read("src/routes/salong.tsx"), /salong\.jpg\?v=8/);
  assert.doesNotMatch(read("src/routes/malare.tsx"), /malare\.jpg\?v=8/);
});

test("salong and restaurang maps are a static image plus a Google Maps link", () => {
  for (const rel of ["src/routes/salong.tsx", "src/routes/restaurang.tsx"]) {
    const source = read(rel);
    assert.doesNotMatch(source, /<iframe/);
    assert.doesNotMatch(source, /output=embed/);
    assert.match(source, /Öppna i Google Maps/);
    assert.match(source, /google\.com\/maps\/search/);
  }
  assert.equal(existsSync(join(ROOT, "public/images/salong-karta.jpg")), true);
  assert.equal(existsSync(join(ROOT, "public/images/salong-karta.webp")), true);
  assert.equal(existsSync(join(ROOT, "public/images/restaurang-karta.jpg")), true);
  assert.equal(existsSync(join(ROOT, "public/images/restaurang-karta.webp")), true);
});
