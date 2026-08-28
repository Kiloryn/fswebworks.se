import { createFileRoute } from "@tanstack/react-router";
import { DemoBanner, DemoExit } from "@/components/site/demo-banner";

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

function ConsultDemo() {
  return (
    <div className="min-h-dvh bg-[#f7f4ee] text-[#1c1a16]">
      <DemoBanner current="konsult" />
      <header className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-6 md:px-8">
        <p className="font-display text-xl italic md:text-2xl">Anders Eriksson</p>
        <a
          href="#kontakt"
          className="inline-flex h-11 shrink-0 items-center rounded-sm bg-[#1c1a16] px-4 text-sm text-[#f7f4ee]"
        >
          Boka samtal
        </a>
      </header>
      <section className="mx-auto max-w-5xl px-5 pb-8 pt-6 md:px-8 md:pt-12">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#5c564c]">
          Strategi och ledarskap · Stockholm
        </p>
        <h1 className="mt-6 max-w-[13ch] font-display text-[2.8rem] italic leading-[0.96] md:text-7xl">
          Ett samtal som sätter riktningen.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#5c564c]">
          Jag hjälper ledare att välja vad som faktiskt ska göras. Tjugo år i
          både näringsliv och offentlig sektor.
        </p>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="grid grid-cols-3 gap-4 border-y border-black/10 py-10">
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
      <section className="bg-[#1c1a16] px-5 py-20 text-[#f7f4ee] md:py-28">
        <blockquote className="mx-auto max-w-4xl font-display text-3xl italic leading-[1.15] md:text-5xl">
          «De flesta vet vad som är fel. De behöver hjälp att välja vad som
          kommer först.»
        </blockquote>
      </section>
      <section className="mx-auto max-w-5xl space-y-0 px-5 py-16 md:px-8">
        {services.map((s) => (
          <article
            key={s.title}
            className="grid gap-2 border-t border-black/10 py-8 md:grid-cols-[5rem_1fr_2fr] md:items-baseline"
          >
            <p className="text-[11px] tracking-[0.2em] text-[#5c564c]">{s.n}</p>
            <h2 className="font-display text-3xl italic">{s.title}</h2>
            <p className="leading-relaxed text-[#5c564c]">{s.body}</p>
          </article>
        ))}
      </section>
      <section id="kontakt" className="px-5 pb-16 md:px-8">
        <div className="mx-auto max-w-5xl rounded-none bg-[#1c1a16] px-6 py-12 text-[#f7f4ee] md:px-12 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#c9c2b6]">
            Kostnadsfritt
          </p>
          <h2 className="mt-3 font-display text-3xl italic md:text-5xl">
            Ett första samtal, 30 minuter.
          </h2>
          <a
            href="tel:0701234567"
            className="mt-10 block font-display text-4xl italic md:text-5xl"
          >
            070-123 45 67
          </a>
          <p className="mt-3 text-sm text-[#c9c2b6]">anders@erikssonstrategi.se</p>
        </div>
      </section>
      <DemoExit />
    </div>
  );
}
