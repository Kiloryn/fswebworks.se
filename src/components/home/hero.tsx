import { ArrowRight } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import { EXAMPLES, PROMISES } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Pic } from "@/components/site/pic";
import { SectionLink } from "@/components/site/section-link";
import { cn } from "@/lib/utils";

type RVFCVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: () => void) => number;
  cancelVideoFrameCallback?: (handle: number) => void;
};

type SectionRef = { current: HTMLElement | null };

function heroIsOnScreen(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  const vh = window.visualViewport?.height ?? window.innerHeight;
  return r.bottom > 8 && r.top < vh - 8;
}

function watchHeroOnScreen(el: HTMLElement, onShow: () => void, onHide: () => void) {
  let timer = 0;
  const apply = () => {
    if (heroIsOnScreen(el)) {
      window.clearTimeout(timer);
      onShow();
      return;
    }
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (!heroIsOnScreen(el)) onHide();
    }, 320);
  };
  const io = new IntersectionObserver(apply, { threshold: 0 });
  io.observe(el);
  apply();
  return () => {
    io.disconnect();
    window.clearTimeout(timer);
  };
}

const NativeHeroVideo = memo(function NativeHeroVideo({
  sectionRef,
}: {
  sectionRef: SectionRef;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    const section = sectionRef.current;
    if (!video || !section) return;
    const show = () => {
      void video.play().catch(() => {});
    };
    const hide = () => {
      video.pause();
    };
    const stopWatch = watchHeroOnScreen(section, show, hide);
    const onVis = () => {
      if (document.hidden) hide();
      else if (heroIsOnScreen(section)) show();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stopWatch();
      document.removeEventListener("visibilitychange", onVis);
      video.pause();
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
      preload="auto"
      aria-hidden
    >
      <source src="/videos/hero-720.mp4" type="video/mp4" />
    </video>
  );
});

const CanvasHeroVideo = memo(function CanvasHeroVideo({
  sectionRef,
}: {
  sectionRef: SectionRef;
}) {
  const videoRef = useRef<RVFCVideo>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasFrame, setHasFrame] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!video || !canvas || !section) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let drawing = false;
    let shown = false;
    let raf = 0;
    let rvfc = 0;

    const paint = () => {
      const vw = video.videoWidth;
      const vh = video.videoHeight;
      if (!vw || !vh || video.readyState < 2) return false;
      if (canvas.width !== vw || canvas.height !== vh) {
        canvas.width = vw;
        canvas.height = vh;
      }
      ctx.drawImage(video, 0, 0, vw, vh);
      return true;
    };

    const tick = () => {
      if (!drawing) return;
      if (paint() && !shown) {
        shown = true;
        setHasFrame(true);
      }
      if (video.requestVideoFrameCallback) {
        rvfc = video.requestVideoFrameCallback(tick);
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    const start = () => {
      if (drawing || document.hidden) return;
      drawing = true;
      void video.play().catch(() => {
        drawing = false;
      });
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
      video.pause();
    };

    const stopWatch = watchHeroOnScreen(section, start, stop);
    const onVis = () => {
      if (document.hidden) stop();
      else if (heroIsOnScreen(section)) start();
    };
    video.addEventListener("playing", start);
    document.addEventListener("visibilitychange", onVis);
    start();

    return () => {
      stopWatch();
      stop();
      video.removeEventListener("playing", start);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [sectionRef]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={cn("hero-video", !hasFrame && "opacity-0")}
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
        preload="auto"
        width={1280}
        height={720}
        aria-hidden
        tabIndex={-1}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </>
  );
});

const HeroVideo = memo(function HeroVideo({
  sectionRef,
}: {
  sectionRef: SectionRef;
}) {
  const [mode, setMode] = useState<"none" | "native" | "canvas">("none");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setMode(window.matchMedia("(max-width: 767px)").matches ? "native" : "canvas");
  }, []);

  if (mode === "native") return <NativeHeroVideo sectionRef={sectionRef} />;
  if (mode === "canvas") return <CanvasHeroVideo sectionRef={sectionRef} />;
  return null;
});

export const Hero = memo(function Hero() {
  const [i, setI] = useState(0);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    let id = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        window.clearInterval(id);
        id = 0;
        if (!entry?.isIntersecting) return;
        id = window.setInterval(() => {
          setI((n) => (n + 1) % EXAMPLES.length);
        }, 3400);
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(id);
    };
  }, []);

  const current = EXAMPLES[i] ?? EXAMPLES[0];

  return (
    <section
      ref={rootRef}
      className="relative min-h-dvh overflow-hidden bg-ink bg-cover bg-center"
      style={{ backgroundImage: "url(/videos/hero-poster.jpg)" }}
    >
      <img
        src="/videos/hero-poster.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover outline-none"
        fetchPriority="high"
        decoding="async"
        aria-hidden
      />
      <HeroVideo sectionRef={rootRef} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(11_10_8_/_0.38)_0%,rgb(11_10_8_/_0.62)_48%,rgb(11_10_8_/_0.82)_100%)] md:bg-[linear-gradient(90deg,rgb(11_10_8_/_0.86)_0%,rgb(11_10_8_/_0.58)_48%,rgb(11_10_8_/_0.22)_100%)]" />

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
});
