"use client";

import { salongData, treatments } from "./data";

const c = salongData.colors;

export default function SalongPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#fdf2f8", color: "#4b5563" }}
      data-oid="ff80y84"
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b shadow-sm"
        style={{ backgroundColor: "#fce7f3", borderColor: "#fbcfe8" }}
        data-oid="gf5vq5h"
      >
        <div
          className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4"
          data-oid=".1axe-s"
        >
          <span
            className="font-bold text-xl italic"
            style={{ color: c.secondary }}
            data-oid="yhau72g"
          >
            {salongData.companyName}
          </span>
          <a
            href="#boka"
            className="px-5 py-2.5 font-semibold text-white rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: c.primary }}
            data-oid="h34_t_j"
          >
            Boka online
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6" data-oid="rryfngf">
        <div className="max-w-4xl mx-auto text-center" data-oid="f6felr.">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 italic"
            style={{ color: c.secondary }}
            data-oid="x7rqclg"
          >
            {salongData.companyName}
          </h1>
          <p
            className="text-xl mb-6"
            style={{ color: "#831843" }}
            data-oid="iu6fz0w"
          >
            {salongData.tagline}
          </p>
          <p className="text-gray-600 mb-8" data-oid="2xllzwm">
            {salongData.description}
          </p>
          <a
            href="#boka"
            className="inline-block px-8 py-4 font-semibold text-white rounded-full"
            style={{ backgroundColor: c.primary }}
            data-oid="ars_0wm"
          >
            Boka tid
          </a>
        </div>
      </section>

      {/* Behandlingar & priser */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ backgroundColor: "#fff" }}
        data-oid="w:b14cx"
      >
        <div className="max-w-4xl mx-auto" data-oid="k10b4:.">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            style={{ color: c.secondary }}
            data-oid="n0slzmj"
          >
            Behandlingar & priser
          </h2>
          <ul className="space-y-4" data-oid="1vy06e1">
            {treatments.map((t, i) => (
              <li
                key={i}
                className="flex flex-wrap justify-between items-center py-4 px-6 rounded-xl border"
                style={{ borderColor: "#fce7f3", backgroundColor: "#fdf2f8" }}
                data-oid="ckkt_uo"
              >
                <div data-oid="16v.n14">
                  <span
                    className="font-medium text-gray-800"
                    data-oid="3rcq023"
                  >
                    {t.name}
                  </span>
                  <span
                    className="text-sm text-gray-500 block"
                    data-oid="rcq8n10"
                  >
                    {t.duration}
                  </span>
                </div>
                <span
                  className="font-semibold"
                  style={{ color: c.primary }}
                  data-oid="_8dy9hw"
                >
                  {t.price}
                </span>
              </li>
            ))}
          </ul>
          <p
            className="text-center text-gray-500 text-sm mt-6"
            data-oid="c8s9l8w"
          >
            Priser är riktvärden. Exakt pris beräknas vid bokning.
          </p>
        </div>
      </section>

      {/* Tjänster (kort) */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ backgroundColor: "#fdf2f8" }}
        data-oid="pc:wcpl"
      >
        <div className="max-w-6xl mx-auto" data-oid="oy0xq:l">
          <h2
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
            style={{ color: c.secondary }}
            data-oid="pe7bkog"
          >
            Våra tjänster
          </h2>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-oid="c2r3g4g"
          >
            {salongData.services.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl text-center border"
                style={{ borderColor: "#fbcfe8", backgroundColor: "#fff" }}
                data-oid="g.qgh1y"
              >
                {s.icon && (
                  <span className="text-3xl mb-2 block" data-oid="f:bog:l">
                    {s.icon}
                  </span>
                )}
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: c.primary }}
                  data-oid="9lcvvr7"
                >
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm" data-oid="9t7a232">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boka / Kontakt */}
      <section
        id="boka"
        className="py-16 px-4 sm:px-6"
        style={{ backgroundColor: "#fff" }}
        data-oid="szg1_m1"
      >
        <div className="max-w-xl mx-auto text-center" data-oid="_j_3oe0">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ color: c.secondary }}
            data-oid="vta04h:"
          >
            Boka eller kontakta oss
          </h2>
          <p className="text-gray-600 mb-8" data-oid="we_sn3v">
            Boka enkelt online via knappen nedan, eller ring och boka direkt.
          </p>
          <a
            href="#boka"
            className="inline-block px-8 py-4 font-semibold text-white rounded-full mb-6"
            style={{ backgroundColor: c.primary }}
            data-oid="vn8lvnz"
          >
            Boka online (demo)
          </a>
          <div className="space-y-2 text-gray-700" data-oid="ew48059">
            <p data-oid="ur:hd1y">
              <strong data-oid="8kssad:">Telefon:</strong>{" "}
              <a
                href={`tel:${salongData.contact.phone.replace(/\s/g, "")}`}
                className="underline"
                style={{ color: c.primary }}
                data-oid="ibdglh2"
              >
                {salongData.contact.phone}
              </a>
            </p>
            <p data-oid="x:t00q0">
              <strong data-oid="tm7-262">E-post:</strong>{" "}
              <a
                href={`mailto:${salongData.contact.email}`}
                className="underline"
                style={{ color: c.primary }}
                data-oid="08.x3z5"
              >
                {salongData.contact.email}
              </a>
            </p>
            <p data-oid="rm.mu:w">{salongData.contact.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
