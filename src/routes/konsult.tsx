import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit, DemoPhoneLink } from "@/components/site/demo-banner";

export const Route = createFileRoute("/konsult")({
  component: ConsultDemo,
  head: () => ({
    meta: [{ title: "Anders Eriksson – exempelsida" }],
  }),
});

const services = [
  {
    n: "01",
    title: "Strategi",
    body: "Riktning för ledningsgrupper som behöver fatta beslut – inte skriva fler presentationer.",
  },
  {
    n: "02",
    title: "Ledarskap",
    body: "Samtal med chefer som tar nästa steg. Tydliga mål, konkret handledning.",
  },
  {
    n: "03",
    title: "Team",
    body: "Ledda arbetsmöten för grupper som kört fast. Ni går därifrån med nästa steg.",
  },
];

const steps = [
  ["1", "Ett samtal", "30 minuter. Ni berättar var det skaver. Jag säger om jag kan hjälpa."],
  ["2", "Ett uppdrag", "Avgränsat i tid och mål. Inga öppna retainer utan slut."],
  ["3", "Ett beslut", "Ni vet vad som kommer först. Sen gör ni det – eller vi tar nästa steg."],
];

const reviews = [
  {
    quote:
      "Han kortade vår ledningsgrupp från tre timmar till femtio minuter. Vi fattade tre beslut samma dag.",
    name: "VD, teknikbolag i Stockholm",
  },
  {
    quote:
      "Inga slides. Bara frågor som tvingade oss att välja. Det var obehagligt och precis vad som behövdes.",
    name: "Förvaltningschef, kommun",
  },
];

function ConsultDemo() {
  return (
    <div className="min-h-dvh bg-[#f7f4ee] text-[#1c1a16]">
      <DemoBanner current="konsult" />
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-5 md:px-8">
          <p className="font-display text-xl italic md:text-2xl">Anders Eriksson</p>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a href="#uppdrag" className="hover:underline">
              Uppdrag
            </a>
            <a href="#sa" className="hover:underline">
              Så går det till
            </a>
            <a href="#kontakt" className="hover:underline">
              Kontakt
            </a>
          </nav>
          <a
            href="#kontakt"
            className="inline-flex h-11 shrink-0 items-center rounded-sm bg-[#1c1a16] px-4 text-sm text-[#f7f4ee]"
          >
            Boka samtal
          </a>
        </div>
      </header>

      <section className="grid md:grid-cols-2 md:items-stretch">
        <div className="flex flex-col justify-center px-5 py-12 md:px-10 lg:px-16">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#5c564c]">
            Strategi och ledarskap · Stockholm
          </p>
          <h1 className="mt-6 max-w-[13ch] font-display text-[2.7rem] italic leading-[0.96] md:text-6xl lg:text-7xl">
            Ett samtal som sätter riktningen.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#5c564c]">
            Jag hjälper ledare att välja vad som faktiskt ska göras. Tjugo år i
            både näringsliv och offentlig sektor.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-[#1c1a16] px-5 text-sm text-[#f7f4ee]"
            >
              Boka 30 minuter
            </a>
            <a
              href="#uppdrag"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-[#1c1a16] px-5 text-sm"
            >
              Vad jag gör
            </a>
          </div>
        </div>
        <div className="relative min-h-[48vh] md:min-h-[78vh]">
          <Pic
            src="/images/konsult.jpg?v=5"
            alt="Arbetsbord, samtal pågår"
            className="absolute inset-0 size-full object-cover"
            width={1400}
            height={1050}
            priority
          />
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3 md:px-8">
          {[
            ["20 år", "med ledare"],
            ["Stockholm", "hela landet"],
            ["30 min", "första samtalet"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-display text-3xl italic md:text-4xl">{k}</p>
              <p className="mt-1 text-sm text-[#5c564c]">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#2c2924] px-5 py-20 text-[#f7f4ee] md:py-28">
        <blockquote className="mx-auto max-w-4xl font-display text-3xl italic leading-[1.15] md:text-5xl">
          «De flesta vet vad som är fel. De behöver hjälp att välja vad som
          kommer först.»
        </blockquote>
      </section>

      <section id="uppdrag" className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl italic md:text-4xl">Tre typer av uppdrag.</h2>
          <div className="mt-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="grid gap-2 border-t border-black/10 py-8 md:grid-cols-[5rem_1fr_2fr] md:items-baseline"
              >
                <p className="text-[11px] tracking-[0.2em] text-[#5c564c]">{s.n}</p>
                <h3 className="font-display text-3xl italic">{s.title}</h3>
                <p className="leading-relaxed text-[#5c564c]">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sa" className="border-t border-black/10 bg-white px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl italic md:text-4xl">Så går det till.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map(([n, t, b]) => (
              <article key={n} className="bg-[#f7f4ee] p-6 md:p-8">
                <p className="font-display text-3xl italic text-[#5c564c]">{n}</p>
                <h3 className="mt-3 font-display text-2xl italic">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5c564c]">{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-white p-6 md:p-10">
              <blockquote className="font-display text-2xl italic leading-snug">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-[#5c564c]">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="kontakt" className="px-5 pb-16 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-0 bg-[#2c2924] text-[#f7f4ee] lg:grid-cols-2">
          <div className="px-6 py-12 md:px-12 md:py-16">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#c9c2b6]">
              Kostnadsfritt
            </p>
            <h2 className="mt-3 font-display text-3xl italic md:text-5xl">
              Ett första samtal, 30 minuter.
            </h2>
            <p className="mt-4 max-w-md text-sm text-[#c9c2b6]">
              Distans eller i Stockholm. Ingen karta – jag kommer till er, eller
              så tar vi det i ett samtal.
            </p>
            <DemoPhoneLink
              tel="070-123 45 67"
              className="mt-10 block font-display text-4xl italic md:text-5xl"
            >
              070-123 45 67
            </DemoPhoneLink>
            <p className="mt-3 text-sm text-[#c9c2b6]">anders@erikssonstrategi.se</p>
          </div>
          <form
            className="border-t border-white/10 px-6 py-12 md:px-12 md:py-16 lg:border-l lg:border-t-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="block text-[11px] uppercase tracking-[0.16em] text-[#c9c2b6]">
              Namn
              <input className="mt-2 h-12 w-full border border-white/15 bg-transparent px-3 text-sm text-[#f7f4ee]" />
            </label>
            <label className="mt-4 block text-[11px] uppercase tracking-[0.16em] text-[#c9c2b6]">
              Bolag eller verksamhet
              <input className="mt-2 h-12 w-full border border-white/15 bg-transparent px-3 text-sm text-[#f7f4ee]" />
            </label>
            <label className="mt-4 block text-[11px] uppercase tracking-[0.16em] text-[#c9c2b6]">
              E-post
              <input
                type="email"
                className="mt-2 h-12 w-full border border-white/15 bg-transparent px-3 text-sm text-[#f7f4ee]"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex h-12 w-full items-center justify-center bg-[#f7f4ee] text-sm text-[#1c1a16]"
            >
              Boka samtal
            </button>
            <p className="mt-3 text-center text-xs text-[#c9c2b6]">
              Exempel – inget skickas här.
            </p>
          </form>
        </div>
      </section>
      <DemoExit />
    </div>
  );
}
