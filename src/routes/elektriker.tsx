import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit, DemoPhoneLink } from "@/components/site/demo-banner";

export const Route = createFileRoute("/elektriker")({
  component: ElDemo,
  head: () => ({ meta: [{ title: "Stockholms Elkraft – exempelsida" }] }),
});

const services = [
  {
    title: "Felavhjälpning",
    body: "Strömavbrott, trasiga säkringar, vägguttag som inte tar sladd. Samma dag när det går.",
    price: "från 890 kr/tim",
  },
  {
    title: "Nyinstallation",
    body: "El i nybyggen, tillbyggen och vid renovering. Dokumenterat enligt Elsäkerhetsverkets regler.",
    price: "enligt offert",
  },
  {
    title: "Elbesiktning",
    body: "Inför försäljning eller hyra. Rapporten som försäkringsbolaget vill ha.",
    price: "från 2 400 kr",
  },
  {
    title: "Uppgradering",
    body: "Ny elcentral, ljusstyrning, äldre anläggningar som behöver hänga med.",
    price: "enligt offert",
  },
];

const steps = [
  { title: "Du ringer", body: "Beskriv felet så gott du kan. Vi ger ett riktpris direkt i telefon." },
  { title: "Vi kommer", body: "Inom 24 timmar i Stockholm. Du får ett fast pris innan vi börjar." },
  { title: "Du får protokollet", body: "Efter varje jobb lämnar vi protokoll. Inget lämnas halvdant." },
];

function ElDemo() {
  return (
    <div className="demo-el min-h-svh bg-[#f5f3ee] text-[#14181f]">
      <DemoBanner current="elektriker" />
      <header className="border-b border-[#14181f]/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-5 md:px-8">
          <p className="font-display text-2xl">Stockholms Elkraft</p>
          <span className="inline-flex items-center gap-2 text-sm text-[#5a6472]">
            <span className="inline-block size-2 bg-[#d4a017]" aria-hidden="true" />
            A-behörig elinstallatör
          </span>
        </div>
      </header>

      <section className="grid md:grid-cols-2 md:items-stretch">
        <div className="flex flex-col justify-center px-5 py-16 md:px-12 lg:px-16">
          <p className="text-sm text-[#5a6472]">Elinstallation · Felavhjälpning · Besiktning</p>
          <h1 className="mt-4 max-w-[13ch] font-display text-5xl leading-[1.02] md:text-7xl">
            El som sitter. Första gången.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#5a6472]">
            Vi installerar ny el, letar fel och besiktigar. Efter varje jobb får du protokollet, och
            vi är registrerade hos Elsäkerhetsverket.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <DemoPhoneLink
              tel="08-456 789 01"
              className="inline-flex h-12 items-center bg-[#14181f] px-6 text-sm text-[#f5f3ee]"
            >
              08-456 789 01
            </DemoPhoneLink>
            <a
              href="#tjanster"
              className="inline-flex h-12 items-center border border-[#14181f] px-6 text-sm"
            >
              Se vad vi gör
            </a>
          </div>
          <p className="mt-8 text-sm text-[#5a6472]">Mån–fre 07–16 · jour vid fel</p>
        </div>
        <div className="relative min-h-[56vh] md:min-h-[82vh]">
          <Pic
            src="/images/elektriker.jpg?v=6"
            alt="Elektriker som installerar en elcentral"
            className="absolute inset-0 size-full object-cover"
            width={1600}
            height={1200}
            priority
          />
        </div>
      </section>

      <section className="border-y border-[#14181f]/10 px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[#5a6472] md:flex-row md:items-center md:justify-between">
          <p>A-behörig installatör på varje jobb</p>
          <p>Registrerade hos Elsäkerhetsverket</p>
          <p>Protokoll efter varje avslutat arbete</p>
        </div>
      </section>

      <section id="tjanster" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className="font-display text-4xl">Det vi gör</h2>
        <p className="mt-3 max-w-xl text-[#5a6472]">
          Riktpriser direkt i telefon. Fast pris innan vi börjar, alltid.
        </p>
        <dl className="mt-12 border-y border-[#14181f]/10">
          {services.map((s) => (
            <div
              key={s.title}
              className="grid gap-2 border-b border-[#14181f]/10 py-6 last:border-b-0 md:grid-cols-[12rem_1fr_auto] md:items-baseline"
            >
              <dt className="font-display text-2xl">{s.title}</dt>
              <dd className="text-[#5a6472]">{s.body}</dd>
              <dd className="shrink-0 text-sm tabular-nums text-[#5a6472]">{s.price}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <h2 className="font-display text-4xl">När strömmen går</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-[#14181f]/15 pt-6">
              <span className="font-display text-5xl text-[#14181f]/25" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-[#5a6472]">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-[#14181f]/10 px-5 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-[#5a6472]">Så kan omdömen se ut</p>
          <blockquote className="mt-4 max-w-2xl font-display text-3xl leading-snug">
            Halva lägenheten var strömlös en fredag. Killarna var här innan lunch och hade med sig
            reservdelar i bilen.
          </blockquote>
          <p className="mt-4 text-sm text-[#5a6472]">Elins W., Vasastan</p>
        </div>
      </section>

      <section className="bg-[#14181f] px-5 py-16 text-[#f5f3ee] md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl">Hör av dig.</h2>
            <p className="mt-2 text-[#f5f3ee]/60">Mån–fre 07–16 · jour vid fel</p>
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
