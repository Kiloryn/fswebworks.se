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
    <div className="min-h-screen bg-[#111827] text-gray-100" data-oid="oc_-svc">
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b border-gray-700/80 bg-[#111827]/95 backdrop-blur"
        data-oid="7zgy5my"
      >
        <div
          className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4"
          data-oid="gmqjeih"
        >
          <span
            className="font-bold text-xl"
            style={{ color: c.accent }}
            data-oid="ur34t.t"
          >
            {elektrikerData.companyName}
          </span>
          <a
            href="#kontakt"
            className="px-5 py-2.5 font-semibold rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: c.primary, color: "#111827" }}
            data-oid="t5evqon"
          >
            Kontakt
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6" data-oid="gvzp7fu">
        <div className="max-w-4xl mx-auto text-center" data-oid="i0clu8:">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: c.accent }}
            data-oid="_xnmvaw"
          >
            {elektrikerData.companyName}
          </h1>
          <p className="text-xl text-gray-300 mb-6" data-oid="hejxe.i">
            {elektrikerData.tagline}
          </p>
          <p className="text-gray-400 mb-8" data-oid="adr._e0">
            {elektrikerData.description}
          </p>
          <div
            className="flex flex-wrap gap-3 justify-center"
            data-oid="--fy35y"
          >
            {certifications.map((cert, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "rgba(234, 179, 8, 0.2)",
                  color: c.accent,
                }}
                data-oid="oflpv5c"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section className="py-16 px-4 sm:px-6 bg-[#1f2937]" data-oid="plz2goy">
        <div className="max-w-6xl mx-auto" data-oid="n1zn:zg">
          <h2
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
            style={{ color: c.accent }}
            data-oid="f6bz:ky"
          >
            Våra tjänster
          </h2>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-oid="o7xs:f0"
          >
            {elektrikerData.services.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-600 bg-[#111827]"
                data-oid="a1su.sq"
              >
                {s.icon && (
                  <span className="text-2xl mb-2 block" data-oid="r9n-k65">
                    {s.icon}
                  </span>
                )}
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: c.accent }}
                  data-oid="l7_v3:u"
                >
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm" data-oid="ei.7bv6">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt / Formulär */}
      <section id="kontakt" className="py-16 px-4 sm:px-6" data-oid="ax5d6b0">
        <div className="max-w-xl mx-auto" data-oid="eq717:i">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            style={{ color: c.accent }}
            data-oid="e495t2z"
          >
            Begär offert
          </h2>
          {sent ? (
            <p className="text-center text-gray-400 py-8" data-oid="x45m5zh">
              Tack! Vi återkommer till dig så snart vi kan.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-oid="ut6447i"
            >
              <div data-oid="zhxijgw">
                <label
                  htmlFor="elekt-name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                  data-oid="87pt3wx"
                >
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
                  data-oid="z017gaj"
                />
              </div>
              <div data-oid="k4_w7hp">
                <label
                  htmlFor="elekt-email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                  data-oid="6-f1n_u"
                >
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
                  data-oid="ti85o5r"
                />
              </div>
              <div data-oid="8ty1t6f">
                <label
                  htmlFor="elekt-msg"
                  className="block text-sm font-medium text-gray-300 mb-1"
                  data-oid="dp-bwc8"
                >
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
                  data-oid="uqj:n38"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 font-semibold rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: c.primary, color: "#111827" }}
                data-oid="9ffacjr"
              >
                Skicka förfrågan
              </button>
            </form>
          )}
          <p
            className="text-center text-gray-500 text-sm mt-6"
            data-oid="qr.5:xu"
          >
            Eller ring oss:{" "}
            <a
              href={`tel:${elektrikerData.contact.phone.replace(/\s/g, "")}`}
              className="underline"
              style={{ color: c.accent }}
              data-oid="npyaz5t"
            >
              {elektrikerData.contact.phone}
            </a>
            {" · "}
            <a
              href={`mailto:${elektrikerData.contact.email}`}
              className="underline"
              style={{ color: c.accent }}
              data-oid="0o.i89a"
            >
              {elektrikerData.contact.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
