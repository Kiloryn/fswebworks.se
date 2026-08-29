import { ArrowRight } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import { EXAMPLES, PROMISES } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Pic } from "@/components/site/pic";
import { SectionLink } from "@/components/site/section-link";

type RVFCVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: () => void) => number;
  cancelVideoFrameCallback?: (handle: number) => void;
};

const HeroVideo = memo(function HeroVideo() {
  const videoRef = useRef<RVFCVideo>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
    if (!ctx) return;

    let drawing = false;
    let raf = 0;
    let rvfc = 0;
    let pauseTimer = 0;

    const paint = () => {
      const vw = video.videoWidth;
      const vh = video.videoHeight;
      if (!vw || !vh) return;
      if (canvas.width !== vw || canvas.height !== vh) {
        canvas.width = vw;
        canvas.height = vh;
      }
      ctx.drawImage(video, 0, 0, vw, vh);
    };

    const tick = () => {
      if (!drawing) return;
      paint();
      if (video.requestVideoFrameCallback) {
        rvfc = video.requestVideoFrameCallback(tick);
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    const start = () => {
      if (drawing) return;
      drawing = true;
      void video.play().catch(() => {});
      tick();
    };

    const stop = () => {
      drawing = false;
      if (video.cancelVideoFrameCallback && rvfc) {
        video.cancelVideoFrameCallback(rvfc);
      }
      cancelAnimationFrame(raf);
      rvfc = 0;
      raf = 0;
    };

    const onScroll = () => {
      if (window.scrollY > 64) {
        stop();
        window.clearTimeout(pauseTimer);
        pauseTimer = window.setTimeout(() => video.pause(), 800);
        return;
      }
      window.clearTimeout(pauseTimer);
      start();
    };

    const onVis = () => {
      if (document.hidden) {
        stop();
        video.pause();
      } else if (window.scrollY <= 64) {
        start();
      }
    };

    video.addEventListener("loadeddata", paint);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    start();

    return () => {
      stop();
      window.clearTimeout(pauseTimer);
      video.removeEventListener("loadeddata", paint);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVis);
      video.pause();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="hero-video motion-reduce:hidden"
        width={1280}
        height={720}
        aria-hidden
      />
      <video
        ref={videoRef}
        className="pointer-events-none fixed top-0 left-[-9999px] h-[90px] w-[160px] opacity-0"
        muted
        loop
        playsInline
        preload="metadata"
        width={1280}
        height={720}
        aria-hidden
        tabIndex={-1}
      >
        <source src="/videos/hero-720.mp4" media="(max-width: 767px)" type="video/mp4" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </>
  );
});

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    const id = window.setInterval(() => {
      setI((n) => (n + 1) % EXAMPLES.length);
    }, 3400);
    return () => window.clearInterval(id);
  }, []);

  const current = EXAMPLES[i] ?? EXAMPLES[0];

  return (
    <section className="relative min-h-dvh overflow-hidden">
      <img
        src="/videos/hero-poster.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover outline-none"
        fetchPriority="high"
        decoding="async"
        aria-hidden
      />
      <HeroVideo />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(11_10_8_/_0.5)_0%,rgb(11_10_8_/_0.72)_42%,rgb(11_10_8_/_0.9)_100%)] md:bg-[linear-gradient(90deg,rgb(11_10_8_/_0.86)_0%,rgb(11_10_8_/_0.58)_48%,rgb(11_10_8_/_0.22)_100%)]" />

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
        >
          <div className="relative rounded-xl border border-line bg-ink-2 p-2 shadow-lift">
            <div className="flex items-center gap-1.5 px-2 py-2">
              <span className="size-2 rounded-full bg-fg/20" />
              <span className="size-2 rounded-full bg-fg/20" />
              <span className="size-2 rounded-full bg-fg/20" />
              <span className="ml-2 truncate rounded-sm bg-ink px-2 py-0.5 text-[10px] text-muted" aria-hidden>
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
