import { createFileRoute } from "@tanstack/react-router";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit, DemoPhoneLink } from "@/components/site/demo-banner";

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
  ["Burrata, tomat och olja", "135 kr"],
  ["Tagliatelle, tomat och basilika", "195 kr"],
  ["Kalvgryta med gremolata", "285 kr"],
  ["Tiramisu", "95 kr"],
];

const reviews = [
  {
    quote: "Pasta som smakar som i Rom, utan att det blir teater av det. Vi tar alltid husets rödvin.",
    name: "Klara, Södermalm",
  },
  {
    quote: "Litet ställe, bordet var dukat när vi kom. Ingen stress, inget surr.",
    name: "Johan och Mia",
  },
  {
    quote: "Bästa lunchen i kvarteret. Dagens pasta, 25 minuter, tillbaka på jobbet.",
    name: "Erik, Folkungagatan",
  },
];

function RestaurantDemo() {
  return (
    <div className="min-h-dvh bg-[#f6eee4] text-[#1a0f0d]">
      <DemoBanner current="restaurang" />
      <header className="border-b border-[#1a0f0d]/10 bg-[#1a0f0d] text-[#f3e6d8]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-8">
          <p className="min-w-0 truncate font-display text-xl italic md:text-2xl">
            Trattoria Nove
          </p>
          <nav className="hidden items-center gap-7 text-sm text-[#e2d0c0] md:flex">
            <a href="#meny" className="hover:text-[#f3e6d8]">
              Meny
            </a>
            <a href="#boka" className="hover:text-[#f3e6d8]">
              Boka
            </a>
            <a href="#hitta" className="hover:text-[#f3e6d8]">
              Hitta hit
            </a>
          </nav>
          <a
            href="#boka"
            className="inline-flex h-11 shrink-0 items-center rounded-sm bg-[#f3e6d8] px-4 text-sm font-medium text-[#1a0f0d]"
          >
            Boka bord
          </a>
        </div>
      </header>

      <section className="relative isolate text-[#f3e6d8]">
        <Pic
          src="/images/restaurang.jpg?v=5"
          alt="Tagliatelle och ett glas vin"
          className="h-[62dvh] w-full object-cover md:h-[82vh]"
          width={1400}
          height={1050}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0d] via-[#1a0f0d]/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-10 md:px-8 md:pb-14">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#d4b480]">
            Folkungagatan · Södermalm
          </p>
          <h1 className="mt-3 max-w-[12ch] font-display text-[2.6rem] italic leading-[0.98] md:text-7xl">
            Pasta. Vin. Inget krångel.
          </h1>
          <p className="mt-4 max-w-md text-sm text-[#e2d0c0] md:text-base">
            En liten italiensk krog. Handgjord pasta, korta menyer, husets
            rödvin. Boka bord eller kom förbi på lunchen.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#boka"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-[#f3e6d8] px-5 text-sm font-medium text-[#1a0f0d]"
            >
              Boka bord
            </a>
            <a
              href="#meny"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-[#f3e6d8]/40 px-5 text-sm"
            >
              Se menyn
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#eadccb]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 sm:grid-cols-3 md:px-8">
          {[
            ["Lunch", "mån–fre 11–14"],
            ["Middag", "tis–sön 17–23"],
            ["Bord", "2–8 personer"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-display text-2xl italic text-[#8a6234]">{k}</p>
              <p className="mt-1 text-sm text-[#5c4338]">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="meny" className="bg-[#f6eee4] px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a6234]">
              Lunch · mån–fre
            </p>
            <h2 className="mt-2 font-display text-3xl italic">Kort och klart.</h2>
            <ul className="mt-8 divide-y divide-[#1a0f0d]/10 border-y border-[#1a0f0d]/10">
              {lunch.map(([n, p]) => (
                <li key={n} className="flex items-baseline justify-between gap-4 py-5">
                  <p className="font-display text-xl italic md:text-2xl">{n}</p>
                  <p className="shrink-0 tabular-nums text-[#8a6234]">{p}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a6234]">
              Kväll · tis–sön
            </p>
            <h2 className="mt-2 font-display text-3xl italic">Huset lagar pasta.</h2>
            <ul className="mt-8 divide-y divide-[#1a0f0d]/10 border-y border-[#1a0f0d]/10">
              {dinner.map(([n, p]) => (
                <li key={n} className="flex items-baseline justify-between gap-4 py-5">
                  <p className="font-display text-xl italic md:text-2xl">{n}</p>
                  <p className="shrink-0 tabular-nums text-[#8a6234]">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#2a1814] px-5 py-16 text-[#f3e6d8] md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl italic">De tar samma bord igen.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="bg-[#3a221c] p-6 md:p-8">
                <blockquote className="font-display text-xl italic leading-snug">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-[#d4b480]">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="boka" className="bg-[#f3e6d8] px-5 py-16 text-[#1a0f0d] md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl italic">Boka bord</h2>
            <p className="mt-4 max-w-md">
              Lunch utan bokning går ofta bra. Till kvällen vill vi ha borden
              klara – ring eller boka här.
            </p>
            <p className="mt-6 text-sm">
              Lunch mån–fre 11–14
              <br />
              Middag tis–sön 17–23
              <br />
              Folkungagatan 48, Södermalm
            </p>
            <DemoPhoneLink
              tel="08-567 890 12"
              className="mt-6 inline-block font-display text-3xl italic md:text-4xl"
            >
              08-567 890 12
            </DemoPhoneLink>
          </div>
          <form
            className="bg-[#1a0f0d] p-6 text-[#f3e6d8] md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="font-display text-2xl italic">Kvällsbord</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-[11px] uppercase tracking-[0.16em] text-[#d4b480]">
                Gäster
                <select className="mt-2 h-12 w-full rounded-sm border border-white/15 bg-[#241614] px-3 text-sm text-[#f3e6d8]">
                  {["2", "3", "4", "5", "6", "7", "8"].map((n) => (
                    <option key={n}>{n} personer</option>
                  ))}
                </select>
              </label>
              <label className="text-[11px] uppercase tracking-[0.16em] text-[#d4b480]">
                Tid
                <select className="mt-2 h-12 w-full rounded-sm border border-white/15 bg-[#241614] px-3 text-sm text-[#f3e6d8]">
                  {["17.30", "18.00", "18.30", "19.00", "19.30", "20.00"].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="mt-4 block text-[11px] uppercase tracking-[0.16em] text-[#d4b480]">
              Namn
              <input className="mt-2 h-12 w-full rounded-sm border border-white/15 bg-[#241614] px-3 text-sm text-[#f3e6d8]" />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-sm bg-[#f3e6d8] text-sm font-medium text-[#1a0f0d]"
            >
              Boka bord
            </button>
            <p className="mt-3 text-center text-xs text-[#e2d0c0]/70">
              Exempel – ingen bokning görs här.
            </p>
          </form>
        </div>
      </section>

      <section id="hitta" className="bg-[#eadccb]">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="px-5 py-12 md:px-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#8a6234]">
              Hitta hit
            </p>
            <h2 className="mt-2 font-display text-3xl italic">Folkungagatan 48</h2>
            <p className="mt-4 max-w-sm text-sm text-[#5c4338]">
              Södermalm, ett stenkast från Medborgarplatsen. Tunnelbana
              Medborgarplatsen, buss längs Folkungagatan.
            </p>
            <p className="mt-6 text-sm text-[#5c4338]">
              08-567 890 12
              <br />
              bord@trattorianove.se
            </p>
          </div>
          <iframe
            title="Karta till Trattoria Nove"
            src="https://maps.google.com/maps?q=Folkungagatan+48,+Stockholm&hl=sv&z=16&output=embed"
            className="h-72 w-full border-0 lg:h-full lg:min-h-[22rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <DemoExit />
    </div>
  );
}
