"use client";

import { restaurangData, menuSections, openingHours } from "./data";

const c = restaurangData.colors;

export default function RestaurangPage() {
  return (
    <div className="min-h-screen bg-[#fff7ed] text-gray-800" data-oid="kj_su60">
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b shadow-md"
        style={{ backgroundColor: "#fff", borderColor: "#fed7aa" }}
        data-oid="2_acqde"
      >
        <div
          className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4"
          data-oid=".4yn-vx"
        >
          <span
            className="font-bold text-xl"
            style={{ color: c.secondary }}
            data-oid="0foh.tm"
          >
            {restaurangData.companyName}
          </span>
          <a
            href="#boka"
            className="px-5 py-2.5 font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#dc2626" }}
            data-oid=".jx6t92"
          >
            Boka bord
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6" data-oid="vuh2f50">
        <div className="max-w-4xl mx-auto text-center" data-oid="mw5y2j2">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: c.secondary }}
            data-oid="4v2nwlm"
          >
            {restaurangData.companyName}
          </h1>
          <p className="text-xl text-gray-600 mb-6" data-oid="0_1yf7d">
            {restaurangData.tagline}
          </p>
          <p className="text-gray-600 mb-8" data-oid="xpfoqc6">
            {restaurangData.description}
          </p>
          <a
            href="#boka"
            className="inline-block px-8 py-4 font-semibold text-white rounded-lg"
            style={{ backgroundColor: c.primary }}
            data-oid="k7vycl9"
          >
            Boka bord
          </a>
        </div>
      </section>

      {/* Meny */}
      <section className="py-16 px-4 sm:px-6 bg-white" data-oid="uc6::as">
        <div className="max-w-3xl mx-auto" data-oid="3zql_xx">
          <h2
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
            style={{ color: c.secondary }}
            data-oid="7y2mbuq"
          >
            Meny
          </h2>
          {menuSections.map((section, i) => (
            <div key={i} className="mb-12" data-oid="465zx58">
              <h3
                className="text-lg font-semibold mb-4 text-gray-700 border-b pb-2"
                style={{ borderColor: "#fed7aa" }}
                data-oid="qqkznn2"
              >
                {section.title}
              </h3>
              <ul className="space-y-3" data-oid="e5rr4y7">
                {section.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex justify-between items-baseline"
                    data-oid="m3jt_d0"
                  >
                    <span data-oid="p5_1syu">{item.name}</span>
                    <span
                      className="font-medium"
                      style={{ color: c.primary }}
                      data-oid=".898i.s"
                    >
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Galleri (placeholder) */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ backgroundColor: "#fff7ed" }}
        data-oid="t5d.rs8"
      >
        <div className="max-w-6xl mx-auto" data-oid="a7cf9l3">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            style={{ color: c.secondary }}
            data-oid="afyjv9m"
          >
            Lokaler & mat
          </h2>
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            data-oid="61ud73s"
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl flex items-center justify-center text-4xl"
                style={{ backgroundColor: "#fed7aa", color: "#9a3412" }}
                data-oid="fh:d7.g"
              >
                🍽️
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Öppettider & Boka */}
      <section
        id="boka"
        className="py-16 px-4 sm:px-6 bg-white"
        data-oid="-w3glwk"
      >
        <div className="max-w-2xl mx-auto" data-oid="nn1qe7y">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            style={{ color: c.secondary }}
            data-oid="miegh9-"
          >
            Öppettider & Bokning
          </h2>
          <div
            className="mb-8 p-6 rounded-xl"
            style={{
              backgroundColor: "#fff7ed",
              borderColor: "#fed7aa",
              borderWidth: 1,
            }}
            data-oid="s1ykpw."
          >
            <h3
              className="font-semibold mb-3"
              style={{ color: c.primary }}
              data-oid="2f:v1zt"
            >
              Öppettider
            </h3>
            <ul className="space-y-1 text-gray-700" data-oid="g7:q292">
              {openingHours.map((row, i) => (
                <li key={i} data-oid="y0r4gyi">
                  {row.days}: {row.hours}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center text-gray-600 mb-6" data-oid="amidw11">
            Boka bord via knappen nedan eller ring oss.
          </p>
          <a
            href="#boka"
            className="block w-full py-4 text-center font-semibold text-white rounded-lg mb-8"
            style={{ backgroundColor: c.primary }}
            data-oid="7.34vg3"
          >
            Boka bord (demo)
          </a>
          <div
            className="text-center text-gray-700 space-y-1"
            data-oid="qw3p3_i"
          >
            <p data-oid="1cff4xn">
              <strong data-oid="92fymbr">Telefon:</strong>{" "}
              <a
                href={`tel:${restaurangData.contact.phone.replace(/\s/g, "")}`}
                className="underline"
                style={{ color: c.primary }}
                data-oid="wb:.qo3"
              >
                {restaurangData.contact.phone}
              </a>
            </p>
            <p data-oid="b-:ev::">
              <strong data-oid="7dkqcdf">E-post:</strong>{" "}
              <a
                href={`mailto:${restaurangData.contact.email}`}
                className="underline"
                style={{ color: c.primary }}
                data-oid="2mbxjce"
              >
                {restaurangData.contact.email}
              </a>
            </p>
            <p data-oid="g7y9bij">{restaurangData.contact.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
