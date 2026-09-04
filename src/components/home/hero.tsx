import { memo, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
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
  const rootRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={rootRef}
      className="relative min-h-svh overflow-x-clip bg-canvas bg-cover bg-center md:min-h-dvh"
      style={{ backgroundImage: "url(/videos/hero-poster.jpg)" }}
    >
      <HeroVideo sectionRef={rootRef} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(11_10_8_/_0.28)_0%,rgb(11_10_8_/_0.55)_42%,rgb(11_10_8_/_0.88)_100%)]" />

      <div className="relative mx-auto flex min-h-svh max-w-6xl items-end px-5 pb-12 pt-32 md:min-h-dvh md:px-8 md:pb-16 md:pt-36">
        <div>
          <h1 className="max-w-[14ch] font-display text-[2.35rem] font-medium leading-[1.05] text-fg sm:text-5xl md:text-[4.1rem]">
            En hemsida som ser ut som jobbet ni gör.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted md:text-xl">
            Professionella hemsidor för hantverkare och småföretag i hela
            Sverige. Från{" "}
            <span className="whitespace-nowrap">9 900 kr</span>, ingen bindning
            – du äger sidan själv.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button asChild size="xl">
              <SectionLink section="contact">Begär offert</SectionLink>
            </Button>
            <SectionLink
              section="exempel"
              className="text-sm text-muted underline decoration-fg/30 underline-offset-4 hover:text-fg hover:decoration-fg"
            >
              Se exempel
            </SectionLink>
          </div>
        </div>
      </div>
    </section>
  );
});
