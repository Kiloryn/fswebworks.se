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
  {
    title: "Inomhus",
    body: "Tak, väggar, lister och kök. Spackling och slipning ingår när ytan kräver det.",
  },
  {
    title: "Utomhus",
    body: "Fasader, fönster och staket. Färg som håller svenska vintrar.",
  },
  {
    title: "Tapet",
    body: "Tapetsering, fondvägg och förarbete. Vi hjälper till att välja material.",
  },
  {
    title: "Hembesök",
    body: "Kostnadsfri genomgång på plats. Offert utan förpliktelser, ofta samma dag.",
  },
];

const team = [
  { name: "Per Holm", role: "Målarmästare" },
  { name: "Nina Berg", role: "Målare, tapet" },
  { name: "Johan Ek", role: "Fasader" },
];

const reviews = [
  {
    quote:
      "Målade om tre rum i lägenheten. Höll tiden, täckte allt och lämnade rent. ROT på fakturan utan krångel.",
    name: "Anna, Kungsholmen",
  },
  {
    quote:
      "Färgförslag på plats som faktiskt passade ljuset. Inte den där standardvita alla andra kör.",
    name: "David, Bromma",
  },
  {
    quote:
      "Tapet i hallen plus tak. Tydlig offert, inga extra rader efteråt.",
    name: "Lisa, Enskede",
  },
];

const faq = [
  {
    q: "Gör ni ROT-avdrag?",
    a: "Ja, på arbetskostnaden för privatpersoner i befintlig bostad. Ni får avdraget direkt på fakturan.",
  },
  {
    q: "Vad kostar ett hembesök?",
    a: "Inget. Vi tittar på ytorna, pratar färg och skickar offert. Ingen förpliktelse.",
  },
  {
    q: "Hur lång tid tar ett rum?",
    a: "Ett rum är ofta en till två dagar beroende på underarbete. Vi säger hur lång tid det tar redan i offerten.",
  },
  {
    q: "Var kör ni?",
    a: "Storstockholm – innerstan, krans och en bit utanför. Säg adressen så säger vi om vi tar det.",
  },
];

function PainterDemo() {
  return (
    <div className="min-h-dvh bg-[#f3f1ea] text-[#1f2a22]">
      <DemoBanner current="malare" />
      <header className="border-b border-[#1f2a22]/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-8">
          <p className="min-w-0 text-[11px] font-semibold tracking-[0.16em]">
            STOCKHOLMS MÅLERI
          </p>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a href="#tjanster" className="hover:underline">
              Tjänster
            </a>
            <a href="#folk" className="hover:underline">
              Folket
            </a>
            <a href="#offert" className="hover:underline">
              Offert
            </a>
          </nav>
          <a
            href="#offert"
            className="inline-flex h-11 shrink-0 items-center rounded-md bg-[#2f5d3d] px-4 text-sm text-white"
          >
            Kostnadsfri offert
          </a>
        </div>
      </header>

      <section className="relative isolate">
        <Pic
          src="/images/malare.jpg?v=5"
          alt="Nymålat rum i salviagrönt"
          className="h-[62dvh] w-full object-cover md:h-[82vh]"
          width={1400}
          height={1050}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a22] via-[#1f2a22]/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-10 text-white md:px-8 md:pb-14">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">
            Stockholm · ROT · kostnadsfri offert
          </p>
          <h1 className="mt-3 max-w-[13ch] font-display text-[2.5rem] leading-[0.98] md:text-7xl">
            Ett rum som känns färdigt.
          </h1>
          <p className="mt-4 max-w-md text-sm text-white/80 md:text-base">
            Inomhus, utomhus och tapet. Vi kommer hem, tittar på ytorna och
            skickar offert – utan förpliktelse.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#offert"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-5 text-sm text-[#1f2a22]"
            >
              Kostnadsfri offert
            </a>
            <a
              href="tel:0867890123"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/40 px-5 text-sm"
            >
              08-678 901 23
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#1f2a22]/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
          {[
            ["ROT", "på arbetskostnaden"],
            ["Fri offert", "hembesök utan kostnad"],
            ["Alcro / Nordsjö", "färg vi litar på"],
            ["Storstockholm", "innerstan och krans"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-display text-2xl italic text-[#2f5d3d]">{k}</p>
              <p className="mt-1 text-sm text-[#4d5b52]">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4">
        {colors.map((c) => (
          <div
            key={c.name}
            className="flex h-36 flex-col justify-end p-4 md:h-52"
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

      <section id="tjanster" className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl italic md:text-4xl">Vad vi gör</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <article key={s.title} className="bg-white p-6 md:p-8">
                <h3 className="font-display text-2xl italic">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4d5b52]">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="folk" className="bg-white px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#2f5d3d]">
                Folket
              </p>
              <h2 className="mt-2 font-display text-3xl italic md:text-4xl">
                Samma målare från offert till sista listen.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-[#4d5b52]">
              Här lägger vi in era foton. Namn, roll, en bild från ett jobb.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {team.map((p) => (
              <article key={p.name} className="bg-[#f3f1ea]">
                <div className="flex aspect-[3/4] flex-col items-center justify-center">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#2f5d3d]">
                    Bild på personal
                  </span>
                  <span className="mt-2 text-sm text-[#4d5b52]">Ert foto här</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl italic">{p.name}</h3>
                  <p className="text-sm text-[#4d5b52]">{p.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl italic md:text-4xl">De ringer tillbaka.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="bg-white p-6 md:p-8">
                <blockquote className="font-display text-xl italic leading-snug">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-[#2f5d3d]">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1f2a22]/10 bg-white px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl italic">Vanliga frågor</h2>
          <div className="mt-8 divide-y divide-[#1f2a22]/10 border-y border-[#1f2a22]/10">
            {faq.map((item) => (
              <details key={item.q} className="py-5">
                <summary className="cursor-pointer list-none font-medium">{item.q}</summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4d5b52]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="offert" className="bg-[#2f5d3d] px-5 py-16 text-white md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">
              Kostnadsfritt hembesök
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Vi tittar på rummen. Sen får du en offert.
            </h2>
            <p className="mt-4 max-w-md text-white/80">
              Skicka gärna bilder. ROT på arbetskostnaden. Svar samma vardag.
            </p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/55">
                  Ring
                </dt>
                <dd className="mt-2">
                  <a href="tel:0867890123" className="font-display text-3xl italic">
                    08-678 901 23
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/55">
                  Område
                </dt>
                <dd className="mt-2 text-sm text-white/80">
                  Storstockholm
                  <br />
                  Mån–fre 07–16
                </dd>
              </div>
            </dl>
          </div>
          <form
            className="rounded-md bg-[#f3f1ea] p-6 text-[#1f2a22] md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="font-display text-2xl italic">Begär offert</p>
            <label className="mt-6 block text-[11px] uppercase tracking-[0.16em] text-[#4d5b52]">
              Vad ska målas?
              <select className="mt-2 h-12 w-full rounded-md border border-[#1f2a22]/15 bg-white px-3 text-sm">
                <option>Inomhus, ett eller flera rum</option>
                <option>Hela lägenheten / villan</option>
                <option>Fasad eller fönster</option>
                <option>Tapet</option>
              </select>
            </label>
            <label className="mt-4 block text-[11px] uppercase tracking-[0.16em] text-[#4d5b52]">
              Telefon eller e-post
              <input
                className="mt-2 h-12 w-full rounded-md border border-[#1f2a22]/15 bg-white px-3 text-sm"
                placeholder="Så vi når dig"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md bg-[#2f5d3d] text-sm text-white"
            >
              Skicka förfrågan
            </button>
            <p className="mt-3 text-center text-xs text-[#4d5b52]">
              Exempel – inget skickas här.
            </p>
          </form>
        </div>
      </section>
      <DemoExit />
    </div>
  );
}
