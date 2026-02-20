"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Optional zero-dependency scroll reveal: use instead of AOS when you want
 * no external libraries. Wrap content and use same delay (ms) as data-aos-delay.
 *
 * Usage: replace data-aos + data-aos-delay with:
 *   <ScrollRevealFallback delay={0}>...</ScrollRevealFallback>
 *
 * Requires the CSS in globals.css (search for "scroll-reveal-fallback").
 */

const DEFAULT_OFFSET = 120;
const DEFAULT_DURATION = 750;

type Props = {
  children: ReactNode;
  delay?: number;
  offset?: number;
  once?: boolean;
};

export default function ScrollRevealFallback({
  children,
  delay = 0,
  offset = DEFAULT_OFFSET,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        if (once && el) observer.unobserve(el);
      },
      {
        rootMargin: `0px 0px ${offset}px 0px`,
        threshold: 0.05,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [offset, once]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal-fallback ${visible ? "scroll-reveal-fallback--visible" : ""}`}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--reveal-duration": `${DEFAULT_DURATION}ms`,
        } as React.CSSProperties
      }
      data-oid="4zm3yf3"
    >
      {children}
    </div>
  );
}
