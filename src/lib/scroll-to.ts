export function scrollToTop() {
  if (typeof window === "undefined") return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({
    top: 0,
    behavior: reduceMotion ? "auto" : "smooth",
  });
}

export function scrollToId(id: string) {
  if (typeof document === "undefined") return false;
  const targetId = id === "kontakt" ? "contact" : id;
  const el = document.getElementById(targetId);
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
    }) => unknown;
    search?: { amne?: string };
  },
) {
  if (opts.pathname === "/") {
    void opts.navigate({ to: "/", hash: id, search: opts.search });
    scrollToId(id);
    return;
  }
  void opts.navigate({ to: "/", hash: id, search: opts.search });
}
