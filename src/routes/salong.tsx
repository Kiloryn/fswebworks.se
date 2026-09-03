import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit, DemoPhoneLink } from "@/components/site/demo-banner";

export const Route = createFileRoute("/salong")({
  component: SalonDemo,
  head: () => ({
    meta: [{ title: "Ateljé Linné – exempelsida" }],
  }),
});

const treatments = [
  { name: "Klippning dam", price: "690 kr" },
  { name: "Klippning herr", price: "490 kr" },
  { name: "Färgning / toning", price: "från 1 890 kr" },
  { name: "Slingor", price: "från 2 190 kr" },
  { name: "Balayage", price: "från 3 290 kr" },
  { name: "Styling / uppsättning", price: "från 790 kr" },
];

const stylists = [
  { name: "Linn Åberg", role: "Frisör, färg" },
  { name: "Nora Ali", role: "Klippning och slingor" },
  { name: "Sam Berg", role: "Herr och skägg" },
];

const reviews = [
  {
    quote:
      "Linn lyssnade på vad jag faktiskt ville. Färgen blev den jag pekade på i telefonen, inte en annan nyans.",
    name: "Maja, Östermalm",
  },
  {
    quote:
      "Äntligen en salong som inte överbokar. Jag slapp vänta. Nora klippte precis så kort som vi sa.",
    name: "Erik, Gärdet",
  },
  {
    quote:
      "Slingor med mjuk övergång, inget orange efter två veckor. Kommer tillbaka.",
    name: "Sofia, Vasastan",
  },
];

function SalonDemo() {
  return (
    <div className="min-h-dvh bg-[#f6efe6] text-[#3a2f28]">
      <DemoBanner current="salong" />
      <header className="border-b border-[#3a2f28]/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-8">
          <p className="min-w-0 truncate font-display text-xl italic md:text-2xl">
            Ateljé Linné
          </p>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a href="#prislista" className="hover:underline">
              Priser
            </a>
            <a href="#frisorer" className="hover:underline">
              Frisörer
            </a>
            <a href="#boka" className="hover:underline">
              Hitta hit
            </a>
          </nav>
          <a
            href="#boka"
            className="inline-flex h-11 shrink-0 items-center rounded-full bg-[#3a2f28] px-5 text-sm text-[#f6efe6]"
          >
            Boka tid
          </a>
        </div>
      </header>

      <section className="grid md:grid-cols-2 md:items-stretch">
        <div className="flex flex-col justify-center px-5 py-12 md:px-10 lg:px-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#5c4338]">
            Östermalm · tisdag–lördag
          </p>
          <h1 className="mt-4 max-w-[12ch] font-display text-[2.7rem] italic leading-[0.98] md:text-6xl lg:text-7xl">
            Hårvård i ett lugnare tempo.
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-[#6b574c]">
            Klippning, färg, slingor och balayage. En tid i taget – du bokar
            frisören, inte en lucka i ett schema.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#boka"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#3a2f28] px-6 text-sm text-[#f6efe6]"
            >
              Boka tid
            </a>
            <a
              href="#prislista"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#3a2f28] px-6 text-sm"
            >
              Se priser
            </a>
          </div>
          <p className="mt-8 text-sm text-[#5c4338]">
            Nästa lediga tid · tisdag 10.30 · Linn
          </p>
        </div>
        <div className="relative min-h-[52vh] md:min-h-[78vh]">
          <Pic
            src="/images/salong.jpg?v=5"
            alt="Salongsstol vid fönster"
            className="absolute inset-0 size-full object-cover"
            width={1200}
            height={1600}
            priority
          />
        </div>
      </section>

      <section className="border-y border-[#3a2f28]/10 bg-[#efe6da]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
          {[
            ["Konsultation", "ingår alltid"],
            ["En gäst i taget", "ingen överbokning"],
            ["Kaffe och te", "medan färgen verkar"],
            ["Tis–lör", "Nybrogatan 18"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-display text-xl italic">{k}</p>
              <p className="mt-1 text-sm text-[#6b574c]">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="prislista" className="bg-[#efe6da] py-20">
        <div className="mx-auto grid max-w-6xl items-stretch gap-0 md:grid-cols-2">
          <div className="px-5 py-4 md:px-10 lg:px-16">
            <h2 className="font-display text-4xl italic">Prislista</h2>
            <p className="mt-3 max-w-md text-sm text-[#6b574c]">
              Riktpriser. Längd och utgångsläge sätter det exakta priset när du
              bokar. Konsultation ingår.
            </p>
            <dl className="mt-10">
              {treatments.map((t) => (
                <div
                  key={t.name}
                  className="flex items-baseline justify-between gap-4 border-b border-[#3a2f28]/12 py-4"
                >
                  <dt className="font-display text-xl italic md:text-2xl">{t.name}</dt>
                  <dd className="shrink-0 tabular-nums text-[#8a6234]">{t.price}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative min-h-[42vh] md:min-h-full">
            <Pic
              src="/images/salong-detail.jpg?v=5"
              alt="Hylla med handdukar och produkter"
              className="absolute inset-0 size-full object-cover"
              width={1200}
              height={1600}
            />
          </div>
        </div>
      </section>

      <section id="frisorer" className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#5c4338]">
                Frisörerna
              </p>
              <h2 className="mt-2 font-display text-3xl italic md:text-4xl">
                Boka den du vill sitta hos.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-[#6b574c]">
              Här lägger vi in era foton. Gästen bokar en person, inte “första
              lediga”.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stylists.map((p) => (
              <article key={p.name} className="bg-[#efe6da]">
                <div className="flex aspect-[3/4] flex-col items-center justify-center border-b border-[#3a2f28]/10">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#5c4338]">
                    Bild på personal
                  </span>
                  <span className="mt-2 text-sm text-[#6b574c]">Ert foto här</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl italic">{p.name}</h3>
                  <p className="mt-1 text-sm text-[#6b574c]">{p.role}</p>
                  <a
                    href="#boka"
                    className="mt-5 inline-flex h-10 items-center rounded-full bg-[#3a2f28] px-4 text-sm text-[#f6efe6]"
                  >
                    Boka {p.name.split(" ")[0]}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe6da] px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl italic md:text-4xl">De kommer tillbaka.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="bg-[#f6efe6] p-6 md:p-8">
                <blockquote className="font-display text-xl italic leading-snug">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-[#5c4338]">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="boka" className="bg-[#3a2f28] px-5 py-16 text-[#f6efe6] md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-4xl italic">Boka tid</h2>
            <p className="mt-4 max-w-md text-[#d9c8b8]">
              På den riktiga sidan kopplar vi Bokadirekt. Gästen väljer
              behandling och frisör, och tar en tid.
            </p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-[#d4b480]">
                  Öppet
                </dt>
                <dd className="mt-2 text-sm">
                  Tis–fre 10–19
                  <br />
                  Lör 10–15
                  <br />
                  Sön–mån stängt
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-[#d4b480]">
                  Hitta hit
                </dt>
                <dd className="mt-2 text-sm">
                  Nybrogatan 18
                  <br />
                  114 39 Stockholm
                  <br />
                  Östermalm
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-[#d4b480]">
                  Ring
                </dt>
                <dd className="mt-2">
                  <DemoPhoneLink tel="08-321 45 67" className="font-display text-2xl italic">
                    08-321 45 67
                  </DemoPhoneLink>
                </dd>
              </div>
            </dl>
          </div>
          <form
            className="rounded-2xl bg-[#f6efe6] p-6 text-[#3a2f28] md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="font-display text-2xl italic">Ta en tid</p>
            <label className="mt-6 block text-[11px] uppercase tracking-[0.18em] text-[#5c4338]">
              Behandling
              <select className="mt-2 h-12 w-full rounded-md border border-[#3a2f28]/20 bg-white px-3 text-sm">
                {treatments.map((t) => (
                  <option key={t.name}>{t.name}</option>
                ))}
              </select>
            </label>
            <label className="mt-4 block text-[11px] uppercase tracking-[0.18em] text-[#5c4338]">
              Frisör
              <select className="mt-2 h-12 w-full rounded-md border border-[#3a2f28]/20 bg-white px-3 text-sm">
                <option>Första lediga</option>
                {stylists.map((p) => (
                  <option key={p.name}>{p.name}</option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#3a2f28] text-sm text-[#f6efe6]"
            >
              Boka tid
            </button>
            <p className="mt-3 text-center text-xs text-[#6b574c]">
              Exempel – ingen tid bokas här.
            </p>
          </form>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="px-5 py-12 md:px-8 lg:px-16">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#5c4338]">
            Hitta hit
          </p>
          <h2 className="mt-2 font-display text-3xl italic">Nybrogatan 18</h2>
          <p className="mt-4 max-w-sm text-sm text-[#6b574c]">
            Östermalm, mellan Östermalmstorg och Karlaplan. Tunnelbana
            Östermalmstorg, fem minuter till fots.
          </p>
        </div>
        <iframe
          title="Karta till Ateljé Linné"
          src="https://maps.google.com/maps?q=Nybrogatan+18,+Stockholm&hl=sv&z=16&output=embed"
          className="h-72 w-full border-0 lg:h-full lg:min-h-[20rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      <DemoExit />
    </div>
  );
}
