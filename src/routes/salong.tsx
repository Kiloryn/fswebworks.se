import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit, DemoPhoneLink } from "@/components/site/demo-banner";

export const Route = createFileRoute("/salong")({
  component: SalonDemo,
  head: () => ({
    meta: [{ title: "Ateljé Linné – exempelsida" }],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap",
      },
    ],
  }),
});

const treatments = [
  { name: "Klippning dam", price: "690 kr" },
  { name: "Klippning herr", price: "490 kr" },
  { name: "Färgning / toning", price: "från 1\u00a0890 kr" },
  { name: "Slingor", price: "från 2\u00a0190 kr" },
  { name: "Balayage", price: "från 3\u00a0290 kr" },
  { name: "Styling / uppsättning", price: "från 790 kr" },
];

const stylists = [
  { name: "Linn Åberg", role: "Frisör, färg" },
  { name: "Nora Ali", role: "Klippning och slingor" },
  { name: "Sam Berg", role: "Herr och skägg" },
];

function SalonDemo() {
  return (
    <div className="demo-salong min-h-svh bg-[#f6efe6] text-[#3a2f28]">
      <DemoBanner current="salong" />
      <header className="border-b border-[#3a2f28]/10 bg-[#f6efe6]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-5 md:px-8">
          <p className="min-w-0 font-display text-2xl">Ateljé Linné</p>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#prislista">Priser</a>
            <a href="#frisorer">Frisörer</a>
            <a href="#boka">Boka</a>
          </nav>
          <a href="#boka" className="inline-flex h-11 items-center bg-[#3a2f28] px-5 text-sm text-[#f6efe6]">
            Boka tid
          </a>
        </div>
      </header>

      <section className="grid md:grid-cols-2 md:items-stretch">
        <div className="flex flex-col justify-center px-5 py-16 md:px-12 lg:px-16">
          <h1 className="max-w-[12ch] font-display text-5xl leading-[1.02] md:text-7xl">
            Hårvård i ett lugnare tempo.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#6b574c]">
            Klippning, färg, slingor och balayage. Du bokar frisören, inte en lucka i ett schema.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#boka" className="inline-flex h-12 items-center bg-[#3a2f28] px-6 text-sm text-[#f6efe6]">
              Boka tid
            </a>
            <a href="#prislista" className="inline-flex h-12 items-center border border-[#3a2f28] px-6 text-sm">
              Se priser
            </a>
          </div>
          <p className="mt-8 text-sm text-[#5c4338]">Nästa lediga · tisdag 10.30 · Linn</p>
        </div>
        <div className="relative min-h-[56vh] md:min-h-[82vh]">
          <Pic src="/images/salong.jpg?v=5" alt="Salongsstol vid fönster" className="absolute inset-0 size-full object-cover" width={1200} height={1600} priority />
        </div>
      </section>

      <section id="prislista" className="grid md:grid-cols-2">
        <div className="bg-[#efe6da] px-5 py-16 md:px-12">
          <h2 className="font-display text-4xl">Prislista</h2>
          <p className="mt-3 max-w-md text-sm text-[#6b574c]">
            Riktpriser. Längd och utgångsläge sätter det exakta priset när du bokar. Konsultation ingår.
          </p>
          <dl className="mt-10">
            {treatments.map((t) => (
              <div key={t.name} className="flex min-w-0 items-baseline justify-between gap-4 border-b border-[#3a2f28]/12 py-4">
                <dt className="min-w-0 font-display text-xl">{t.name}</dt>
                <dd className="shrink-0 tabular-nums">{t.price}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative min-h-[42vh]">
          <Pic src="/images/salong-detail.jpg?v=5" alt="Hylla med handdukar och produkter" className="absolute inset-0 size-full object-cover" width={1200} height={1600} />
        </div>
      </section>

      <section id="frisorer" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className="font-display text-4xl">Boka den du vill sitta hos.</h2>
        <p className="mt-3 max-w-xl text-[#6b574c]">Här lägger vi in era foton. Gästen bokar en person, inte “första lediga”.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stylists.map((p) => (
            <article key={p.name} className="bg-[#efe6da]">
              <div className="flex aspect-[3/4] flex-col items-center justify-center text-sm text-[#5c4338]">
                Bild på personal
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl">{p.name}</h3>
                <p className="mt-1 text-sm text-[#6b574c]">{p.role}</p>
                <a href="#boka" className="mt-5 inline-flex h-11 items-center bg-[#3a2f28] px-4 text-sm text-[#f6efe6]">
                  Boka {p.name.split(" ")[0]}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="boka" className="bg-[#3a2f28] px-5 py-16 text-[#f6efe6] md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Boka tid</h2>
            <p className="mt-4 max-w-md text-[#d9c8b8]">
              På den riktiga sidan kopplar vi Bokadirekt. Gästen väljer behandling och frisör.
            </p>
            <p className="mt-8 text-sm text-[#d9c8b8]">
              Tis–fre 10–19 · lör 10–15 · sön–mån stängt
              <br />
              Nybrogatan 18, Östermalm
            </p>
            <DemoPhoneLink tel="08-321 45 67" className="mt-6 block font-display text-3xl">
              08-321 45 67
            </DemoPhoneLink>
          </div>
          <form className="bg-[#f6efe6] p-6 text-[#3a2f28] md:p-8" onSubmit={(e) => e.preventDefault()}>
            <p className="font-display text-2xl">Ta en tid</p>
            <label className="mt-6 block text-sm">
              Behandling
              <select className="mt-1 h-12 w-full border border-[#3a2f28]/20 bg-[#f6efe6] px-3">
                {treatments.map((t) => (
                  <option key={t.name}>{t.name}</option>
                ))}
              </select>
            </label>
            <label className="mt-4 block text-sm">
              Frisör
              <select className="mt-1 h-12 w-full border border-[#3a2f28]/20 bg-[#f6efe6] px-3">
                {stylists.map((p) => (
                  <option key={p.name}>{p.name}</option>
                ))}
              </select>
            </label>
            <button type="submit" className="mt-6 inline-flex h-12 w-full items-center justify-center bg-[#3a2f28] text-sm text-[#f6efe6]">
              Boka tid
            </button>
            <p className="mt-3 text-center text-xs text-[#6b574c]">Exempel — ingen tid bokas här.</p>
          </form>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="px-5 py-14 md:px-12">
          <h2 className="font-display text-4xl">Nybrogatan 18</h2>
          <p className="mt-4 max-w-sm text-[#6b574c]">
            Östermalm, mellan Östermalmstorg och Karlaplan. Fem minuter från tunnelbanan.
          </p>
        </div>
        <iframe
          title="Karta till Ateljé Linné"
          src="https://maps.google.com/maps?q=Nybrogatan+18,+Stockholm&hl=sv&z=16&output=embed"
          className="h-80 w-full border-0 lg:h-full lg:min-h-[22rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      <DemoExit />
    </div>
  );
}
