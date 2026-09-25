import { Check } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { SectionLink } from "@/components/site/section-link";

export function Hero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <HeroMedia />
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

function HeroMedia() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        video.load();
        video.play().catch(() => {});
      },
      { rootMargin: "300px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-hero-media" aria-hidden="true">
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        poster="/videos/hero-poster.jpg"
        tabIndex={-1}
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
