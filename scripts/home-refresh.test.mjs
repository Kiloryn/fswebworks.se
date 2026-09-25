// Run after npm run build. No browser, network requests or form submissions.
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import test from "node:test";
import app from "../.vercel/output/functions/__server.func/index.mjs";

const response = await app.fetch(new Request("http://localhost/"));
const html = await response.text();
const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");

test("homepage server-renders the offer and all five content sections", () => {
  assert.equal(response.status, 200);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  for (const id of ["priser", "exempel", "process", "contact"]) {
    assert.equal((html.match(new RegExp('id="' + id + '"', "g")) ?? []).length, 1);
  }
  for (const phrase of [
    "9 900",
    "1 990",
    "495",
    "995",
    "Ingen inlåsning",
    "Personlig hjälp",
    "Det här ingår",
    "Din hemsida är din",
    "Skicka meddelande",
  ]) {
    assert.ok(text.includes(phrase), phrase);
  }
});

test("homepage shows an example before interaction and labels demo work honestly", () => {
  assert.ok(html.includes('id="home-example-preview"'));
  assert.ok(html.includes('aria-pressed="true"'));
  assert.ok(text.includes("demonstrationer, inte kunduppdrag"));
  assert.equal((html.match(/<details\b/g) ?? []).length, 6, "only FAQ answers are collapsed");
  assert.ok(html.includes('href="/vvs"'));
  assert.ok(html.includes('value="salong"'));
});

test("hero video is lazy with lightweight sources and all media exists", async () => {
  const videoTag = html.match(/<video\b[^>]*>/)?.[0];
  assert.ok(videoTag, "hero video background is rendered");
  assert.match(videoTag, /preload="none"/);
  assert.match(videoTag, /muted/);
  assert.match(videoTag, /playsInline/);
  assert.match(videoTag, /poster="\/videos\/hero-poster\.jpg"/);
  assert.match(html, /<source src="\/videos\/hero\.webm" type="video\/webm"/);
  assert.match(html, /<source src="\/videos\/hero\.mp4" type="video\/mp4"/);
  assert.doesNotMatch(html, /class="[^"]*\b(?:hero-wipe|reveal-wipe|reveal-in)\b/);
  const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
  for (const file of ["hero.webm", "hero.mp4", "hero-poster.jpg"]) {
    await access(new URL("../public/videos/" + file, import.meta.url));
  }
  for (const image of images) {
    assert.match(image, /alt="/);
    const src = image.match(/src="([^"]+)"/)?.[1];
    // The unchanged shared logo sizes itself through CSS; check new content media.
    if (src?.startsWith("/images/")) {
      assert.match(image, /width="/);
      assert.match(image, /height="/);
    }
    if (src?.startsWith("/")) {
      const path = src.split("?")[0];
      await access(new URL("../public" + path, import.meta.url));
      // Pic serves a WebP <source> first; a missing file breaks the image.
      if (/\.jpe?g$/i.test(path))
        await access(new URL("../public" + path.replace(/\.jpe?g$/i, ".webp"), import.meta.url));
    }
  }
});

test("six business example routes still server-render", async () => {
  for (const slug of ["vvs", "elektriker", "salong", "restaurang", "malare", "konsult"]) {
    const result = await app.fetch(new Request("http://localhost/" + slug));
    assert.equal(result.status, 200, slug);
    assert.ok((await result.text()).includes("demo-"), slug);
  }
});

test("readability tokens and single-column default are present", async () => {
  const tokens = await readFile(new URL("../tokens.css", import.meta.url), "utf8");
  const css = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");
  assert.match(tokens, /--home-body: 1\.125rem/);
  assert.match(tokens, /--home-small: 1rem/);
  assert.ok(css.includes('import "../tokens.css"'));
  assert.ok(css.includes("minmax(0, 1.2fr)"));
  assert.match(css, /\.home-refresh \.home-hero\s*\{[^}]*min-height: 100svh/s);
});
