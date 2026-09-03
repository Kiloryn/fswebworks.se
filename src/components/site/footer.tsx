import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { Logo } from "@/components/site/logo";
import { SectionLink } from "@/components/site/section-link";
import { scrollToTop } from "@/lib/scroll-to";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <Logo onInk />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Enkla hemsidor för hantverkare och småföretag i hela Sverige. Tydliga
            priser, ingen bindning – du äger sidan själv.
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
            Navigering
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <SectionLink section="exempel" className="hover:text-fg">
                Exempel
              </SectionLink>
            </li>
            <li>
              <SectionLink section="priser" className="hover:text-fg">
                Priser
              </SectionLink>
            </li>
            <li>
              <SectionLink section="process" className="hover:text-fg">
                Så går det till
              </SectionLink>
            </li>
            <li>
              <Link to="/process" className="hover:text-fg">
                Innehållsguide
              </Link>
            </li>
            <li>
              <SectionLink section="contact" className="hover:text-fg">
                Kontakt
              </SectionLink>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
            Företaget
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>{SITE.city}</li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-fg">
                {SITE.email}
              </a>
            </li>
            <li>
              <Link to="/integritet" className="hover:text-fg">
                Integritetspolicy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}</p>
          <p>Webbdesign för småföretag · bas i Stockholm</p>
          <button
            type="button"
            className="text-left text-gold hover:text-gold-2 md:text-right"
            onClick={() => scrollToTop()}
          >
            Till toppen
          </button>
        </div>
      </div>
    </footer>
  );
}
