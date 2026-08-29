import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit } from "@/components/site/demo-banner";

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
      <header className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-5 md:px-8">
        <p className="min-w-0 truncate font-display text-xl italic md:text-2xl">
          Ateljé Linné
        </p>
        <a
          href="#boka"
          className="inline-flex h-11 shrink-0 items-center rounded-full bg-[#3a2f28] px-5 text-sm text-[#f6efe6]"
        >
          Boka tid
        </a>
      </header>

      <section className="mx-auto grid max-w-5xl items-end gap-10 px-5 pb-16 md:grid-cols-2 md:px-8">
        <div className="pb-4">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#5c4338]">
            Östermalm · tis–lör
          </p>
          <h1 className="mt-4 font-display text-[2.6rem] italic leading-[0.98] md:text-7xl">
            Hårvård i ett lugnare tempo.
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-[#6b574c]">
            Klippning, färg, slingor och balayage. En tid i taget – du bokar
            frisören, inte en lucka i ett schema.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-sm">
            {["Klippning", "Färg", "Slingor", "Balayage"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#3a2f28]/20 px-3 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-6 inline-flex items-center rounded-full border border-[#3a2f28]/20 px-4 py-2 text-sm">
            Nästa lediga tid · tisdag 10.30
          </p>
        </div>
        <Pic
          src="/images/salong.jpg?v=5"
          alt="Salongsstol vid fönster"
          className="aspect-[4/5] max-h-[70dvh] w-full rounded-t-[5rem] object-cover md:max-h-none md:rounded-t-[11rem]"
          width={1200}
          height={1600}
          priority
        />
      </section>

      <section className="bg-[#3a2f28] py-20 text-[#f6efe6]">
        <div className="mx-auto grid max-w-5xl items-start gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-display text-4xl italic">Prislista</h2>
            <p className="mt-3 text-sm text-[#d9c8b8]">
              Riktpriser. Längd och utgångsläge sätter det exakta priset vid
              bokningen. Konsultation ingår.
            </p>
            <dl className="mt-8 space-y-4">
              {treatments.map((t) => (
                <div
                  key={t.name}
                  className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3"
                >
                  <dt className="font-display text-xl italic">{t.name}</dt>
                  <dd className="tabular-nums text-[#d4b480]">{t.price}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Pic
            src="/images/salong-detail.jpg?v=5"
            alt="Hylla med handdukar och produkter"
            className="aspect-[3/4] w-full object-cover md:mt-12"
            width={1200}
            height={1600}
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#5c4338]">
          Frisörerna
        </p>
        <h2 className="mt-2 font-display text-3xl italic">Boka den du vill sitta hos.</h2>
        <p className="mt-3 max-w-xl text-sm text-[#6b574c]">
          Här lägger vi in era foton. Gästen bokar en person, inte “första
          lediga”.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {stylists.map((p) => (
            <article key={p.name} className="flex gap-5">
              <div className="flex aspect-[3/4] w-36 shrink-0 flex-col items-center justify-center border border-[#3a2f28]/15 bg-[#efe6da] sm:w-44">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#5c4338]">
                  Bild på personal
                </span>
                <span className="mt-1 text-xs text-[#6b574c]/80">Ert foto här</span>
              </div>
              <div className="pt-2">
                <h3 className="font-display text-2xl italic">{p.name}</h3>
                <p className="mt-1 text-sm text-[#6b574c]">{p.role}</p>
                <a
                  href="#boka"
                  className="mt-4 inline-flex h-10 items-center rounded-full border border-[#3a2f28] px-4 text-sm"
                >
                  Boka {p.name.split(" ")[0]}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#3a2f28]/10 bg-[#efe6da]">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#5c4338]">
            Recensioner
          </p>
          <h2 className="mt-2 font-display text-3xl italic">De kommer tillbaka.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="border-t border-[#3a2f28]/15 pt-5">
                <blockquote className="text-[15px] leading-relaxed text-[#5c4338]">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="boka" className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <h2 className="font-display text-3xl italic md:text-4xl">Boka tid</h2>
            <p className="mt-3 max-w-md text-[#6b574c]">
              På den riktiga sidan kopplar vi Bokadirekt. Gästen väljer
              behandling och frisör, och tar en tid.
            </p>
            <p className="mt-6 text-sm text-[#6b574c]">
              Tisdag–fredag 10–19 · lördag 10–15
              <br />
              Nybrogatan 18 · Östermalm
            </p>
            <a
              href="tel:083214567"
              className="mt-6 inline-block font-display text-3xl italic md:text-4xl"
            >
              08-321 45 67
            </a>
          </div>
          <form
            className="rounded-2xl border border-[#3a2f28]/15 bg-white p-5 shadow-[0_18px_40px_-28px_rgb(58_47_40_/_0.45)]"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="block text-[11px] uppercase tracking-[0.18em] text-[#5c4338]">
              Behandling
              <select className="mt-2 h-11 w-full rounded-md border border-[#3a2f28]/20 bg-[#f6efe6] px-3 text-sm text-[#3a2f28]">
                {treatments.map((t) => (
                  <option key={t.name}>{t.name}</option>
                ))}
              </select>
            </label>
            <label className="mt-4 block text-[11px] uppercase tracking-[0.18em] text-[#5c4338]">
              Frisör
              <select className="mt-2 h-11 w-full rounded-md border border-[#3a2f28]/20 bg-[#f6efe6] px-3 text-sm text-[#3a2f28]">
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
      <DemoExit />
    </div>
  );
}
