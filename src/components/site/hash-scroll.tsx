import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

export function HashScroll() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let tries = 0;
    let timer = 0;

    const tick = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        return;
      }
      if (tries++ < 12) timer = window.setTimeout(tick, 40);
    };

    timer = window.setTimeout(tick, 40);
    return () => window.clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}
