import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInViewOnce<T extends HTMLElement = HTMLElement>(opts?: {
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  const threshold = opts?.threshold ?? 0.15;
  const rootMargin = opts?.rootMargin ?? "0px 0px -18% 0px";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 767px)").matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, shown] as const;
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "rise",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "rise" | "fade" | "wipe";
}) {
  const [ref, shown] = useInViewOnce<HTMLDivElement>();
  const kind =
    variant === "wipe" ? "reveal-wipe" : variant === "fade" ? "reveal-fade" : "reveal";

  return (
    <div
      ref={ref}
      className={cn(kind, shown && "reveal-in", className)}
      style={{ transitionDelay: shown ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
