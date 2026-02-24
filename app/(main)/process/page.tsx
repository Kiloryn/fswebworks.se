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
    items: [
      "Telefon",
      "E-post",
      "Adress (om relevant)",
      "Organisationsnummer",
    ],
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
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <h1 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4" data-aos="fade-up">
          Så förbereder du innehållet till din hemsida
        </h1>
        <h2 className="text-xl text-[#c8a46e] font-semibold mb-6" data-aos="fade-up" data-aos-delay="50">
          Vi börjar alltid med ett samtal
        </h2>
        <p className="text-[#999999] text-lg mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Du behöver inte ha allt klart från början – men följande hjälper oss att komma igång smidigt:
        </p>

        <ul className="space-y-8 mb-12">
          {CHECKLIST.map((block, i) => (
            <li key={block.title} data-aos="fade-up" data-aos-delay={100 + i * 50}>
              <h3 className="text-lg font-semibold text-[#f5f5f0] mb-3">{block.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-[#999999]">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="text-[#999999] text-lg leading-relaxed mb-10" data-aos="fade-up">
          Saknas något? Inga problem. Vi hjälper gärna till att strukturera och anpassa innehållet under arbetets gång.
        </p>

        <Link
          href="/#contact"
          className="inline-block px-8 py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors"
        >
          Kontakta oss
        </Link>
      </div>
    </div>
  );
}
