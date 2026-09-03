import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { isHashScrollSuppressed, scrollToId } from "@/lib/scroll-to";

export function SectionScroll() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const id = hash.replace(/^#/, "");
    if (!id || pathname !== "/") return;
    // In-page SectionLink already scrolled; a second smooth scroll
    // cancels the first on iOS/WebKit.
    if (isHashScrollSuppressed()) return;

    let tries = 0;
    let timer = 0;
    const tick = () => {
      if (scrollToId(id)) return;
      if (tries++ < 20) timer = window.setTimeout(tick, 50);
    };
    timer = window.setTimeout(tick, 60);
    return () => window.clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}
