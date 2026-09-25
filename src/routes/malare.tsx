import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit, DemoPhoneLink } from "@/components/site/demo-banner";

export const Route = createFileRoute("/malare")({
  component: PainterDemo,
  head: () => ({ meta: [{ title: "Stockholms Måleri – exempelsida" }] }),
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
    body: "Tak, väggar, lister och kök. Spackling och slipning när ytan kräver det.",
    price: "från 650 kr/tim",
  },
  {
    title: "Utomhus",
    body: "Fasader, fönster och staket. Färg som tål att stå ute året om i svenskt klimat.",
    price: "enligt offert",
  },
  {
    title: "Tapet",
    body: "Tapetsering, fondvägg och förarbete. Raka kanter, inga bubblor.",
    price: "från 720 kr/tim",
  },
  {
    title: "Hembesök",
    body: "Kostnadsfri genomgång av rummen. Offert ofta samma dag.",
    price: "0 kr",
  },
];

function PainterDemo() {
  return (
    <div className="demo-malare min-h-svh bg-[#f3f1ea] text-[#1f2a22]">
      <DemoBanner current="malare" />
      <header className="border-b border-[#1f2a22]/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-5 md:px-8">
          <p className="font-display text-2xl">Stockholms Måleri</p>
          <a href="#offert" className="inline-flex h-11 items-center bg-[#2f5d3d] px-5 text-sm text-white">
            Kostnadsfri offert
          </a>
        </div>
      </header>

      <section className="grid md:grid-cols-2 md:items-stretch">
        <div className="flex flex-col justify-center px-5 py-16 md:px-12 lg:px-16">
          <p className="text-sm text-[#4d5b52]">Måleri · Tapet · Stockholm med omnejd</p>
          <h1 className="mt-4 max-w-[12ch] font-display text-5xl leading-[1.02] md:text-7xl">
            Ett rum som känns färdigt.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#4d5b52]">
            Vi målar inomhus och utomhus och sätter tapet. Du får fast pris innan vi börjar, och ROT
            dras direkt på arbetskostnaden.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <DemoPhoneLink
              tel="08-678 901 23"
              className="inline-flex h-12 items-center bg-[#2f5d3d] px-6 text-sm text-white"
            >
              08-678 901 23
            </DemoPhoneLink>
            <a
              href="#tjanster"
              className="inline-flex h-12 items-center border border-[#1f2a22] px-6 text-sm"
            >
              Se priser
            </a>
          </div>
          <p className="mt-8 text-sm text-[#4d5b52]">Svar samma vardag · hembesök utan kostnad</p>
        </div>
        <div className="relative min-h-[56vh] md:min-h-[82vh]">
          <Pic
            src="/images/malare.jpg?v=6"
            alt="Nymålat vardagsrum i salviagrönt"
            className="absolute inset-0 size-full object-cover"
            width={1600}
            height={1200}
            priority
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className="font-display text-4xl">Färger vi ofta återkommer till</h2>
        <p className="mt-3 max-w-xl text-[#4d5b52]">
          Rummet på bilden är målat i Salvia. Vi hjälper dig provmåla innan du bestämmer dig.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {colors.map((c) => (
            <div
              key={c.name}
              className="flex min-h-[18vh] flex-col justify-end p-4"
              style={{ backgroundColor: c.hex }}
            >
              <p className={`text-sm font-medium ${c.ink ? "text-[#1f2a22]" : "text-white"}`}>
                {c.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="tjanster" className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <h2 className="font-display text-4xl">Vad vi gör</h2>
        <dl className="mt-12 border-y border-[#1f2a22]/10">
          {services.map((s) => (
            <div
              key={s.title}
              className="grid gap-2 border-b border-[#1f2a22]/10 py-6 last:border-b-0 md:grid-cols-[12rem_1fr_auto] md:items-baseline"
            >
              <dt className="font-display text-2xl">{s.title}</dt>
              <dd className="text-[#4d5b52]">{s.body}</dd>
              <dd className="shrink-0 text-sm tabular-nums text-[#4d5b52]">{s.price}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-[#dce6e0] px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Så funkar ROT</h2>
            <p className="mt-4 max-w-md leading-relaxed text-[#4d5b52]">
              Staten betalar 30 % av arbetskostnaden direkt på fakturan. Du behöver inte ligga ute
              med pengarna och vänta på skatten.
            </p>
          </div>
          <div className="border border-[#1f2a22]/10 bg-[#f3f1ea] p-6 md:p-8">
            <p className="text-sm text-[#4d5b52]">Exempel: måla om ett sovrum</p>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt>Arbetskostnad</dt>
                <dd className="tabular-nums">20 000 kr</dd>
              </div>
              <div className="flex justify-between text-[#2f5d3d]">
                <dt>ROT-avdrag (30 %)</dt>
                <dd className="tabular-nums">−6 000 kr</dd>
              </div>
            </dl>
            <p className="mt-4 border-t border-[#1f2a22]/10 pt-4 font-display text-2xl">
              Du betalar 14 000 kr
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#1f2a22]/10 px-5 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-[#4d5b52]">Så kan omdömen se ut</p>
          <blockquote className="mt-4 max-w-2xl font-display text-3xl leading-snug">
            De tapetserade vår hall på en dag. Skarvarna syns inte ens nu, ett år senare.
          </blockquote>
          <p className="mt-4 text-sm text-[#4d5b52]">Familjen Lindqvist, Enskede</p>
        </div>
      </section>

      <section id="offert" className="bg-[#1f2a22] px-5 py-16 text-white md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Vi tittar på rummen. Sen får du en offert.</h2>
            <p className="mt-4 max-w-md text-white/75">Skicka gärna bilder. Svar samma vardag.</p>
            <DemoPhoneLink tel="08-678 901 23" className="mt-8 block font-display text-4xl">
              08-678 901 23
            </DemoPhoneLink>
          </div>
          <form className="bg-[#f3f1ea] p-6 text-[#1f2a22] md:p-8" onSubmit={(e) => e.preventDefault()}>
            <p className="font-display text-2xl">Begär offert</p>
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
