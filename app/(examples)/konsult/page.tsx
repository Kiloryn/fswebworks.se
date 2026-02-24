"use client";

import { konsultData, aboutText } from "./data";

const c = konsultData.colors;

export default function KonsultPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100" data-oid="ikarq34">
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b border-indigo-900/50 bg-[#0f172a]/95 backdrop-blur"
        data-oid="d57qwin"
      >
        <div
          className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4"
          data-oid="dqq6zr9"
        >
          <span
            className="font-bold text-xl"
            style={{ color: c.accent }}
            data-oid="f79qdp1"
          >
            {konsultData.companyName}
          </span>
          <a
            href="#kontakt"
            className="px-5 py-2.5 font-semibold rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: c.primary, color: "#fff" }}
            data-oid="4xem3o:"
          >
            Kontakt
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6" data-oid="i260.:9">
        <div className="max-w-3xl mx-auto text-center" data-oid="4_-ouhn">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#e0e7ff" }}
            data-oid=".j4z2db"
          >
            {konsultData.companyName}
          </h1>
          <p className="text-xl text-indigo-200 mb-6" data-oid="pba-4q3">
            {konsultData.tagline}
          </p>
          <p className="text-gray-400 leading-relaxed" data-oid="lpc.hau">
            {konsultData.description}
          </p>
        </div>
      </section>

      {/* Tjänster */}
      <section className="py-16 px-4 sm:px-6 bg-[#1e293b]" data-oid="r8ll:pi">
        <div className="max-w-6xl mx-auto" data-oid="31:-b03">
          <h2
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
            style={{ color: c.accent }}
            data-oid="wkkag2a"
          >
            Tjänster
          </h2>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-oid="d51pckd"
          >
            {konsultData.services.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-indigo-900/50 bg-[#0f172a]"
                data-oid="zftyh8-"
              >
                {s.icon && (
                  <span className="text-2xl mb-2 block" data-oid="doje-79">
                    {s.icon}
                  </span>
                )}
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: c.accent }}
                  data-oid="3l7i1e7"
                >
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm" data-oid="ctoc9lc">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Om mig */}
      <section className="py-16 px-4 sm:px-6" data-oid="nnvwxbv">
        <div className="max-w-2xl mx-auto" data-oid="mqmfl..">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            style={{ color: c.accent }}
            data-oid="5or_04q"
          >
            Om mig
          </h2>
          <div
            className="prose prose-invert prose-indigo max-w-none"
            data-oid="0ihhgy7"
          >
            <p
              className="text-gray-400 leading-relaxed whitespace-pre-line"
              data-oid="1tvu8t8"
            >
              {aboutText}
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section
        id="kontakt"
        className="py-16 px-4 sm:px-6 bg-[#1e293b]"
        data-oid="9hcbiw:"
      >
        <div className="max-w-xl mx-auto text-center" data-oid="6-t9:51">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8"
            style={{ color: c.accent }}
            data-oid="ujzgpg0"
          >
            Kontakt
          </h2>
          <p className="text-gray-400 mb-8" data-oid="-:ai27m">
            Vill du diskutera ett uppdrag eller bara ta en första kontakt? Hör
            av dig.
          </p>
          <div className="space-y-3 text-gray-300" data-oid="nrbxmtk">
            <p data-oid="tkr3e9e">
              <strong className="text-gray-200" data-oid="zm9sarn">
                Telefon:
              </strong>{" "}
              <a
                href={`tel:${konsultData.contact.phone.replace(/\s/g, "")}`}
                className="underline"
                style={{ color: c.accent }}
                data-oid="ksx8g.-"
              >
                {konsultData.contact.phone}
              </a>
            </p>
            <p data-oid="om:whwd">
              <strong className="text-gray-200" data-oid="0jp5aic">
                E-post:
              </strong>{" "}
              <a
                href={`mailto:${konsultData.contact.email}`}
                className="underline"
                style={{ color: c.accent }}
                data-oid="c8png.d"
              >
                {konsultData.contact.email}
              </a>
            </p>
            <p data-oid="ilxtuyq">{konsultData.contact.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
