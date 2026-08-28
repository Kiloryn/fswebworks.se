import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";

export function SiteHeader({ ink = true }: { ink?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const solid = !ink || scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-250",
        solid
          ? "border-b border-line bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.25rem] md:px-8">
        <Logo onInk />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Huvudmeny">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash || undefined}
              className="text-[15px] font-medium tracking-wide text-fg/90 transition-colors duration-150 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="md" className="hidden md:inline-flex">
            <Link to="/" hash="contact">
              Begär offert
            </Link>
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
        <div className="border-t border-line bg-ink px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobilmeny">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash || undefined}
                className="flex min-h-11 items-center text-base text-fg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-3 w-full">
              <Link to="/" hash="contact" onClick={() => setOpen(false)}>
                Begär offert
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
