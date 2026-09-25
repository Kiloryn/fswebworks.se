import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit, DemoPhoneLink } from "@/components/site/demo-banner";

export const Route = createFileRoute("/konsult")({
  component: ConsultDemo,
  head: () => ({ meta: [{ title: "Anders Eriksson – exempelsida" }] }),
});

const assignments = [
  {
    title: "Strategi",
    body: "Ledningsgrupper som fastnat i diskussionerna får hjälp att fatta beslut.",
    price: "från 4 500 kr per tillfälle",
  },
  {
    title: "Ledarskap",
    body: "Samtal med chefer som tar nästa steg. Tydliga mål, konkret handledning.",
    price: "från 3 800 kr per månad",
  },
  {
    title: "Team",
    body: "Ledda arbetsmöten för grupper som kört fast. Ni går därifrån med nästa steg.",
    price: "enligt offert",
  },
];

const steps = [
  { title: "Du bokar en tid", body: "Trettio minuter, telefon eller video. Du får en bekräftelse direkt." },
  { title: "Vi pratar", body: "Du berättar kort om läget. Jag ställer frågor och lyssnar mer än jag talar." },
  { title: "Du får nästa steg skriftligt", body: "En halv sida, samma dag. Sen bestämmer du om vi fortsätter." },
];

function ConsultDemo() {
  return (
    <div className="demo-konsult min-h-svh bg-[#f7f4ee] text-[#1c1a16]">
      <DemoBanner current="konsult" />
      <header className="border-b border-[#1c1a16]/10 bg-[#f7f4ee]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-5 md:px-8">
          <p className="font-display text-2xl">Anders Eriksson</p>
          <a
            href="#kontakt"
            className="inline-flex h-11 items-center bg-[#1c1a16] px-5 text-sm text-[#f7f4ee]"
          >
            Boka 30 minuter
          </a>
        </div>
      </header>

      <section className="grid md:grid-cols-2 md:items-stretch">
        <div className="flex flex-col justify-center px-5 py-16 md:px-12 lg:px-16">
          <p className="text-sm text-[#5c564c]">Strategi och ledarskap · Stockholm</p>
          <h1 className="mt-4 max-w-[14ch] font-display text-5xl leading-[1.02] md:text-7xl">
            Ett samtal som sätter riktningen.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#5c564c]">
            Jag hjälper ledare att välja vad som faktiskt ska göras. Inte fler presentationer. Ett
            första samtal, trettio minuter, på distans eller i Stockholm.
          </p>
          <p className="mt-5 max-w-md leading-relaxed text-[#5c564c]">
            Jag har tjugo år i näringsliv och offentlig sektor. Efter samtalet vet ni vilket steg som
            kommer först.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="inline-flex h-12 items-center bg-[#1c1a16] px-6 text-sm text-[#f7f4ee]"
            >
              Boka 30 minuter
            </a>
            <a
              href="#uppdrag"
              className="inline-flex h-12 items-center border border-[#1c1a16] px-6 text-sm"
            >
              Se uppdragstyper
            </a>
          </div>
          <p className="mt-8 text-sm text-[#5c564c]">Nästa lediga tid · torsdag 09.00 · telefon</p>
        </div>
        <div className="relative min-h-[56vh] md:min-h-[82vh]">
          <Pic
            src="/images/konsult.jpg?v=6"
            alt="Porträtt av Anders Eriksson i sitt kontor"
            className="absolute inset-0 size-full object-cover"
            width={1200}
            height={1600}
            priority
          />
        </div>
      </section>

      <section className="bg-[#ece5d8] px-5 py-20 md:px-8">
        <blockquote className="mx-auto max-w-3xl font-display text-3xl leading-[1.15] md:text-5xl">
          De flesta vet vad som är fel. De behöver hjälp att välja vad som kommer först.
        </blockquote>
      </section>

      <section id="uppdrag" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className="font-display text-4xl">Tre typer av uppdrag</h2>
        <p className="mt-3 max-w-xl text-[#5c564c]">
          Alla börjar med samma trettio minuter. Sen väljer du själv om det räcker.
        </p>
        <dl className="mt-12 border-y border-[#1c1a16]/10">
          {assignments.map((a) => (
            <div
              key={a.title}
              className="grid gap-2 border-b border-[#1c1a16]/10 py-6 last:border-b-0 md:grid-cols-[12rem_1fr_auto] md:items-baseline"
            >
              <dt className="font-display text-2xl">{a.title}</dt>
              <dd className="text-[#5c564c]">{a.body}</dd>
              <dd className="shrink-0 text-sm tabular-nums text-[#5c564c]">{a.price}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <h2 className="font-display text-4xl">Så går samtalet till</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-[#1c1a16]/15 pt-6">
              <span className="font-display text-5xl text-[#1c1a16]/25" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-[#5c564c]">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-[#1c1a16]/10 bg-[#f7f4ee] px-5 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-[#5c564c]">Så kan omdömen se ut</p>
          <blockquote className="mt-4 max-w-2xl font-display text-3xl leading-snug">
            Han kortade vår ledningsgrupp från tre timmar till femtio minuter. Vi fattade tre beslut
            samma dag.
          </blockquote>
          <p className="mt-4 text-sm text-[#5c564c]">VD, teknikbolag i Stockholm</p>
        </div>
      </section>

      <section id="kontakt" className="mx-auto grid max-w-6xl gap-0 px-5 py-16 md:px-8 lg:grid-cols-2">
        <div className="bg-[#2c2924] px-6 py-12 text-[#f7f4ee] md:px-10">
          <h2 className="font-display text-4xl">Ett första samtal, 30 minuter.</h2>
          <p className="mt-4 text-sm text-[#c9c2b6]">På distans eller hemma hos er i Stockholm.</p>
          <DemoPhoneLink tel="070-123 45 67" className="mt-8 block font-display text-4xl">
            070-123 45 67
          </DemoPhoneLink>
          <p className="mt-3 text-sm text-[#c9c2b6]">anders@erikssonstrategi.se</p>
        </div>
        <form
          className="border border-[#1c1a16]/10 bg-[#f7f4ee] px-6 py-12 md:px-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="font-display text-2xl">Boka en tid</p>
          <label className="mt-6 block text-sm">
            Namn
            <input className="mt-1 h-12 w-full border border-[#1c1a16]/15 bg-[#f7f4ee] px-3" />
          </label>
          <label className="mt-4 block text-sm">
            Bolag
            <input className="mt-1 h-12 w-full border border-[#1c1a16]/15 bg-[#f7f4ee] px-3" />
          </label>
          <label className="mt-4 block text-sm">
            E-post
            <input type="email" className="mt-1 h-12 w-full border border-[#1c1a16]/15 bg-[#f7f4ee] px-3" />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex h-12 w-full items-center justify-center bg-[#1c1a16] text-sm text-[#f7f4ee]"
          >
            Boka samtal
          </button>
          <p className="mt-3 text-center text-xs text-[#5c564c]">Exempel — inget skickas här.</p>
        </form>
      </section>
      <DemoExit />
    </div>
  );
}
