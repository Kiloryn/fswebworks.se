"use client";

import { useState } from "react";
import { elektrikerData, certifications } from "./data";

const c = elektrikerData.colors;

export default function ElektrikerPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#111827] text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-700/80 bg-[#111827]/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <span className="font-bold text-xl" style={{ color: c.accent }}>
            {elektrikerData.companyName}
          </span>
          <a
            href="#kontakt"
            className="px-5 py-2.5 font-semibold rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: c.primary, color: "#111827" }}
          >
            Kontakt
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: c.accent }}>
            {elektrikerData.companyName}
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            {elektrikerData.tagline}
          </p>
          <p className="text-gray-400 mb-8">
            {elektrikerData.description}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {certifications.map((cert, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: "rgba(234, 179, 8, 0.2)", color: c.accent }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section className="py-16 px-4 sm:px-6 bg-[#1f2937]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: c.accent }}>
            Våra tjänster
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {elektrikerData.services.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-600 bg-[#111827]"
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

      {/* Kontakt / Formulär */}
      <section id="kontakt" className="py-16 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: c.accent }}>
            Begär offert
          </h2>
          {sent ? (
            <p className="text-center text-gray-400 py-8">
              Tack! Vi återkommer till dig så snart vi kan.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="elekt-name" className="block text-sm font-medium text-gray-300 mb-1">
                  Namn
                </label>
                <input
                  id="elekt-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-600 text-gray-100 placeholder-gray-500 focus:border-[#eab308] focus:outline-none"
                  placeholder="Ditt namn"
                  required
                />
              </div>
              <div>
                <label htmlFor="elekt-email" className="block text-sm font-medium text-gray-300 mb-1">
                  E-post
                </label>
                <input
                  id="elekt-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-600 text-gray-100 placeholder-gray-500 focus:border-[#eab308] focus:outline-none"
                  placeholder="din@epost.se"
                  required
                />
              </div>
              <div>
                <label htmlFor="elekt-msg" className="block text-sm font-medium text-gray-300 mb-1">
                  Beskriv ditt behov
                </label>
                <textarea
                  id="elekt-msg"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-600 text-gray-100 placeholder-gray-500 focus:border-[#eab308] focus:outline-none resize-none"
                  placeholder="T.ex. nyinstallation kök, elbesiktning inför försäljning..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 font-semibold rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: c.primary, color: "#111827" }}
              >
                Skicka förfrågan
              </button>
            </form>
          )}
          <p className="text-center text-gray-500 text-sm mt-6">
            Eller ring oss:{" "}
            <a href={`tel:${elektrikerData.contact.phone.replace(/\s/g, "")}`} className="underline" style={{ color: c.accent }}>
              {elektrikerData.contact.phone}
            </a>
            {" · "}
            <a href={`mailto:${elektrikerData.contact.email}`} className="underline" style={{ color: c.accent }}>
              {elektrikerData.contact.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
