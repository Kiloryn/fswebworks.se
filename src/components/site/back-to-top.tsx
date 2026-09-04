import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { scrollToTop } from "@/lib/scroll-to";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 480;
      setShow((s) => (s === next ? s : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (!show) return null;

  return (
    <button
      type="button"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 bg-gold px-3 py-2 text-sm text-gold-fg md:bottom-8 md:right-8"
      aria-label="Upp till toppen"
      onClick={() => scrollToTop()}
    >
      Upp
    </button>
  );
}
