import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  className,
}: {
  className?: string;
  onInk?: boolean;
}) {
  return (
    <Link
      to="/"
      aria-label="FSwebworks, startsida"
      className={cn("inline-flex items-center", className)}
    >
      <img
        src="/logo.svg"
        alt="FSwebworks"
        className="h-5 w-auto outline-none md:h-7"
      />
    </Link>
  );
}
