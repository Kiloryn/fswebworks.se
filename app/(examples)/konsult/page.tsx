"use client";

import { konsultData, aboutText } from "./data";

const c = konsultData.colors;

export default function KonsultPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-indigo-900/50 bg-[#0f172a]/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <span className="font-bold text-xl" style={{ color: c.accent }}>
            {konsultData.companyName}
          </span>
          <a
            href="#kontakt"
            className="px-5 py-2.5 font-semibold rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: c.primary, color: "#fff" }}
          >
            Kontakt
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#e0e7ff" }}>
            {konsultData.companyName}
          </h1>
          <p className="text-xl text-indigo-200 mb-6">
            {konsultData.tagline}
          </p>
          <p className="text-gray-400 leading-relaxed">
            {konsultData.description}
          </p>
        </div>
      </section>

      {/* Tjänster */}
      <section className="py-16 px-4 sm:px-6 bg-[#1e293b]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: c.accent }}>
            Tjänster
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {konsultData.services.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-indigo-900/50 bg-[#0f172a]"
              >
                {s.icon && <span className="text-2xl mb-2 block">{s.icon}</span>}
                <h3 className="font-semibold text-lg mb-2" style={{ color: c.accent }}>
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Om mig */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: c.accent }}>
            Om mig
          </h2>
          <div className="prose prose-invert prose-indigo max-w-none">
            <p className="text-gray-400 leading-relaxed whitespace-pre-line">
              {aboutText}
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-16 px-4 sm:px-6 bg-[#1e293b]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: c.accent }}>
            Kontakt
          </h2>
          <p className="text-gray-400 mb-8">
            Vill du diskutera ett uppdrag eller bara ta en första kontakt? Hör av dig.
          </p>
          <div className="space-y-3 text-gray-300">
            <p>
              <strong className="text-gray-200">Telefon:</strong>{" "}
              <a href={`tel:${konsultData.contact.phone.replace(/\s/g, "")}`} className="underline" style={{ color: c.accent }}>
                {konsultData.contact.phone}
              </a>
            </p>
            <p>
              <strong className="text-gray-200">E-post:</strong>{" "}
              <a href={`mailto:${konsultData.contact.email}`} className="underline" style={{ color: c.accent }}>
                {konsultData.contact.email}
              </a>
            </p>
            <p>{konsultData.contact.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
