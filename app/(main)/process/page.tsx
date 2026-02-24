import Link from "next/link";

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
          className="text-gray-600 dark:text-[#999999] text-lg mb-10 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
          data-oid="-tsvd6y"
        >
          Du behöver inte ha allt klart från början – men följande hjälper oss
          att komma igång smidigt:
        </p>

        <ul className="space-y-8 mb-12" data-oid="6:js2ts">
          {CHECKLIST.map((block, i) => (
            <li
              key={block.title}
              data-aos="fade-up"
              data-aos-delay={100 + i * 50}
              data-oid="muvde6e"
            >
              <h3
                className="text-lg font-semibold text-gray-900 dark:text-[#f5f5f0] mb-3"
                data-oid="sbwxq72"
              >
                {block.title}
              </h3>
              <ul
                className="list-disc list-inside space-y-2 text-gray-600 dark:text-[#999999]"
                data-oid="g.9nxte"
              >
                {block.items.map((item, j) => (
                  <li key={j} data-oid="5m:b-uc">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p
          className="text-gray-600 dark:text-[#999999] text-lg leading-relaxed mb-10"
          data-aos="fade-up"
          data-oid="d10cwly"
        >
          Saknas något? Inga problem. Vi hjälper gärna till att strukturera och
          anpassa innehållet under arbetets gång.
        </p>

        <Link
          href="/#contact"
          className="inline-block px-8 py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors"
          data-oid=".rbhkpj"
        >
          Kontakta oss
        </Link>
      </div>
    </div>
  );
}
