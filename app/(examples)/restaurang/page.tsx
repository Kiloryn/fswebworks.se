"use client";

import { restaurangData, menuSections, openingHours } from "./data";

const c = restaurangData.colors;

export default function RestaurangPage() {
  return (
    <div className="min-h-screen bg-[#fff7ed] text-gray-800">
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b shadow-md"
        style={{ backgroundColor: "#fff", borderColor: "#fed7aa" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <span className="font-bold text-xl" style={{ color: c.secondary }}>
            {restaurangData.companyName}
          </span>
          <a
            href="#boka"
            className="px-5 py-2.5 font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#dc2626" }}
          >
            Boka bord
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: c.secondary }}>
            {restaurangData.companyName}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {restaurangData.tagline}
          </p>
          <p className="text-gray-600 mb-8">
            {restaurangData.description}
          </p>
          <a
            href="#boka"
            className="inline-block px-8 py-4 font-semibold text-white rounded-lg"
            style={{ backgroundColor: c.primary }}
          >
            Boka bord
          </a>
        </div>
      </section>

      {/* Meny */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: c.secondary }}>
            Meny
          </h2>
          {menuSections.map((section, i) => (
            <div key={i} className="mb-12">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 border-b pb-2" style={{ borderColor: "#fed7aa" }}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <li key={j} className="flex justify-between items-baseline">
                    <span>{item.name}</span>
                    <span className="font-medium" style={{ color: c.primary }}>
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
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#fff7ed" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: c.secondary }}>
            Lokaler & mat
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl flex items-center justify-center text-4xl"
                style={{ backgroundColor: "#fed7aa", color: "#9a3412" }}
              >
                🍽️
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Öppettider & Boka */}
      <section id="boka" className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: c.secondary }}>
            Öppettider & Bokning
          </h2>
          <div className="mb-8 p-6 rounded-xl" style={{ backgroundColor: "#fff7ed", borderColor: "#fed7aa", borderWidth: 1 }}>
            <h3 className="font-semibold mb-3" style={{ color: c.primary }}>
              Öppettider
            </h3>
            <ul className="space-y-1 text-gray-700">
              {openingHours.map((row, i) => (
                <li key={i}>
                  {row.days}: {row.hours}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center text-gray-600 mb-6">
            Boka bord via knappen nedan eller ring oss.
          </p>
          <a
            href="#boka"
            className="block w-full py-4 text-center font-semibold text-white rounded-lg mb-8"
            style={{ backgroundColor: c.primary }}
          >
            Boka bord (demo)
          </a>
          <div className="text-center text-gray-700 space-y-1">
            <p>
              <strong>Telefon:</strong>{" "}
              <a href={`tel:${restaurangData.contact.phone.replace(/\s/g, "")}`} className="underline" style={{ color: c.primary }}>
                {restaurangData.contact.phone}
              </a>
            </p>
            <p>
              <strong>E-post:</strong>{" "}
              <a href={`mailto:${restaurangData.contact.email}`} className="underline" style={{ color: c.primary }}>
                {restaurangData.contact.email}
              </a>
            </p>
            <p>{restaurangData.contact.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
