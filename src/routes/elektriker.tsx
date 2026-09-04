import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit, DemoPhoneLink } from "@/components/site/demo-banner";

export const Route = createFileRoute("/elektriker")({
  component: ElDemo,
  head: () => ({
    meta: [{ title: "Stockholms Elkraft – exempelsida" }],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Oswald:wght@500;600&display=swap",
      },
    ],
  }),
});

const services = [
  { title: "Nyinstallation", body: "El i nybyggen, tillbyggen och vid renovering. Enligt Elsäkerhetsverket." },
  { title: "Felavhjälpning", body: "Strömavbrott, säkringar, vägguttag. Samma dag när det går." },
  { title: "Elbesiktning", body: "Inför försäljning eller hyra. Rapport som försäkringen vill ha." },
  { title: "Uppgradering", body: "Ny elcentral, ljusstyrning, äldre anläggningar." },
];

function ElDemo() {
  return (
    <div className="demo-el min-h-svh bg-[#0b1018] text-[#e8eef6]">
      <DemoBanner current="elektriker" />
      <div className="h-2 bg-[#d4a017]" />
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-8">
          <p className="min-w-0 font-display tracking-wide">STOCKHOLMS ELKRAFT</p>
          <p className="shrink-0 text-sm text-[#d4a017]">A-behörig</p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <h1 className="max-w-[12ch] font-display text-5xl leading-[1.02] md:text-7xl">
          El som sitter. Första gången.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-[#b7c2d4]">
          Nyinstallation, fel och besiktning. Protokoll efter varje jobb. Registrerad hos Elsäkerhetsverket.
        </p>
        <DemoPhoneLink tel="08-456 789 01" className="mt-10 inline-flex h-14 items-center bg-[#d4a017] px-6 text-lg font-medium text-[#111]">
          08-456 789 01
        </DemoPhoneLink>
      </section>

      <div className="relative min-h-[50vh] md:min-h-[62vh]">
        <Pic src="/images/elektriker.jpg?v=5" alt="Elcentral i en lägenhet" className="absolute inset-0 size-full object-cover" width={1400} height={1050} priority />
      </div>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className="font-display text-4xl">Efter jobbet: protokoll.</h2>
        <p className="mt-3 max-w-xl text-[#b7c2d4]">
          Det som försäkringen och besiktningen vill ha. Inte en lapp i fönstret.
        </p>
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {services.map((s) => (
            <article key={s.title} className="grid gap-2 py-6 md:grid-cols-[14rem_1fr] md:items-baseline">
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="text-[#b7c2d4]">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#d4a017] px-5 py-16 text-[#111] md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl">Hör av dig.</h2>
            <p className="mt-2 text-[#111]/70">Mån–fre 07–16 · jour vid fel</p>
          </div>
          <DemoPhoneLink tel="08-456 789 01" className="font-display text-5xl leading-none">
            08-456 789 01
          </DemoPhoneLink>
        </div>
      </section>
      <DemoExit />
    </div>
  );
}
