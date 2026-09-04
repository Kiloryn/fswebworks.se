import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/site/logo";
import { SectionLink } from "@/components/site/section-link";

const SECTION_IDS = NAV.map((item) => item.section);

export function SiteHeader({ ink = true }: { ink?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [section, setSection] = useState("");
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") {
      setSection("");
      return;
    }
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (id) setSection(id);
        else if (window.scrollY < 200) setSection("");
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  const onHome = pathname === "/";
  const solid = !ink || scrolled || open || !onHome;

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,border-color,color] duration-200",
        solid
          ? "border-b border-line/80 bg-canvas text-fg"
          : "border-b border-transparent bg-transparent text-fg",
      )}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex h-14 items-center justify-between md:h-16">
          <Logo onInk />
          <a
            href={`mailto:${SITE.email}`}
            className="hidden text-sm text-fg/80 hover:text-gold md:inline"
          >
            {SITE.email}
          </a>
          <div className="flex items-center gap-1 md:hidden">
            <SectionLink
              section="contact"
              className="inline-flex min-h-11 items-center px-3 text-sm font-medium text-gold"
              onClick={() => setOpen(false)}
            >
              Offert
            </SectionLink>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center text-fg"
              aria-label={open ? "Stäng meny" : "Öppna meny"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        <nav
          className="hidden items-center gap-6 border-t border-fg/15 py-2.5 text-[13px] md:flex"
          aria-label="Huvudmeny"
        >
          {NAV.map((item) => {
            const active = pathname === "/" && section === item.section;
            return (
              <SectionLink
                key={item.label}
                section={item.section}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap transition-colors hover:text-gold",
                  active ? "text-gold" : "text-fg/80",
                )}
              >
                {item.label}
              </SectionLink>
            );
          })}
        </nav>
      </div>
      <div
        className="menu-panel grid md:hidden"
        data-open={open}
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        inert={!open || undefined}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-line bg-canvas px-5 pb-6 pt-3 text-fg">
            <nav className="flex flex-col" aria-label="Mobilmeny">
              {onHome ? null : (
                <Link
                  to="/"
                  className="flex min-h-11 items-center font-display text-2xl font-medium leading-none text-fg"
                  onClick={() => setOpen(false)}
                >
                  Startsidan
                </Link>
              )}
              {NAV.map((item) => {
                const active = pathname === "/" && section === item.section;
                return (
                  <SectionLink
                    key={item.label}
                    section={item.section}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-11 items-center font-display text-2xl font-medium leading-none",
                      active ? "text-gold" : "text-fg",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </SectionLink>
                );
              })}
            </nav>
            <address className="mt-5 border-t border-line pt-4 not-italic">
              <p className="text-sm text-muted">Skriv till oss</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-1 inline-flex min-h-11 items-center font-display text-xl text-gold"
              >
                {SITE.email}
              </a>
            </address>
          </div>
        </div>
      </div>
    </header>
    <button
      type="button"
      className={cn(
        "menu-backdrop fixed inset-0 z-40 bg-black/50 md:hidden",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      data-open={open}
      tabIndex={open ? 0 : -1}
      aria-hidden={!open}
      aria-label="Stäng meny"
      onClick={() => setOpen(false)}
    />
    </>
  );
}
