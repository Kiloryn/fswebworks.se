"use client";

import { salongData, treatments } from "./data";

const c = salongData.colors;

export default function SalongPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fdf2f8", color: "#4b5563" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b shadow-sm"
        style={{ backgroundColor: "#fce7f3", borderColor: "#fbcfe8" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <span className="font-bold text-xl italic" style={{ color: c.secondary }}>
            {salongData.companyName}
          </span>
          <a
            href="#boka"
            className="px-5 py-2.5 font-semibold text-white rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: c.primary }}
          >
            Boka online
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 italic" style={{ color: c.secondary }}>
            {salongData.companyName}
          </h1>
          <p className="text-xl mb-6" style={{ color: "#831843" }}>
            {salongData.tagline}
          </p>
          <p className="text-gray-600 mb-8">
            {salongData.description}
          </p>
          <a
            href="#boka"
            className="inline-block px-8 py-4 font-semibold text-white rounded-full"
            style={{ backgroundColor: c.primary }}
          >
            Boka tid
          </a>
        </div>
      </section>

      {/* Behandlingar & priser */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: c.secondary }}>
            Behandlingar & priser
          </h2>
          <ul className="space-y-4">
            {treatments.map((t, i) => (
              <li
                key={i}
                className="flex flex-wrap justify-between items-center py-4 px-6 rounded-xl border"
                style={{ borderColor: "#fce7f3", backgroundColor: "#fdf2f8" }}
              >
                <div>
                  <span className="font-medium text-gray-800">{t.name}</span>
                  <span className="text-sm text-gray-500 block">{t.duration}</span>
                </div>
                <span className="font-semibold" style={{ color: c.primary }}>
                  {t.price}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-center text-gray-500 text-sm mt-6">
            Priser är riktvärden. Exakt pris beräknas vid bokning.
          </p>
        </div>
      </section>

      {/* Tjänster (kort) */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#fdf2f8" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: c.secondary }}>
            Våra tjänster
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {salongData.services.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl text-center border"
                style={{ borderColor: "#fbcfe8", backgroundColor: "#fff" }}
              >
                {s.icon && <span className="text-3xl mb-2 block">{s.icon}</span>}
                <h3 className="font-semibold text-lg mb-2" style={{ color: c.primary }}>
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boka / Kontakt */}
      <section id="boka" className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: c.secondary }}>
            Boka eller kontakta oss
          </h2>
          <p className="text-gray-600 mb-8">
            Boka enkelt online via knappen nedan, eller ring och boka direkt.
          </p>
          <a
            href="#boka"
            className="inline-block px-8 py-4 font-semibold text-white rounded-full mb-6"
            style={{ backgroundColor: c.primary }}
          >
            Boka online (demo)
          </a>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Telefon:</strong>{" "}
              <a href={`tel:${salongData.contact.phone.replace(/\s/g, "")}`} className="underline" style={{ color: c.primary }}>
                {salongData.contact.phone}
              </a>
            </p>
            <p>
              <strong>E-post:</strong>{" "}
              <a href={`mailto:${salongData.contact.email}`} className="underline" style={{ color: c.primary }}>
                {salongData.contact.email}
              </a>
            </p>
            <p>{salongData.contact.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
