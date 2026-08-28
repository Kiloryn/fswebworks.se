import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit } from "@/components/site/demo-banner";

export const Route = createFileRoute("/restaurang")({
  component: RestaurantDemo,
  head: () => ({
    meta: [{ title: "Trattoria Nove – exempelsida" }],
  }),
});

const lunch = [
  ["Dagens pasta", "145 kr"],
  ["Kycklingsallad", "155 kr"],
  ["Pasta aglio e olio", "135 kr"],
];

const dinner = [
  ["Tagliatelle, tomat och basilika", "195 kr"],
  ["Kalvgryta med gremolata", "285 kr"],
  ["Tiramisu", "95 kr"],
];

function RestaurantDemo() {
  return (
    <div className="min-h-dvh bg-[#1a0f0d] text-[#f3e6d8]">
      <DemoBanner current="restaurang" />
      <header className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-5 md:px-8">
        <p className="min-w-0 truncate font-display text-xl italic md:text-2xl">
          Trattoria Nove
        </p>
        <a
          href="#boka"
          className="inline-flex h-11 shrink-0 items-center rounded-sm bg-[#f3e6d8] px-4 text-sm font-medium text-[#1a0f0d]"
        >
          Boka bord
        </a>
      </header>
      <section className="relative isolate">
        <Pic
          src="/images/restaurang.jpg?v=5"
          alt="Tagliatelle och ett glas vin"
          className="h-[70dvh] w-full object-cover md:h-[85vh]"
          width={1400}
          height={1050}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0d] via-[#1a0f0d]/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-10 mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#d4b480]">
            Södermalm · Stockholm
          </p>
          <h1 className="mt-3 max-w-[11ch] font-display text-[2.7rem] italic leading-[0.98] md:text-7xl">
            Pasta. Vin. Inget krångel.
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-md px-5 py-20 text-center">
        <p className="font-display text-2xl italic leading-relaxed text-[#e2d0c0]">
          En liten italiensk krog på Söder. Handgjord pasta, korta menyer,
          husets rödvin.
        </p>
        <div className="mx-auto mt-8 h-px w-16 bg-[#d4b480]/60" />
        <p className="mt-16 text-[11px] uppercase tracking-[0.28em] text-[#d4b480]">
          Lunch · mån–fre
        </p>
        <ul className="mt-8 space-y-6">
          {lunch.map(([n, p]) => (
            <li key={n}>
              <p className="font-display text-2xl italic">{n}</p>
              <p className="mt-1 text-sm tabular-nums text-[#d4b480]">{p}</p>
            </li>
          ))}
        </ul>
        <p className="mt-16 text-[11px] uppercase tracking-[0.28em] text-[#d4b480]">
          Kväll
        </p>
        <ul className="mt-8 space-y-6">
          {dinner.map(([n, p]) => (
            <li key={n}>
              <p className="font-display text-2xl italic">{n}</p>
              <p className="mt-1 text-sm tabular-nums text-[#d4b480]">{p}</p>
            </li>
          ))}
        </ul>
      </section>
      <section id="boka" className="bg-[#f3e6d8] px-5 py-16 text-[#1a0f0d] md:px-8">
        <div className="mx-auto max-w-5xl md:flex md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl italic">Boka bord</h2>
            <p className="mt-3">Lunch mån–fre 11–14 · Middag tis–sön 17–23</p>
            <p className="mt-1 text-sm">Folkungagatan 48</p>
          </div>
          <a
            href="tel:0856789012"
            className="mt-8 block font-display text-4xl italic leading-none md:mt-0 md:text-5xl"
          >
            08-567 890 12
          </a>
        </div>
      </section>
      <DemoExit />
    </div>
  );
}
