import type { APIRoute } from "astro";
import { sendContactMail } from "../../lib/contact.server";

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Fyll i namn, e-post och meddelande." }, { status: 400 });
  }
  const forwarded = request.headers.get("x-forwarded-for") ?? "";
  const ip = forwarded.split(",")[0]?.trim() || request.headers.get("x-real-ip") || clientAddress || "unknown";
  return Response.json(await sendContactMail(body, ip));
};
