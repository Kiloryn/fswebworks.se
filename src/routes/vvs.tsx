import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit } from "@/components/site/demo-banner";

export const Route = createFileRoute("/vvs")({
  component: VvsDemo,
  head: () => ({
    meta: [{ title: "Din Rörmokare i Stockholm – exempelsida" }],
  }),
});

const services = [
  {
    n: "01",
    title: "Akut VVS",
    body: "Läckage, stopp eller trasig värmepanna. Vi åker ut så snabbt vi kan – dygnet runt.",
  },
  {
    n: "02",
    title: "Reparation",
    body: "Rör, kranar, toaletter och varmvattenberedare. Tydligt pris innan vi sätter igång.",
  },
  {
    n: "03",
    title: "Stopp i avlopp",
    body: "Rensning av avlopp i kök, badrum och fastighet.",
  },
  {
    n: "04",
    title: "Badrum och kök",
    body: "Nyinstallation och renovering. Kostnadsfri offert på plats.",
  },
];

function VvsDemo() {
  return (
    <div className="min-h-dvh bg-[#0e1418] text-[#e8efe9]">
      <DemoBanner current="vvs" />
      <a
        href="tel:0812345678"
        className="flex items-center justify-center gap-2 bg-[#c45c3a] px-4 py-3 text-center text-[13px] font-medium text-white"
      >
        <Phone className="size-4" />
        <span className="sm:hidden">Akut? 08-123 456 78</span>
        <span className="hidden sm:inline">
          Akut? Ring 08-123 456 78 — jour dygnet runt
        </span>
      </a>
      <section className="relative isolate">
        <Pic
          src="/images/vvs.jpg?v=6"
          alt="Rörmokare drar åt kopparrör"
          className="h-[70dvh] w-full object-cover md:h-[85vh]"
          width={1400}
          height={788}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1418] via-[#0e1418]/50 to-black/20" />
        <p className="absolute left-5 top-5 font-display text-xl italic md:left-8 md:text-2xl">
          Din Rörmokare
        </p>
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-5 pb-10 md:px-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#e8b89a]">
            Stockholm · jour dygnet runt
          </p>
          <h1 className="mt-3 max-w-[12ch] font-display text-[2.6rem] italic leading-[0.98] md:text-7xl">
            Kranen gick sönder. Vi är på väg.
          </h1>
          <a
            href="tel:0812345678"
            className="mt-8 inline-block font-display text-4xl italic leading-none tracking-tight md:text-6xl"
          >
            08-123 456 78
          </a>
        </div>
      </section>
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-10 sm:grid-cols-3 md:px-8">
          {[
            ["15 min", "till återkoppling"],
            ["Dygnet runt", "Storstockholm"],
            ["Fast pris", "innan vi börjar"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-display text-3xl italic text-[#e8b89a]">{k}</p>
              <p className="mt-1 text-sm text-[#c5d0c8]">{v}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <h2 className="font-display text-3xl italic">Vad vi gör</h2>
        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {services.map((s) => (
            <article
              key={s.title}
              className="grid gap-2 py-6 md:grid-cols-[4rem_1fr_2fr] md:items-baseline"
            >
              <p className="font-display text-2xl italic text-[#e8b89a]">{s.n}</p>
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-[#c5d0c8]">{s.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="priser" className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 className="font-display text-3xl italic">Priser, riktvärden</h2>
          <p className="mt-2 text-sm text-[#c5d0c8]">
            Exkl. moms. Du får alltid en tydlig offert innan vi börjar.
          </p>
          <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {[
              ["Utryckning, akuttid", "från 1 290 kr"],
              ["Enklare reparation, timpris", "från 690 kr"],
              ["Stopp i avlopp", "från 1 490 kr"],
              ["Badrumsrenovering", "enligt offert"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-4 py-4">
                <dt className="min-w-0">{k}</dt>
                <dd className="shrink-0 tabular-nums text-[#e8b89a]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section id="offert" className="bg-[#c45c3a] px-5 py-16 text-white md:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/80">
            Jour dygnet runt
          </p>
          <a
            href="tel:0812345678"
            className="mt-3 block font-display text-5xl italic leading-none md:text-7xl"
          >
            08-123 456 78
          </a>
          <p className="mt-6 text-white/85">
            info@dinromokare.se · Stockholm och krans
          </p>
        </div>
      </section>
      <DemoExit />
    </div>
  );
}
