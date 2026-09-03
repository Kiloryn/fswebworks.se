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
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
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
    if (opts.search?.amne) {
      void opts.navigate({ to: "/", hash: id, search: opts.search });
    }
    scrollToId(id);
    return;
  }
  void opts.navigate({ to: "/", hash: id, search: opts.search });
}
