import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUBJECT_LABELS: Record<string, string> = {
  'kontakta-mig': 'Kontakta mig',
  service: 'Serviceärende',
  ovrigt: 'Övrigt',
};
// Recipient for contact form. Without a verified domain, Resend only delivers to the email you signed up with – set CONTACT_EMAIL to that address. After verifying fswebworks.se you can use fredrik@fswebworks.se.
const CONTACT_TO = process.env.CONTACT_EMAIL ?? 'fredrik@fswebworks.se';

function validateBody(
  body: unknown
):
  | {
      name: string;
      email: string;
      message: string;
      phone: string;
      subject: string;
    }
  | { error: string } {
  if (!body || typeof body !== 'object') {
    return { error: 'Saknar data' };
  }
  const { name, email, message, phone, subject } = body as Record<string, unknown>;
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
  const phoneStr =
    typeof phone === 'string' && phone.trim() ? phone.trim().slice(0, 40) : '';
  const subjectStr = typeof subject === 'string' ? subject.trim() : '';
  const allowedSubjects = new Set(['', 'kontakta-mig', 'service', 'ovrigt']);
  if (subjectStr && !allowedSubjects.has(subjectStr)) {
    return { error: 'Ogiltigt ämne' };
  }
  return {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    phone: phoneStr,
    subject: subjectStr,
  };
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

  const phoneLine = validated.phone ? `Telefon: ${validated.phone}\n` : '';
  const subjectLabel = validated.subject ? SUBJECT_LABELS[validated.subject] : '';
  const subjectLine = subjectLabel ? `Ämne: ${subjectLabel}\n` : '';
  const text = `Namn: ${validated.name}\nE-post: ${validated.email}\n${phoneLine}${subjectLine}\nMeddelande:\n${validated.message}`;

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
