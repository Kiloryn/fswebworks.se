import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Pic } from "@/components/site/pic";
import { DemoBanner, DemoExit } from "@/components/site/demo-banner";

export const Route = createFileRoute("/vvs")({
  component: VvsDemo,
  head: () => ({
    meta: [{ title: "Din Rörmokare i Stockholm – exempelsida" }],
  }),
});

const services = [
  {
    title: "Akut läckage",
    body: "Kran, rör eller beredare som ger upp mitt i natten. Vi åker ut, stänger vattnet och lagar.",
  },
  {
    title: "Stopp i avlopp",
    body: "Kök, badrum och stam. Vi rensar och säger till om det är ett större fel.",
  },
  {
    title: "Badrum och kök",
    body: "Nyinstallation vid renovering. Rör, golvbrunn, blandare – offert på plats.",
  },
  {
    title: "Värme",
    body: "Radiatorer, golvvärme och varmvattenberedare. Service och byte.",
  },
];

const reviews = [
  {
    quote:
      "Stopp i köket en lördag. De svarade direkt, var här samma dag och lämnade rent efter sig.",
    name: "Linda, Södermalm",
  },
  {
    quote:
      "Tydlig offert innan de började, inga överraskningar på fakturan. Så ska en rörmokare vara.",
    name: "Marcus, Solna",
  },
  {
    quote:
      "Bytte beredare i radhuset. Förklarade vad som var fel och vad ROT täckte. Tryggt hela vägen.",
    name: "Eva, Täby",
  },
];

const faq = [
  {
    q: "Det läcker – vad gör jag?",
    a: "Stäng ventilen vid vattenmätaren om du hittar den. Ring oss. Vi tar jour dygnet runt i Storstockholm.",
  },
  {
    q: "Jobbar ni med ROT-avdrag?",
    a: "Ja, på arbetskostnaden för privatpersoner i befintlig bostad. Vi sköter underlaget, du får avdraget på fakturan.",
  },
  {
    q: "Vad kostar ett hembesök?",
    a: "Akut utryckning från 1 290 kr. Mindre jobb kan vi ofta prissätta från bilder du skickar. Du får alltid pris innan vi sätter igång.",
  },
  {
    q: "Var kör ni?",
    a: "Hela Storstockholm – innerstan, krans och en bit utanför. Säg var du bor så säger vi om vi tar det.",
  },
];

function VvsDemo() {
  return (
    <div className="min-h-dvh bg-[#0e1418] text-[#e8efe9]">
      <DemoBanner current="vvs" />
      <a
        href="tel:0812345678"
        className="flex items-center justify-center gap-2 bg-[#c45c3a] px-4 py-3 text-center text-[13px] font-medium text-white"
      >
        <Phone className="size-4" />
        <span className="sm:hidden">Akut? 08-123 456 78</span>
        <span className="hidden sm:inline">
          Akut? Ring 08-123 456 78 — jour dygnet runt
        </span>
      </a>

      <section className="relative isolate">
        <Pic
          src="/images/vvs.jpg?v=6"
          alt="Rörmokare drar åt kopparrör"
          className="h-[62dvh] w-full object-cover md:h-[78vh]"
          width={1400}
          height={788}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1418] via-[#0e1418]/55 to-black/15" />
        <p className="absolute left-5 top-5 font-display text-xl italic md:left-8 md:text-2xl">
          Din Rörmokare
        </p>
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-5 pb-10 md:px-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#e8b89a]">
            Stockholm · sedan 2009 · jour dygnet runt
          </p>
          <h1 className="mt-3 max-w-[13ch] font-display text-[2.45rem] italic leading-[0.98] md:text-6xl lg:text-7xl">
            Kranen gick sönder. Vi är på väg.
          </h1>
          <p className="mt-4 max-w-md text-sm text-[#c5d0c8] md:text-base">
            Akut VVS, badrum och värme för villor, lägenheter och BRF.
            Offert innan vi sätter igång.
          </p>
          <a
            href="tel:0812345678"
            className="mt-6 inline-flex h-12 items-center rounded-md bg-[#c45c3a] px-5 text-sm font-medium text-white hover:bg-[#b04f32]"
          >
            Ring 08-123 456 78
          </a>
        </div>
      </section>

      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-10 sm:grid-cols-4 md:px-8">
          {[
            ["4,9", "på Google"],
            ["Sedan 2009", "i Stockholm"],
            ["ROT", "på arbetskostnaden"],
            ["15 min", "till återkoppling"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-display text-3xl italic text-[#e8b89a]">{k}</p>
              <p className="mt-1 text-sm text-[#c5d0c8]">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#e8b89a]">
          Recensioner
        </p>
        <h2 className="mt-2 font-display text-3xl italic">Folk ringer tillbaka.</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="border-t border-white/15 pt-5">
              <blockquote className="text-[15px] leading-relaxed text-[#c5d0c8]">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-[#e8b89a]">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8">
          <h2 className="font-display text-3xl italic">Vad vi gör</h2>
          <p className="mt-3 max-w-xl text-sm text-[#c5d0c8]">
            Service, reparation och nyinstallation. Privat, villa och förening.
          </p>
          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2">
            {services.map((s) => (
              <article key={s.title} className="bg-[#0e1418] p-6 md:p-8">
                <h3 className="font-display text-2xl italic">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#c5d0c8]">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 className="font-display text-3xl italic">Riktpriser</h2>
          <p className="mt-2 text-sm text-[#c5d0c8]">
            Exkl. moms. Fast pris innan vi börjar – inga överraskningar.
          </p>
          <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {[
              ["Utryckning, akuttid", "från 1 290 kr"],
              ["Enklare reparation", "från 690 kr/tim"],
              ["Stopp i avlopp", "från 1 490 kr"],
              ["Badrum / beredare", "enligt offert"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-4 py-4">
                <dt className="min-w-0">{k}</dt>
                <dd className="shrink-0 tabular-nums text-[#e8b89a]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8">
          <h2 className="font-display text-3xl italic">Vanliga frågor</h2>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none font-medium marker:content-none">
                  {item.q}
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#c5d0c8]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="offert" className="bg-[#c45c3a] px-5 py-16 text-white md:px-8">
        <div className="mx-auto max-w-5xl md:flex md:items-end md:justify-between md:gap-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/80">
              Jour dygnet runt · Storstockholm
            </p>
            <h2 className="mt-3 font-display text-3xl italic md:text-4xl">
              Hör av dig. Vi tar det därifrån.
            </h2>
            <p className="mt-3 max-w-md text-white/85">
              Ring, eller skicka en bild på felet så återkommer vi med pris.
              ROT på arbetskostnaden.
            </p>
          </div>
          <a
            href="tel:0812345678"
            className="mt-8 block font-display text-4xl italic leading-none md:mt-0 md:text-5xl"
          >
            08-123 456 78
          </a>
        </div>
      </section>
      <DemoExit />
    </div>
  );
}
