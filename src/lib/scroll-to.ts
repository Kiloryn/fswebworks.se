export function scrollToTop() {
  if (typeof window === "undefined") return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({
    top: 0,
    behavior: reduceMotion ? "auto" : "smooth",
  });
}

export function sectionId(id: string) {
  return id === "kontakt" ? "contact" : id;
}

let suppressHashScrollUntil = 0;

export function suppressHashScroll(ms = 500) {
  suppressHashScrollUntil = Date.now() + ms;
}

export function isHashScrollSuppressed() {
  return Date.now() < suppressHashScrollUntil;
}

export function scrollToId(id: string) {
  if (typeof document === "undefined") return false;
  const el = document.getElementById(sectionId(id));
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  const offset = 72; // header height in px
  const targetY = window.scrollY + rect.top - offset;
  window.scrollTo({
    top: Math.max(0, targetY),
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
  return true;
}

export function goToSection(
  id: string,
  opts: {
    pathname: string;
    navigate: (opts: {
      to: "/";
      hash?: string;
      search?: { amne?: string };
      resetScroll?: boolean;
      hashScrollIntoView?: boolean;
    }) => unknown;
    search?: { amne?: string };
  },
) {
  const hash = sectionId(id);
  if (opts.pathname === "/") {
    // One scroll only. Router hash navigation would also resetScroll +
    // hashScrollIntoView, and SectionScroll would fire a third smooth
    // scroll 60ms later — WebKit cancels the competing scrolls.
    suppressHashScroll();
    scrollToId(hash);
    void opts.navigate({
      to: "/",
      hash,
      search: opts.search,
      resetScroll: false,
      hashScrollIntoView: false,
    });
    return;
  }
  void opts.navigate({
    to: "/",
    hash,
    search: opts.search,
    resetScroll: false,
    hashScrollIntoView: false,
  });
}
