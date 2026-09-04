import { ArrowRight } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import { EXAMPLES, PROMISES } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Pic } from "@/components/site/pic";
import { SectionLink } from "@/components/site/section-link";

type SectionRef = { current: HTMLElement | null };

const HeroVideo = memo(function HeroVideo({
  sectionRef,
}: {
  sectionRef: SectionRef;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    let isSectionIntersecting = true;

    const playVideo = () => {
      if (document.hidden) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      void video.play().catch(() => {});
    };

    const pauseVideo = () => {
      video.pause();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        isSectionIntersecting = entry.isIntersecting;
        if (entry.isIntersecting) {
          playVideo();
        } else {
          pauseVideo();
        }
      },
      { threshold: 0 },
    );
    io.observe(section);

    const onVis = () => {
      if (document.hidden) {
        pauseVideo();
      } else if (isSectionIntersecting) {
        playVideo();
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      pauseVideo();
    };
  }, [sectionRef]);

  return (
    <video
      ref={ref}
      className="hero-video"
      poster="/videos/hero-poster.jpg"
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-hidden
    >
      <source src="/videos/hero-720.mp4" type="video/mp4" media="(max-width: 768px)" />
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  );
});

export const Hero = memo(function Hero() {
  const [selectedSlug, setSelectedSlug] = useState<string>(EXAMPLES[0].slug);
  const rootRef = useRef<HTMLElement>(null);

  const current = EXAMPLES.find((ex) => ex.slug === selectedSlug) ?? EXAMPLES[0];

  return (
    <section
      ref={rootRef}
      className="relative min-h-svh overflow-hidden bg-canvas bg-cover bg-center md:min-h-dvh"
      style={{ backgroundImage: "url(/videos/hero-poster.jpg)" }}
    >
      <HeroVideo sectionRef={rootRef} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(11_10_8_/_0.38)_0%,rgb(11_10_8_/_0.62)_48%,rgb(11_10_8_/_0.82)_100%)] md:bg-[linear-gradient(90deg,rgb(11_10_8_/_0.86)_0%,rgb(11_10_8_/_0.58)_48%,rgb(11_10_8_/_0.22)_100%)]" />

      <div className="relative mx-auto grid min-h-svh max-w-6xl items-center gap-12 px-5 pb-16 pt-28 md:min-h-dvh md:grid-cols-[1.15fr_0.85fr] md:px-8 md:pt-24">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-mark">
            Webbdesign för småföretag
          </p>
          <h1 className="mt-5 max-w-[15ch] font-display text-[2.35rem] leading-[1.05] text-fg italic sm:text-5xl md:text-[4.1rem]">
            En hemsida byggd för ditt företag.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted md:text-xl">
            Professionella hemsidor för hantverkare och småföretag i hela
            Sverige. Från 9 900 kr, ingen bindning – du äger sidan själv.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="xl" className="w-full sm:w-auto">
              <SectionLink section="contact">
                Begär offert
                <ArrowRight className="size-4" />
              </SectionLink>
            </Button>
            <Button asChild variant="ghost" size="xl" className="w-full sm:w-auto">
              <SectionLink section="exempel">
                Se exempel
              </SectionLink>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {PROMISES.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-mark" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden flex-col items-center gap-3 md:flex">
          <div
            className="flex flex-wrap items-center justify-center gap-1.5 rounded-lg border border-line bg-ink-2/80 p-1.5"
            role="tablist"
            aria-label="Välj branschexempel"
          >
            {EXAMPLES.map((ex) => {
              const active = ex.slug === current.slug;
              return (
                <button
                  key={ex.slug}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedSlug(ex.slug)}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    active
                      ? "bg-gold text-gold-fg"
                      : "text-muted hover:bg-fg/5 hover:text-fg"
                  }`}
                >
                  {ex.name}
                </button>
              );
            })}
          </div>

          <a
            href={`/${current.slug}`}
            className="group relative w-full max-w-md"
          >
            <div className="relative rounded-xl border border-line bg-ink-2 p-2 shadow-lift">
              <div className="flex items-center gap-1.5 px-2 py-2">
                <span className="size-2 rounded-full bg-fg/20" />
                <span className="size-2 rounded-full bg-fg/20" />
                <span className="size-2 rounded-full bg-fg/20" />
                <span className="ml-2 truncate rounded-sm bg-canvas px-2 py-0.5 text-[10px] text-muted">
                  interaktivt exempel · {current.name}
                </span>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-ink-3">
                {EXAMPLES.map((ex) => {
                  const isVisible = ex.slug === current.slug;
                  return (
                    <div
                      key={ex.slug}
                      aria-hidden={!isVisible}
                      className={`absolute inset-0 size-full transition-opacity duration-300 ease-out ${
                        isVisible ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Pic
                        src={ex.image}
                        alt=""
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-4">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-mark">
                          {ex.brand}
                        </p>
                        <p className="font-display text-xl italic">{ex.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
});
