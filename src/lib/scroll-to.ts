let pending: string | null = null;
let scrollRaf = 0;
let cancelScroll: (() => void) | null = null;

export function requestSection(id: string) {
  pending = id;
}

export function takeSection() {
  const id = pending;
  pending = null;
  return id;
}

function reduceMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function stopScroll() {
  if (scrollRaf) cancelAnimationFrame(scrollRaf);
  scrollRaf = 0;
  cancelScroll?.();
  cancelScroll = null;
}

export function scrollToY(targetY: number, ms = 680) {
  stopScroll();
  const startY = window.scrollY;
  const diff = targetY - startY;
  if (Math.abs(diff) < 2) return;
  if (reduceMotion()) {
    window.scrollTo(0, targetY);
    return;
  }

  const start = performance.now();
  let cancelled = false;
  const cancel = () => {
    cancelled = true;
    stopScroll();
  };
  window.addEventListener("wheel", cancel, { passive: true, once: true });
  window.addEventListener("touchstart", cancel, { passive: true, once: true });
  cancelScroll = () => {
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
  };

  const ease = (t: number) => 1 - (1 - t) ** 3;

  const step = (now: number) => {
    if (cancelled) return;
    const t = Math.min(1, (now - start) / ms);
    window.scrollTo(0, startY + diff * ease(t));
    if (t < 1) scrollRaf = requestAnimationFrame(step);
    else stopScroll();
  };
  scrollRaf = requestAnimationFrame(step);
}

export function scrollToTop() {
  scrollToY(0);
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  const offset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  scrollToY(Math.max(0, top));
  return true;
}

export function goToSection(
  id: string,
  opts: {
    pathname: string;
    navigate: (opts: {
      to: "/";
      search?: { amne?: string };
      replace?: boolean;
    }) => unknown;
    search?: { amne?: string };
  },
) {
  if (opts.pathname === "/") {
    if (opts.search?.amne) {
      void opts.navigate({ to: "/", search: opts.search, replace: true });
    }
    requestAnimationFrame(() => {
      if (!scrollToId(id)) requestSection(id);
    });
    return;
  }
  requestSection(id);
  void opts.navigate({ to: "/", search: opts.search });
}
