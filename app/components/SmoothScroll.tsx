"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const SMOOTH_SCROLL_TO_KEY = "smoothScrollTo";

function scrollToId(id: string, smooth = true) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
}

export default function SmoothScroll() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // After client-side navigation: scroll from URL hash, or from sessionStorage (when we navigated without hash).
  // We never show the hash in the URL – scroll to section then replace with clean URL.
  useEffect(() => {
    const pendingId =
      typeof window !== "undefined"
        ? sessionStorage.getItem(SMOOTH_SCROLL_TO_KEY)
        : null;
    if (pendingId) {
      sessionStorage.removeItem(SMOOTH_SCROLL_TO_KEY);
      scrollToId(pendingId, true);
      const cleanUrl = window.location.pathname + window.location.search;
      if (window.location.hash) {
        window.history.replaceState(null, "", cleanUrl);
      }
      return;
    }
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.slice(1);
      scrollToId(id, true);
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
  }, [pathname, searchParams]);

  // Intercept in-page anchor clicks so scroll is always smooth
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a");
      if (!target || !target.getAttribute("href")) return;
      const href = target.getAttribute("href") ?? "";
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;
      const hash = href.slice(hashIndex);
      if (hash === "#") return;
      const id = hash.slice(1);
      const pathPart = href.slice(0, hashIndex) || "/";
      const hasQuery = pathPart.includes("?");
      const isSamePage =
        pathPart === window.location.pathname ||
        pathPart === "" ||
        pathPart === "/";

      if (hasQuery && isSamePage) {
        // Link like /?mall=plumber#contact – navigate without hash so browser doesn't instant-scroll, then we smooth-scroll
        e.preventDefault();
        sessionStorage.setItem(SMOOTH_SCROLL_TO_KEY, id);
        router.push(pathPart);
        return;
      }
      if (!hasQuery && isSamePage) {
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        scrollToId(id, true);
        // Keep URL clean (no hash) after scrolling
        const cleanUrl = window.location.pathname + window.location.search;
        if (window.location.hash) {
          window.history.replaceState(null, "", cleanUrl);
        }
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router]);

  return null;
}
