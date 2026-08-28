import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { EXAMPLES, PROMISES } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Pic } from "@/components/site/pic";
import { SectionLink } from "@/components/site/section-link";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    const id = window.setInterval(() => {
      setI((n) => (n + 1) % EXAMPLES.length);
    }, 3400);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mobile = window.matchMedia("(max-width: 767px)").matches;
    video.src = mobile ? "/videos/hero-720.mp4" : "/videos/hero.mp4";
    video.muted = true;
    video.playsInline = true;
    void video.play().catch(() => {});

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(video);

    const onVis = () => {
      if (document.hidden) video.pause();
      else if (video.getBoundingClientRect().bottom > 80) {
        void video.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      video.pause();
    };
  }, []);

  const current = EXAMPLES[i] ?? EXAMPLES[0];

  return (
    <section className="relative isolate min-h-dvh overflow-hidden [contain:paint]">
      <img
        src="/videos/hero-poster.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover outline-none"
        fetchPriority="high"
        decoding="async"
      />
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover motion-reduce:hidden [transform:translateZ(0)]"
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/hero-poster.jpg"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(11_10_8_/_0.5)_0%,rgb(11_10_8_/_0.72)_42%,rgb(11_10_8_/_0.9)_100%)] md:bg-[linear-gradient(90deg,rgb(11_10_8_/_0.86)_0%,rgb(11_10_8_/_0.58)_48%,rgb(11_10_8_/_0.22)_100%)]" />

      <div className="relative mx-auto grid min-h-dvh max-w-6xl items-center gap-12 px-5 pb-16 pt-28 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:pt-24">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-mark">
            Webbdesign för småföretag
          </p>
          <h1 className="mt-5 max-w-[14ch] font-display text-[2.35rem] leading-[1.05] text-fg italic sm:text-5xl md:text-[4.1rem]">
            En hemsida som ser ut som ditt hantverk.
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

        <a
          href={`/${current.slug}`}
          className="group relative mx-auto hidden w-full max-w-md md:block"
          aria-label={`Öppna exempelsida: ${current.name}`}
        >
          <div className="relative rounded-xl border border-line bg-ink-2 p-2 shadow-lift">
            <div className="flex items-center gap-1.5 px-2 py-2">
              <span className="size-2 rounded-full bg-fg/20" />
              <span className="size-2 rounded-full bg-fg/20" />
              <span className="size-2 rounded-full bg-fg/20" />
              <span className="ml-2 truncate rounded-sm bg-ink px-2 py-0.5 text-[10px] text-muted">
                exempel · {current.name}
              </span>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Pic
                src={current.image}
                alt=""
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-mark">
                  Exempelsida
                </p>
                <p className="font-display text-xl italic">{current.name}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
