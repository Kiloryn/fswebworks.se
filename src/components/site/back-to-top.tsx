import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";

function prefersReduce() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

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
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex size-12 items-center justify-center rounded-full bg-gold text-gold-fg shadow-lift md:bottom-8 md:right-8"
      aria-label="Tillbaka till toppen"
      onClick={() => {
        if (hash) void navigate({ to: ".", hash: "" });
        window.scrollTo({ top: 0, behavior: prefersReduce() ? "auto" : "smooth" });
      }}
    >
      <ArrowUp className="size-5" aria-hidden />
    </button>
  );
}
