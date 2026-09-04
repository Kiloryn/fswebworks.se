import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit, DemoPhoneLink } from "@/components/site/demo-banner";

export const Route = createFileRoute("/vvs")({
  component: VvsDemo,
  head: () => ({
    meta: [{ title: "Din Rörmokare i Stockholm – exempelsida" }],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
});

const services = [
  { title: "Akut läckage", body: "Kran, rör eller beredare som ger upp mitt i natten. Vi åker ut, stänger vattnet och lagar. Jour dygnet runt i Storstockholm." },
  { title: "Stopp i avlopp", body: "Kök, badrum och stam. Vi rensar, filmar om det behövs och säger till om det är ett större fel." },
  { title: "Badrum och kök", body: "Nyinstallation vid renovering. Rör, golvbrunn, blandare. Offert på plats innan vi börjar." },
  { title: "Värme", body: "Radiatorer, golvvärme och varmvattenberedare. Service, byte och injustering." },
];

const team = [
  { name: "Erik Holm", role: "Ägare, rörmokare" },
  { name: "Amir Hassan", role: "Rörmontör" },
  { name: "Sofia Lind", role: "Kund och planering" },
];

const faq = [
  { q: "Det läcker – vad gör jag?", a: "Stäng ventilen vid vattenmätaren om du hittar den. Ring oss. Jour dygnet runt i Storstockholm." },
  { q: "Jobbar ni med ROT-avdrag?", a: "Ja, på arbetskostnaden för privatpersoner i befintlig bostad. Avdraget sitter på fakturan." },
  { q: "Vad kostar ett hembesök?", a: "Akut utryckning från 1\u00a0290 kr. Du får alltid pris innan vi sätter igång." },
  { q: "Var kör ni?", a: "Hela Storstockholm. Säg var du bor så säger vi om vi tar det." },
];

function VvsDemo() {
  return (
    <div className="demo-vvs min-h-svh bg-[#eef3ef] text-[#1a2420]">
      <DemoBanner current="vvs" />
      <header className="border-b border-[#1a2420]/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-8">
          <p className="min-w-0 font-display text-lg font-medium">Din Rörmokare</p>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#tjanster">Tjänster</a>
            <a href="#priser">Priser</a>
            <a href="#folk">Vi som kommer</a>
          </nav>
          <DemoPhoneLink tel="08-123 456 78" className="text-sm font-medium text-[#c45c3a]">
            08-123 456 78
          </DemoPhoneLink>
        </div>
      </header>
      <DemoPhoneLink
        tel="08-123 456 78"
        className="flex items-center justify-center bg-[#c45c3a] px-4 py-3 text-sm font-medium text-white"
      >
        Akut? Ring 08-123 456 78 — jour dygnet runt
      </DemoPhoneLink>

      <section className="relative min-h-[78svh] text-white md:min-h-[85vh]">
        <div className="absolute inset-0">
          <Pic src="/images/vvs.jpg?v=6" alt="Rörmokare drar åt kopparrör" className="size-full object-cover" width={1400} height={788} priority />
        </div>
        <div className="absolute inset-0 bg-[#0e1418]/60" />
        <div className="relative mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-end px-5 pb-14 md:min-h-[85vh] md:px-8 md:pb-20">
          <h1 className="max-w-[14ch] font-display text-5xl font-medium leading-[1.02] md:text-7xl">
            Kranen gick sönder. Vi är på väg.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/85">
            Akut VVS, badrum och värme. Offert innan vi sätter igång. ROT på arbetskostnaden.
          </p>
          <DemoPhoneLink tel="08-123 456 78" className="mt-8 inline-flex h-14 items-center bg-[#c45c3a] px-6 text-lg font-medium">
            Ring 08-123 456 78
          </DemoPhoneLink>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3 md:px-8">
          {[
            ["Jour", "Dygnet runt, Storstockholm"],
            ["ROT", "På arbetskostnaden, på fakturan"],
            ["Fast pris", "Innan vi börjar – inga överraskningar"],
          ].map(([k, v]) => (
            <div key={k} className="border-l-2 border-[#c45c3a] pl-4">
              <p className="font-display text-xl font-medium">{k}</p>
              <p className="mt-1 text-sm text-[#3d4a44]">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tjanster" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className="font-display text-4xl font-medium md:text-5xl">Vad vi gör</h2>
        <p className="mt-3 max-w-xl text-[#3d4a44]">
          Service, reparation och nyinstallation. Privat, villa och förening.
        </p>
        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="border-t border-[#1a2420]/15 pt-6">
              <h3 className="font-display text-2xl font-medium">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-[#3d4a44]">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="priser" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="font-display text-4xl font-medium">Riktpriser</h2>
          <p className="mt-2 text-[#3d4a44]">Exkl. moms. Fast pris innan vi börjar.</p>
          <dl className="mt-10 divide-y divide-[#1a2420]/10 border-y border-[#1a2420]/10">
            {[
              ["Utryckning, akuttid", "från 1\u00a0290 kr"],
              ["Enklare reparation", "från 690 kr/tim"],
              ["Stopp i avlopp", "från 1\u00a0490 kr"],
              ["Badrum / beredare", "enligt offert"],
            ].map(([k, v]) => (
              <div key={k} className="flex min-w-0 items-baseline justify-between gap-4 py-5">
                <dt className="min-w-0">{k}</dt>
                <dd className="shrink-0 font-display text-xl font-medium tabular-nums">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="folk" className="bg-[#1a2420] py-20 text-[#e8efe9]">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="font-display text-4xl font-medium">Ni pratar med dem som gör jobbet.</h2>
          <p className="mt-3 max-w-xl text-sm text-[#c5d0c8]">
            Här lägger vi in era foton. Namn, roll, en bild från vardagen.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {team.map((p) => (
              <article key={p.name}>
                <div className="flex aspect-[3/4] flex-col items-center justify-center bg-[#24302c]">
                  <span className="text-sm text-[#e8b89a]">Bild på personal</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-medium">{p.name}</h3>
                <p className="text-sm text-[#c5d0c8]">{p.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className="font-display text-4xl font-medium">Vanliga frågor</h2>
        <div className="mt-10 divide-y divide-[#1a2420]/10 border-y border-[#1a2420]/10">
          {faq.map((item) => (
            <details key={item.q} className="py-5">
              <summary className="cursor-pointer list-none text-lg font-medium">{item.q}</summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-[#3d4a44]">{item.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-12 text-sm text-[#3d4a44]">Så kan omdömen se ut</p>
        <blockquote className="mt-3 max-w-2xl font-display text-3xl font-medium leading-snug">
          Stopp i köket en lördag. De svarade direkt, var här samma dag och lämnade rent efter sig.
        </blockquote>
        <p className="mt-4 text-sm text-[#3d4a44]">Linda, Södermalm</p>
      </section>

      <section id="offert" className="bg-[#c45c3a] px-5 py-16 text-white md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-medium">Hör av dig. Vi tar det därifrån.</h2>
            <p className="mt-3 max-w-md text-white/85">Skicka en bild på felet så återkommer vi med pris.</p>
          </div>
          <DemoPhoneLink tel="08-123 456 78" className="font-display text-5xl font-medium leading-none">
            08-123 456 78
          </DemoPhoneLink>
        </div>
      </section>
      <footer className="bg-[#1a2420] px-5 py-8 text-sm text-[#c5d0c8] md:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4">
          <p>Din Rörmokare · Stockholm</p>
          <p>08-123 456 78 · jour@dinrormokare.se</p>
        </div>
      </footer>
      <DemoExit />
    </div>
  );
}
