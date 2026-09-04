import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit, DemoPhoneLink } from "@/components/site/demo-banner";

export const Route = createFileRoute("/malare")({
  component: PainterDemo,
  head: () => ({
    meta: [{ title: "Stockholms Måleri – exempelsida" }],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;600&display=swap",
      },
    ],
  }),
});

const colors = [
  { name: "Salvia", hex: "#8a9a7b", ink: true },
  { name: "Kalk", hex: "#e8e0d0", ink: true },
  { name: "Terrakotta", hex: "#c36b4a", ink: false },
  { name: "Djupgrön", hex: "#2f5d3d", ink: false },
];

const services = [
  { title: "Inomhus", body: "Tak, väggar, lister och kök. Spackling och slipning när ytan kräver det." },
  { title: "Utomhus", body: "Fasader, fönster och staket. Färg som håller svenska vintrar." },
  { title: "Tapet", body: "Tapetsering, fondvägg och förarbete." },
  { title: "Hembesök", body: "Kostnadsfri genomgång. Offert ofta samma dag." },
];

function PainterDemo() {
  return (
    <div className="demo-malare min-h-svh bg-[#f3f1ea] text-[#1f2a22]">
      <DemoBanner current="malare" />
      <header className="bg-[#2f5d3d] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-8">
          <p className="min-w-0 font-display text-lg font-medium">Stockholms Måleri</p>
          <a href="#offert" className="shrink-0 text-sm underline underline-offset-4">
            <span className="md:hidden">Offert</span>
            <span className="hidden md:inline">Kostnadsfri offert</span>
          </a>
        </div>
      </header>

      <section className="grid min-h-[85svh] md:min-h-[90vh] md:grid-cols-2">
        <div className="flex flex-col justify-end bg-[#2f5d3d] px-5 py-12 text-white md:px-12 md:py-16">
          <h1 className="max-w-[12ch] font-display text-5xl font-medium leading-[1.02] md:text-7xl">
            Ett rum som känns färdigt.
          </h1>
          <p className="mt-5 max-w-md text-white/80">
            Inomhus, utomhus och tapet. ROT på arbetskostnaden.
          </p>
          <DemoPhoneLink tel="08-678 901 23" className="mt-8 inline-flex h-14 items-center bg-[#e8e0d0] px-6 text-lg text-[#1f2a22]">
            08-678 901 23
          </DemoPhoneLink>
        </div>
        <div className="grid grid-cols-2">
          {colors.map((c) => (
            <div key={c.name} className="flex min-h-[22vh] flex-col justify-end p-4 md:min-h-0" style={{ backgroundColor: c.hex }}>
              <p className={`text-sm font-medium ${c.ink ? "text-[#1f2a22]" : "text-white"}`}>{c.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="relative min-h-[56vh] md:min-h-[70vh]">
        <Pic src="/images/malare.jpg?v=5" alt="Nymålat rum i salviagrönt" className="absolute inset-0 size-full object-cover" width={1400} height={1050} priority />
      </div>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className="font-display text-4xl font-medium">Vad vi gör</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="border-t border-[#1f2a22]/15 pt-6">
              <h3 className="font-display text-2xl font-medium">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-[#4d5b52]">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="offert" className="bg-[#1f2a22] px-5 py-16 text-white md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-medium">Vi tittar på rummen. Sen får du en offert.</h2>
            <p className="mt-4 max-w-md text-white/75">Skicka gärna bilder. Svar samma vardag.</p>
            <DemoPhoneLink tel="08-678 901 23" className="mt-8 block font-display text-4xl font-medium">
              08-678 901 23
            </DemoPhoneLink>
          </div>
          <form className="bg-[#f3f1ea] p-6 text-[#1f2a22] md:p-8" onSubmit={(e) => e.preventDefault()}>
            <p className="font-display text-2xl font-medium">Begär offert</p>
            <label className="mt-6 block text-sm">
              Vad ska målas?
              <select className="mt-1 h-12 w-full border border-[#1f2a22]/15 bg-[#f3f1ea] px-3">
                <option>Inomhus</option>
                <option>Fasad</option>
                <option>Tapet</option>
              </select>
            </label>
            <label className="mt-4 block text-sm">
              Telefon eller e-post
              <input className="mt-1 h-12 w-full border border-[#1f2a22]/15 bg-[#f3f1ea] px-3" />
            </label>
            <button type="submit" className="mt-6 inline-flex h-12 w-full items-center justify-center bg-[#2f5d3d] text-sm text-white">
              Skicka förfrågan
            </button>
            <p className="mt-3 text-center text-xs text-[#4d5b52]">Exempel — inget skickas här.</p>
          </form>
        </div>
      </section>
      <DemoExit />
    </div>
  );
}
