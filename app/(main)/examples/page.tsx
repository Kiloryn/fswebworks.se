import Link from "next/link";
import { EXAMPLE_CATEGORIES } from "@/lib/example-categories";

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]" data-oid="8o:ol8v">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28" data-oid="7xrif-t">
        <h1
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-[#f5f5f0] mb-4 text-center"
          data-aos="fade-up"
          data-oid="5n:obs0"
        >
          Exempel på sidor
        </h1>
        <p
          className="text-gray-600 dark:text-[#999999] text-center max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="50"
          data-oid="nrnb8xr"
        >
          Klicka på en kategori för att se en demosida. Alla exempel kan
          anpassas efter ditt företags varumärke och behov.
        </p>

        <div
          id="examples-grid"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="6zi_g:_"
        >
          {EXAMPLE_CATEGORIES.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="block bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-2xl p-6 hover:border-[#c8a46e]/50 transition-all hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-anchor="#examples-grid"
              data-aos-delay="0"
              data-oid="jozmfyk"
            >
              <h2
                className="text-xl font-semibold text-gray-900 dark:text-[#f5f5f0] mb-2"
                data-oid="q0209q:"
              >
                {cat.name}
              </h2>
              <p
                className="text-gray-600 dark:text-[#999999] text-sm"
                data-oid="hor315k"
              >
                {cat.description}
              </p>
              <span
                className="inline-block mt-4 text-[#c8a46e] text-sm font-medium"
                data-oid="ql1_.9u"
              >
                Se demosida →
              </span>
            </Link>
          ))}
        </div>

        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-anchor="#examples-grid"
          data-aos-delay="200"
          data-oid="hkuxp5d"
        >
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors"
            data-oid="yq7lc.m"
          >
            Kontakta oss
          </Link>
        </div>
      </div>
    </div>
  );
}
