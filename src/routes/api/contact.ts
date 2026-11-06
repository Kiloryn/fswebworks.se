import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

const ORIGIN_ERROR = {
  ok: false as const,
  error: "Kunde inte skicka just nu. Skriv till oss på " + SITE.email + ".",
  code: "origin" as const,
};

function statusFor(result: { ok: true } | { ok: false; code?: string }): number {
  if (result.ok) return 200;
  switch (result.code) {
    case "validation":
      return 400;
    case "origin":
      return 403;
    case "rate_limit":
      return 429;
    case "config":
    case "send":
      return 503;
    default:
      return 400;
  }
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { contactClientIp, contactOriginAllowed, sendContactMail } = await import(
          "@/lib/contact.server"
        );
        if (!contactOriginAllowed(request)) {
          return Response.json(ORIGIN_ERROR, { status: 403 });
        }
        let body: Record<string, unknown> = {};
        try {
          body = (await request.json()) as Record<string, unknown>;
        } catch {
          return Response.json(
            { ok: false, error: "Fyll i namn, e-post och meddelande.", code: "validation" },
            { status: 400 },
          );
        }
        const result = await sendContactMail(body, contactClientIp(request));
        const headers: HeadersInit = {};
        if (!result.ok && result.code === "rate_limit") {
          headers["Retry-After"] = "900";
        }
        return Response.json(result, { status: statusFor(result), headers });
      },
    },
  },
});
