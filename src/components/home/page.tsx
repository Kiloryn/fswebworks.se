import { Link } from "@tanstack/react-router";
import { useState } from "react";
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
import { Hero } from "@/components/home/hero";
import { Pic } from "@/components/site/pic";
import { Reveal } from "@/components/site/reveal";
import { SectionLink } from "@/components/site/section-link";

export function HomePage({ defaultSubject = "" }: { defaultSubject?: string }) {
  return (
    <>
      <Hero />
      <Services />
      <Examples />
      <Process />
      <Faq />
      <Contact defaultSubject={defaultSubject} />
    </>
  );
}

function Examples() {
  return (
    <section id="exempel" className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal variant="wipe">
          <h2 className="font-display text-[2.15rem] md:text-5xl">
            Så kan din sida se ut.
          </h2>
        </Reveal>
        <p className="mt-4 max-w-xl text-subtle">
          Klickbara sidor, inte skisser. Öppna en rad för en förhand.
        </p>
        <ul className="mt-14">
          {EXAMPLES.map((ex) => (
            <ExampleRow key={ex.slug} ex={ex} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ExampleRow({ ex }: { ex: (typeof EXAMPLES)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-t border-ink/10 last:border-b">
      <details
        name="exempel-register"
        className="group"
        onToggle={(e) => setOpen(e.currentTarget.open)}
      >
        <summary className="flex min-h-16 min-w-0 cursor-pointer list-none items-baseline justify-between gap-4 py-5 marker:content-none [&::-webkit-details-marker]:hidden">
          <span className="min-w-0 font-display text-[1.65rem] leading-tight group-open:text-brass md:text-5xl">
            {ex.brand}
          </span>
          <span className="shrink-0 text-sm text-subtle">{ex.short}</span>
        </summary>
        <div className="grid gap-6 pb-8 md:grid-cols-[minmax(0,18rem)_1fr] md:items-end">
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden bg-ink-3">
            {open ? (
              <Pic
                src={ex.image}
                alt={`${ex.brand}, exempelsida för ${ex.short}`}
                className="size-full object-cover"
                width={640}
                height={480}
              />
            ) : null}
          </div>
          <div className="min-w-0">
            <p className="max-w-md text-sm leading-relaxed text-subtle md:text-base">
              {ex.blurb}
            </p>
            <a
              href={`/${ex.slug}`}
              className="mt-5 inline-flex h-11 items-center whitespace-nowrap text-sm font-medium text-ink underline decoration-brass underline-offset-4 hover:decoration-ink"
            >
              Öppna {ex.brand}
            </a>
          </div>
        </div>
      </details>
    </li>
  );
}

function Services() {
  const main = SERVICES.find((s) => s.featured);
  const rest = SERVICES.filter((s) => !s.featured);
  if (!main) return null;

  return (
    <section id="priser" className="bg-canvas py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal variant="wipe">
          <h2 className="max-w-3xl font-display text-[2.15rem] leading-[1.08] md:text-5xl">
            Från 9 900 kr. Tydliga priser. Inga överraskningar.
          </h2>
        </Reveal>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Hemsida från{" "}
          <span className="whitespace-nowrap">9 900 kr</span> och webbdrift{" "}
          <span className="whitespace-nowrap">1 990 kr</span>/år. Övrig hjälp
          köper du bara när du behöver den.
        </p>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:items-start md:gap-8">
          <Reveal>
          <article className="bg-paper px-7 py-10 text-ink md:px-12 md:py-14">
            <p className="font-display text-3xl md:text-4xl">Offert</p>
            <p className="mt-6 text-sm text-subtle">Inga överraskningar.</p>
            <h3 className="mt-8 font-display text-[2.15rem] leading-tight [overflow-wrap:normal] md:text-5xl">
              {main.name} från{" "}
              <span className="whitespace-nowrap tabular-nums">{main.price}</span>
            </h3>
            <p className="mt-2 text-sm text-subtle">exkl. moms</p>
            <p className="mt-5 text-sm leading-relaxed text-subtle">
              {main.description}
            </p>
            <ul className="mt-8 space-y-2 text-sm">
              {INCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-subtle">
              <span className="font-medium text-ink">Din hemsida är din.</span>{" "}
              Domän, bilder och innehåll är era. Vill ni flytta sidan senare går
              det.
            </p>
            <Button asChild className="mt-8">
              <SectionLink section="contact" search={{ amne: main.subject }}>
                {main.cta}
              </SectionLink>
            </Button>
          </article>
          </Reveal>

          <Reveal delay={90}>
          <div className="bg-paper px-7 py-10 text-ink md:px-12 md:py-14">
            <div className="space-y-12">
              {rest.map((s) => (
                <div key={s.id}>
                  <h3 className="font-display text-2xl md:text-3xl">{s.name}</h3>
                  {"kicker" in s && s.kicker ? (
                    <p className="mt-2 text-sm text-subtle">{s.kicker}</p>
                  ) : null}
                  {"rates" in s && s.rates ? (
                    <ul className="mt-4 space-y-1 font-display text-lg">
                      {s.rates.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  ) : "price" in s && s.price ? (
                    <p className="mt-3 font-display text-xl tabular-nums">
                      {s.price}
                    </p>
                  ) : null}
                  <p className="mt-1 text-sm text-subtle">{s.suffix}</p>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-subtle md:text-base">
                    {s.description}
                  </p>
                  {"note" in s && s.note ? (
                    <p className="mt-3 max-w-md text-sm text-subtle">{s.note}</p>
                  ) : null}
                  {"cta" in s && s.cta ? (
                    <Button asChild className="mt-5">
                      <SectionLink
                        section="contact"
                        search={{ amne: s.subject }}
                      >
                        {s.cta}
                      </SectionLink>
                    </Button>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-canvas py-20 text-fg md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl">
          <Reveal variant="wipe">
            <h2 className="font-display text-[2.15rem] md:text-5xl">
              Fem steg. Sen är sidan uppe.
            </h2>
          </Reveal>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Du behöver varken kunna koda eller ha allt material klart.
          </p>

          <ol className="mt-12">
            {STEPS.map((step, i) => (
              <li key={step.title} className="border-t border-line py-6">
                <Reveal>
                  <p className="text-sm text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-display text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                    {step.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          <p className="border-t border-line pt-6 text-sm text-muted">
            Logotyp, foton och tre rader om vad ni gör räcker för att börja.
          </p>
          <p className="mt-3">
            <Link
              to="/process"
              className="inline-flex min-h-11 items-center text-sm font-medium text-fg underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
            >
              Öppna innehållsguiden
              <span aria-hidden className="ms-2">
                →
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-paper py-16 text-ink md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-16 md:px-8">
        <Reveal variant="wipe">
          <h2 className="font-display text-[2.15rem] md:text-5xl">
            Vanliga frågor
          </h2>
        </Reveal>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {FAQ.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="min-w-0 font-display text-lg leading-snug md:text-xl">
                  {item.q}
                </span>
                <span className="shrink-0 text-subtle group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden shrink-0 text-subtle group-open:inline" aria-hidden>
                  −
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-sm leading-relaxed text-subtle">
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
    <section id="contact" className="bg-canvas py-20 text-fg md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.1fr] md:gap-16 md:px-8">
        <div>
          <Reveal variant="wipe">
            <h2 className="font-display text-[2.15rem] leading-[1.08] md:text-5xl">
              Vad kan vi hjälpa dig med?
            </h2>
          </Reveal>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Berätta vad du behöver. Vi hjälper dig vidare.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Oavsett om du funderar på en ny hemsida, vill göra en ändring eller
            bara har en fråga är du välkommen att höra av dig.
          </p>

          <a
            href={`mailto:${SITE.email}`}
            className="mt-8 inline-flex min-h-11 items-center text-xl text-fg underline decoration-gold decoration-2 underline-offset-8 hover:text-gold md:text-2xl"
          >
            {SITE.email}
          </a>

          <p className="mt-4 text-xs text-muted">
            Bas i Stockholm. Vi bygger för hela Sverige.
          </p>
        </div>

        <div className="md:border-l md:border-line md:pl-12">
          <ContactForm defaultSubject={defaultSubject} />
        </div>
      </div>
    </section>
  );
}
