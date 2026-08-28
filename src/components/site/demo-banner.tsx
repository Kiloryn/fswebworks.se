import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { EXAMPLES } from "@/lib/site";
import { Logo } from "@/components/site/logo";

export function DemoBanner({ current }: { current: string }) {
  return (
    <div className="sticky top-0 z-[60] border-b border-gold/30 bg-ink text-fg">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-3 md:h-16 md:gap-3 md:px-8">
        <Link
          to="/"
          aria-label="Tillbaka till startsidan"
          className="inline-flex size-10 shrink-0 items-center justify-center gap-2 rounded-sm bg-gold text-sm font-medium text-gold-fg hover:bg-gold-2 md:h-11 md:w-auto md:px-4"
        >
          <ArrowLeft className="size-4" aria-hidden />
          <span className="hidden md:inline">Tillbaka till startsidan</span>
        </Link>
        <Logo className="hidden lg:inline-flex" />
        <p className="hidden text-[12px] text-muted xl:block">Detta är ett exempel</p>
        <label className="sr-only" htmlFor="demo-switch">
          Byt exempel
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
    <div className="border-t border-gold/25 bg-ink px-5 py-8 text-center text-fg">
      <p className="text-[12px] uppercase tracking-[0.18em] text-gold">
        Exempelsida
      </p>
      <p className="mx-auto mt-3 max-w-md text-sm text-muted">
        Så här kan en enkel hemsida se ut. Vill du ha en egen, anpassad efter
        ditt företag?
      </p>
      <div className="mx-auto mt-5 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
        <Link
          to="/"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-gold px-5 text-sm font-medium text-gold-fg hover:bg-gold-2"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Tillbaka till startsidan
        </Link>
        <Link
          to="/"
          hash="contact"
          className="inline-flex h-12 items-center justify-center rounded-sm border border-gold/40 px-5 text-sm text-gold hover:bg-gold/10"
        >
          Kontakta oss
        </Link>
      </div>
    </div>
  );
}
