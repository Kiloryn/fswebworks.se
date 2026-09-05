import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pic } from "@/components/site/pic";
import { SectionLink } from "@/components/site/section-link";

export function Hero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-container">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-intro">Hemsidor för småföretag</p>
            <h1 id="home-title">En hemsida som ser ut som jobbet ni gör.</h1>
            <p className="home-lead">
              Professionella hemsidor för hantverkare och småföretag i hela Sverige. Vi hjälper dig
              med design, innehåll och lansering.
            </p>
            <p className="home-hero-price">
              Från <strong>9 900 kr</strong>
              <span>exkl. moms</span>
            </p>
            <div className="home-actions">
              <Button asChild size="xl">
                <SectionLink section="contact" search={{ amne: "offert" }}>
                  Begär offert
                </SectionLink>
              </Button>
              <SectionLink section="exempel" className="home-text-link">
                Se exempelsidor
              </SectionLink>
            </div>
          </div>
          <figure className="home-featured">
            <a
              href="/salong"
              className="home-featured-image"
              aria-label="Öppna exempelsidan Ateljé Linné"
            >
              <Pic
                src="/images/salong.jpg?v=5"
                alt="Salongsstol och spegel i varm fönsterbelysning, från exempelsidan Ateljé Linné"
                width={1200}
                height={1600}
                priority
                className="size-full object-cover"
              />
            </a>
            <figcaption>
              <div>
                <p>Exempelsida för en salong</p>
                <p className="home-featured-name">Ateljé Linné</p>
              </div>
              <a href="/salong" className="home-text-link">
                Öppna sidan
              </a>
            </figcaption>
          </figure>
        </div>
        <ul className="home-assurances" aria-label="Så arbetar vi">
          {["Inget krångel", "Tydliga priser", "Personlig hjälp", "Ingen inlåsning"].map((text) => (
            <li key={text}>
              <Check aria-hidden="true" size={18} />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
