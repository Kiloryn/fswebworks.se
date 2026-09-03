import { type MouseEvent, type ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Phone, X } from "lucide-react";
import { EXAMPLES } from "@/lib/site";
import { Logo } from "@/components/site/logo";
import { SectionLink } from "@/components/site/section-link";

export function DemoBanner({ current }: { current: string }) {
  return (
    <div className="sticky top-0 z-[60] border-b border-gold/30 bg-canvas text-fg">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-3 md:h-16 md:gap-3 md:px-8">
        <Link
          to="/"
          className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-sm bg-gold px-2.5 text-sm font-medium text-gold-fg hover:bg-gold-2 md:h-11 md:px-4"
        >
          <ArrowLeft className="size-4" aria-hidden />
          <span className="hidden md:inline">Tillbaka till startsidan</span>
          <span className="md:hidden">Start</span>
        </Link>
        <Logo className="hidden lg:inline-flex" />
        <p className="hidden text-[12px] text-muted xl:block">Interaktivt exempel från FSwebworks</p>
        <label className="sr-only" htmlFor="demo-switch">
          Byt branschexempel
        </label>
        <select
          id="demo-switch"
          className="h-10 min-w-0 flex-1 rounded-sm border border-line bg-ink-2 px-2 text-[13px] text-fg md:h-11 md:max-w-[16rem] md:flex-none"
          value={current}
          onChange={(e) => {
            window.location.assign(`/${e.target.value}`);
          }}
        >
          {EXAMPLES.map((ex) => (
            <option key={ex.slug} value={ex.slug}>
              {ex.name}
            </option>
          ))}
        </select>
        <Link
          to="/examples"
          className="inline-flex h-10 shrink-0 items-center rounded-sm border border-gold/40 px-2.5 text-[13px] text-gold hover:bg-gold/10 md:h-11 md:px-3"
        >
          <span className="md:hidden">Alla</span>
          <span className="hidden md:inline">Alla exempel</span>
        </Link>
      </div>
    </div>
  );
}

export function DemoExit() {
  return (
    <div className="border-t border-gold/25 bg-canvas px-5 py-8 text-center text-fg">
      <p className="text-[12px] uppercase tracking-[0.18em] text-gold">
        Interaktiv exempelsida
      </p>
      <p className="mx-auto mt-3 max-w-md text-sm text-muted">
        Detta är ett branschanpassat exempel byggt av FSwebworks. Vill du att vi
        skapar en hemsida anpassad efter ditt företag?
      </p>
      <div className="mx-auto mt-5 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
        <Link
          to="/"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-gold px-5 text-sm font-medium text-gold-fg hover:bg-gold-2"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Tillbaka till startsidan
        </Link>
        <SectionLink
          section="contact"
          className="inline-flex h-12 items-center justify-center rounded-sm border border-gold/40 px-5 text-sm text-gold hover:bg-gold/10"
        >
          Kontakta oss
        </SectionLink>
      </div>
    </div>
  );
}

export function DemoPhoneLink({
  tel,
  className,
  children,
}: {
  tel: string;
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <a
        href={`tel:${tel}`}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-phone-dialog-title"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-xl border border-line bg-canvas p-6 text-fg shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-muted hover:text-fg"
              aria-label="Stäng dialog"
            >
              <X className="size-5" />
            </button>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gold/15 text-gold">
                <Phone className="size-5" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                  Exempelsida
                </p>
                <h3 id="demo-phone-dialog-title" className="font-display text-xl">
                  Klickbart telefonnummer
                </h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Numret <strong className="text-fg">{tel}</strong> är ett exempel för den här demonstrationssidan. På din riktiga hemsida ringer dina kunder direkt till ert företags telefonnummer med ett enda tryck.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <SectionLink
                section="contact"
                className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-md bg-gold px-4 text-sm font-medium text-gold-fg hover:bg-gold-2"
                onClick={() => setOpen(false)}
              >
                Begär offert för ditt företag
                <ArrowRight className="size-4" />
              </SectionLink>
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-md border border-line px-4 text-sm text-fg hover:bg-fg/5"
                onClick={() => setOpen(false)}
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
