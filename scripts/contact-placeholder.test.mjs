import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(ROOT, rel), "utf8");

function relativeLuminance(hex) {
  const n = hex.replace("#", "");
  const channels = [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255);
  const linear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  const [r, g, b] = channels.map(linear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(foreground, background) {
  const a = relativeLuminance(foreground);
  const b = relativeLuminance(background);
  const hi = Math.max(a, b);
  const lo = Math.min(a, b);
  return (hi + 0.05) / (lo + 0.05);
}

function themeBlock(css, className) {
  const match = css.match(new RegExp(`\\.${className}\\s*\\{([\\s\\S]*?)\\}`));
  assert.ok(match, `${className} theme block`);
  return match[1];
}

function token(block, name) {
  const match = block.match(new RegExp(`${name}:\\s*(#[0-9a-fA-F]{6})\\s*;`));
  assert.ok(match, `${name} hex token`);
  return match[1].toLowerCase();
}

test("contact placeholders use one named token per theme and stay dimmer than values", () => {
  const css = read("src/styles.css");
  const form = read("src/components/site/contact-form.tsx");

  assert.match(css, /Designer knob: --contact-field-placeholder/);
  assert.doesNotMatch(css, /\.home-refresh \.home-contact-form :is\(input, textarea\)::placeholder\s*\{[^}]*--color-muted/);

  const dark = themeBlock(css, "contact-form-dark");
  const paper = themeBlock(css, "contact-form-paper");
  const darkFill = token(dark, "--contact-field-fill");
  const darkValue = token(dark, "--contact-field-value");
  const darkPlaceholder = token(dark, "--contact-field-placeholder");
  const paperFill = token(paper, "--contact-field-fill");
  const paperValue = token(paper, "--contact-field-value");
  const paperPlaceholder = token(paper, "--contact-field-placeholder");

  assert.equal(darkFill, "#1c1a16");
  assert.equal(darkValue, "#f4efe6");
  assert.equal(darkPlaceholder, "#aaa49a");
  assert.equal(paperFill, "#f4efe6");
  assert.equal(paperValue, "#0b0a08");
  assert.equal(paperPlaceholder, "#70695f");

  const darkPlaceholderContrast = contrastRatio(darkPlaceholder, darkFill);
  const paperPlaceholderContrast = contrastRatio(paperPlaceholder, paperFill);
  const darkValueContrast = contrastRatio(darkValue, darkFill);
  const paperValueContrast = contrastRatio(paperValue, paperFill);

  assert.ok(darkPlaceholderContrast >= 4.5, `dark placeholder ${darkPlaceholderContrast.toFixed(2)}`);
  assert.ok(paperPlaceholderContrast >= 4.5, `paper placeholder ${paperPlaceholderContrast.toFixed(2)}`);
  assert.ok(darkValueContrast > darkPlaceholderContrast);
  assert.ok(paperValueContrast > paperPlaceholderContrast);
  assert.equal(darkPlaceholderContrast.toFixed(2), "7.02");
  assert.equal(paperPlaceholderContrast.toFixed(2), "4.73");

  assert.match(css, /\.contact-form :is\(input, textarea\)::placeholder\s*\{[^}]*color: var\(--contact-field-placeholder\);[^}]*opacity: 1;/s);
  assert.match(css, /\.contact-form :is\(input, textarea, select\)\s*\{[^}]*color: var\(--contact-field-value\);[^}]*background-color: var\(--contact-field-fill\);/s);
  assert.match(css, /inset 0 0 0 1000px var\(--contact-field-fill\)/);
  assert.match(css, /-webkit-text-fill-color: var\(--contact-field-value\)/);
  assert.match(css, /\.contact-form select\[data-empty\]\s*\{[^}]*color: var\(--contact-field-placeholder\);/s);
  const contactCss = css.slice(css.indexOf("/* Contact field themes only."));
  const contactCssEnd = contactCss.indexOf(".home-refresh .home-contact-form p:empty");
  const scoped = contactCss.slice(0, contactCssEnd);
  assert.equal(scoped.includes("option:checked"), false);
  assert.equal(scoped.includes(":invalid"), false);
  assert.equal(scoped.includes("font-style: italic"), false);
  assert.equal(scoped.match(/opacity:/g)?.join(), "opacity:");
  assert.match(scoped, /opacity: 1;/);
  assert.equal(scoped.includes("select[value"), false);

  assert.match(form, /contact-form-dark/);
  assert.match(form, /contact-form-paper/);
  assert.match(form, /data-empty=\{subjectEmpty \? true : undefined\}/);
  assert.match(form, /setSubjectEmpty\(e\.currentTarget\.value === ""\)/);
  assert.match(form, /useState\(defaultSubject === ""\)/);
  assert.doesNotMatch(form, /select[^\n]*value=\{/);
  assert.doesNotMatch(form, /placeholder:text-/);
  assert.doesNotMatch(form, /<input[^>]*defaultValue/);
  assert.doesNotMatch(form, /<textarea[^>]*defaultValue/);
  assert.match(form, /htmlFor="contact-name"/);
  assert.match(form, /htmlFor="contact-email"/);
  assert.match(form, /htmlFor="contact-phone"/);
  assert.match(form, /htmlFor="contact-subject"/);
  assert.match(form, /htmlFor="contact-message"/);
  assert.match(form, /placeholder="Ditt namn"/);
  assert.match(form, /placeholder="din@epost.se"/);
  assert.match(form, /id="contact-website"/);
  assert.match(form, /className="sr-only"/);
  assert.match(form, /\[color-scheme:dark\]/);
  assert.match(form, /\[&_option\]:bg-ink-3/);
  assert.match(form, /\[&_option\]:text-fg/);
});

test("document color-scheme stays only light", () => {
  const css = read("src/styles.css");
  const root = read("src/routes/__root.tsx");
  assert.match(css, /html \{\s*color-scheme: only light;/);
  assert.match(css, /body \{\s*color-scheme: only light;/);
  assert.match(root, /content: "only light"/);
});
