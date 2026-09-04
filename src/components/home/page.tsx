import { Link } from "@tanstack/react-router";
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
    <section id="exempel" className="bg-canvas py-20 text-fg md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="font-display text-[2.15rem] md:text-5xl">
          Så kan din sida se ut.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Klickbara sidor, inte skisser. Öppna en rad för en förhand.
        </p>
        <ul className="mt-14">
          {EXAMPLES.map((ex) => (
            <li key={ex.slug} className="border-t border-line last:border-b">
              <details name="exempel-register" className="group">
                <summary className="flex min-h-16 min-w-0 cursor-pointer list-none items-baseline justify-between gap-4 py-5 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0 font-display text-[1.65rem] leading-tight group-open:text-gold md:text-5xl">
                    {ex.brand}
                  </span>
                  <span className="shrink-0 text-sm text-muted">{ex.short}</span>
                </summary>
                <div className="grid gap-6 pb-8 md:grid-cols-[minmax(0,18rem)_1fr] md:items-end">
                  <div className="relative aspect-[4/3] min-w-0 overflow-hidden bg-ink-3">
                    <Pic
                      src={ex.image}
                      alt={`${ex.brand}, exempelsida för ${ex.short}`}
                      className="size-full object-cover"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
                      {ex.blurb}
                    </p>
                    <a
                      href={`/${ex.slug}`}
                      className="mt-5 inline-flex h-11 items-center whitespace-nowrap text-sm text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
                    >
                      Öppna {ex.brand}
                    </a>
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  const main = SERVICES.find((s) => s.featured);
  const rest = SERVICES.filter((s) => !s.featured);
  if (!main) return null;

  return (
    <section id="priser" className="bg-canvas py-16 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <article className="bg-paper px-7 py-10 text-ink md:px-12 md:py-14">
          <p className="font-display text-3xl md:text-4xl">Offert</p>
          <p className="mt-6 text-sm text-subtle">
            Gäller vanliga småföretagshemsidor i Sverige. Ingen bindning.
          </p>
          <h2 className="mt-8 font-display text-[2.15rem] leading-tight md:text-5xl">
            {main.name}
          </h2>
          <p className="mt-3 font-display text-4xl tabular-nums">{main.price}</p>
          <p className="mt-1 text-sm text-subtle">{main.suffix}</p>
          <p className="mt-5 text-sm leading-relaxed text-subtle">
            {main.description}
          </p>
          <ul className="mt-8 space-y-2 text-sm">
            {INCLUDED.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-subtle">
            Domän, bilder och innehåll är era. Vill ni flytta sidan senare går
            det.
          </p>
          <Button asChild className="mt-8">
            <SectionLink section="contact" search={{ amne: main.subject }}>
              {main.cta}
            </SectionLink>
          </Button>
        </article>

        <p className="mt-8 text-sm leading-relaxed text-muted">
          {rest.map((s, i) => (
            <span key={s.id}>
              {i > 0 ? <span className="text-fg/30"> · </span> : null}
              <SectionLink
                section="contact"
                search={{ amne: s.subject }}
                className="hover:text-gold"
              >
                {s.name} {s.price}
                {s.id === "service" ? "/mån" : "/h"}
              </SectionLink>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-paper py-16 text-ink md:py-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="font-display text-[2.15rem] md:text-5xl">
          Fem steg. Sen är sidan uppe.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-subtle">
          Du behöver varken kunna koda eller ha allt material klart.
        </p>

        <ol className="mt-12">
          {STEPS.map((step, i) => (
            <li key={step.title} className="border-t border-ink/10 py-6">
              <p className="text-sm text-subtle">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle md:text-base">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="border-t border-ink/10 pt-6 text-sm text-subtle">
          Logotyp, foton och tre rader om vad ni gör räcker för att börja.
        </p>
        <p className="mt-3">
          <Link
            to="/process"
            className="inline-flex min-h-11 items-center text-sm font-medium text-ink underline decoration-brass underline-offset-4 hover:decoration-ink"
          >
            Öppna innehållsguiden
            <span aria-hidden className="ms-2">
              →
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-canvas py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-16 md:px-8">
        <h2 className="font-display text-[2.15rem] md:text-5xl">
          Vanliga frågor
        </h2>
        <div className="divide-y divide-line border-y border-line">
          {FAQ.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="min-w-0 font-display text-lg leading-snug md:text-xl">
                  {item.q}
                </span>
                <span className="shrink-0 text-muted group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden shrink-0 text-muted group-open:inline" aria-hidden>
                  −
                </span>
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
    <section id="contact" className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.1fr] md:gap-16 md:px-8">
        <div>
          <h2 className="font-display text-[2.15rem] leading-[1.08] md:text-5xl">
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
            className="mt-6 inline-block text-xl text-ink underline decoration-brass decoration-2 underline-offset-8 hover:text-brass md:text-2xl"
          >
            {SITE.email}
          </a>

          <p className="mt-4 text-xs text-subtle">
            Bas i Stockholm. Vi bygger för hela Sverige.
          </p>
        </div>

        <div className="md:border-l md:border-ink/10 md:pl-12">
          <ContactForm defaultSubject={defaultSubject} onPaper />
        </div>
      </div>
    </section>
  );
}
