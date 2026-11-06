import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import {
  framingSecurityHeaders,
  isProductionPublicHost,
  shouldServeGrokPwa,
} from "./grok-pwa-shared.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(ROOT, rel), "utf8");

test("vercel.json sets nosniff and referrer-policy without HTML cache headers", () => {
  const json = JSON.parse(read("vercel.json"));
  const serialized = JSON.stringify(json);
  assert.equal(serialized.includes("s-maxage"), false);
  assert.equal(serialized.includes("stale-while-revalidate"), false);
  const global = json.headers.find((entry) => entry.source === "/(.*)");
  assert.ok(global);
  const keys = Object.fromEntries(global.headers.map((h) => [h.key, h.value]));
  assert.equal(keys["X-Content-Type-Options"], "nosniff");
  assert.equal(keys["Referrer-Policy"], "strict-origin-when-cross-origin");
  assert.equal(keys["X-Frame-Options"], undefined);
  assert.equal(keys["Content-Security-Policy"], undefined);
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
