import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SITE, SUBJECTS } from "@/lib/site";
import { CONTACT_LIMITS } from "@/lib/contact-guard";
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
  const [subjectEmpty, setSubjectEmpty] = useState(defaultSubject === "");

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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > CONTACT_LIMITS.email) {
      setError("Ange en giltig e-postadress.");
      return;
    }
    if (name.length > CONTACT_LIMITS.name) {
      setError("Namnet är för långt.");
      return;
    }
    const phone = String(data.get("phone") ?? "").trim();
    if (phone.length > CONTACT_LIMITS.phone) {
      setError("Telefonnumret är för långt.");
      return;
    }
    if (message.length > CONTACT_LIMITS.message) {
      setError("Meddelandet är för långt.");
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
          phone,
          subject: String(data.get("subject") ?? ""),
          message,
          website: String(data.get("website") ?? ""),
        }),
      });
      const result = (await res.json().catch(() => null)) as
        { ok: true } | { ok: false; error?: string } | null;
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
    "h-12 w-full rounded-sm border px-4 text-sm outline-2 outline-transparent transition-[border-color] duration-150",
    onPaper
      ? "border-ink/15 focus-visible:border-brass focus-visible:outline-brass"
      : "border-line/70 focus-visible:border-gold focus-visible:outline-gold",
  );

  if (sent) {
    return (
      <div role="status" className={onPaper ? "text-ink" : "text-fg"}>
        <h3 className="font-display text-2xl">Tack. Vi har fått er förfrågan.</h3>
        <p className={cn("mt-2 text-sm leading-relaxed", onPaper ? "text-subtle" : "text-muted")}>
          Vi återkommer via e-post. Har du något att lägga till, mejla{" "}
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
    <form
      className={cn(
        "contact-form space-y-4 text-left",
        onPaper ? "contact-form-paper" : "contact-form-dark",
      )}
      onSubmit={onSubmit}
      noValidate
    >
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
            maxLength={CONTACT_LIMITS.name}
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
            maxLength={CONTACT_LIMITS.email}
            spellCheck={false}
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
            Telefon{" "}
            <span className={cn("text-xs font-normal", onPaper ? "text-subtle" : "text-muted")}>
              (valfritt)
            </span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={CONTACT_LIMITS.phone}
            placeholder="070-123 45 67"
            className={field}
          />
        </div>
        <div>
          <label
            htmlFor="contact-subject"
            className={cn("mb-1.5 block text-sm font-medium", onPaper ? "text-ink" : "text-fg")}
          >
            Ämne{" "}
            <span className={cn("text-xs font-normal", onPaper ? "text-subtle" : "text-muted")}>
              (valfritt)
            </span>
          </label>
          <select
            id="contact-subject"
            name="subject"
            defaultValue={defaultSubject}
            data-empty={subjectEmpty ? true : undefined}
            onChange={(e) => setSubjectEmpty(e.currentTarget.value === "")}
            className={cn(
              field,
              // Native option menus follow color-scheme, not the closed field's
              // paint. html/body stay `only light` (Samsung auto-darken); a light
              // scheme on this dark Field uses GrayText for the empty prompt
              // option, so it vanishes on the dark popup.
              onPaper
                ? "[color-scheme:light] [&_option]:bg-paper [&_option]:text-ink"
                : "[color-scheme:dark] [&_option]:bg-ink-3 [&_option]:text-fg",
            )}
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
          maxLength={CONTACT_LIMITS.message}
          rows={4}
          placeholder="Skriv gärna några rader om vad du behöver hjälp med…"
          className={cn(field, "h-auto py-3")}
        />
      </div>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-website">Webbplats</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="min-h-[1lh] text-sm text-danger" aria-live="polite">
        {error}
      </p>
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
        {pending ? "Skickar…" : "Skicka meddelande"}
      </Button>
    </form>
  );
}
