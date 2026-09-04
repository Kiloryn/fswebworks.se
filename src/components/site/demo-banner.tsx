import { type MouseEvent, type ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, X } from "lucide-react";
import { EXAMPLES } from "@/lib/site";
import { SectionLink } from "@/components/site/section-link";

export function DemoBanner({ current }: { current: string }) {
  return (
    <div className="sticky top-0 z-[60] border-b border-line/60 bg-canvas/95 text-fg">
      <div className="mx-auto flex h-12 max-w-6xl items-center gap-3 px-3 md:px-8">
        <Link to="/" className="shrink-0 text-sm text-muted hover:text-fg">
          ← Start
        </Link>
        <label className="sr-only" htmlFor="demo-switch">
          Byt branschexempel
        </label>
        <select
          id="demo-switch"
          className="h-9 min-w-0 flex-1 border border-line bg-ink-2 px-2 text-[13px] text-fg md:max-w-[16rem] md:flex-none"
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
        <p className="hidden text-[12px] text-muted md:block">Exempel</p>
      </div>
    </div>
  );
}

export function DemoExit() {
  return (
    <div className="border-t border-line bg-canvas px-5 py-8 text-center text-fg">
      <p className="text-sm text-muted">Exempel från FSwebworks</p>
      <div className="mt-4 flex justify-center gap-6 text-sm">
        <Link to="/" className="text-gold hover:underline">
          Startsidan
        </Link>
        <SectionLink section="contact" className="text-gold hover:underline">
          Begär offert
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
      <a href={`tel:${tel}`} onClick={handleClick} className={className}>
        {children}
      </a>
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-phone-dialog-title"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md border border-line bg-canvas p-6 text-fg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-muted hover:text-fg"
              aria-label="Stäng"
            >
              <X className="size-5" />
            </button>
            <h3 id="demo-phone-dialog-title" className="font-display text-xl">
              Exempelnummer
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {tel} är fejk. På en riktig sida ringer det till företaget.
            </p>
            <SectionLink
              section="contact"
              className="mt-6 inline-flex h-11 items-center bg-gold px-4 text-sm text-gold-fg"
              onClick={() => setOpen(false)}
            >
              Begär offert
            </SectionLink>
          </div>
        </div>
      ) : null}
    </>
  );
}
