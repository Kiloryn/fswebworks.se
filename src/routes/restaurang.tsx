import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit, DemoPhoneLink } from "@/components/site/demo-banner";

export const Route = createFileRoute("/restaurang")({
  component: RestaurantDemo,
  head: () => ({
    meta: [{ title: "Trattoria Nove – exempelsida" }],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap",
      },
    ],
  }),
});

const lunch = [
  ["Dagens pasta", "145 kr"],
  ["Kycklingsallad", "155 kr"],
  ["Pasta aglio e olio", "135 kr"],
];
const dinner = [
  ["Burrata, tomat och olja", "135 kr"],
  ["Tagliatelle, tomat och basilika", "195 kr"],
  ["Kalvgryta med gremolata", "285 kr"],
  ["Tiramisu", "95 kr"],
];

function RestaurantDemo() {
  return (
    <div className="demo-krog min-h-svh bg-[#f6eee4] text-[#1a0f0d]">
      <DemoBanner current="restaurang" />
      <header className="bg-[#1a0f0d] text-[#f3e6d8]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
          <p className="font-display text-2xl">Trattoria Nove</p>
          <a href="#boka" className="inline-flex h-11 items-center bg-[#f3e6d8] px-4 text-sm text-[#1a0f0d]">
            Boka bord
          </a>
        </div>
      </header>

      <section id="meny" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm text-[#5c4338]">Folkungagatan 48 · Södermalm</p>
        <h1 className="mt-3 font-display text-5xl leading-[1.02] md:text-7xl">
          Pasta. Vin. Inget krångel.
        </h1>
        <div className="mt-16 grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">Lunch</h2>
            <p className="mt-1 text-sm text-[#5c4338]">Mån–fre 11–14</p>
            <ul className="mt-8 divide-y divide-[#1a0f0d]/10 border-y border-[#1a0f0d]/10">
              {lunch.map(([n, p]) => (
                <li key={n} className="flex items-baseline justify-between gap-4 py-5">
                  <span className="min-w-0 font-display text-2xl">{n}</span>
                  <span className="shrink-0 tabular-nums">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl">Kväll</h2>
            <p className="mt-1 text-sm text-[#5c4338]">Tis–sön 17–23</p>
            <ul className="mt-8 divide-y divide-[#1a0f0d]/10 border-y border-[#1a0f0d]/10">
              {dinner.map(([n, p]) => (
                <li key={n} className="flex items-baseline justify-between gap-4 py-5">
                  <span className="min-w-0 font-display text-2xl">{n}</span>
                  <span className="shrink-0 tabular-nums">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="relative min-h-[60vh] md:min-h-[75vh]">
        <Pic src="/images/restaurang.jpg?v=5" alt="Tagliatelle och ett glas vin" className="absolute inset-0 size-full object-cover" width={1400} height={1050} priority />
      </div>

      <section id="boka" className="bg-[#1a0f0d] px-5 py-16 text-[#f3e6d8] md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Boka bord</h2>
            <p className="mt-4 max-w-md text-[#e2d0c0]">
              Lunch utan bokning går ofta bra. Till kvällen vill vi ha borden klara.
            </p>
            <DemoPhoneLink tel="08-567 890 12" className="mt-8 block font-display text-4xl">
              08-567 890 12
            </DemoPhoneLink>
          </div>
          <form className="border border-white/15 p-6 md:p-8" onSubmit={(e) => e.preventDefault()}>
            <p className="font-display text-2xl">Kvällsbord</p>
            <label className="mt-6 block text-sm">
              Gäster
              <select className="mt-1 h-12 w-full border border-white/15 bg-[#241614] px-3">
                {["2", "3", "4", "5", "6", "8"].map((n) => (
                  <option key={n}>{n} personer</option>
                ))}
              </select>
            </label>
            <label className="mt-4 block text-sm">
              Tid
              <select className="mt-1 h-12 w-full border border-white/15 bg-[#241614] px-3">
                {["17.30", "18.00", "18.30", "19.00", "19.30"].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </label>
            <label className="mt-4 block text-sm">
              Namn
              <input className="mt-1 h-12 w-full border border-white/15 bg-[#241614] px-3" />
            </label>
            <button type="submit" className="mt-6 inline-flex h-12 w-full items-center justify-center bg-[#f3e6d8] text-sm text-[#1a0f0d]">
              Boka bord
            </button>
            <p className="mt-3 text-center text-xs text-[#e2d0c0]/70">Exempel — ingen bokning görs här.</p>
          </form>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="bg-[#eadccb] px-5 py-14 md:px-12">
          <h2 className="font-display text-4xl">Folkungagatan 48</h2>
          <p className="mt-4 max-w-sm text-[#5c4338]">Södermalm, nära Medborgarplatsen.</p>
        </div>
        <iframe
          title="Karta till Trattoria Nove"
          src="https://maps.google.com/maps?q=Folkungagatan+48,+Stockholm&hl=sv&z=16&output=embed"
          className="h-80 w-full border-0 lg:min-h-[22rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      <DemoExit />
    </div>
  );
}
