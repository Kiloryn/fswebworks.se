import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit } from "@/components/site/demo-banner";

export const Route = createFileRoute("/malare")({
  component: PainterDemo,
  head: () => ({
    meta: [{ title: "Stockholms Måleri – exempelsida" }],
  }),
});

const colors = [
  { name: "Salvia", hex: "#8a9a7b", ink: true },
  { name: "Kalk", hex: "#e8e0d0", ink: true },
  { name: "Terrakotta", hex: "#c36b4a", ink: false },
  { name: "Djupgrön", hex: "#2f5d3d", ink: false },
];

const services = [
  { title: "Inomhus", body: "Tak, väggar och lister. Spackling, slipning, jämnt slutresultat." },
  { title: "Utomhus", body: "Fasader, fönster och staket. Färg som håller svenska vintrar." },
  { title: "Tapet", body: "Tapetsering och förarbete. Vi hjälper till att välja material." },
  { title: "Hembesök", body: "Kostnadsfri genomgång på plats. Offert utan förpliktelser." },
];

function PainterDemo() {
  return (
    <div className="min-h-dvh bg-[#f3f1ea] text-[#1f2a22]">
      <DemoBanner current="malare" />
      <header className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-4 md:px-8">
        <p className="min-w-0 text-[11px] font-semibold tracking-[0.14em]">
          STOCKHOLMS MÅLERI
        </p>
        <a
          href="#offert"
          className="inline-flex h-11 shrink-0 items-center rounded-md bg-[#2f5d3d] px-4 text-sm text-white"
        >
          <span className="sm:hidden">Offert</span>
          <span className="hidden sm:inline">Kostnadsfri offert</span>
        </a>
      </header>
      <section className="relative isolate">
        <Pic
          src="/images/malare.jpg?v=5"
          alt="Nymålat rum i salviagrönt"
          className="h-[62dvh] w-full object-cover md:h-[78vh]"
          width={1400}
          height={1050}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a22] via-[#1f2a22]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-5 pb-10 text-white md:px-8">
          <h1 className="max-w-[12ch] font-display text-[2.5rem] leading-[0.98] md:text-7xl">
            Ett rum som känns färdigt.
          </h1>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4">
        {colors.map((c) => (
          <div
            key={c.name}
            className="flex h-40 flex-col justify-end p-4 md:h-56"
            style={{ backgroundColor: c.hex }}
          >
            <p
              className={`text-sm font-medium tracking-wide ${c.ink ? "text-[#1f2a22]" : "text-white"}`}
            >
              {c.name}
            </p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title}>
              <h2 className="font-display text-2xl">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#4d5b52]">{s.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="offert" className="bg-[#2f5d3d] px-5 py-16 text-white md:px-8">
        <div className="mx-auto max-w-5xl md:flex md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">
              Kostnadsfritt hembesök
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Vi tittar på rummen. Sen får du en offert.
            </h2>
          </div>
          <a
            href="tel:0867890123"
            className="mt-8 block font-display text-4xl italic leading-none md:mt-0 md:text-5xl"
          >
            08-678 901 23
          </a>
        </div>
      </section>
      <DemoExit />
    </div>
  );
}
