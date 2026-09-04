import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit, DemoPhoneLink } from "@/components/site/demo-banner";

export const Route = createFileRoute("/konsult")({
  component: ConsultDemo,
  head: () => ({ meta: [{ title: "Anders Eriksson – exempelsida" }] }),
});

function ConsultDemo() {
  return (
    <div className="demo-konsult min-h-svh bg-[#f7f4ee] text-[#1c1a16]">
      <DemoBanner current="konsult" />
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 md:px-8">
          <p className="font-display text-xl">Anders Eriksson</p>
          <a href="#kontakt" className="inline-flex h-11 items-center bg-[#1c1a16] px-4 text-sm text-[#f7f4ee]">
            Boka 30 minuter
          </a>
        </div>
      </header>

      <section className="grid md:grid-cols-2 md:items-stretch">
        <div className="flex flex-col justify-center px-5 py-16 md:px-12">
          <h1 className="max-w-[13ch] font-display text-5xl leading-[1.04] md:text-6xl">
            Ett samtal som sätter riktningen.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#5c564c]">
            Jag hjälper ledare att välja vad som faktiskt ska göras. Tjugo år i både näringsliv och offentlig sektor.
          </p>
          <a href="#kontakt" className="mt-8 inline-flex h-12 w-fit items-center bg-[#1c1a16] px-5 text-sm text-[#f7f4ee]">
            Boka 30 minuter
          </a>
        </div>
        <div className="relative min-h-[48vh] md:min-h-[78vh]">
          <Pic src="/images/konsult.jpg?v=5" alt="Arbetsbord, samtal pågår" className="absolute inset-0 size-full object-cover" width={1400} height={1050} priority />
        </div>
      </section>

      <section className="bg-[#2c2924] px-5 py-20 text-[#f7f4ee] md:px-8">
        <blockquote className="mx-auto max-w-4xl font-display text-3xl leading-[1.15] md:text-5xl">
          De flesta vet vad som är fel. De behöver hjälp att välja vad som kommer först.
        </blockquote>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8">
        <h2 className="font-display text-4xl">Tre typer av uppdrag</h2>
        <div className="mt-12 space-y-10">
          {[
            ["Strategi", "Riktning för ledningsgrupper som behöver fatta beslut – inte skriva fler presentationer."],
            ["Ledarskap", "Samtal med chefer som tar nästa steg. Tydliga mål, konkret handledning."],
            ["Team", "Ledda arbetsmöten för grupper som kört fast. Ni går därifrån med nästa steg."],
          ].map(([t, b]) => (
            <article key={t} className="border-t border-black/10 pt-6 md:grid md:grid-cols-[12rem_1fr] md:gap-8">
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="mt-2 leading-relaxed text-[#5c564c] md:mt-0">{b}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-5 py-16 md:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm text-[#5c564c]">Så kan omdömen se ut</p>
          <blockquote className="mt-4 max-w-2xl font-display text-3xl leading-snug">
            Han kortade vår ledningsgrupp från tre timmar till femtio minuter. Vi fattade tre beslut samma dag.
          </blockquote>
          <p className="mt-4 text-sm text-[#5c564c]">VD, teknikbolag i Stockholm</p>
        </div>
      </section>

      <section id="kontakt" className="mx-auto grid max-w-5xl gap-0 px-5 py-16 md:px-8 lg:grid-cols-2">
        <div className="bg-[#2c2924] px-6 py-12 text-[#f7f4ee] md:px-10">
          <h2 className="font-display text-4xl">Ett första samtal, 30 minuter.</h2>
          <p className="mt-4 text-sm text-[#c9c2b6]">Distans eller i Stockholm. Jag kommer till er, eller så tar vi det i ett samtal.</p>
          <DemoPhoneLink tel="070-123 45 67" className="mt-8 block font-display text-4xl">
            070-123 45 67
          </DemoPhoneLink>
          <p className="mt-3 text-sm text-[#c9c2b6]">anders@erikssonstrategi.se</p>
        </div>
        <form className="border border-black/10 px-6 py-12 md:px-10" onSubmit={(e) => e.preventDefault()}>
          <label className="block text-sm">
            Namn
            <input className="mt-1 h-12 w-full border border-black/15 px-3" />
          </label>
          <label className="mt-4 block text-sm">
            Bolag
            <input className="mt-1 h-12 w-full border border-black/15 px-3" />
          </label>
          <label className="mt-4 block text-sm">
            E-post
            <input type="email" className="mt-1 h-12 w-full border border-black/15 px-3" />
          </label>
          <button type="submit" className="mt-6 inline-flex h-12 w-full items-center justify-center bg-[#1c1a16] text-sm text-[#f7f4ee]">
            Boka samtal
          </button>
          <p className="mt-3 text-center text-xs text-[#5c564c]">Exempel — inget skickas här.</p>
        </form>
      </section>
      <DemoExit />
    </div>
  );
}
