import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { scrollToTop } from "@/lib/scroll-to";

export function Logo({
  className,
}: {
  className?: string;
  onInk?: boolean;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <Link
      to="/"
      aria-label="FSwebworks, till startsidan"
      className={cn("inline-flex items-center", className)}
      onClick={(e) => {
        if (pathname !== "/") return;
        e.preventDefault();
        // Ren URL utan hash så en refresh landar på hero, inte på senaste sektionen.
        window.history.replaceState(null, "", "/");
        scrollToTop();
      }}
    >
      <img
        src="/logo.svg"
        alt="FSwebworks"
        className="h-5 w-auto outline-none md:h-7"
      />
    </Link>
  );
}
