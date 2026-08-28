import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

export function HashScroll() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    const tick = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const t = window.setTimeout(tick, 50);
    return () => window.clearTimeout(t);
  }, [hash, pathname]);

  return null;
}
