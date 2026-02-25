"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const TEMPLATE_OPTIONS = [
  { id: "vvs", name: "VVS & Rörmokare" },
  { id: "elektriker", name: "Elektriker" },
  { id: "salong", name: "Salong/Skönhet" },
  { id: "restaurang", name: "Restaurang" },
  { id: "malare", name: "Målare" },
  { id: "konsult", name: "Konsult/Företagstjänster" },
];

function HeroSection() {
  const [heroMedia, setHeroMedia] = useState<{
    heroImage: string;
    heroVideo: string;
  }>({ heroImage: "", heroVideo: "" });

  useEffect(() => {
    fetch("/api/page-data")
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        const hero = data?.page?.hero ?? data?.hero;
        if (hero) {
          setHeroMedia({
            heroImage: hero.heroImage ?? "",
            heroVideo: hero.heroVideo ?? "",
          });
        }
      })
      .catch(() => {});
  }, []);

  const hasVideo = Boolean(heroMedia.heroVideo?.trim());
  const hasImage = !hasVideo && Boolean(heroMedia.heroImage?.trim());
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
          {/* Video hidden on mobile to save data and avoid autoplay issues; gradient shown instead */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-frame.jpg"
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            aria-hidden
          >
            <source src="/hero.webm" type="video/webm" />
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          {/* Mobile-only: gradient background when video is hidden */}
          <div
            className="absolute inset-0 md:hidden bg-gradient-to-br from-stone-50 via-white to-stone-50 dark:from-[#0a0a0a] dark:via-[#111111] dark:to-[#0a0a0a]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-black/30 pointer-events-none hidden md:block"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 pointer-events-none hidden md:block"
            aria-hidden
          />
        </>
      )}
      {hasImage && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroMedia.heroImage}
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
          className="inline-flex items-center px-4 py-2 mb-6 bg-[#c8a46e]/15 border border-[#c8a46e]/30 rounded-full text-sm text-[#8b7355] dark:text-[#c8a46e] font-medium hero-badge"
          data-aos="fade-up"
          data-aos-delay="100"
          data-oid="6imuasy"
        >
          <span
            className="w-2 h-2 bg-[#8b7355] dark:bg-[#c8a46e] rounded-full mr-2 animate-pulse"
            data-oid="rz91:-f"
          ></span>
          Professionell webbdesign
        </div>

        <h1
          className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight text-[#c8a46e] hero-headline"
          data-aos="fade-up"
          data-aos-delay="200"
          data-oid="lk-:3lq"
        >
          Webbdesign för små företag
        </h1>

        {/* Enhanced subtitle with better spacing */}
        <p
          className="text-lg md:text-xl text-stone-700 dark:text-[#d4d0c8] mb-10 max-w-2xl mx-auto leading-relaxed hero-subheading"
          data-aos="fade-up"
          data-aos-delay="300"
          data-oid="c6tmx.s"
        >
          Vi skapar professionella hemsidor som hjälper ditt företag att synas
          och växa online
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          data-aos="fade-up"
          data-aos-delay="400"
          data-oid="kwo4cpp"
        >
          <Link
            href="/process"
            className="px-10 py-5 text-lg bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#c8a46e]/25 transform"
            data-oid="z9q-f_p"
          >
            Så här går det till
          </Link>

          <Link
            href="#contact"
            className="px-10 py-5 text-lg border-2 border-[#8b7355] text-[#8b7355] dark:border-[#c8a46e] dark:text-[#c8a46e] font-semibold rounded-lg hover:bg-[#8b7355] hover:text-white dark:hover:bg-[#c8a46e] dark:hover:text-[#111111] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            data-oid="3h3i2u_"
          >
            Kontakta oss
          </Link>
        </div>

        {/* Key benefits with icons */}
        <div
          className="flex flex-wrap justify-center gap-6 text-sm text-stone-700 dark:text-[#d4d0c8] hero-benefits"
          data-aos="fade-up"
          data-aos-delay="500"
          data-oid="e64q:nn"
        >
          <div className="flex items-center gap-2" data-oid="cwfma49">
            <div
              className="w-2 h-2 bg-[#8b7355] dark:bg-[#c8a46e] rounded-full"
              data-oid="pqtuny4"
            ></div>
            <span data-oid="qgm9ck3">Mobilanpassat</span>
          </div>
          <div className="flex items-center gap-2" data-oid="k9n51gx">
            <div
              className="w-2 h-2 bg-[#8b7355] dark:bg-[#c8a46e] rounded-full"
              data-oid="2_rwx.q"
            ></div>
            <span data-oid="8wjhv8t">SEO-optimerat</span>
          </div>
          <div className="flex items-center gap-2" data-oid="0sy4fpz">
            <div
              className="w-2 h-2 bg-[#8b7355] dark:bg-[#c8a46e] rounded-full"
              data-oid="8hiuq5e"
            ></div>
            <span data-oid="wpaoyxh">Snabb leverans</span>
          </div>
        </div>

        <p
          className="text-stone-600 dark:text-[#b8b4a8] mt-8 max-w-xl mx-auto text-base md:text-lg leading-relaxed hero-disclaimer"
          data-aos="fade-up"
          data-aos-delay="600"
          data-oid="oaoys0u"
        >
          Du bidrar med information om ditt företag – vi ser till att innehållet
          presenteras tydligt och snyggt på hemsidan.
        </p>
      </div>
    </section>
  );
}

function ValueSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: "Mobilanpassad",
      desc: "Ser bra ut på alla skärmar – mobil, surfplatta och dator.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      title: "SEO-optimerad",
      desc: "Grundläggande sökmotoroptimering så att kunder hittar dig.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Snabb leverans",
      desc: "Din hemsida klar inom 1–2 veckor efter godkänt material.",
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
          En hemsida som gör jobbet
        </h2>
        <p
          className="text-stone-600 dark:text-[#d4d0c8] text-lg leading-relaxed max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
          data-oid="u6s9t5w"
        >
          Alla företag behöver inte en stor eller avancerad webbplats. Ofta
          räcker det med en tydlig, snygg och mobilanpassad hemsida som visar
          vad du gör, var du finns och hur kunder kontaktar dig. Det är precis
          vad vi hjälper till med.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative bg-white dark:bg-[#1a1a1a] border border-stone-200 dark:border-[#2a2a2a] rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#c8a46e]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#c8a46e]/5"
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

function PricingSection() {
  const tiers = [
    {
      name: "Bas",
      price: "690",
      period: "kr/mån",
      description: "Hosting, SSL, Backup, säkerhetsuppdateringar",
      popular: false,
    },
    {
      name: "Standard",
      price: "990",
      period: "kr/mån",
      description:
        "Bas + mindre uppdateringar, SEO-grund, prestandaövervakning",
      popular: true,
    },
    {
      name: "Premium",
      price: "1 490",
      period: "kr/mån",
      description:
        "Standard + prioriterad support, innehållsuppdateringar, månatliga rapporter",
      popular: false,
    },
  ];
  
  return (
    <section
      id="pricing"
      className="relative py-24 pb-32 bg-stone-100 dark:bg-[#111111] overflow-hidden border-t border-stone-200/80 dark:border-[#2a2a2a]"
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
            Priser
          </h2>
          <p
            className="text-stone-600 dark:text-[#d4d0c8] mb-2"
            data-oid="yazyh:7"
          >
            Engångspris:{" "}
            <span
              className="text-stone-900 dark:text-[#f5f5f0] font-semibold"
              data-oid="q0yc:v-"
            >
              Från 9 900 kr
            </span>{" "}
            <span
              className="text-stone-500 dark:text-[#a8a49c] text-sm align-baseline"
              data-oid="8jlfemq"
            >
              exkl. moms
            </span>
          </p>
          <p
            className="text-stone-500 dark:text-[#a8a49c] text-sm mt-4"
            data-oid="jrz_ack"
          >
            Hosting & Drift – exkl.{" "}
            <span
              className="text-stone-500 dark:text-[#a8a49c] text-xs"
              data-oid="pruu_::"
            >
              moms
            </span>
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12" data-oid="ss8j85n">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                tier.popular
                  ? "border-2 border-[#c8a46e] shadow-lg shadow-[#c8a46e]/10 dark:shadow-[#c8a46e]/20 scale-[1.02]"
                  : "border border-stone-200 dark:border-[#2a2a2a] hover:border-[#c8a46e]/40 hover:shadow-[#c8a46e]/10"
              }`}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              data-oid="4e9_wgp"
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c8a46e] text-[#111111] text-xs font-bold rounded-full uppercase tracking-wider">
                  Populärast
                </span>
              )}
              <h3
                className="text-xl font-semibold text-stone-900 dark:text-[#f5f5f0] mb-2"
                data-oid="3gmsip-"
              >
                {tier.name}
              </h3>
              <p
                className="text-2xl font-bold text-stone-900 dark:text-[#f5f5f0]"
                data-oid="08-woyd"
              >
                {tier.price}{" "}
                <span className="text-base font-medium text-stone-500 dark:text-[#a8a49c]">
                  {tier.period}
                </span>
              </p>
              <p
                className="text-xs text-stone-500 dark:text-[#a8a49c] mb-4"
                data-oid="q1ndi.s"
              >
                exkl.{" "}
                <span className="text-[10px]" data-oid=".138qgu">
                  moms
                </span>
              </p>
              <p
                className="text-stone-600 dark:text-[#d4d0c8] text-sm leading-relaxed"
                data-oid="9bravw9"
              >
                {tier.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center" data-aos="fade-up" data-oid="p3orjq0">
          <Link
            href="/process"
            className="inline-block px-8 py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c8a46e]/25"
            data-oid="_ucn3bd"
          >
            Så här går det till
          </Link>
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

function FAQItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!open) {
      setHeight(0);
      return;
    }
    if (!bodyRef.current) return;
    // Measure after layout so scrollHeight is correct (fixes answer not showing until scroll)
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (bodyRef.current) setHeight(bodyRef.current.scrollHeight);
      });
    });
    const timer = setTimeout(() => {
      itemRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 220);
    return () => {
      cancelAnimationFrame(id);
      clearTimeout(timer);
    };
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.style.height = `${height}px`;
  }, [height]);

  return (
    <li
      ref={itemRef}
      className={`bg-stone-50 dark:bg-[#1a1a1a] border rounded-xl transition-colors duration-200 ${
        open
          ? "border-[#c8a46e]/40"
          : "border-stone-200 dark:border-[#2a2a2a] hover:border-[#c8a46e]/20"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
        {...(open ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
      >
        <span className="text-lg font-semibold text-stone-900 dark:text-[#f5f5f0]">
          {item.q}
        </span>
        <svg
          className={`shrink-0 w-5 h-5 text-[#c8a46e] transition-transform duration-200 ${
            open ? "rotate-45" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div
        ref={bodyRef}
        className="faq-body overflow-hidden transition-[height] duration-200 ease-out"
      >
        <p className="px-6 pb-6 text-stone-600 dark:text-[#d4d0c8] leading-relaxed">
          {item.a}
        </p>
      </div>
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
        <ul className="space-y-3" data-oid="twx44y5">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
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

function ContactSection() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [templateId, setTemplateId] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mall = searchParams.get("mall");
    if (mall && TEMPLATE_OPTIONS.some((t) => t.id === mall)) {
      setTemplateId(mall);
    }
  }, [searchParams]);

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
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName) {
      setErrorMessage("Namn krävs");
      setStatus("error");
      return;
    }
    if (!trimmedEmail) {
      setErrorMessage("E-post krävs");
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage("Ogiltig e-postadress");
      setStatus("error");
      return;
    }
    if (!trimmedMessage) {
      setErrorMessage("Meddelande krävs");
      setStatus("error");
      return;
    }
    const templateName =
      templateId && templateId !== "other"
        ? (TEMPLATE_OPTIONS.find((t) => t.id === templateId)?.name ?? "")
        : "";
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          template: templateName,
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
      setMessage("");
      setTemplateId("");
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
            className="space-y-4 text-left max-w-lg mx-auto"
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
                placeholder="Ditt namn"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-stone-200 dark:border-[#2a2a2a] rounded-lg text-stone-900 dark:text-[#f5f5f0] placeholder-stone-400 dark:placeholder-[#6b6962] focus:border-[#c8a46e] focus:outline-none disabled:opacity-60"
                data-oid="euar4ue"
              />
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
                placeholder="din@epost.se"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-stone-200 dark:border-[#2a2a2a] rounded-lg text-stone-900 dark:text-[#f5f5f0] placeholder-stone-400 dark:placeholder-[#6b6962] focus:border-[#c8a46e] focus:outline-none disabled:opacity-60"
                data-oid="h-qte9:"
              />
            </div>
            <div data-oid="rx0.r:c">
              <label
                htmlFor="contact-template"
                className="block text-stone-700 dark:text-[#e5e5e0] text-sm font-medium mb-1.5"
                data-oid="0dif6od"
              >
                Vilken typ av sida? (valfritt)
              </label>
              <select
                id="contact-template"
                name="template"
                value={templateId}
                onChange={(e) => setTemplateId(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-stone-200 dark:border-[#2a2a2a] rounded-lg text-stone-900 dark:text-[#f5f5f0] focus:border-[#c8a46e] focus:outline-none disabled:opacity-60"
                data-oid="-mf8:ce"
              >
                <option value="" data-oid="ted3ziq">
                  — Välj —
                </option>
                {TEMPLATE_OPTIONS.map((t) => (
                  <option key={t.id} value={t.id} data-oid="1j7ykfx">
                    {t.name}
                  </option>
                ))}
                <option value="other" data-oid="w94fzcm">
                  Övrigt
                </option>
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
                autoComplete="off"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-stone-200 dark:border-[#2a2a2a] rounded-lg text-stone-900 dark:text-[#f5f5f0] placeholder-stone-400 dark:placeholder-[#6b6962] focus:border-[#c8a46e] focus:outline-none resize-none disabled:opacity-60"
                data-oid=".scee5:"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              data-oid="_ze946l"
            >
              {status === "loading" ? "Skickar..." : "Skicka förfrågan"}
            </button>
          </form>
        )}
      </div>
      <div className="shape-divider-section-bottom-2" aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full">
          <path d="M0,50 C400,120 800,0 1200,50 L1200,120 L0,120 Z" className="shape-fill-gold" />
        </svg>
      </div>
    </section>
  );
}

const SHOWCASE_ITEMS = [
  { slug: "vvs", name: "VVS & Rörmokare", img: "/examples/vvs.webp" },
  { slug: "elektriker", name: "Elektriker", img: "/examples/elektriker.webp" },
  { slug: "salong", name: "Salong/Skönhet", img: "/examples/salong.webp" },
  { slug: "restaurang", name: "Restaurang", img: "/examples/restaurang.webp" },
  { slug: "malare", name: "Målare", img: "/examples/malare.webp" },
  { slug: "konsult", name: "Konsult", img: "/examples/konsult.webp" },
];

function ExamplesTeaserSection() {
  const doubled = [...SHOWCASE_ITEMS, ...SHOWCASE_ITEMS];

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

      {/* Scrolling showcase row: touch scroll on mobile, marquee on desktop */}
      <div className="relative examples-scroll-mobile" data-aos="fade-up" data-aos-delay="100">
        {/* Fade edges – desktop only so mobile scroll isn’t obscured */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-stone-50 dark:from-[#0a0a0a] to-transparent pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-stone-50 dark:from-[#0a0a0a] to-transparent pointer-events-none hidden md:block" />

        <div className="flex gap-6 pl-[calc(50vw-10rem)] pr-[calc(50vw-10rem)] md:pl-0 md:pr-0 min-w-max animate-marquee">
          {doubled.map((item, i) => (
            <Link
              key={`${item.slug}-${i}`}
              href={`/${item.slug}`}
              className="group shrink-0 w-[280px] sm:w-[320px] snap-center rounded-2xl overflow-hidden border border-stone-200 dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a] transition-all duration-300 hover:border-[#c8a46e]/50 hover:shadow-2xl hover:shadow-[#c8a46e]/10 hover:-translate-y-1 active:scale-[0.98]"
            >
              {/* Screenshot preview */}
              <div className="relative aspect-video overflow-hidden bg-stone-100 dark:bg-[#111]">
                <Image
                  src={item.img}
                  alt={`${item.name} exempelsida`}
                  width={640}
                  height={360}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-[#c8a46e] rounded-lg">
                    Se demo →
                  </span>
                </div>
              </div>

              {/* Label */}
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-stone-900 dark:text-[#f5f5f0] group-hover:text-[#c8a46e] transition-colors">
                  {item.name}
                </span>
                <svg className="w-4 h-4 text-stone-500 dark:text-[#6b6962] group-hover:text-[#c8a46e] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
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
      <PricingSection data-oid="pzh.q39" />
      <ExamplesTeaserSection data-oid="5yu.41u" />
      <FAQSection data-oid="bkk:pdd" />
      <ContactSection data-oid="do64k7q" />
    </div>
  );
}
