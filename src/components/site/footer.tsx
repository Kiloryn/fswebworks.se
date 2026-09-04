import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { Logo } from "@/components/site/logo";
import { SectionLink } from "@/components/site/section-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <Logo onInk />
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>{SITE.city}</span>
          <a href={`mailto:${SITE.email}`} className="inline-flex min-h-11 items-center whitespace-nowrap hover:text-fg">
            {SITE.email}
          </a>
          <SectionLink section="contact" className="inline-flex min-h-11 items-center whitespace-nowrap hover:text-fg">
            Offert
          </SectionLink>
          <Link to="/integritet" className="inline-flex min-h-11 items-center whitespace-nowrap hover:text-fg">
            Integritet
          </Link>
          <span>© {new Date().getFullYear()} {SITE.name}</span>
        </p>
      </div>
    </footer>
  );
}
