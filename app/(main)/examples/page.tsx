import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { EXAMPLE_CATEGORIES } from "@/lib/example-categories";

export const metadata: Metadata = {
  title: "Exempel på hemsidor – FSwebworks",
  description:
    "Demosidor för hantverkare och småföretag. Se mallar för VVS, elektriker, salong, restaurang med mera – anpassas efter ditt varumärke.",
  alternates: { canonical: "/examples" },
};

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
          {EXAMPLE_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="group block bg-white dark:bg-[#272727] border border-gray-200 dark:border-[#3a3a3a] rounded-2xl overflow-hidden hover:border-[#c8a46e]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#c8a46e]/10"
              data-aos="fade-up"
              data-aos-anchor="#examples-grid"
              data-aos-delay="0"
              data-oid="jozmfyk"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-[#111]">
                <Image
                  src={`/examples/${cat.slug}.webp`}
                  alt={`${cat.name} exempelsida`}
                  width={640}
                  height={360}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-[#c8a46e] rounded-lg">
                    Se demosida →
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h2
                  className="text-xl font-semibold text-gray-900 dark:text-[#f5f5f0] mb-2 group-hover:text-[#c8a46e] transition-colors duration-300"
                  data-oid="q0209q:"
                >
                  {cat.name}
                </h2>
                <p
                  className="text-gray-600 dark:text-[#cccccc] text-sm leading-relaxed"
                  data-oid="hor315k"
                >
                  {cat.description}
                </p>
              </div>
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
