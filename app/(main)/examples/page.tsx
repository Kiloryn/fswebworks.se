import Link from "next/link";

const EXAMPLE_CATEGORIES = [
  {
    slug: "vvs",
    name: "VVS & Rörmokare",
    description: "Akut service, jourdygnet runt, offertförfrågan. Perfekt för dig som vill synas och få fler kunder.",
  },
  {
    slug: "elektriker",
    name: "Elektriker",
    description: "Elinstallation, säkerhet, certifierad. Bygg förtroende med dokumenterad kompetens.",
  },
  {
    slug: "salong",
    name: "Salong/Skönhet",
    description: "Bokning, behandlingar, priser. Låt kunder boka direkt online.",
  },
  {
    slug: "restaurang",
    name: "Restaurang",
    description: "Meny, bordsbokning, evenemang. Visa upp mat och skapa stämning.",
  },
  {
    slug: "malare",
    name: "Målare",
    description: "Måleritjänster, inomhus/utomhus, kostnadsfri offert, professionellt utförande.",
  },
  {
    slug: "konsult",
    name: "Konsult/Företagstjänster",
    description: "Expertis, tjänster, kontakt. Bygg trovärdighet och få fler uppdrag.",
  },
];

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <h1 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4 text-center" data-aos="fade-up">
          Exempel på sidor
        </h1>
        <p className="text-[#999999] text-center max-w-2xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="50">
          Klicka på en kategori för att se en demosida. Alla exempel kan anpassas efter ditt företags varumärke och behov.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXAMPLE_CATEGORIES.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="block bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#c8a46e]/50 transition-all hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <h2 className="text-xl font-semibold text-[#f5f5f0] mb-2">{cat.name}</h2>
              <p className="text-[#999999] text-sm">{cat.description}</p>
              <span className="inline-block mt-4 text-[#c8a46e] text-sm font-medium">
                Se demosida →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors"
          >
            Kontakta oss
          </Link>
        </div>
      </div>
    </div>
  );
}
