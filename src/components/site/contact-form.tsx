import { Link } from "@tanstack/react-router";
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

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
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
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: String(data.get("phone") ?? "").trim(),
          subject: String(data.get("subject") ?? ""),
          message,
          website: String(data.get("website") ?? ""),
        }),
      });
      const result = (await res.json().catch(() => null)) as
        | { ok: true }
        | { ok: false; error?: string }
        | null;
      if (!res.ok || !result || !result.ok) {
        setError(
          result && "error" in result && result.error
            ? result.error
            : "Kunde inte skicka just nu. Skriv till oss på " + SITE.email + ".",
        );
        return;
      }
      setSent(true);
    } catch {
      setError("Kunde inte skicka just nu. Skriv till oss på " + SITE.email + ".");
    } finally {
      setPending(false);
    }
  }

  const field = cn(
    "h-12 w-full rounded-sm border px-4 text-sm outline-none transition-[border-color,box-shadow,background-color] duration-150",
    onPaper
      ? "border-ink/15 bg-paper text-ink placeholder:text-subtle/70 focus:border-brass focus:ring-1 focus:ring-brass/30"
      : "border-line/70 bg-ink-3 text-fg placeholder:text-muted/60 focus:border-gold focus:ring-1 focus:ring-gold/30",
  );

  if (sent) {
    return (
      <div className={onPaper ? "text-ink" : "text-fg"}>
        <h3 className="font-display text-2xl">Tack. Vi har fått er förfrågan.</h3>
        <p className={cn("mt-2 text-sm leading-relaxed", onPaper ? "text-subtle" : "text-muted")}>
          Vi hör av oss inom en arbetsdag. Behöver ni oss fortare, mejla{" "}
          <a
            className={cn(
              "underline-offset-4 hover:underline",
              onPaper ? "text-brass font-medium" : "text-gold",
            )}
            href={`mailto:${SITE.email}`}
          >
            {SITE.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4 text-left" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className={cn("mb-1.5 block text-sm font-medium", onPaper ? "text-ink" : "text-fg")}
          >
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
          <label
            htmlFor="contact-email"
            className={cn("mb-1.5 block text-sm font-medium", onPaper ? "text-ink" : "text-fg")}
          >
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
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-phone"
            className={cn("mb-1.5 block text-sm font-medium", onPaper ? "text-ink" : "text-fg")}
          >
            Telefon <span className={cn("text-xs font-normal", onPaper ? "text-subtle" : "text-muted")}>(valfritt)</span>
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
          <label
            htmlFor="contact-subject"
            className={cn("mb-1.5 block text-sm font-medium", onPaper ? "text-ink" : "text-fg")}
          >
            Ämne <span className={cn("text-xs font-normal", onPaper ? "text-subtle" : "text-muted")}>(valfritt)</span>
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
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className={cn("mb-1.5 block text-sm font-medium", onPaper ? "text-ink" : "text-fg")}
        >
          Meddelande
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Berätta kort om ert företag och vad ni behöver..."
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
        <Link
          to="/integritet"
          className={cn(
            "underline-offset-4 hover:underline",
            onPaper ? "text-brass font-medium" : "text-gold",
          )}
        >
          vår integritetspolicy
        </Link>
        .
      </p>
      <Button type="submit" size="xl" className="w-full" disabled={pending}>
        {pending ? "Skickar…" : "Skicka förfrågan"}
      </Button>
    </form>
  );
}
