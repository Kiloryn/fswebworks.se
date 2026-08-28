import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  EXAMPLES,
  FAQ,
  INCLUDED,
  SERVICES,
  STEPS,
} from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/contact-form";
import { Reveal } from "@/components/site/reveal";
import { Pic } from "@/components/site/pic";
import { Hero } from "@/components/home/hero";
import { SectionLink } from "@/components/site/section-link";
import { cn } from "@/lib/utils";

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

function Marquee() {
  const items = [...EXAMPLES, ...EXAMPLES];
  return (
    <div className="overflow-hidden border-y border-line bg-ink-2 py-4">
      <div className="marquee-track flex w-max gap-10 pr-10">
        {items.map((ex, i) => (
          <a
            key={`${ex.slug}-${i}`}
            href={`/${ex.slug}`}
            className="flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-muted hover:text-gold"
          >
            <span className="text-gold">/</span>
            {ex.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function Examples() {
  return (
    <section id="exempel" className="scroll-mt-24 bg-paper py-24 text-ink md:py-32">
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
              Klicka in på en bransch. Det är enkla sidor – men de ska få en
              kund att tänka: så här skulle vi kunna synas.
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
              className="group overflow-hidden rounded-xl bg-paper-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Pic
                  src={ex.image}
                  alt={`${ex.name} exempelsida`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={800}
                  height={600}
                  priority={ex.slug === "vvs" || ex.slug === "elektriker"}
                />
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
    <section id="priser" className="scroll-mt-24 bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
            Priser
          </p>
          <h2 className="mt-3 font-display text-[2.15rem] italic md:text-5xl">
            Tydliga priser. Inga överraskningar.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Vi börjar alltid med ett samtal – helt kostnadsfritt. Du äger alltid
            din hemsida och väljer själv om du vill ha fortsatt hjälp.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col rounded-xl bg-ink-2 p-7 shadow-card md:p-8">
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
                className="flex flex-col rounded-xl border border-line bg-ink-2/60 p-7"
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
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-8">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="text-[11px] uppercase tracking-[0.24em] text-subtle">
            Så här går det till
          </p>
          <h2 className="mt-3 font-display text-[2.15rem] italic md:text-5xl">
            Fem steg. Inget krångel.
          </h2>
          <p className="mt-4 max-w-sm text-subtle">
            Att komma igång med en ny hemsida behöver inte vara krångligt. Vi
            håller processen enkel och tydlig.
          </p>
          <Button asChild variant="outline" className="mt-8 w-full md:w-auto">
            <Link to="/process">
              Öppna innehållsguiden
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <ol className="space-y-3">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="rounded-xl border border-ink/10 bg-paper-2 p-6 md:p-7"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-3xl italic text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-subtle">
                    {step.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="text-center font-display text-[2.15rem] italic md:text-5xl">
          Vanliga frågor
        </h2>
        <ul className="mt-12 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="rounded-xl border border-line bg-ink-2">
                <button
                  type="button"
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-display text-base leading-snug md:text-xl">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-gold transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                {isOpen ? (
                  <p className="border-t border-line px-6 py-5 text-sm leading-relaxed text-muted">
                    {item.a}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Contact({ defaultSubject }: { defaultSubject: string }) {
  return (
    <section id="contact" className="scroll-mt-24 bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.05fr] md:px-8">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-subtle">
            Kontakt
          </p>
          <h2 className="mt-3 font-display text-[2.15rem] italic md:text-5xl">
            Osäker på vad du behöver? Hör av dig.
          </h2>
          <p className="mt-4 max-w-sm text-subtle">
            Vi pratar igenom det – helt utan förpliktelser. Bas i Stockholm,
            jobb i hela Sverige.
          </p>
          <a
            href="mailto:fredrik@fswebworks.se"
            className="mt-8 inline-block break-all font-display text-xl italic text-ink underline decoration-gold decoration-2 underline-offset-8 md:text-2xl"
          >
            fredrik@fswebworks.se
          </a>
        </div>
        <div className="rounded-xl bg-ink p-6 text-fg md:p-8">
          <ContactForm defaultSubject={defaultSubject} />
        </div>
      </div>
    </section>
  );
}
