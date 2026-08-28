import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  className,
}: {
  className?: string;
  onInk?: boolean;
}) {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  return (
    <Link
      to="/"
      aria-label="FSwebworks, till startsidan"
      className={cn("inline-flex items-center", className)}
      onClick={(e) => {
        if (pathname !== "/") return;
        e.preventDefault();
        if (hash) void navigate({ to: "/", hash: "" });
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
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
