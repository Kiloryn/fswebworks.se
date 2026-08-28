import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function PageBack({
  className,
  onPaper = false,
}: {
  className?: string;
  onPaper?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "mb-6 inline-flex items-center gap-2 text-sm font-medium",
        onPaper ? "text-brass hover:text-ink" : "text-gold hover:text-gold-2",
        className,
      )}
    >
      <ArrowLeft className="size-4" aria-hidden />
      Tillbaka till startsidan
    </Link>
  );
}
