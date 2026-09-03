import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import {
  EXAMPLES,
  FAQ,
  INCLUDED,
  SERVICES,
  SITE,
  STEPS,
} from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/contact-form";
import { Reveal } from "@/components/site/reveal";
import { Pic } from "@/components/site/pic";
import { Hero } from "@/components/home/hero";
import { SectionLink } from "@/components/site/section-link";

export function HomePage({ defaultSubject = "" }: { defaultSubject?: string }) {
  return (
    <>
      <Hero />
      <Marquee />
      <Examples />
      <Services />
      <Process />
      <Faq />
      <Contact defaultSubject={defaultSubject} />
    </>
  );
}

function MarqueeLink({ ex }: { ex: (typeof EXAMPLES)[number] }) {
  return (
    <a
      href={`/${ex.slug}`}
      className="flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-muted hover:text-gold"
    >
      <span className="text-gold">/</span>
      {ex.name}
    </a>
  );
}

function Marquee() {
  return (
    <div className="border-y border-line bg-ink-2 py-4">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 md:hidden">
        {EXAMPLES.map((ex) => (
          <MarqueeLink key={ex.slug} ex={ex} />
        ))}
      </div>
      <div className="hidden overflow-hidden md:block">
        <div className="marquee-track flex w-max gap-10 pr-10">
          {[...EXAMPLES, ...EXAMPLES].map((ex, i) => (
            <MarqueeLink key={`${ex.slug}-${i}`} ex={ex} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Examples() {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setShowImages(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <section id="exempel" className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-subtle">
              Interaktiva exempel
            </p>
            <h2 className="mt-3 max-w-[16ch] font-display text-[2.15rem] italic md:text-5xl">
              Så kan din sida se ut.
            </h2>
            <p className="mt-4 max-w-xl text-subtle">
              Klicka in och testa funktionerna. Det är fullt klickbara
              exempelsidor som visar hur vi strukturerar kontakt, tjänster och
              förtroende för olika branscher.
            </p>
          </div>
          <Button asChild variant="outline" className="w-full md:w-auto">
            <Link to="/examples">
              Se alla exempel
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXAMPLES.map((ex) => (
            <a
              key={ex.slug}
              href={`/${ex.slug}`}
              className="group overflow-hidden rounded-xl border border-ink/8 bg-paper-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-ink/20 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {showImages ? (
                  <Pic
                    src={ex.image}
                    alt={`${ex.name} exempelsida`}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={800}
                    height={600}
                    priority={ex.slug === "vvs" || ex.slug === "elektriker"}
                  />
                ) : (
                  <div className="size-full bg-paper-2" aria-hidden />
                )}
                <span className="absolute right-3 top-3 rounded-sm bg-gold px-3 py-1 text-[11px] font-medium text-gold-fg md:opacity-0 md:transition-opacity md:duration-200 md:group-hover:opacity-100">
                  Öppna
                </span>
              </div>
              <div className="px-5 py-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">
                  {ex.brand}
                </p>
                <h3 className="mt-1 font-display text-2xl">{ex.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-subtle">{ex.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const main = SERVICES.find((s) => s.featured);
  const rest = SERVICES.filter((s) => !s.featured);
  if (!main) return null;

  return (
    <section id="priser" className="bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
            Priser
          </p>
          <h2 className="mt-3 font-display text-[2.15rem] italic md:text-5xl">
            Tydliga priser. Inga överraskningar.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Tydliga förutsättningar från start. Du äger din verksamhets identitet
            och projektleverans, och det finns inga inlåsande avtal.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col rounded-xl bg-ink-2 p-7 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] md:p-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
              Hemsida
            </p>
            <h3 className="mt-3 font-display text-3xl">{main.name}</h3>
            <p className="mt-4 font-display text-5xl italic tabular-nums">
              {main.price}
            </p>
            <p className="mt-1 text-sm text-muted">{main.suffix}</p>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {main.description}
            </p>
            <p className="mt-8 font-display text-xl italic">
              En komplett start – inte en halvfärdig mall.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full">
              <SectionLink section="contact" search={{ amne: main.subject }}>
                {main.cta}
              </SectionLink>
            </Button>
          </article>
          <div className="grid gap-5">
            {rest.map((s) => (
              <article
                key={s.id}
                className="flex flex-col rounded-xl border border-line bg-ink-2/60 p-7 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-line/60 hover:bg-ink-2"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
                  {s.id === "service" ? "Valfritt" : "Vid behov"}
                </p>
                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl">{s.name}</h3>
                  <p className="font-display text-3xl italic tabular-nums">
                    {s.price}
                  </p>
                </div>
                <p className="mt-1 text-sm text-muted">{s.suffix}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  {s.fits.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="ghost" className="mt-6 w-full">
                  <SectionLink section="contact" search={{ amne: s.subject }}>
                    {s.cta}
                  </SectionLink>
                </Button>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 rounded-xl border border-line bg-ink-2/40 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
                Ägarskap
              </p>
              <h4 className="mt-2 font-display text-lg">Du äger ditt projekt</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Domän, identitet, bilder och innehåll tillhör dig. Om du vill flytta
                i framtiden kan hemsidan exporteras till ditt eget valda upplägg
                enligt överenskommelse.
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
                Drift & teknik
              </p>
              <h4 className="mt-2 font-display text-lg">Vi sköter det praktiska</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                De flesta föredrar att slippa servrar, DNS och certifikat. Vi
                hanterar drift och säkerhet så länge du vill ha vår hjälp.
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
                Fast offert
              </p>
              <h4 className="mt-2 font-display text-lg">Inga överraskningar</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Startpriset gäller standardhemsidor för småföretag. Eventuella
                utökade önskemål stäms av och prissätts tydligt innan vi börjar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const essentialInputs = [
    {
      title: "Om företaget",
      desc: "Kort om vad ni gör, er ort och hur länge ni har funnits.",
    },
    {
      title: "Tjänster",
      desc: "Vilka jobb ni tar, era specialområden och hur kunder anlitar er.",
    },
    {
      title: "Kontaktuppgifter",
      desc: "Telefonnummer, e-postadress, adress eller organisationsnummer.",
    },
    {
      title: "Bilder om du har",
      desc: "Logotyp och foton från vardagen (enkla mobilbilder fungerar utmärkt).",
    },
  ];

  return (
    <section id="process" className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-subtle">
            Så här går det till
          </p>
          <h2 className="mt-3 font-display text-[2.15rem] italic md:text-5xl">
            Fem enkla steg. Från idé till färdig sida.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-subtle md:text-lg">
            Att komma igång behöver inte vara krångligt. Vi sköter design,
            struktur och det tekniska bygget – du behöver varken kunna koda eller
            ha allt material klart från början.
          </p>
        </div>

        {/* 5 Process Steps as a Connected Journey */}
        <div className="relative mt-14">
          {/* Subtle connecting progress line behind steps on desktop */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-ink/12 lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step, i) => (
              <li key={step.title} className="relative flex flex-col">
                <div className="relative z-10 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full border border-ink/15 bg-paper font-display text-xl italic text-brass shadow-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Step connector arrow for small screens */}
                  <span className="text-xs uppercase tracking-widest text-subtle/60 lg:hidden">
                    Steg {i + 1}
                  </span>
                </div>
                <div className="mt-4 flex-1 rounded-xl border border-ink/8 bg-paper-2 p-5 transition-colors duration-200 hover:border-ink/20">
                  <h3 className="font-display text-lg leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-subtle">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Compact, non-repetitive secondary block: Det enda vi behöver från dig */}
        <div className="mt-14 rounded-2xl border border-ink/10 bg-paper-2 p-7 md:p-9 shadow-xs">
          <div className="flex flex-col justify-between gap-3 border-b border-ink/10 pb-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                Förberedelser
              </p>
              <h3 className="mt-1.5 font-display text-2xl italic md:text-3xl">
                Det enda vi behöver från dig
              </h3>
            </div>
            <p className="text-sm text-subtle">
              Fokusera på det du kan bäst – vi sätter ihop helheten.
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {essentialInputs.map((item, idx) => (
              <div key={item.title} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-paper text-[11px] font-semibold text-brass">
                    {idx + 1}
                  </span>
                  <h4 className="font-display text-base font-medium">{item.title}</h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-subtle">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center">
            <p className="text-sm leading-relaxed text-subtle">
              <strong className="font-medium text-ink">Har du inte allt?</strong> Ingen
              fara. Vi hjälper dig att strukturera resten under samtalets gång.
            </p>
            <div className="flex w-full shrink-0 items-center justify-between gap-4 sm:w-auto sm:justify-end">
              <Link
                to="/process"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-brass underline decoration-brass underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
              >
                Läs hela innehållsguiden
                <ArrowRight className="size-3.5" />
              </Link>
              <Button asChild size="md">
                <SectionLink section="contact">
                  Kontakta oss
                </SectionLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="cv-auto bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="text-center font-display text-[2.15rem] italic md:text-5xl">
          Vanliga frågor
        </h2>
        <div className="mt-12 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-line bg-ink-2 transition-colors duration-150 hover:border-line/70"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
                >
                  <span className="font-display text-base leading-snug md:text-xl">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-gold transition-transform duration-250 ease-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-line/60 px-6 py-5 text-sm leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact({ defaultSubject }: { defaultSubject: string }) {
  return (
    <section id="contact" className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.1fr] md:gap-16 md:px-8">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-subtle">
            Kontakt
          </p>
          <h2 className="mt-3 font-display text-[2.15rem] italic leading-[1.08] md:text-5xl">
            Osäker på vad du behöver? Hör av dig.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-subtle">
            Vi går igenom dina önskemål och förutsättningar – helt utan
            förpliktelser. Du får alltid ett tydligt prisförslag innan något
            påbörjas.
          </p>

          <div className="mt-8 space-y-4 border-y border-ink/10 py-6 text-sm">
            <div className="flex items-start gap-3">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brass" />
              <div>
                <p className="font-medium text-ink">Snabb återkoppling</p>
                <p className="text-subtle">Vi svarar vanligtvis inom en arbetsdag.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brass" />
              <div>
                <p className="font-medium text-ink">Direktkontakt via mejl</p>
                <p className="text-subtle">Föredrar du att skriva direkt till oss?</p>
              </div>
            </div>
          </div>

          <a
            href={`mailto:${SITE.email}`}
            className="mt-6 inline-block font-display text-xl italic text-ink underline decoration-brass decoration-2 underline-offset-8 transition-colors hover:text-brass md:text-2xl"
          >
            {SITE.email}
          </a>

          <p className="mt-4 text-xs text-subtle">
            Bas i Stockholm · Vi skapar hemsidor för företag i hela Sverige.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-ink-2 p-7 text-fg shadow-card md:p-9">
          <ContactForm defaultSubject={defaultSubject} />
        </div>
      </div>
    </section>
  );
}
