import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { SectionLink } from "@/components/site/section-link";
import { scrollToTop } from "@/lib/scroll-to";

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

  const solid = !ink || scrolled || open;

  const goHomeTop = () => {
    setOpen(false);
    if (pathname === "/") scrollToTop();
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-200",
        solid
          ? "border-b border-line/80 bg-canvas text-fg shadow-xs"
          : "border-b border-transparent bg-transparent text-fg",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.25rem] md:px-8">
        <Logo onInk />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Huvudmeny">
          {NAV.map((item) => {
            const active =
              (pathname === "/" && section === item.section) ||
              (item.section === "exempel" && pathname === "/examples");
            return (
              <SectionLink
                key={item.label}
                section={item.section}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[15px] font-medium tracking-wide transition-colors duration-150 hover:text-gold",
                  active ? "text-gold" : "text-fg/90",
                )}
              >
                {item.label}
              </SectionLink>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="md" className="h-10 px-3 text-sm md:h-11 md:px-5">
            <SectionLink section="contact">
              <span className="md:hidden">Offert</span>
              <span className="hidden md:inline">Begär offert</span>
            </SectionLink>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-fg md:hidden"
            aria-label={open ? "Stäng meny" : "Öppna meny"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-line bg-canvas px-5 py-5 text-fg md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobilmeny">
            <Link
              to="/"
              className="flex min-h-11 items-center text-base text-fg"
              onClick={goHomeTop}
            >
              Startsidan
            </Link>
            {NAV.map((item) => {
              const active =
                (pathname === "/" && section === item.section) ||
                (item.section === "exempel" && pathname === "/examples");
              return (
                <SectionLink
                  key={item.label}
                  section={item.section}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center text-base",
                    active ? "text-gold" : "text-fg",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </SectionLink>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
