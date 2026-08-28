import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { sendContactMail } = await import("@/lib/contact.server");
        let body: Record<string, unknown> = {};
        try {
          body = (await request.json()) as Record<string, unknown>;
        } catch {
          return Response.json(
            { ok: false, error: "Fyll i namn, e-post och meddelande." },
            { status: 400 },
          );
        }
        const forwarded = request.headers.get("x-forwarded-for") ?? "";
        const ip =
          forwarded.split(",")[0]?.trim() ||
          request.headers.get("x-real-ip") ||
          "unknown";
        const result = await sendContactMail(body, ip);
        return Response.json(result);
      },
    },
  },
});
