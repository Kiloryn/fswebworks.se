"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ExamplesShowcase from "@/app/components/ExamplesShowcase";

/** Matchar `content/pageData.json` så video syns direkt – inte först efter API-anrop. */
const DEFAULT_HERO_VIDEO = "/hero.webm";

/** En rad under CTAs med guldpunkter som avgränsare. */
const HERO_VALUE_PARTS = [
  "Inget krångel",
  "Tydliga priser",
  "Ingen bindningstid",
  "Du äger hemsidan själv",
] as const;

function HeroSection() {
  const [heroState, setHeroState] = useState<{
    heroImage: string;
    heroVideo: string;
    badge: string;
    heading: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
  }>({
    heroImage: "",
    heroVideo: DEFAULT_HERO_VIDEO,
    badge: "Webbdesign för småföretag i hela Sverige",
    heading: "Enkla hemsidor för småföretag",
    subheading:
      "Vi hjälper hantverkare och småföretag att få en professionell hemsida som syns, fungerar och är lätt att äga själv.",
    ctaPrimary: "Så här går det till",
    ctaSecondary: "Kontakta oss",
  });

  useEffect(() => {
    fetch("/api/page-data")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const hero = data?.page?.hero ?? data?.hero;
        if (hero) {
          setHeroState((prev) => ({
            heroImage:
              typeof hero.heroImage === "string" ? hero.heroImage.trim() : "",
            heroVideo:
              hero.heroVideo != null && typeof hero.heroVideo === "string"
                ? hero.heroVideo.trim()
                : prev.heroVideo,
            badge: typeof hero.badge === "string" ? hero.badge : prev.badge,
            heading:
              typeof hero.heading === "string" ? hero.heading : prev.heading,
            subheading:
              typeof hero.subheading === "string"
                ? hero.subheading
                : prev.subheading,
            ctaPrimary:
              typeof hero.ctaPrimary === "string"
                ? hero.ctaPrimary
                : prev.ctaPrimary,
            ctaSecondary:
              typeof hero.ctaSecondary === "string"
                ? hero.ctaSecondary
                : prev.ctaSecondary,
          }));
        }
      })
      .catch(() => {});
  }, []);

  const trimmedVideo = (heroState.heroVideo || "").trim();
  const hasVideo = Boolean(trimmedVideo);
  const heroVideoSrc = trimmedVideo || DEFAULT_HERO_VIDEO;
  const videoIsMp4 = heroVideoSrc.toLowerCase().includes(".mp4");
  const mp4FallbackSrc = videoIsMp4
    ? heroVideoSrc
    : heroVideoSrc.replace(/\.webm(\?.*)?$/i, ".mp4$1");
  const hasImage = !hasVideo && Boolean(heroState.heroImage?.trim());
  const hasMedia = hasVideo || hasImage;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-oid="mf6_b0q"
    >
      {/* Background: video, image, or gradient */}
      {hasVideo && (
        <>
          {/* muted + playsInline krävs för autoplay på mobil */}
          <video
            key={heroVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 z-0 w-full h-full object-cover"
            aria-hidden
          >
            <source
              src={heroVideoSrc}
              type={videoIsMp4 ? "video/mp4" : "video/webm"}
            />
            {!videoIsMp4 && mp4FallbackSrc !== heroVideoSrc && (
              <source src={mp4FallbackSrc} type="video/mp4" />
            )}
          </video>
          <div
            className="absolute inset-0 z-[1] bg-black/30 pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/40 to-black/50 pointer-events-none"
            aria-hidden
          />
        </>
      )}
      {hasImage && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroState.heroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-black/30 pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 pointer-events-none"
            aria-hidden
          />
        </>
      )}
      {!hasMedia && (
        <>
          <div
            className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-stone-50 dark:from-[#0a0a0a] dark:via-[#111111] dark:to-[#0a0a0a]"
            data-oid="6fi35q_"
          />
          <div
            className="absolute inset-0 pointer-events-none hero-bg-gradient-top"
            aria-hidden
            data-oid="t9cgml9"
          />
          <div
            className="absolute inset-0 pointer-events-none hero-bg-gradient-bottom"
            aria-hidden
            data-oid="aygc6gf"
          />
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            data-oid="1nnf65p"
          >
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#c8a46e]/20 rounded-full animate-pulse hero-dot-1"
              data-oid="ts4b6:m"
            />
            <div
              className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#c8a46e]/30 rounded-full animate-pulse hero-dot-2"
              data-oid="-rm66wl"
            />
            <div
              className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-[#c8a46e]/15 rounded-full animate-pulse hero-dot-3"
              data-oid="qqfzmjm"
            />
          </div>
        </>
      )}

      <div
        className={`relative z-10 max-w-6xl mx-auto px-6 py-20 text-center ${hasMedia ? "hero-over-media" : ""}`}
        data-oid="0epof2t"
      >
        {/* Subtle badge/tag above headline */}
        <div
          className="inline-flex items-center max-w-[min(100%,36rem)] px-3 py-2 sm:px-4 sm:py-2 mb-6 bg-[#c8a46e]/15 border border-[#c8a46e]/30 rounded-full text-xs sm:text-sm text-[#8b7355] dark:text-[#c8a46e] font-medium hero-badge text-center"
          data-aos="fade-up"
          data-aos-delay="100"
          data-oid="6imuasy"
        >
          <span
            className="w-2 h-2 bg-[#8b7355] dark:bg-[#c8a46e] rounded-full mr-2 animate-pulse"
            data-oid="rz91:-f"
          ></span>
          {heroState.badge}
        </div>

        <h1
          className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight text-[#c8a46e] hero-headline text-balance"
          data-aos="fade-up"
          data-aos-delay="200"
          data-oid="lk-:3lq"
        >
          {heroState.heading}
        </h1>

        {/* Underrad tydligt mindre än huvudrubriken */}
        <p
          className="text-lg md:text-xl text-stone-700 dark:text-[#d4d0c8] mb-10 max-w-2xl mx-auto leading-relaxed hero-subheading"
          data-aos="fade-up"
          data-aos-delay="300"
          data-oid="c6tmx.s"
        >
          {heroState.subheading}
        </p>

        <div
          className="flex w-full flex-col sm:w-auto sm:flex-row items-center justify-center gap-4 mb-8"
          data-aos="fade-up"
          data-aos-delay="400"
          data-oid="kwo4cpp"
        >
          <Link
            href="/#sa-har-gar-det-till"
            className="focus-ring w-full max-w-xs sm:w-auto px-10 py-5 text-lg bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#c8a46e]/25 transform"
            data-oid="z9q-f_p"
          >
            {heroState.ctaPrimary}
          </Link>

          <Link
            href="/#contact"
            className="focus-ring w-full max-w-xs sm:w-auto px-10 py-5 text-lg border-2 border-[#8b7355] text-[#8b7355] dark:border-[#c8a46e] dark:text-[#c8a46e] font-semibold rounded-lg hover:bg-[#8b7355] hover:text-white dark:hover:bg-[#c8a46e] dark:hover:text-[#111111] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            data-oid="3h3i2u_"
          >
            {heroState.ctaSecondary}
          </Link>
        </div>

        <div
          className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 max-w-3xl mx-auto text-base md:text-lg text-stone-600 dark:text-[#b8b4a8] leading-relaxed hero-benefits"
          data-aos="fade-up"
          data-aos-delay="500"
          data-oid="e64q:nn"
        >
          {HERO_VALUE_PARTS.map((part, i) => (
            <React.Fragment key={part}>
              {i > 0 ? (
                <span
                  className="hero-benefit-sep h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8a46e]"
                  aria-hidden
                />
              ) : null}
              <span>{part}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      title: "Tydlig presentation",
      desc: "Företag, tjänster och kontakt samlat – besökaren förstår direkt vad ni gör.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      title: "Lätt att ta kontakt",
      desc: "Kontaktformulär och tydliga uppgifter så kunder slipper leta.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      title: "Redo att växa",
      desc: "Grund för SEO och framtida utbyggnad – utan att börja med ett stort projekt.",
    },
  ];

  return (
    <section
      id="vad-vi-erbjuder"
      className="relative pt-0 pb-32 bg-stone-50 dark:bg-[#0a0a0a] overflow-hidden border-t border-stone-200/80 dark:border-[#2a2a2a]"
      data-oid="hw7i-w9"
    >
      <div
        className="absolute inset-0 pointer-events-none section-bg-gradient-value"
        aria-hidden
        data-oid="6iqd7:a"
      />
      <div className="custom-shape-divider-top-1772059326" aria-hidden>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" />
        </svg>
      </div>
      <div
        className="relative max-w-4xl mx-auto px-6 pt-24 text-center"
        data-oid="03gxzyv"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 text-stone-900 dark:text-[#f5f5f0]"
          data-aos="fade-up"
          data-oid="_d9nv07"
        >
          Det här får du med en enkel hemsida
        </h2>
        <p
          className="text-stone-600 dark:text-[#d4d0c8] text-lg leading-relaxed max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
          data-oid="u6s9t5w"
        >
          Ingen onödig funktionalitet – bara det som småföretag faktiskt behöver
          för att synas och ta emot förfrågningar.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative bg-white dark:bg-[#272727] border border-stone-200 dark:border-[#3a3a3a] rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#c8a46e]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#c8a46e]/5"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-[#c8a46e]/10 text-[#8b7355] dark:text-[#c8a46e] group-hover:bg-[#c8a46e]/20 transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-[#f5f5f0] mb-2">
                {f.title}
              </h3>
              <p className="text-stone-600 dark:text-[#d4d0c8] text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="custom-shape-divider-bottom-1772061112" aria-hidden>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </section>
  );
}

const PROCESS_STEPS = [
  {
    title: "1. Första kontakt",
    body:
      "Du hör av dig via formulär eller e-post. Vi bokar ett kort samtal där vi går igenom dina önskemål och behov.",
  },
  {
    title: "2. Offert",
    body:
      "Efter samtalet skickar vi en tydlig offert. När du godkänner offerten startar vi arbetet.",
  },
  {
    title: "3. Innehåll till hemsidan",
    body:
      "Du skickar texter, bilder och information om ditt företag. Du behöver inte ha allt klart från början – vi hjälper dig att strukturera innehållet.",
  },
  {
    title: "4. Vi bygger hemsidan",
    body:
      "Vi designar och bygger din hemsida och ser till att den fungerar lika bra på mobil som på dator.",
  },
  {
    title: "5. Lansering",
    body:
      "När allt är klart publiceras hemsidan och vi går igenom den tillsammans.",
  },
];

function ProcessSection() {
  return (
    <section
      id="sa-har-gar-det-till"
      className="relative py-24 pb-32 bg-white dark:bg-[#0a0a0a] overflow-hidden border-t border-stone-200/80 dark:border-[#2a2a2a]"
    >
      <div className="absolute inset-0 pointer-events-none section-bg-gradient-value opacity-40" aria-hidden />
      <div className="relative max-w-3xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-[#f5f5f0] mb-4 text-center"
          data-aos="fade-up"
        >
          Så här går det till
        </h2>
        <p
          className="text-stone-600 dark:text-[#d4d0c8] text-lg leading-relaxed text-center mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Att komma igång med en ny hemsida behöver inte vara krångligt. Vi
          håller processen enkel och tydlig.
        </p>
        <ol className="space-y-5 list-none p-0 m-0">
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.title}
              className="group relative bg-stone-50 dark:bg-[#272727] border border-stone-200 dark:border-[#3a3a3a] rounded-xl p-6 transition-all duration-300 hover:border-[#c8a46e]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#c8a46e]/10"
              data-aos="fade-up"
              data-aos-delay={100 + i * 50}
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c8a46e]/15 text-sm font-bold text-[#8b7355] dark:text-[#c8a46e] ring-1 ring-[#c8a46e]/25 transition-colors duration-300 group-hover:bg-[#c8a46e]/25 group-hover:ring-[#c8a46e]/50"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div className="min-w-0 text-left">
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-[#f5f5f0] mb-2 transition-colors duration-300 group-hover:text-[#8b7355] dark:group-hover:text-[#d4b480]">
                    {step.title.replace(/^\d+\.\s*/, "")}
                  </h3>
                  <p className="text-stone-600 dark:text-[#d4d0c8] leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="shape-divider-section-bottom-2 mt-8" aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full">
          <path d="M0,60 C300,0 900,120 1200,60 L1200,120 L0,120 Z" className="shape-fill-examples" />
        </svg>
      </div>
    </section>
  );
}

const SERVICE_CARDS = [
  {
    title: "Skapa hemsida",
    priceLine: "från 9 900 kr",
    priceNote: "exkl. moms",
    description:
      "Vi skapar en enkel och professionell hemsida som presenterar ditt företag och gör det lätt för kunder att ta kontakt. Hemsidan anpassas efter din verksamhet och fungerar lika bra på mobil som på dator.",
    fitsTitle: "Det här passar för dig som:",
    fits: [
      "Saknar en hemsida idag",
      "Har en gammal hemsida som behöver uppdateras",
      "Vill ha en enkel och professionell närvaro online",
    ],
    ctaLabel: "Begär offert",
    ctaVariant: "primary" as const,
  },
  {
    title: "Serviceavtal (valfritt)",
    priceLine: "690 kr / månad",
    priceNote: "exkl. moms",
    description:
      "För dig som vill ha löpande hjälp med din hemsida. Vi hjälper till med mindre uppdateringar och ser till att sidan fortsätter fungera bra över tid.",
    fitsTitle: "Det här passar för dig som:",
    fits: [
      "Vill slippa tänka på tekniska uppdateringar",
      "Ibland behöver ändra texter eller bilder",
      "Vill ha en kontakt att höra av dig till när något behöver ändras",
    ],
    ctaLabel: "Fråga om serviceavtal",
    ctaVariant: "outline" as const,
  },
  {
    title: "Hjälp vid behov",
    priceLine: "950 kr / timme",
    priceNote: "exkl. moms",
    description:
      "Behöver du bara hjälp ibland? Vi hjälper till med ändringar, uppdateringar eller förbättringar när behov uppstår.",
    fitsTitle: "Det här passar för dig som:",
    fits: [
      "Bara behöver hjälp någon gång ibland",
      "Vill betala per tillfälle istället för ett avtal",
    ],
    ctaLabel: "Hör av dig",
    ctaVariant: "outline" as const,
  },
];

function ServicesSection() {
  return (
    <section
      id="tjanster"
      className="relative py-24 pb-16 bg-stone-100 dark:bg-[#111111] overflow-hidden border-t border-stone-200/80 dark:border-[#2a2a2a]"
      data-oid="5n7-w4w"
    >
      <div
        className="absolute inset-0 pointer-events-none section-bg-gradient-pricing"
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-6" data-oid="spmzqk5">
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-oid="396-z35"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-[#f5f5f0] mb-4"
            data-oid="wu795ht"
          >
            Tjänster
          </h2>
          <p
            className="text-stone-600 dark:text-[#d4d0c8] max-w-2xl mx-auto"
            data-oid="yazyh:7"
          >
            Vi börjar alltid med ett samtal – helt kostnadsfritt.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10" data-oid="ss8j85n">
          {SERVICE_CARDS.map((card, i) => (
            <div
              key={card.title}
              className="relative flex flex-col bg-white dark:bg-[#272727] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-stone-200 dark:border-[#3a3a3a] hover:border-[#c8a46e]/40 hover:shadow-[#c8a46e]/10"
              data-aos="fade-up"
              data-aos-delay={i * 80}
              data-oid="4e9_wgp"
            >
              <h3
                className="text-xl font-semibold text-stone-900 dark:text-[#f5f5f0] mb-2"
                data-oid="3gmsip-"
              >
                {card.title}
              </h3>
              <p
                className="text-2xl font-bold text-stone-900 dark:text-[#f5f5f0] mb-1"
                data-oid="08-woyd"
              >
                {card.priceLine}
              </p>
              <p className="text-xs text-stone-500 dark:text-[#a8a49c] mb-4">
                {card.priceNote}
              </p>
              <p
                className="text-stone-600 dark:text-[#d4d0c8] text-sm leading-relaxed mb-5"
                data-oid="9bravw9"
              >
                {card.description}
              </p>
              <p className="text-sm font-semibold text-stone-900 dark:text-[#f5f5f0] mb-2">
                {card.fitsTitle}
              </p>
              <ul className="space-y-2 text-sm text-stone-600 dark:text-[#d4d0c8] mb-6">
                {card.fits.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#c8a46e]/60" />
                    {line}
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className={
                  card.ctaVariant === "primary"
                    ? "focus-ring mt-auto inline-flex w-full items-center justify-center px-6 py-3.5 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-all duration-300 hover:shadow-lg hover:shadow-[#c8a46e]/25"
                    : "focus-ring mt-auto inline-flex w-full items-center justify-center px-6 py-3.5 border-2 border-[#8b7355] text-[#8b7355] dark:border-[#c8a46e] dark:text-[#c8a46e] font-semibold rounded-lg hover:bg-[#8b7355] hover:text-white dark:hover:bg-[#c8a46e] dark:hover:text-[#111111] transition-all duration-300"
                }
              >
                {card.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
        <div
          className="max-w-2xl mx-auto rounded-2xl border border-[#c8a46e]/45 bg-stone-100/80 px-6 py-6 md:px-8 md:py-8 dark:bg-[#272727] dark:border-[#c8a46e]/40"
          data-aos="fade-up"
        >
          <p className="text-center text-lg md:text-xl lg:text-2xl font-medium text-stone-800 dark:text-[#f5f5f0] leading-snug tracking-tight">
            Du äger alltid din hemsida och väljer själv om du vill ha fortsatt
            hjälp.
          </p>
        </div>
      </div>
    </section>
  );
}

const INCLUDES_ITEMS = [
  "Uppstartssamtal",
  "Design anpassad efter ditt företag",
  "1–5 sidor (Start, Om oss, Tjänster, Kontakt etc.)",
  "Mobilanpassad design",
  "Kontaktformulär",
  "Grundläggande SEO",
  "Genomgång när hemsidan är klar",
];

function InclusionsCtaSection() {
  return (
    <section className="relative py-16 pb-24 bg-stone-100 dark:bg-[#111111] overflow-hidden border-t border-stone-200/60 dark:border-[#2a2a2a]/80">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="bg-white dark:bg-[#272727] border border-stone-200 dark:border-[#3a3a3a] rounded-2xl p-8 transition-all duration-300 hover:border-[#c8a46e]/30"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold text-stone-900 dark:text-[#f5f5f0] mb-6">
              Detta ingår
            </h2>
            <ul className="space-y-3 text-stone-600 dark:text-[#d4d0c8]">
              {INCLUDES_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#c8a46e]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="bg-white dark:bg-[#272727] border border-stone-200 dark:border-[#3a3a3a] rounded-2xl p-8 flex flex-col transition-all duration-300 hover:border-[#c8a46e]/30"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <h2 className="text-2xl font-bold text-stone-900 dark:text-[#f5f5f0] mb-4">
              Så förbereder du innehållet
            </h2>
            <p className="text-stone-600 dark:text-[#d4d0c8] leading-relaxed mb-8 flex-1">
              Här hittar du konkreta tips på vad du kan förbereda inför projektet
              – från företagsbeskrivning och tjänster till bilder och
              kontaktuppgifter.
            </p>
            <Link
              href="/process"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c8a46e]/25 w-full sm:w-auto"
            >
              Öppna guiden
            </Link>
          </div>
        </div>
      </div>
      <div className="shape-divider-section-bottom-2" aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full">
          <path d="M0,60 C300,0 900,120 1200,60 L1200,120 L0,120 Z" className="shape-fill-examples" />
        </svg>
      </div>
    </section>
  );
}

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Måste jag skriva texterna själv?",
    a: "Ja, i grunden utgår vi från texter och information från dig, eftersom du känner din verksamhet bäst. Vi hjälper gärna till att strukturera, anpassa och lägga in texterna så att de fungerar bra på webben. Om du vill ha hjälp med formuleringar eller texter kan det erbjudas som tillägg.",
  },
  {
    q: "Vad händer om jag inte har färdiga texter?",
    a: "Det är väldigt vanligt. Vi börjar ofta med enkla utkast, stödfrågor eller befintligt material, och bygger vidare därifrån. Målet är att det ska kännas enkelt – inte stressande.",
  },
  {
    q: "Kan ni hjälpa till att ändra texter i efterhand?",
    a: "Absolut. Mindre textändringar kan göras via vår löpande webb-hjälp eller som enstaka uppdrag vid behov.",
  },
  {
    q: "Är jag bunden till er om ni bygger hemsidan?",
    a: "Nej. Du äger alltid din hemsida och väljer själv om du vill ha fortsatt hjälp eller inte.",
  },
];

function FAQItem({ item }: { item: { q: string; a: string } }) {
  return (
    <li className="list-none">
      <details className="faq-details bg-stone-50 dark:bg-[#272727] border border-stone-200 dark:border-[#3a3a3a] rounded-xl transition-colors duration-200 hover:border-[#c8a46e]/20 open:border-[#c8a46e]/40">
        <summary className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left [&::-webkit-details-marker]:hidden">
          <span className="text-lg font-semibold text-stone-900 dark:text-[#f5f5f0] pr-2">
            {item.q}
          </span>
          <svg
            className="faq-chevron shrink-0 w-5 h-5 text-[#c8a46e]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </summary>
        <div className="border-t border-stone-200/60 px-6 pb-6 pt-2 dark:border-[#2a2a2a]/80">
          <p className="text-stone-600 dark:text-[#d4d0c8] leading-relaxed">
            {item.a}
          </p>
        </div>
      </details>
    </li>
  );
}

function FAQSection() {
  return (
    <section
      className="relative py-24 pb-32 bg-white dark:bg-[#0a0a0a] overflow-hidden border-t border-stone-200/80 dark:border-[#2a2a2a]"
      data-oid="7bu:.ml"
    >
      <div className="relative max-w-3xl mx-auto px-6" data-oid="89xhhdi">
        <h2
          className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-[#f5f5f0] mb-12 text-center"
          data-aos="fade-up"
          data-oid="iqjffx_"
        >
          FAQ
        </h2>
        <ul className="list-none space-y-3 p-0 m-0" data-oid="twx44y5">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={i} item={item} />
          ))}
        </ul>
      </div>
      <div className="shape-divider-section-bottom-2" aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full">
          <path d="M0,50 C400,120 800,0 1200,50 L1200,120 L0,120 Z" className="shape-fill-gold" />
        </svg>
      </div>
    </section>
  );
}

const SUBJECT_OPTIONS = [
  { value: "", label: "— Välj —" },
  { value: "offert", label: "Offert / ny hemsida" },
  { value: "kontakta-mig", label: "Kontakta mig" },
  { value: "service", label: "Serviceärende" },
  { value: "ovrigt", label: "Övrigt" },
] as const;

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((status === "success" || status === "error") && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setFieldErrors({});
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName) {
      setErrorMessage("Namn krävs");
      setFieldErrors({ name: "Namn krävs" });
      setStatus("error");
      return;
    }
    if (!trimmedEmail) {
      setErrorMessage("E-post krävs");
      setFieldErrors({ email: "E-post krävs" });
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage("Ogiltig e-postadress");
      setFieldErrors({ email: "Ogiltig e-postadress" });
      setStatus("error");
      return;
    }
    if (!trimmedMessage) {
      setErrorMessage("Meddelande krävs");
      setFieldErrors({ message: "Meddelande krävs" });
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: phone.trim() || undefined,
          message: trimmedMessage,
          subject: subject || undefined,
          website: honeypot,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = data.detail
          ? `${data.error} (${data.detail})`
          : data.error || "Något gick fel";
        setErrorMessage(msg);
        setStatus("error");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSubject("");
      setFieldErrors({});
    } catch {
      setErrorMessage("Kunde inte skicka. Försök igen.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 pb-32 bg-stone-100 dark:bg-[#111111] relative overflow-hidden"
      ref={sectionRef}
      data-oid="m8p5t8f"
    >
      <div
        className="absolute inset-0 pointer-events-none section-bg-gradient-contact"
        aria-hidden
      />
      <div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        data-aos="fade-up"
        data-oid="7rdzyvs"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-[#f5f5f0] mb-4"
          data-oid="dixt8nq"
        >
          Kontakta oss
        </h2>
        <p
          className="text-stone-600 dark:text-[#b8b4a8] mb-10"
          data-oid="chocs18"
        >
          Osäker på vad du behöver? Hör av dig så pratar vi igenom det – helt
          utan förpliktelser.
        </p>

        <div className="sr-only" aria-live="polite" role="status">
          {status === "success"
            ? "Din förfrågan skickades. Vi återkommer inom 24 timmar."
            : status === "error"
              ? errorMessage
              : ""}
        </div>

        {status === "success" ? (
          <div
            className="max-w-lg mx-auto py-8 px-6 bg-white dark:bg-[#1a1a1a] border border-stone-200 dark:border-[#2a2a2a] rounded-xl text-stone-900 dark:text-[#f5f5f0]"
            data-oid="doxvmxl"
          >
            <p
              className="text-lg font-medium text-[#c8a46e] mb-2"
              data-oid="534v_a0"
            >
              Tack för din förfrågan!
            </p>
            <p className="text-stone-600 dark:text-[#b8b4a8]" data-oid="80j372d">
              Vi återkommer inom 24 timmar.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="relative space-y-4 text-left max-w-lg mx-auto"
            data-oid="4f0t4sv"
          >
            {errorMessage && (
              <p
                className="text-red-400 text-sm"
                role="alert"
                data-oid="bl3gjia"
              >
                {errorMessage}
              </p>
            )}
            <div data-oid="hu-qbs1">
              <label
                htmlFor="contact-name"
                className="block text-stone-700 dark:text-[#e5e5e0] text-sm font-medium mb-1.5"
                data-oid="w2yk654"
              >
                Namn
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                placeholder="Ditt namn"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setFieldErrors((prev) => ({ ...prev, name: undefined }));
                }}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-stone-200 dark:border-[#2a2a2a] rounded-lg text-stone-900 dark:text-[#f5f5f0] placeholder-stone-400 dark:placeholder-[#6b6962] focus:border-[#c8a46e] focus:outline-none focus-ring disabled:opacity-60"
                data-oid="euar4ue"
              />
              {fieldErrors.name && (
                <p id="contact-name-error" className="mt-1 text-sm text-red-400" role="alert">
                  {fieldErrors.name}
                </p>
              )}
            </div>
            <div data-oid="3x5cuo_">
              <label
                htmlFor="contact-email"
                className="block text-stone-700 dark:text-[#e5e5e0] text-sm font-medium mb-1.5"
                data-oid="mf2icrx"
              >
                E-post
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                placeholder="din@epost.se"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setFieldErrors((prev) => ({ ...prev, email: undefined }));
                }}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-stone-200 dark:border-[#2a2a2a] rounded-lg text-stone-900 dark:text-[#f5f5f0] placeholder-stone-400 dark:placeholder-[#6b6962] focus:border-[#c8a46e] focus:outline-none focus-ring disabled:opacity-60"
                data-oid="h-qte9:"
              />
              {fieldErrors.email && (
                <p id="contact-email-error" className="mt-1 text-sm text-red-400" role="alert">
                  {fieldErrors.email}
                </p>
              )}
            </div>
            <div data-oid="contact-phone-wrap">
              <label
                htmlFor="contact-phone"
                className="block text-stone-700 dark:text-[#e5e5e0] text-sm font-medium mb-1.5"
              >
                Telefon (valfritt)
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="070-123 45 67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-stone-200 dark:border-[#2a2a2a] rounded-lg text-stone-900 dark:text-[#f5f5f0] placeholder-stone-400 dark:placeholder-[#6b6962] focus:border-[#c8a46e] focus:outline-none disabled:opacity-60"
              />
            </div>
            <div data-oid="rx0.r:c">
              <label
                htmlFor="contact-subject"
                className="block text-stone-700 dark:text-[#e5e5e0] text-sm font-medium mb-1.5"
                data-oid="0dif6od"
              >
                Ämne (valfritt)
              </label>
              <select
                id="contact-subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-stone-200 dark:border-[#2a2a2a] rounded-lg text-stone-900 dark:text-[#f5f5f0] focus:border-[#c8a46e] focus:outline-none focus-ring disabled:opacity-60"
                data-oid="-mf8:ce"
              >
                {SUBJECT_OPTIONS.map((o) => (
                  <option key={o.value || "empty"} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div data-oid="h4ccbrm">
              <label
                htmlFor="contact-message"
                className="block text-stone-700 dark:text-[#e5e5e0] text-sm font-medium mb-1.5"
                data-oid="b8q7d2n"
              >
                Meddelande
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Skriv ditt meddelande..."
                rows={4}
                required
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
                autoComplete="off"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setFieldErrors((prev) => ({ ...prev, message: undefined }));
                }}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-stone-200 dark:border-[#2a2a2a] rounded-lg text-stone-900 dark:text-[#f5f5f0] placeholder-stone-400 dark:placeholder-[#6b6962] focus:border-[#c8a46e] focus:outline-none focus-ring disabled:opacity-60"
                data-oid=".scee5:"
              />
              {fieldErrors.message && (
                <p id="contact-message-error" className="mt-1 text-sm text-red-400" role="alert">
                  {fieldErrors.message}
                </p>
              )}
            </div>
            <div className="sr-only" aria-hidden>
              <label htmlFor="contact-website">Webbplats</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>
            <p className="text-xs text-stone-500 dark:text-[#a8a49c] leading-relaxed">
              Genom att skicka godkänner du att vi behandlar dina uppgifter enligt{" "}
              <Link
                href="/integritet?return=contact"
                className="text-[#8b7355] dark:text-[#c8a46e] underline hover:no-underline"
              >
                vår integritetspolicy
              </Link>
              .
            </p>
            <button
              type="submit"
              disabled={status === "loading"}
              className="focus-ring w-full py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              data-oid="_ze946l"
            >
              {status === "loading" ? "Skickar..." : "Skicka förfrågan"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function ExamplesTeaserSection() {
  return (
    <section
      className="relative py-24 pb-32 bg-stone-50 dark:bg-[#0a0a0a] border-t border-stone-200/50 dark:border-[#2a2a2a]/50 overflow-hidden"
      data-oid="nl0opgt"
    >
      <div
        className="absolute inset-0 pointer-events-none section-bg-gradient-examples"
        aria-hidden
      />

      <div className="relative text-center mb-12 px-6" data-oid="kmncg_z">
        <h2
          className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-[#f5f5f0] mb-4"
          data-aos="fade-up"
          data-oid="0rmqedd"
        >
          Exempel på hemsidor vi bygger
        </h2>
        <p
          className="text-stone-600 dark:text-[#d4d0c8] max-w-xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="50"
          data-oid="ix-2unm"
        >
          Varje mall anpassas efter ditt företags varumärke och behov.
          Klicka för att se en live-demo.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <ExamplesShowcase />
      </div>

      <div className="relative text-center mt-10 px-6">
        <Link
          href="/examples"
          className="inline-block px-8 py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c8a46e]/25"
          data-aos="fade-up"
          data-oid="a5lwg.i"
        >
          Se alla exempel
        </Link>
      </div>
      <div className="shape-divider-section-bottom-2" aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full">
          <path d="M0,80 Q600,0 1200,80 L1200,120 L0,120 Z" className="shape-fill-faq" />
        </svg>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]" data-oid="p7sj5c7">
      <HeroSection data-oid=".eqyeio" />
      <ValueSection data-oid="pa5uyr7" />
      <ProcessSection data-oid="process-home" />
      <ServicesSection data-oid="pzh.q39" />
      <InclusionsCtaSection data-oid="inclusions-cta" />
      <ExamplesTeaserSection data-oid="5yu.41u" />
      <FAQSection data-oid="bkk:pdd" />
      <ContactSection data-oid="do64k7q" />
    </div>
  );
}
