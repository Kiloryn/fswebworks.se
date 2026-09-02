import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit } from "@/components/site/demo-banner";

export const Route = createFileRoute("/elektriker")({
  component: ElDemo,
  head: () => ({
    meta: [{ title: "Stockholms Elkraft – exempelsida" }],
  }),
});

const services = [
  {
    n: "01",
    title: "Nyinstallation",
    body: "El i nybyggen, tillbyggen och vid renovering. Enligt Elsäkerhetsverket.",
  },
  {
    n: "02",
    title: "Felavhjälpning",
    body: "Strömavbrott, säkringar som löser ut, vägguttag som strular.",
  },
  {
    n: "03",
    title: "Elbesiktning",
    body: "Säkerhetskontroll inför försäljning eller hyra. Tydlig rapport.",
  },
  {
    n: "04",
    title: "Uppgradering",
    body: "Ny elcentral, ljusstyrning och genomgång av äldre anläggningar.",
  },
];

function ElDemo() {
  return (
    <div className="min-h-dvh bg-[#eef1f6] text-[#12161e]">
      <DemoBanner current="elektriker" />
      <div className="bg-[#d4a017] px-3 py-2 text-center text-[11px] font-semibold tracking-[0.12em] text-[#111] uppercase">
        Auktoriserad elinstallatör · A-behörig
      </div>
      <section className="md:grid md:grid-cols-2 md:items-stretch">
        <div className="flex flex-col justify-center bg-[#0b1018] px-5 py-12 text-[#e8eef6] md:px-10 lg:px-16">
          <p className="font-display text-xl md:text-2xl">Stockholms Elkraft</p>
          <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-[#d4a017]">
            Stockholm och kranskommuner
          </p>
          <h1 className="mt-4 max-w-[12ch] font-display text-[2.5rem] leading-[0.98] md:text-6xl lg:text-7xl">
            El som sitter. Första gången.
          </h1>
          <p className="mt-6 max-w-md text-[#b7c2d4]">
            Nyinstallation, felavhjälpning och besiktning. Dokumentation som
            håller vid försäkring och försäljning.
          </p>
          <a
            href="tel:0845678901"
            className="mt-10 inline-block font-display text-3xl italic md:text-4xl"
          >
            08-456 789 01
          </a>
        </div>
        <div className="relative min-h-[42vh] md:min-h-[78vh]">
          <Pic
            src="/images/elektriker.jpg?v=5"
            alt="Elcentral i en lägenhet"
            className="absolute inset-0 size-full object-cover"
            width={1400}
            height={1050}
            priority
          />
          <p className="absolute bottom-5 left-5 bg-[#d4a017] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#111]">
            A-behörig
          </p>
        </div>
      </section>
      <section className="bg-[#dce3ee]">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-10 sm:grid-cols-3 md:px-8">
          {[
            ["A-behörig", "Registrerad hos Elsäkerhetsverket"],
            ["Protokoll", "Efter varje jobb"],
            ["Jour", "Samma dag vid behov"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-display text-2xl italic text-[#8a6a0c]">{k}</p>
              <p className="mt-1 text-sm text-[#3d4656]">{v}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8">
          <h2 className="font-display text-3xl">Tjänster</h2>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
            {services.map((s) => (
              <article
                key={s.title}
                className="grid gap-2 py-6 md:grid-cols-[4rem_1fr_2fr] md:items-baseline"
              >
                <p className="font-display text-2xl italic text-[#8a6a0c]">{s.n}</p>
                <h3 className="text-lg font-medium">{s.title}</h3>
                <p className="text-sm text-[#3d4656]">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#eef1f6]">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#8a6a0c]">
            Recensioner
          </p>
          <h2 className="mt-2 font-display text-3xl">4,8 på Google</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                q: "Bytte elcentral i radhuset. Protokoll samma dag, försäkringsbolaget nöjda.",
                n: "Johan, Nacka",
              },
              {
                q: "Jour när säkringen löste ut en söndag. Tydligt, lugnt, inget meck.",
                n: "Sara, Vasastan",
              },
              {
                q: "A-behörig och visar det. Inte bara en lapp i fönstret.",
                n: "BRF Eken, Bromma",
              },
            ].map((r) => (
              <figure key={r.n} className="border-t border-black/15 pt-5">
                <blockquote className="text-[15px] leading-relaxed text-[#3d4656]">
                  “{r.q}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-[#8a6a0c]">{r.n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1a2230] text-[#e8eef6]">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#d4a017]">
            Folket
          </p>
          <h2 className="mt-2 font-display text-3xl">Vi som åker ut.</h2>
          <p className="mt-3 max-w-xl text-sm text-[#b7c2d4]">
            Här lägger vi in era foton. Namn, behörighet, en bild.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { name: "Anna Berg", role: "Elinstallatör, A-behörig" },
              { name: "Jonas Krantz", role: "Montör" },
              { name: "Mikael Öberg", role: "Felavhjälpning" },
            ].map((p) => (
              <article key={p.name}>
                <div className="relative flex aspect-[3/4] flex-col items-center justify-center overflow-hidden bg-[#242c3a]">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#d4a017]/90">
                    Bild på personal
                  </span>
                  <span className="mt-2 text-xs text-[#b7c2d4]/70">Ert foto här</span>
                </div>
                <h3 className="mt-4 font-display text-xl italic">{p.name}</h3>
                <p className="text-sm text-[#b7c2d4]">{p.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8">
          <h2 className="font-display text-3xl">Vanliga frågor</h2>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
            {[
              [
                "Är ni A-behöriga?",
                "Ja. Registrerade hos Elsäkerhetsverket. Du får protokoll efter jobbet – det som försäkringen vill ha.",
              ],
              [
                "Gör ni ROT?",
                "Ja, på arbetskostnaden för privatpersoner i befintlig bostad.",
              ],
              [
                "Hur snabbt kan ni komma?",
                "Fel samma dag när det går. Övrigt bokar vi in inom några vardagar. Stockholm och krans.",
              ],
            ].map(([q, a]) => (
              <details key={q} className="py-5">
                <summary className="cursor-pointer list-none font-medium">{q}</summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#3d4656]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section id="kontakt" className="bg-[#d4a017] px-5 py-16 text-[#111] md:px-8">
        <div className="mx-auto max-w-5xl md:flex md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
              Offert samma vardag
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Hör av dig.</h2>
            <p className="mt-2 text-[#111]/70">
              Mån–fre 07–16 · jour vid fel · Stockholm och krans
            </p>
          </div>
          <a
            href="tel:0845678901"
            className="mt-8 block font-display text-4xl italic leading-none md:mt-0 md:text-5xl"
          >
            08-456 789 01
          </a>
        </div>
      </section>
      <DemoExit />
    </div>
  );
}
