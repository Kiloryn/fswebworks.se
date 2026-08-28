import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { Logo } from "@/components/site/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink">
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
              <Link to="/" hash="exempel" className="hover:text-fg">
                Exempel
              </Link>
            </li>
            <li>
              <Link to="/" hash="priser" className="hover:text-fg">
                Priser
              </Link>
            </li>
            <li>
              <Link to="/" hash="process" className="hover:text-fg">
                Så går det till
              </Link>
            </li>
            <li>
              <Link to="/process" className="hover:text-fg">
                Förbered innehåll
              </Link>
            </li>
            <li>
              <Link to="/" hash="contact" className="hover:text-fg">
                Kontakt
              </Link>
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
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-subtle md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}</p>
          <p>Webbdesign för småföretag · bas i Stockholm</p>
          <button
            type="button"
            className="text-left text-gold hover:text-gold-2 md:text-right"
            onClick={() => {
              const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
              window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
            }}
          >
            Till toppen
          </button>
        </div>
      </div>
    </footer>
  );
}
