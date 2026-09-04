import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
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
    <div className="border-y border-line bg-ink-2">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-7 gap-y-2 px-5 py-4">
        {EXAMPLES.map((ex) => (
          <MarqueeLink key={ex.slug} ex={ex} />
        ))}
      </div>
    </div>
  );
}

function Examples() {
  return (
    <section id="exempel" className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-subtle">
              Exempel
            </p>
            <h2 className="mt-3 max-w-[16ch] font-display text-[2.15rem] italic md:text-5xl">
              Så kan din sida se ut.
            </h2>
            <p className="mt-4 max-w-xl text-subtle">
              Klickbara sidor, inte skisser. En rörmokare, en salong, en krog –
              samma tydlighet, olika uttryck.
            </p>
          </div>
          <Button asChild variant="outline" className="w-full md:w-auto">
            <Link to="/examples">
              Alla exempel
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {EXAMPLES.map((ex) => (
            <a key={ex.slug} href={`/${ex.slug}`}>
              <div className="relative aspect-[4/3] overflow-hidden bg-paper-2">
                <Pic
                  src={ex.image}
                  alt={`${ex.name} exempelsida`}
                  className="size-full object-cover"
                  width={800}
                  height={600}
                  priority={ex.slug === "vvs" || ex.slug === "elektriker"}
                />
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-subtle">
                {ex.brand}
              </p>
              <h3 className="mt-1 font-display text-2xl italic">{ex.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{ex.blurb}</p>
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
        <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
          Priser
        </p>
        <h2 className="mt-3 font-display text-[2.15rem] md:text-5xl">
          9 900 kr. Sen är sidan din.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Fast startpris för en komplett småföretagshemsida. Inget abonnemang
          som krävs. Inget som låser in dig.
        </p>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col border border-line bg-ink-2 p-7 md:p-10">
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
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-gold" />
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
                className="flex flex-col border border-line bg-ink-2/60 p-7"
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
                    <li key={f} className="flex gap-3">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-gold" />
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
        <div className="mt-10 grid gap-8 border border-line px-6 py-8 md:grid-cols-3 md:px-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
                Ägarskap
              </p>
              <h4 className="mt-2 font-display text-lg">Du äger sidan</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Domän, bilder och innehåll är dina. Vill du flytta sidan senare
                går det – vi låser inte in dig.
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
                Drift och teknik
              </p>
              <h4 className="mt-2 font-display text-lg">Vi sköter det praktiska</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Servrar, certifikat och uppdateringar. Så länge du vill ha vår
                hjälp.
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
                Fast offert
              </p>
              <h4 className="mt-2 font-display text-lg">Inga överraskningar</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Startpriset gäller en vanlig småföretagshemsida. Större önskemål
                får eget pris innan vi börjar.
              </p>
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
      desc: "Telefon, e-post, adress eller organisationsnummer.",
    },
    {
      title: "Bilder om du har",
      desc: "Logotyp och foton från vardagen. Mobilbilder går bra.",
    },
  ];

  return (
    <section id="process" className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-subtle">
            Så här går det till
          </p>
          <h2 className="mt-3 font-display text-[2.15rem] italic md:text-5xl">
            Fem steg. Sen är sidan uppe.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-subtle md:text-lg">
            Du behöver varken kunna koda eller ha allt material klart. Vi sköter
            design, struktur och det tekniska.
          </p>
        </div>

        <ol className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="grid gap-2 py-7 md:grid-cols-[4.5rem_minmax(0,14rem)_1fr] md:items-baseline md:gap-8"
            >
              <span className="font-display text-2xl italic text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl">{step.title}</h3>
              <p className="text-sm leading-relaxed text-subtle md:text-base">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 border-t border-ink/10 pt-12">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-brass">
                Förberedelser
              </p>
              <h3 className="mt-1.5 font-display text-2xl italic md:text-3xl">
                Det enda vi behöver från dig
              </h3>
            </div>
            <p className="text-sm text-subtle">
              Har du inte allt? Vi tar det i samtalet.
            </p>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {essentialInputs.map((item) => (
              <div key={item.title}>
                <h4 className="font-display text-lg">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-subtle">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center">
            <Link
              to="/process"
              className="inline-flex items-center gap-1.5 text-sm text-brass underline decoration-brass/40 underline-offset-4 hover:decoration-brass"
            >
              Hela innehållsguiden
              <ArrowRight className="size-3.5" />
            </Link>
            <Button asChild size="md">
              <SectionLink section="contact">Kontakta oss</SectionLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-canvas py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-16 md:px-8">
        <h2 className="font-display text-[2.15rem] italic md:text-5xl">
          Vanliga frågor
        </h2>
        <div className="divide-y divide-line border-y border-line">
          {FAQ.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg leading-snug md:text-xl">
                  {item.q}
                </span>
                <ChevronDown className="size-5 shrink-0 text-gold transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
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
            Säg vad ni gör. Vi återkommer med pris.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-subtle">
            Ett kort samtal, ingen förpliktelse. Du får alltid ett tydligt
            prisförslag innan något påbörjas.
          </p>

          <p className="mt-8 text-sm text-subtle">
            Svar inom en arbetsdag.
          </p>

          <a
            href={`mailto:${SITE.email}`}
            className="mt-6 inline-block font-display text-xl italic text-ink underline decoration-brass decoration-2 underline-offset-8 transition-colors hover:text-brass md:text-2xl"
          >
            {SITE.email}
          </a>

          <p className="mt-4 text-xs text-subtle">
            Bas i Stockholm. Vi bygger för hela Sverige.
          </p>
        </div>

        <div className="border border-line bg-ink-2 p-7 text-fg md:p-9">
          <p className="font-display text-2xl italic">Berätta vad ni gör</p>
          <p className="mt-2 text-sm text-muted">
            Bransch, ort och vad sidan ska hjälpa till med räcker långt.
          </p>
          <div className="mt-8">
            <ContactForm defaultSubject={defaultSubject} />
          </div>
        </div>
      </div>
    </section>
  );
}
