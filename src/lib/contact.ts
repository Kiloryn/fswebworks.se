import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactInput = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  subject: z.string().max(40).optional().default(""),
  message: z.string().trim().min(1).max(4000),
  website: z.string().max(200).optional().default(""),
});

export type ContactResult = { ok: true } | { ok: false; error: string };

export const submitContact = createServerFn({ method: "POST" })
  .validator(contactInput)
  .handler(async ({ data }): Promise<ContactResult> => {
    const { sendContactMail } = await import("./contact.server");
    return sendContactMail(data);
  });
