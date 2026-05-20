import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Förbered innehåll till din hemsida – FSwebworks",
  description:
    "Checklista för texter, bilder och kontaktuppgifter inför din nya hemsida. Vi börjar alltid med ett kostnadsfritt samtal.",
  alternates: { canonical: "/process" },
};

const CHECKLIST = [
  {
    title: "Om företaget",
    items: [
      "Kort beskrivning av vad ni gör",
      "Hur länge ni har funnits (om relevant)",
      "Var ni verkar (ort/region)",
    ],
  },
  {
    title: "Tjänster",
    items: [
      "Vilka tjänster ni erbjuder",
      "Eventuella specialområden",
      "Hur kunder kontaktar er",
    ],
  },
  {
    title: "Kontaktuppgifter",
    items: ["Telefon", "E-post", "Adress (om relevant)", "Organisationsnummer"],
  },
  {
    title: "Bilder (om ni har)",
    items: [
      "Logotyp",
      "Bilder på arbete, lokaler eller team (mobilbilder fungerar oftast utmärkt)",
    ],
  },
  {
    title: "Övrigt (valfritt)",
    items: [
      "Referenser eller omdömen",
      "Certifieringar",
      "Tidigare material (broschyr, Facebook-sida, gammal hemsida)",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]" data-oid="a_m4-9u">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28" data-oid="9dfjd.v">
        <h1
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-[#f5f5f0] mb-4"
          data-aos="fade-up"
          data-oid="w6ic9kd"
        >
          Så förbereder du innehållet till din hemsida
        </h1>
        <h2
          className="text-xl text-[#c8a46e] font-semibold mb-6"
          data-aos="fade-up"
          data-aos-delay="50"
          data-oid="1qd-ugk"
        >
          Vi börjar alltid med ett samtal
        </h2>
        <p
          className="text-gray-600 dark:text-[#cccccc] text-lg mb-12 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
          data-oid="-tsvd6y"
        >
          Du behöver inte ha allt klart från början – men följande hjälper oss
          att komma igång smidigt:
        </p>

        <ul className="space-y-6 mb-12" data-oid="6:js2ts">
          {CHECKLIST.map((block, i) => (
            <li
              key={block.title}
              className="relative bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl p-6 transition-all duration-300 hover:border-[#c8a46e]/30"
              data-aos="fade-up"
              data-aos-delay={100 + i * 50}
              data-oid="muvde6e"
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#c8a46e]/15 text-[#8b7355] dark:text-[#c8a46e] text-sm font-bold">
                  {i + 1}
                </span>
                <div>
                  <h3
                    className="text-lg font-semibold text-gray-900 dark:text-[#f5f5f0] mb-3"
                    data-oid="sbwxq72"
                  >
                    {block.title}
                  </h3>
                  <ul
                    className="space-y-2 text-gray-600 dark:text-[#cccccc]"
                    data-oid="g.9nxte"
                  >
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2" data-oid="5m:b-uc">
                        <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#c8a46e]/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p
          className="text-gray-600 dark:text-[#cccccc] text-lg leading-relaxed mb-10"
          data-aos="fade-up"
          data-oid="d10cwly"
        >
          Saknas något? Inga problem. Vi hjälper gärna till att strukturera och
          anpassa innehållet under arbetets gång.
        </p>

        <Link
          href="/#contact"
          className="inline-block px-8 py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c8a46e]/25"
          data-oid=".rbhkpj"
        >
          Kontakta oss
        </Link>
      </div>
    </div>
  );
}
