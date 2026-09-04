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
      const connection = (
        navigator as Navigator & { connection?: { saveData?: boolean } }
      ).connection;
      if (connection?.saveData) return;
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
      preload="none"
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
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(11_10_8_/_0.28)_0%,rgb(11_10_8_/_0.58)_36%,rgb(11_10_8_/_0.78)_68%,rgb(11_10_8_/_0.86)_100%)]" />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-5 pt-28 pb-10 md:min-h-dvh md:px-8 md:pt-36 md:pb-[22vh]">
        <div className="w-full">
          <p className="text-base text-muted md:text-lg">
            Hemsidor för småföretag
          </p>
          <h1 className="hero-wipe mt-4 font-display text-[clamp(2.7rem,6.2vw,5.75rem)] font-medium leading-[1.02] text-fg [overflow-wrap:normal]">
            En hemsida som ser ut
            <br className="hidden md:inline" />{" "}
            som jobbet ni gör.
          </h1>
          <p className="mt-6 font-display text-3xl tabular-nums text-fg md:mt-8 md:text-5xl">
            Från{" "}
            <span className="whitespace-nowrap">9 900 kr</span>.
          </p>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted md:text-xl">
            Professionella hemsidor för hantverkare och småföretag i hela
            Sverige. Tydliga priser och ingen inlåsning.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-start gap-x-8 gap-y-3 md:mt-10">
            <Button asChild size="xl" className="h-16 px-8 text-lg">
              <SectionLink section="contact">Begär offert</SectionLink>
            </Button>
            <SectionLink
              section="exempel"
              className="inline-flex min-h-11 items-center text-base text-fg underline decoration-fg/35 underline-offset-4 hover:decoration-fg md:text-lg"
            >
              Se exempel
            </SectionLink>
          </div>
        </div>
      </div>
    </section>
  );
});
