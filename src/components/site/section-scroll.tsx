import { useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { scrollToId, takeSection } from "@/lib/scroll-to";

export function SectionScroll() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();

  useEffect(() => {
    const fromHash = hash.replace(/^#/, "");
    const id = takeSection() || (pathname === "/" ? fromHash : "");
    if (!id) return;

    let tries = 0;
    let timer = 0;
    const tick = () => {
      if (scrollToId(id)) {
        if (fromHash) void navigate({ to: "/", hash: "", replace: true });
        return;
      }
      if (tries++ < 16) timer = window.setTimeout(tick, 40);
    };
    timer = window.setTimeout(tick, 30);
    return () => window.clearTimeout(timer);
  }, [hash, pathname, navigate]);

  return null;
}
