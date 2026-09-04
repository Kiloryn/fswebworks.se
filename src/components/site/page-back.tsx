import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionLink } from "@/components/site/section-link";

export function PageBack({
  className,
  onPaper = false,
  section,
  label = "Tillbaka till startsidan",
}: {
  className?: string;
  onPaper?: boolean;
  section?: string;
  label?: string;
}) {
  const classes = cn(
    "mb-6 inline-flex items-center gap-2 text-sm font-medium",
    onPaper ? "text-brass hover:text-ink" : "text-gold hover:text-gold-2",
    className,
  );

  const inner = (
    <>
      <ArrowLeft className="size-4" aria-hidden />
      {label}
    </>
  );

  if (section) {
    return (
      <SectionLink section={section} className={classes}>
        {inner}
      </SectionLink>
    );
  }

  return (
    <Link to="/" className={classes}>
      {inner}
    </Link>
  );
}
