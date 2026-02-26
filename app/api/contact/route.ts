import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Recipient for contact form. Without a verified domain, Resend only delivers to the email you signed up with – set CONTACT_EMAIL to that address. After verifying fswebworks.se you can use fredrik@fswebworks.se.
const CONTACT_TO = process.env.CONTACT_EMAIL ?? 'fredrik@fswebworks.se';

function validateBody(
  body: unknown
): { name: string; email: string; message: string; template: string } | { error: string } {
  if (!body || typeof body !== 'object') {
    return { error: 'Saknar data' };
  }
  const { name, email, message, template } = body as Record<string, unknown>;
  if (typeof name !== 'string' || !name.trim()) {
    return { error: 'Namn krävs' };
  }
  if (typeof email !== 'string' || !email.trim()) {
    return { error: 'E-post krävs' };
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return { error: 'Ogiltig e-postadress' };
  }
  if (typeof message !== 'string' || !message.trim()) {
    return { error: 'Meddelande krävs' };
  }
  const templateStr = typeof template === 'string' ? template.trim() : '';
  return { name: name.trim(), email: email.trim(), message: message.trim(), template: templateStr };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Ogiltig JSON' }, { status: 400 });
  }

  const validated = validateBody(body);
  if ('error' in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Kontaktfunktionen är inte konfigurerad. Sätt RESEND_API_KEY.' },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  // Without a verified domain, Resend only allows sending to your account email.
  // Add and verify fswebworks.se in Resend, then set RESEND_FROM e.g. "FSwebworks <kontakt@fswebworks.se>"
  const from = process.env.RESEND_FROM ?? 'FSwebworks webb <onboarding@resend.dev>';

  const templateLine = validated.template ? `Mall: ${validated.template}\n\n` : '';
  const text = `Namn: ${validated.name}\nE-post: ${validated.email}\n\n${templateLine}Meddelande:\n${validated.message}`;

  const { data, error } = await resend.emails.send({
    from,
    to: CONTACT_TO,
    replyTo: validated.email,
    subject: `Förfrågan från fswebworks.se: ${validated.name}`,
    text,
  });

  if (error) {
    const err = error as { message?: string; name?: string };
    console.error('Contact API Resend error:', err);
    const message = err?.message ?? 'Okänt fel från e-posttjänst.';
    return NextResponse.json(
      { error: 'Kunde inte skicka förfrågan. Försök igen senare.', detail: message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
