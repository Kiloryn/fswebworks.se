import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { scrollToId } from "@/lib/scroll-to";

export function SectionScroll() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const id = hash.replace(/^#/, "");
    if (!id || pathname !== "/") return;

    let tries = 0;
    let timer = 0;
    const tick = () => {
      if (scrollToId(id)) return;
      if (tries++ < 12) timer = window.setTimeout(tick, 50);
    };
    timer = window.setTimeout(tick, 30);
    return () => window.clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}
