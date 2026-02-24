"use client";

import Link from "next/link";
import { vvsData, priceList } from "./data";

const c = vvsData.colors;

export default function VvsPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#f8fafc",
        color: "#1e293b",
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b shadow-sm"
        style={{ backgroundColor: "#fff", borderColor: "#e2e8f0" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <span className="font-bold text-xl" style={{ color: c.primary }}>
            {vvsData.companyName}
          </span>
          <a
            href={`tel:${vvsData.contact.phone.replace(/\s/g, "")}`}
            className="px-5 py-2.5 font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#16a34a" }}
          >
            Akut – ring nu
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: c.secondary }}>
            {vvsData.companyName}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {vvsData.tagline}
          </p>
          <p className="text-gray-600 mb-8">
            {vvsData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${vvsData.contact.phone.replace(/\s/g, "")}`}
              className="px-8 py-4 font-semibold text-white rounded-lg text-center"
              style={{ backgroundColor: c.primary }}
            >
              Ring för akut hjälp
            </a>
            <a
              href="#kontakt"
              className="px-8 py-4 font-semibold rounded-lg border-2 text-center transition-colors"
              style={{ borderColor: c.primary, color: c.primary }}
            >
              Begär offert
            </a>
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: c.secondary }}>
            Våra tjänster
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vvsData.services.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border"
                style={{ borderColor: "#e2e8f0", backgroundColor: "#f8fafc" }}
              >
                {s.icon && <span className="text-2xl mb-2 block">{s.icon}</span>}
                <h3 className="font-semibold text-lg mb-2" style={{ color: c.primary }}>
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prislista */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#f1f5f9" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: c.secondary }}>
            Priser (riktvärden)
          </h2>
          <p className="text-center text-gray-600 text-sm mb-8">
            Exkl. moms. Slutpris beror på omfattning. Vi ger alltid en tydlig offert innan arbete påbörjas.
          </p>
          <ul className="space-y-4">
            {priceList.map((row, i) => (
              <li
                key={i}
                className="flex justify-between items-center py-3 px-4 rounded-lg"
                style={{ backgroundColor: "#fff", borderColor: "#e2e8f0", borderWidth: 1 }}
              >
                <span className="text-gray-800">{row.item}</span>
                <span className="font-semibold" style={{ color: c.primary }}>
                  {row.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: c.secondary }}>
            Kontakt
          </h2>
          <div className="space-y-4 text-center text-gray-700">
            <p>
              <strong>Telefon:</strong>{" "}
              <a href={`tel:${vvsData.contact.phone.replace(/\s/g, "")}`} className="underline" style={{ color: c.primary }}>
                {vvsData.contact.phone}
              </a>
            </p>
            <p>
              <strong>E-post:</strong>{" "}
              <a href={`mailto:${vvsData.contact.email}`} className="underline" style={{ color: c.primary }}>
                {vvsData.contact.email}
              </a>
            </p>
            <p>{vvsData.contact.address}</p>
            <p className="text-sm text-gray-500">Org.nr: {vvsData.contact.orgNumber}</p>
          </div>
          <p className="text-center mt-8 text-gray-600 text-sm">
            Vill du ha en kostnadsfri offert? Ring eller skicka e-post med kort beskrivning av behovet.
          </p>
        </div>
      </section>

      {/* FS Webworks back link is in (examples) layout */}
    </div>
  );
}
