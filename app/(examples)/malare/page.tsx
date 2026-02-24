"use client";

import { useState } from "react";
import { malareData } from "./data";

const c = malareData.colors;

export default function MalarePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <span className="font-bold text-xl" style={{ color: c.primary }}>
            {malareData.companyName}
          </span>
          <a
            href="#offert"
            className="px-5 py-2.5 font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#dc2626" }}
          >
            Gratis offert
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: c.secondary }}>
            {malareData.companyName}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {malareData.tagline}
          </p>
          <p className="text-gray-600 mb-8">
            {malareData.description}
          </p>
          <a
            href="#offert"
            className="inline-block px-8 py-4 font-semibold text-white rounded-lg"
            style={{ backgroundColor: "#dc2626" }}
          >
            Begär gratis offert
          </a>
        </div>
      </section>

      {/* Tjänster */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: c.secondary }}>
            Våra tjänster
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {malareData.services.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm"
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

      {/* Galleri (placeholder) */}
      <section className="py-16 px-4 sm:px-6 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: c.secondary }}>
            Tidigare arbeten
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl flex items-center justify-center text-4xl border border-gray-200"
                style={{ backgroundColor: "#e0e7ff", color: c.primary }}
              >
                🎨
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt / Offert */}
      <section id="offert" className="py-16 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: c.secondary }}>
            Begär gratis offert
          </h2>
          {sent ? (
            <p className="text-center text-gray-600 py-8">
              Tack! Vi återkommer med en offert så snart vi kan.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="malare-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Namn
                </label>
                <input
                  id="malare-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:border-[#1e40af] focus:outline-none focus:ring-1 focus:ring-[#1e40af]"
                  placeholder="Ditt namn"
                  required
                />
              </div>
              <div>
                <label htmlFor="malare-email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-post
                </label>
                <input
                  id="malare-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:border-[#1e40af] focus:outline-none focus:ring-1 focus:ring-[#1e40af]"
                  placeholder="din@epost.se"
                  required
                />
              </div>
              <div>
                <label htmlFor="malare-msg" className="block text-sm font-medium text-gray-700 mb-1">
                  Beskriv uppdraget (adress, rum, ungefärlig yta)
                </label>
                <textarea
                  id="malare-msg"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:border-[#1e40af] focus:outline-none focus:ring-1 focus:ring-[#1e40af] resize-none"
                  placeholder="T.ex. lägenhet 3 rum, tak och väggar..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#dc2626" }}
              >
                Skicka – jag vill ha en gratis offert
              </button>
            </form>
          )}
          <p className="text-center text-gray-500 text-sm mt-6">
            Eller ring:{" "}
            <a href={`tel:${malareData.contact.phone.replace(/\s/g, "")}`} className="underline font-medium" style={{ color: c.primary }}>
              {malareData.contact.phone}
            </a>
            {" · "}
            <a href={`mailto:${malareData.contact.email}`} className="underline font-medium" style={{ color: c.primary }}>
              {malareData.contact.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
