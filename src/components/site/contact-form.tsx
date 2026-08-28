import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SITE, SUBJECTS } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  defaultSubject?: string;
  onPaper?: boolean;
};

export function ContactForm({ defaultSubject = "", onPaper = false }: Props) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") ?? "").trim()) return;

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setError("Fyll i namn, e-post och meddelande.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Ange en giltig e-postadress.");
      return;
    }

    setPending(true);
    const payload = {
      name,
      email,
      phone: String(data.get("phone") ?? "").trim(),
      subject: String(data.get("subject") ?? ""),
      message,
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("fs-inquiries") ?? "[]") as unknown[];
      localStorage.setItem("fs-inquiries", JSON.stringify([payload, ...prev].slice(0, 20)));
    } catch {
      /* ignore quota */
    }
    const subjectLine =
      SUBJECTS.find((s) => s.value === payload.subject)?.label ?? "Förfrågan från webbplatsen";
    const body = [
      `Namn: ${name}`,
      `E-post: ${email}`,
      payload.phone ? `Telefon: ${payload.phone}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
    setPending(false);
    setSent(true);
  }

  const field = cn(
    "h-12 w-full rounded-md border px-4 text-sm outline-none transition-[border-color,box-shadow] duration-150",
    onPaper
      ? "border-ink/12 bg-paper text-ink placeholder:text-subtle focus:border-gold"
      : "border-line bg-ink-2 text-fg placeholder:text-muted focus:border-gold",
  );

  if (sent) {
    return (
      <div
        className={cn(
          "rounded-xl border p-8",
          onPaper ? "border-ink/10 bg-paper-2 text-ink" : "border-line bg-ink-2 text-fg",
        )}
      >
        <span className="grid size-11 place-items-center rounded-full bg-gold text-gold-fg">
          <Check className="size-5" strokeWidth={2.2} />
        </span>
        <h3 className="mt-5 font-display text-2xl">Tack – öppna e-posten och skicka.</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Formuläret förbereder ett mejl till{" "}
          <a className="text-gold underline-offset-4 hover:underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          . Om inget mejlprogram öppnades, skriv till oss där direkt.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4 text-left" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
          Namn
        </label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          required
          placeholder="Ditt namn"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
          E-post
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="din@epost.se"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium">
          Telefon (valfritt)
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="070-123 45 67"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium">
          Ämne (valfritt)
        </label>
        <select
          id="contact-subject"
          name="subject"
          defaultValue={defaultSubject}
          className={field}
        >
          {SUBJECTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
          Meddelande
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Skriv ditt meddelande..."
          className={cn(field, "h-auto py-3")}
        />
      </div>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-website">Webbplats</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {error ? <p className="text-sm text-danger">{error}</p> : null}
      <p className={cn("text-xs leading-relaxed", onPaper ? "text-subtle" : "text-muted")}>
        Genom att skicka godkänner du att vi behandlar dina uppgifter enligt{" "}
        <Link to="/integritet" className="text-gold underline-offset-4 hover:underline">
          vår integritetspolicy
        </Link>
        .
      </p>
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Skickar…" : "Skicka förfrågan"}
      </Button>
    </form>
  );
}
