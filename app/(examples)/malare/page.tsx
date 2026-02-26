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
    <div className="min-h-screen bg-white text-gray-800" data-oid="yih1itx">
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur"
        data-oid="nsw3dni"
      >
        <div
          className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4"
          data-oid="4w7po3z"
        >
          <span
            className="font-bold text-xl"
            style={{ color: c.primary }}
            data-oid="fc58t1s"
          >
            {malareData.companyName}
          </span>
          <a
            href="#offert"
            className="px-5 py-2.5 font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#dc2626" }}
            data-oid="el1q5y4"
          >
            Gratis offert
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="py-16 md:py-24 px-4 sm:px-6 bg-[#f8fafc]"
        data-oid="49t2ygj"
      >
        <div className="max-w-4xl mx-auto text-center" data-oid=":_:za3m">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: c.secondary }}
            data-oid="ulkc4vr"
          >
            {malareData.companyName}
          </h1>
          <p className="text-xl text-gray-600 mb-6" data-oid="x7lonqm">
            {malareData.tagline}
          </p>
          <p className="text-gray-600 mb-8" data-oid="bhpa8d6">
            {malareData.description}
          </p>
          <a
            href="#offert"
            className="inline-block px-8 py-4 font-semibold text-white rounded-lg"
            style={{ backgroundColor: "#dc2626" }}
            data-oid="tsocy4w"
          >
            Begär gratis offert
          </a>
        </div>
      </section>

      {/* Tjänster */}
      <section className="py-16 px-4 sm:px-6" data-oid="s:tte9_">
        <div className="max-w-6xl mx-auto" data-oid="5499-e5">
          <h2
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
            style={{ color: c.secondary }}
            data-oid="ikegwsg"
          >
            Våra tjänster
          </h2>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-oid="nb_ygq."
          >
            {malareData.services.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm"
                data-oid="j8gfo.n"
              >
                {s.icon && (
                  <span className="text-2xl mb-2 block" data-oid="fjflqj8">
                    {s.icon}
                  </span>
                )}
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: c.primary }}
                  data-oid="vn4e:vf"
                >
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm" data-oid="ofvypvh">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galleri (placeholder) */}
      <section className="py-16 px-4 sm:px-6 bg-[#f8fafc]" data-oid="wgxpm97">
        <div className="max-w-6xl mx-auto" data-oid="uu6:kz-">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            style={{ color: c.secondary }}
            data-oid="ndzyr.s"
          >
            Tidigare arbeten
          </h2>
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            data-oid="5gxs3au"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl flex items-center justify-center text-4xl border border-gray-200"
                style={{ backgroundColor: "#e0e7ff", color: c.primary }}
                data-oid="2otvm2h"
              >
                🎨
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt / Offert */}
      <section id="offert" className="py-16 px-4 sm:px-6" data-oid="3osdu6m">
        <div className="max-w-xl mx-auto" data-oid="::9vaag">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            style={{ color: c.secondary }}
            data-oid="-bwou5u"
          >
            Begär gratis offert
          </h2>
          {sent ? (
            <p className="text-center text-gray-600 py-8" data-oid="fa2r4y2">
              Tack! Vi återkommer med en offert så snart vi kan.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-oid="xt0cu0_"
            >
              <div data-oid="w8cpvlf">
                <label
                  htmlFor="malare-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  data-oid="353cqm-"
                >
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
                  data-oid=":iufi8x"
                />
              </div>
              <div data-oid="ltgzrkv">
                <label
                  htmlFor="malare-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  data-oid="26qqm1:"
                >
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
                  data-oid="ox7uu1z"
                />
              </div>
              <div data-oid="eya55_i">
                <label
                  htmlFor="malare-msg"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  data-oid="v_i3ci0"
                >
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
                  data-oid="ou1hf:e"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#dc2626" }}
                data-oid="3qdshkh"
              >
                Skicka – jag vill ha en gratis offert
              </button>
            </form>
          )}
          <p
            className="text-center text-gray-500 text-sm mt-6"
            data-oid="niqqlgr"
          >
            Eller ring:{" "}
            <a
              href={`tel:${malareData.contact.phone.replace(/\s/g, "")}`}
              className="underline font-medium"
              style={{ color: c.primary }}
              data-oid="dbnn32g"
            >
              {malareData.contact.phone}
            </a>
            {" · "}
            <a
              href={`mailto:${malareData.contact.email}`}
              className="underline font-medium"
              style={{ color: c.primary }}
              data-oid="juahtkj"
            >
              {malareData.contact.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
