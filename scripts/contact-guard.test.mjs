import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  clientIpFromHeaders,
  CONTACT_LIMITS,
  isAllowedContactOrigin,
  validateContactInput,
} from "../src/lib/contact-guard.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

test("validateContactInput: required fields", () => {
  const missing = validateContactInput({ name: "", email: "a@b.se", message: "hej" });
  assert.equal(missing.ok, false);
  if (!missing.ok) assert.match(missing.error, /namn, e-post och meddelande/i);
});

test("validateContactInput: invalid email is not used for length errors", () => {
  const badEmail = validateContactInput({
    name: "Anna",
    email: "not-an-email",
    message: "Hej, vi behöver en hemsida.",
  });
  assert.equal(badEmail.ok, false);
  if (!badEmail.ok) assert.equal(badEmail.error, "Ange en giltig e-postadress.");

  const longName = validateContactInput({
    name: "A".repeat(CONTACT_LIMITS.name + 1),
    email: "anna@exempel.se",
    message: "Hej, vi behöver en hemsida.",
  });
  assert.equal(longName.ok, false);
  if (!longName.ok) assert.equal(longName.error, "Namnet är för långt.");

  const longMessage = validateContactInput({
    name: "Anna",
    email: "anna@exempel.se",
    message: "x".repeat(CONTACT_LIMITS.message + 1),
  });
  assert.equal(longMessage.ok, false);
  if (!longMessage.ok) assert.equal(longMessage.error, "Meddelandet är för långt.");

  const longPhone = validateContactInput({
    name: "Anna",
    email: "anna@exempel.se",
    phone: "1".repeat(CONTACT_LIMITS.phone + 1),
    message: "Hej, vi behöver en hemsida.",
  });
  assert.equal(longPhone.ok, false);
  if (!longPhone.ok) assert.equal(longPhone.error, "Telefonnumret är för långt.");
});

test("validateContactInput: accepts a normal Swedish enquiry", () => {
  const ok = validateContactInput({
    name: "Anna Andersson",
    email: "anna@exempel.se",
    phone: "070-123 45 67",
    subject: "offert",
    message: "Hej, vi behöver en hemsida för firman.",
  });
  assert.equal(ok.ok, true);
});

test("clientIpFromHeaders prefers Vercel-controlled hops", () => {
  const headers = (map) => (name) => map[name] ?? null;
  assert.equal(
    clientIpFromHeaders(
      headers({
        "x-forwarded-for": "1.2.3.4, 10.0.0.1",
        "x-vercel-forwarded-for": "9.9.9.9",
      }),
    ),
    "9.9.9.9",
  );
  assert.equal(
    clientIpFromHeaders(headers({ "x-real-ip": "8.8.8.8", "x-forwarded-for": "1.2.3.4, 10.0.0.1" })),
    "8.8.8.8",
  );
  assert.equal(
    clientIpFromHeaders(headers({ "x-forwarded-for": "1.2.3.4, 10.0.0.1" })),
    "10.0.0.1",
  );
  assert.equal(clientIpFromHeaders(headers({})), "unknown");
});

test("isAllowedContactOrigin allows apex and www, rejects cross-site", () => {
  assert.equal(
    isAllowedContactOrigin({
      origin: "https://fswebworks.se",
      referer: null,
      host: "fswebworks.se",
    }),
    true,
  );
  assert.equal(
    isAllowedContactOrigin({
      origin: "https://www.fswebworks.se",
      referer: null,
      host: "www.fswebworks.se",
    }),
    true,
  );
  assert.equal(
    isAllowedContactOrigin({
      origin: "https://www.fswebworks.se",
      referer: null,
      host: "fswebworks.se",
    }),
    false,
  );
  assert.equal(
    isAllowedContactOrigin({
      origin: "https://evil.example",
      referer: null,
      host: "fswebworks.se",
    }),
    false,
  );
  assert.equal(
    isAllowedContactOrigin({
      origin: null,
      referer: "https://fswebworks.se/kontakt",
      host: "fswebworks.se",
    }),
    true,
  );
  assert.equal(
    isAllowedContactOrigin({
      origin: "http://localhost:8080",
      referer: null,
      host: "localhost:8080",
    }),
    true,
  );
  assert.equal(
    isAllowedContactOrigin({
      origin: null,
      referer: null,
      host: "fswebworks.se",
    }),
    false,
  );
});

test("contact sender does not fall back to example.com", () => {
  const source = readFileSync(join(ROOT, "src/lib/contact.server.ts"), "utf8");
  assert.doesNotMatch(source, /beth\.t@example\.com/);
  assert.doesNotMatch(source, /@example\.com/);
  assert.match(source, /RESEND_FROM saknas/);
  assert.match(source, /rate_limit/);
});

test("contact route maps rate limits to 429", () => {
  const source = readFileSync(join(ROOT, "src/routes/api/contact.ts"), "utf8");
  assert.match(source, /case "rate_limit":/);
  assert.match(source, /return 429/);
  assert.match(source, /contactOriginAllowed/);
});
