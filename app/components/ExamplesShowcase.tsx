"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const SHOWCASE_ITEMS = [
  { slug: "vvs", name: "VVS & Rörmokare", img: "/examples/vvs.webp" },
  { slug: "elektriker", name: "Elektriker", img: "/examples/elektriker.webp" },
  { slug: "salong", name: "Salong/Skönhet", img: "/examples/salong.webp" },
  { slug: "restaurang", name: "Restaurang", img: "/examples/restaurang.webp" },
  { slug: "malare", name: "Målare", img: "/examples/malare.webp" },
  { slug: "konsult", name: "Konsult", img: "/examples/konsult.webp" },
] as const;

const CARD_SELECTOR = "[data-showcase-card]";
const ITEM_COUNT = SHOWCASE_ITEMS.length;
/** Tre identiska set – vi startar i mitten och hoppar set vid kanterna (osynligt). */
const SET_COUNT = 3;
const MIDDLE_SET_START = ITEM_COUNT;

type TrackCard = {
  item: (typeof SHOWCASE_ITEMS)[number];
  scrollIndex: number;
  realIndex: number;
};

function buildTrackCards(): TrackCard[] {
  const sequence = Array.from({ length: SET_COUNT }, () => [
    ...SHOWCASE_ITEMS,
  ]).flat();

  return sequence.map((item, scrollIndex) => ({
    item,
    scrollIndex,
    realIndex: scrollIndex % ITEM_COUNT,
  }));
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  );
}

export default function ExamplesShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackCards = useMemo(() => buildTrackCards(), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const hasInitialized = useRef(false);
  const isJumping = useRef(false);
  const setWidthRef = useRef(0);
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  const measureSetWidth = useCallback(() => {
    const root = scrollRef.current;
    if (!root) return 0;

    const first = root.querySelector<HTMLElement>(
      `${CARD_SELECTOR}[data-scroll-index="0"]`,
    );
    const middleFirst = root.querySelector<HTMLElement>(
      `${CARD_SELECTOR}[data-scroll-index="${MIDDLE_SET_START}"]`,
    );
    if (!first || !middleFirst) return 0;

    const width = middleFirst.offsetLeft - first.offsetLeft;
    if (width > 0) {
      setWidthRef.current = width;
    }
    return width;
  }, []);

  const getCenteredScrollIndex = useCallback((): number => {
    const root = scrollRef.current;
    if (!root) return MIDDLE_SET_START;

    const rootRect = root.getBoundingClientRect();
    const centerX = rootRect.left + rootRect.width / 2;
    const cards = root.querySelectorAll<HTMLElement>(CARD_SELECTOR);

    let bestScrollIndex: number = MIDDLE_SET_START;
    let bestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(cardCenter - centerX);
      const scrollIndex = Number(card.dataset.scrollIndex);
      if (!Number.isNaN(scrollIndex) && distance < bestDistance) {
        bestDistance = distance;
        bestScrollIndex = scrollIndex;
      }
    });

    return bestScrollIndex;
  }, []);

  const centerScrollIndex = useCallback(
    (scrollIndex: number, behavior: ScrollBehavior = "auto") => {
      const root = scrollRef.current;
      if (!root) return;

      const card = root.querySelector<HTMLElement>(
        `${CARD_SELECTOR}[data-scroll-index="${scrollIndex}"]`,
      );
      if (!card) return;

      const rootRect = root.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const delta =
        cardRect.left +
        cardRect.width / 2 -
        (rootRect.left + rootRect.width / 2);

      root.scrollBy({ left: delta, behavior });
    },
    [],
  );

  const updateActiveFromScroll = useCallback(() => {
    const root = scrollRef.current;
    if (!root) return;

    const rootRect = root.getBoundingClientRect();
    const centerX = rootRect.left + rootRect.width / 2;
    const cards = root.querySelectorAll<HTMLElement>(CARD_SELECTOR);

    let bestRealIndex = 0;
    let bestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(cardCenter - centerX);
      const realIndex = Number(card.dataset.realIndex);
      if (!Number.isNaN(realIndex) && distance < bestDistance) {
        bestDistance = distance;
        bestRealIndex = realIndex;
      }
    });

    setActiveIndex(bestRealIndex);
  }, []);

  /**
   * I första eller sista set? Flytta scroll exakt ett set – samma kort syns, inget ryck.
   */
  const reconcileInfiniteLoop = useCallback(() => {
    if (isJumping.current) return;

    const root = scrollRef.current;
    if (!root) return;

    const setWidth = setWidthRef.current || measureSetWidth();
    if (!setWidth) return;

    const scrollIndex = getCenteredScrollIndex();
    const lastSetStart = ITEM_COUNT * (SET_COUNT - 1);

    if (scrollIndex < ITEM_COUNT) {
      isJumping.current = true;
      root.classList.add("examples-showcase-jumping");
      root.scrollLeft += setWidth;
      requestAnimationFrame(() => {
        root.classList.remove("examples-showcase-jumping");
        isJumping.current = false;
        updateActiveFromScroll();
      });
      return;
    }

    if (scrollIndex >= lastSetStart) {
      isJumping.current = true;
      root.classList.add("examples-showcase-jumping");
      root.scrollLeft -= setWidth;
      requestAnimationFrame(() => {
        root.classList.remove("examples-showcase-jumping");
        isJumping.current = false;
        updateActiveFromScroll();
      });
    }
  }, [getCenteredScrollIndex, measureSetWidth, updateActiveFromScroll]);

  /** Fallback när scrollend saknas (t.ex. äldre Safari). */
  const scheduleReconcile = useCallback(() => {
    if (scrollEndTimer.current) {
      clearTimeout(scrollEndTimer.current);
    }
    scrollEndTimer.current = setTimeout(reconcileInfiniteLoop, 200);
  }, [reconcileInfiniteLoop]);

  const scrollToRealIndex = useCallback(
    (realIndex: number, behavior?: ScrollBehavior) => {
      const normalized = ((realIndex % ITEM_COUNT) + ITEM_COUNT) % ITEM_COUNT;
      centerScrollIndex(
        MIDDLE_SET_START + normalized,
        behavior ?? (reduceMotion ? "auto" : "smooth"),
      );
    },
    [centerScrollIndex, reduceMotion],
  );

  const goStep = useCallback(
    (delta: number) => {
      const current = getCenteredScrollIndex();
      centerScrollIndex(
        current + delta,
        reduceMotion ? "auto" : "smooth",
      );
    },
    [centerScrollIndex, getCenteredScrollIndex, reduceMotion],
  );

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const init = () => {
      measureSetWidth();
      if (!hasInitialized.current) {
        hasInitialized.current = true;
        centerScrollIndex(MIDDLE_SET_START, "auto");
        requestAnimationFrame(updateActiveFromScroll);
      }
    };

    requestAnimationFrame(init);

    const onScroll = () => {
      if (!isJumping.current) {
        updateActiveFromScroll();
      }
    };

    const onScrollEnd = () => {
      if (!isJumping.current) {
        reconcileInfiniteLoop();
      }
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    root.addEventListener("scrollend", onScrollEnd);
    /* scrollend finns inte överallt – debounce som backup */
    root.addEventListener("scroll", scheduleReconcile, { passive: true });
    const onResize = () => {
      measureSetWidth();
      updateActiveFromScroll();
    };
    window.addEventListener("resize", onResize);

    return () => {
      root.removeEventListener("scroll", onScroll);
      root.removeEventListener("scroll", scheduleReconcile);
      root.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("resize", onResize);
      if (scrollEndTimer.current) {
        clearTimeout(scrollEndTimer.current);
      }
    };
  }, [
    centerScrollIndex,
    measureSetWidth,
    reconcileInfiniteLoop,
    scheduleReconcile,
    updateActiveFromScroll,
  ]);

  const cardDepthClass = (realIndex: number) => {
    const diff = Math.abs(realIndex - activeIndex);
    const wrapDiff = Math.min(diff, ITEM_COUNT - diff);

    if (wrapDiff === 0) {
      return "examples-card-active z-10";
    }
    if (wrapDiff === 1) {
      return "examples-card-near z-[1]";
    }
    return "examples-card-far z-0";
  };

  return (
    <div className="relative examples-showcase-wrap">
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-6 hidden h-24 bg-gradient-to-t from-[#c8a46e]/10 to-transparent md:block"
        aria-hidden
      />

      <button
        type="button"
        onClick={() => goStep(-1)}
        className="focus-ring absolute left-2 top-[42%] z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#c8a46e]/40 bg-white/95 text-[#8b7355] shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#c8a46e] hover:bg-[#c8a46e] hover:text-[#111111] md:flex dark:bg-[#272727]/95 dark:text-[#c8a46e] dark:hover:text-[#111111]"
        aria-label="Föregående exempel"
      >
        <ChevronIcon direction="left" />
      </button>

      <button
        type="button"
        onClick={() => goStep(1)}
        className="focus-ring absolute right-2 top-[42%] z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#c8a46e]/40 bg-white/95 text-[#8b7355] shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#c8a46e] hover:bg-[#c8a46e] hover:text-[#111111] md:flex dark:bg-[#272727]/95 dark:text-[#c8a46e] dark:hover:text-[#111111]"
        aria-label="Nästa exempel"
      >
        <ChevronIcon direction="right" />
      </button>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 hidden w-16 bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent md:block dark:from-[#0a0a0a] dark:via-[#0a0a0a]/80" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 hidden w-16 bg-gradient-to-l from-stone-50 via-stone-50/80 to-transparent md:block dark:from-[#0a0a0a] dark:via-[#0a0a0a]/80" />

      <div
        ref={scrollRef}
        className="examples-showcase-scroll relative flex gap-6 overflow-x-auto pb-4 pt-2 scroll-smooth snap-x snap-mandatory"
      >
        {trackCards.map(({ item, scrollIndex, realIndex }) => (
          <Link
            key={`${item.slug}-${scrollIndex}`}
            href={`/${item.slug}`}
            data-showcase-card
            data-scroll-index={scrollIndex}
            data-real-index={realIndex}
            className={`group shrink-0 snap-center rounded-2xl overflow-hidden border border-stone-200 bg-white transition-all duration-500 ease-out hover:border-[#c8a46e]/50 active:scale-[0.98] dark:border-[#3a3a3a] dark:bg-[#272727] w-[min(85vw,280px)] sm:w-[320px] ${cardDepthClass(realIndex)}`}
          >
            <div className="relative aspect-video overflow-hidden bg-stone-100 dark:bg-[#111]">
              <Image
                src={item.img}
                alt={`${item.name} exempelsida`}
                width={640}
                height={360}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                <span className="rounded-lg bg-[#c8a46e] px-4 py-2 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Se demo →
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-sm font-semibold text-stone-900 transition-colors duration-300 group-hover:text-[#c8a46e] dark:text-[#f5f5f0]">
                {item.name}
              </span>
              <svg
                className="h-4 w-4 text-stone-500 transition-colors duration-300 group-hover:text-[#c8a46e] dark:text-[#6b6962]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      <div
        className="mt-6 hidden justify-center gap-2 md:flex"
        role="tablist"
        aria-label="Välj exempel"
      >
        {SHOWCASE_ITEMS.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-label={item.name}
            onClick={() => scrollToRealIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-8 bg-[#c8a46e]"
                : "w-2 bg-stone-400/50 hover:bg-[#c8a46e]/60 dark:bg-[#6b6962]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
