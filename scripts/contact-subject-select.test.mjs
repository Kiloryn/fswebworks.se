import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(ROOT, rel), "utf8");

test("contact subject stays a native labeled select with a readable empty option", () => {
  const form = read("src/components/site/contact-form.tsx");
  const site = read("src/lib/site.ts");

  assert.match(form, /id="contact-subject"/);
  assert.match(form, /htmlFor="contact-subject"/);
  assert.match(form, /<select[\s\S]*id="contact-subject"/);
  assert.match(form, /name="subject"/);
  assert.doesNotMatch(form, /role="listbox"|aria-haspopup/);
  assert.doesNotMatch(form, /<select[^>]*disabled/);
  assert.match(form, /htmlFor="contact-name"/);
  assert.match(form, /htmlFor="contact-email"/);
  assert.match(form, /htmlFor="contact-message"/);
  assert.match(form, /id="contact-website"/);
  assert.match(form, /name="website"/);
  assert.match(form, /className="sr-only"/);

  assert.match(site, /value: "", label: "— Välj —"/);
  assert.match(site, /value: "offert", label: "Offert \/ ny hemsida"/);
  assert.doesNotMatch(form, /<option[^>]*(disabled|hidden)/);

  assert.match(form, /id="contact-name"[\s\S]*required/);
  assert.match(form, /id="contact-email"[\s\S]*required/);
  assert.match(form, /id="contact-message"[\s\S]*required/);
  assert.doesNotMatch(
    form,
    /id="contact-subject"[\s\S]*required[\s\S]*<\/select>/,
  );
});

test("dark contact select uses a dark color-scheme so native option menus keep contrast", () => {
  const form = read("src/components/site/contact-form.tsx");
  const css = read("src/styles.css");
  const root = read("src/routes/__root.tsx");

  assert.match(form, /\[color-scheme:dark\]/);
  assert.match(form, /\[&_option\]:bg-ink-3/);
  assert.match(form, /\[&_option\]:text-fg/);
  assert.match(form, /\[color-scheme:light\]/);
  assert.match(form, /\[&_option\]:bg-paper/);
  assert.match(form, /\[&_option\]:text-ink/);

  assert.match(css, /html \{\s*color-scheme: only light;/);
  assert.match(css, /body \{\s*color-scheme: only light;/);
  assert.match(root, /content: "only light"/);
});
