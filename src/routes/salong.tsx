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
  { name: "Färgning", price: "från 1 290 kr" },
  { name: "Slingor", price: "från 1 890 kr" },
  { name: "Ansiktsbehandling", price: "890 kr" },
  { name: "Bröllop och fest", price: "enligt offert" },
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
            Klippning, färg och behandlingar i en liten ateljé. En tid i taget –
            ingen stress, ingen överbokning.
          </p>
          <p className="mt-8 inline-flex items-center rounded-full border border-[#3a2f28]/20 px-4 py-2 text-sm">
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
            <h2 className="font-display text-4xl italic">Behandlingar</h2>
            <p className="mt-3 text-sm text-[#d9c8b8]">
              Priser är riktvärden. Exakt pris sätts vid bokning.
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
      <section id="boka" className="mx-auto max-w-5xl px-5 py-16 md:flex md:items-end md:justify-between md:px-8">
        <div>
          <h2 className="font-display text-3xl italic">Boka eller kom förbi</h2>
          <p className="mt-3 text-[#6b574c]">Tisdag–fredag 10–19 · lördag 10–15</p>
          <p className="mt-1 text-[#6b574c]">Nybrogatan 18 · Östermalm</p>
        </div>
        <a
          href="tel:083214567"
          className="mt-8 block font-display text-4xl italic leading-none md:mt-0 md:text-5xl"
        >
          08-321 45 67
        </a>
      </section>
      <DemoExit />
    </div>
  );
}
