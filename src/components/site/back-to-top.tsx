import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { uppButtonBottomPx } from "@/lib/back-to-top";
import { scrollToTop } from "@/lib/scroll-to";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const [bottom, setBottom] = useState<number | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const update = () => {
      const next = window.scrollY > 480;
      setShow((s) => (s === next ? s : next));
      const desktop = window.matchMedia("(min-width: 768px)").matches;
      const base = desktop ? 32 : 20;
      const footer = document.querySelector("footer");
      const needed = uppButtonBottomPx(
        window.innerHeight,
        footer?.getBoundingClientRect().top,
        base,
      );
      setBottom((prev) => {
        const nextBottom = needed > base ? needed : null;
        return prev === nextBottom ? prev : nextBottom;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  if (!show) return null;

  return (
    <button
      type="button"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex min-h-11 min-w-11 items-center justify-center bg-gold px-3 text-sm text-gold-fg md:bottom-8 md:right-8"
      style={bottom !== null ? { bottom } : undefined}
      aria-label="Upp till toppen"
      onClick={() => scrollToTop()}
    >
      Upp
    </button>
  );
}
