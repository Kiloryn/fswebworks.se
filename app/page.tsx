"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { PageContent } from "@/lib/pageContent";

// Color palettes for templates
const colorPalettes = [
  {
    id: "blue",
    name: "Blå",
    primary: "#3b82f6",
    secondary: "#1e40af",
    bg: "#eff6ff",
    accent: "#60a5fa",
  },
  {
    id: "green",
    name: "Grön",
    primary: "#10b981",
    secondary: "#047857",
    bg: "#ecfdf5",
    accent: "#34d399",
  },
  {
    id: "orange",
    name: "Orange",
    primary: "#f97316",
    secondary: "#c2410c",
    bg: "#fff7ed",
    accent: "#fb923c",
  },
  {
    id: "purple",
    name: "Lila",
    primary: "#8b5cf6",
    secondary: "#6d28d9",
    bg: "#f5f3ff",
    accent: "#a78bfa",
  },
  {
    id: "dark",
    name: "Mörk",
    primary: "#cbd5e1",
    secondary: "#475569",
    bg: "#1e293b",
    accent: "#94a3b8",
  },
];

// Hero Section Component
function HeroSection({ content }: { content: PageContent }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-oid="bvii7hh"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]"
        data-oid="dgwuxc."
      />
      {content.hero.heroImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${content.hero.heroImage})` }}
          data-oid="0_dgthl"
        />
      )}

      <div
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center"
        data-oid="ee:q_2l"
      >
        {/* Badge */}
        <div
          className="inline-block px-4 py-2 bg-[#c8a46e]/10 border border-[#c8a46e]/20 rounded-full text-[#c8a46e] text-sm mb-8"
          data-oid=":-gk5rg"
        >
          {content.hero.badge}
        </div>

        {/* Logo - only show if uploaded */}
        {content.hero.logo && (
          <div className="mb-8" data-oid="95ppjt5">
            <img
              src={content.hero.logo}
              alt="Logo"
              className="h-24 mx-auto object-contain"
              data-oid="wz6z6p4"
            />
          </div>
        )}

        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl font-bold text-[#f5f5f0] mb-6 max-w-4xl mx-auto leading-tight"
          data-oid="g9q_c.v"
        >
          {content.hero.heading}
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-[#999999] mb-10 max-w-2xl mx-auto leading-relaxed"
          data-oid="te._:zn"
        >
          {content.hero.subheading}
        </p>

        {/* Benefits */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-10"
          data-oid="-k8273u"
        >
          {content.hero.benefits?.map((benefit: string, i: number) => (
            <div
              key={i}
              className="flex items-center gap-2 text-[#999999]"
              data-oid="yieijgi"
            >
              <svg
                className="w-5 h-5 text-[#c8a46e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="lxcfayb"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                  data-oid=".to2-9c"
                />
              </svg>
              {benefit}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-oid=":6ig:t_"
        >
          <Link
            href="#services"
            className="px-8 py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors text-center"
            data-oid="99g4h7t"
          >
            {content.hero.ctaPrimary}
          </Link>
          <Link
            href="#examples"
            className="px-8 py-4 bg-transparent border border-[#333333] text-[#f5f5f0] font-semibold rounded-lg hover:border-[#c8a46e] hover:text-[#c8a46e] transition-colors text-center"
            data-oid="1r.w8ju"
          >
            {content.hero.ctaSecondary}
          </Link>
        </div>

        {/* Trust Text */}
        <p className="text-[#666666] mt-8 text-sm" data-oid="4eaamrn">
          {content.hero.trustText}
        </p>
      </div>
    </section>
  );
}

// Services Section Component
function ServicesSection({ content }: { content: PageContent }) {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]" data-oid="6ldazx3">
      <div className="max-w-6xl mx-auto px-6" data-oid="9lxkn.4">
        {/* Section Header */}
        <div className="text-center mb-16" data-oid="ntxl32q">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4"
            data-oid="d5ne__-"
          >
            {content.services.sectionTitle}
          </h2>
          <p className="text-[#999999] max-w-2xl mx-auto" data-oid="au7xfej">
            {content.services.sectionSubtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8" data-oid="19.rg75">
          {/* Package 1 */}
          <div
            className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#c8a46e]/30 transition-colors"
            data-oid="add9i83"
          >
            {content.services.package1.image ? (
              <img
                src={content.services.package1.image}
                alt={content.services.package1.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
                data-oid="-6zmmn3"
              />
            ) : (
              <div
                className="w-full h-48 bg-gradient-to-br from-[#1a1a1a] to-[#111111] rounded-lg mb-6 flex items-center justify-center"
                data-oid="._dey4h"
              >
                <span className="text-6xl" data-oid="u5ph-ok">
                  🏠
                </span>
              </div>
            )}
            <div className="flex items-baseline gap-2 mb-4" data-oid="sd851m_">
              <span
                className="text-3xl font-bold text-[#f5f5f0]"
                data-oid="7cz2z:0"
              >
                {content.services.package1.price}
              </span>
              <span className="text-[#666666]" data-oid="3d4qynb">
                / {content.services.package1.priceLabel}
              </span>
            </div>
            <h3
              className="text-xl font-semibold text-[#f5f5f0] mb-3"
              data-oid="cocxgcg"
            >
              {content.services.package1.title}
            </h3>
            <p className="text-[#999999] mb-6" data-oid="36po_r_">
              {content.services.package1.description}
            </p>
            <ul className="space-y-3 mb-8" data-oid=".ldh59i">
              {content.services.package1.features?.map(
                (feature: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#999999]"
                    data-oid="p0fhkoc"
                  >
                    <svg
                      className="w-5 h-5 text-[#c8a46e] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="9_g:_xe"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                        data-oid="zr3d-lg"
                      />
                    </svg>
                    {feature}
                  </li>
                ),
              )}
            </ul>
            <Link
              href="#contact"
              className="block w-full py-3 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors text-center"
              data-oid="kpl_-6-"
            >
              {content.services.package1.cta}
            </Link>
          </div>

          {/* Package 2 */}
          <div
            className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#c8a46e]/30 transition-colors"
            data-oid=".0yluzb"
          >
            {content.services.package2.image ? (
              <img
                src={content.services.package2.image}
                alt={content.services.package2.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
                data-oid="m6b9-kv"
              />
            ) : (
              <div
                className="w-full h-48 bg-gradient-to-br from-[#1a1a1a] to-[#111111] rounded-lg mb-6 flex items-center justify-center"
                data-oid="h5rlc1_"
              >
                <span className="text-6xl" data-oid="r1z0vof">
                  🔧
                </span>
              </div>
            )}
            <div className="flex items-baseline gap-2 mb-4" data-oid="r1w-1v5">
              <span
                className="text-3xl font-bold text-[#f5f5f0]"
                data-oid="_iwz6._"
              >
                {content.services.package2.price}
              </span>
              <span className="text-[#666666]" data-oid="809ci38">
                / {content.services.package2.priceLabel}
              </span>
            </div>
            <h3
              className="text-xl font-semibold text-[#f5f5f0] mb-3"
              data-oid="kc2:52:"
            >
              {content.services.package2.title}
            </h3>
            <p className="text-[#999999] mb-6" data-oid=".f2f4:n">
              {content.services.package2.description}
            </p>
            <ul className="space-y-3 mb-8" data-oid="524w7k4">
              {content.services.package2.features?.map(
                (feature: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#999999]"
                    data-oid="51ow2t:"
                  >
                    <svg
                      className="w-5 h-5 text-[#c8a46e] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="wg0mnin"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                        data-oid="8ma.a9w"
                      />
                    </svg>
                    {feature}
                  </li>
                ),
              )}
            </ul>
            <Link
              href="#contact"
              className="block w-full py-3 bg-transparent border border-[#c8a46e] text-[#c8a46e] font-semibold rounded-lg hover:bg-[#c8a46e] hover:text-[#111111] transition-colors text-center"
              data-oid="3tj04kh"
            >
              {content.services.package2.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Template Preview Components - with color palette support
interface PreviewProps {
  palette?: { primary: string; secondary: string; bg: string; accent: string };
}

function PlumberPreview({
  palette = {
    primary: "#3b82f6",
    secondary: "#1e40af",
    bg: "#eff6ff",
    accent: "#60a5fa",
  },
}: PreviewProps) {
  return (
    <div
      className="h-full w-full flex flex-col rounded-lg overflow-hidden shadow-lg"
      style={{
        background: `linear-gradient(to bottom, ${palette.secondary}, ${palette.bg})`,
      }}
      data-oid="21hge2i"
    >
      {/* Browser header */}
      <div
        className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2"
        data-oid="kmkea5h"
      >
        <div className="flex gap-1.5" data-oid="kvmlh.r">
          <div
            className="w-3 h-3 rounded-full bg-red-400"
            data-oid="g.8av2-"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-yellow-400"
            data-oid=".satj4y"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-green-400"
            data-oid="s:qw_qx"
          ></div>
        </div>
        <div
          className="flex-1 bg-white/20 rounded h-5 mx-4"
          data-oid="ufsa_1a"
        ></div>
      </div>
      {/* Website preview */}
      <div
        className="flex-1 p-3 bg-white m-2 rounded shadow-md"
        data-oid="4blr047"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between mb-3 pb-2 border-b"
          style={{ borderColor: palette.primary }}
          data-oid="vznve6y"
        >
          <div className="flex items-center gap-2" data-oid="3grgcts">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: palette.primary }}
              data-oid="bqq6i_1"
            >
              P
            </div>
            <span
              className="font-bold text-gray-800 text-sm"
              data-oid="n7a1-yl"
            >
              RÖR-PRO
            </span>
          </div>
          <div
            className="px-3 py-1 rounded-full text-white text-xs font-semibold"
            style={{ backgroundColor: "#22c55e" }}
            data-oid="x8o3z5c"
          >
            RING
          </div>
        </div>
        {/* Hero content */}
        <div className="space-y-1.5" data-oid=".i6obgu">
          <div className="font-bold text-gray-800 text-xs" data-oid="_jwiv8p">
            Din rörmokare i Stockholm
          </div>
          <div
            className="flex items-center gap-1 text-green-600 text-[10px]"
            data-oid="d8k-.65"
          >
            <span data-oid="uxpzg3k">✓</span> Akut service
          </div>
          <div
            className="flex items-center gap-1 text-green-600 text-[10px]"
            data-oid="onp3a7c"
          >
            <span data-oid="i5-qcre">✓</span> Jour dygnet runt
          </div>
          <div
            className="flex items-center gap-1 text-green-600 text-[10px]"
            data-oid="ai9l60p"
          >
            <span data-oid="9e1f1ma">✓</span> Fri offert
          </div>
        </div>
      </div>
    </div>
  );
}

function ElectricianPreview({
  palette = {
    primary: "#eab308",
    secondary: "#a16207",
    bg: "#fefce8",
    accent: "#fde047",
  },
}: PreviewProps) {
  return (
    <div
      className="h-full w-full flex flex-col rounded-lg overflow-hidden shadow-lg"
      style={{
        background: `linear-gradient(to bottom, ${palette.secondary}, ${palette.bg})`,
      }}
      data-oid="uoniu-c"
    >
      <div
        className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2"
        data-oid="qjt-v:s"
      >
        <div className="flex gap-1.5" data-oid="._orxjk">
          <div
            className="w-3 h-3 rounded-full bg-red-400"
            data-oid="c5g68b9"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-yellow-400"
            data-oid="u1ed392"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-green-400"
            data-oid="_i.hpob"
          ></div>
        </div>
        <div
          className="flex-1 bg-white/20 rounded h-5 mx-4"
          data-oid="hk7v::j"
        ></div>
      </div>
      <div
        className="flex-1 p-3 bg-white m-2 rounded shadow-md"
        data-oid="zrqh.77"
      >
        <div
          className="flex items-center justify-between mb-3 pb-2 border-b"
          style={{ borderColor: palette.primary }}
          data-oid="1s5hp1v"
        >
          <div className="flex items-center gap-2" data-oid=".t6nad4">
            <span className="text-lg" data-oid="qy8yg77">
              ⚡
            </span>
            <span
              className="font-bold text-gray-800 text-sm"
              data-oid="ggykvyy"
            >
              EL-SÄKERT
            </span>
          </div>
          <div
            className="px-3 py-1 rounded-full text-white text-xs font-semibold"
            style={{ backgroundColor: palette.primary }}
            data-oid="ri_.m3_"
          >
            KONTAKT
          </div>
        </div>
        <div className="space-y-1.5" data-oid="1g.4rqz">
          <div className="font-bold text-gray-800 text-xs" data-oid="shzoawk">
            Elinstallation & Säkerhet
          </div>
          <div className="flex gap-1 flex-wrap" data-oid="7w9896x">
            <span
              className="px-1.5 py-0.5 rounded text-[8px] font-medium"
              style={{ backgroundColor: palette.bg, color: palette.secondary }}
              data-oid="wj_zd2v"
            >
              Certifierad
            </span>
            <span
              className="px-1.5 py-0.5 rounded text-[8px] font-medium"
              style={{ backgroundColor: palette.bg, color: palette.secondary }}
              data-oid="-f99an7"
            >
              A-behörighet
            </span>
          </div>
          <div className="text-gray-500 text-[10px]" data-oid="mwapzsa">
            Nyinstallation • Felavhjälpning • Besiktning
          </div>
        </div>
      </div>
    </div>
  );
}

function SalonPreview({
  palette = {
    primary: "#ec4899",
    secondary: "#be185d",
    bg: "#fdf2f8",
    accent: "#f9a8d4",
  },
}: PreviewProps) {
  return (
    <div
      className="h-full w-full flex flex-col rounded-lg overflow-hidden shadow-lg"
      style={{
        background: `linear-gradient(to bottom, ${palette.secondary}, ${palette.bg})`,
      }}
      data-oid="7owwd.w"
    >
      <div
        className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2"
        data-oid="wg:pd4c"
      >
        <div className="flex gap-1.5" data-oid="ogkky3a">
          <div
            className="w-3 h-3 rounded-full bg-red-400"
            data-oid="do45k:_"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-yellow-400"
            data-oid="snv:a.."
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-green-400"
            data-oid="k4v.7ef"
          ></div>
        </div>
        <div
          className="flex-1 bg-white/20 rounded h-5 mx-4"
          data-oid="jvxvno1"
        ></div>
      </div>
      <div
        className="flex-1 p-3 bg-white m-2 rounded shadow-md"
        data-oid="drcnm0o"
      >
        <div
          className="flex items-center justify-between mb-3 pb-2 border-b"
          style={{ borderColor: palette.primary }}
          data-oid="d1xiopl"
        >
          <span
            className="font-bold text-gray-800 text-sm italic"
            data-oid="x5tziaq"
          >
            GLAMOUR SALONG
          </span>
          <div
            className="px-3 py-1 rounded-full text-white text-xs font-semibold"
            style={{ backgroundColor: palette.primary }}
            data-oid=":2m5g69"
          >
            BOKA
          </div>
        </div>
        <div className="space-y-1.5" data-oid="xetot:7">
          <div className="font-bold text-gray-800 text-xs" data-oid="22zw4m.">
            Hårvård & Styling
          </div>
          <div className="text-gray-600 text-[10px]" data-oid="urvkg06">
            Klippning • Färgning • Styling
          </div>
          <div className="text-gray-400 text-[10px]" data-oid="2beayi_">
            Öppet: Mån-Fre 9-18
          </div>
        </div>
      </div>
    </div>
  );
}

function RestaurantPreview({
  palette = {
    primary: "#f97316",
    secondary: "#c2410c",
    bg: "#fff7ed",
    accent: "#fb923c",
  },
}: PreviewProps) {
  return (
    <div
      className="h-full w-full flex flex-col rounded-lg overflow-hidden shadow-lg"
      style={{
        background: `linear-gradient(to bottom, ${palette.secondary}, ${palette.bg})`,
      }}
      data-oid="3b-cyug"
    >
      <div
        className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2"
        data-oid="_1y6rd7"
      >
        <div className="flex gap-1.5" data-oid="b4noy0f">
          <div
            className="w-3 h-3 rounded-full bg-red-400"
            data-oid="zssyfzn"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-yellow-400"
            data-oid="9rcritr"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-green-400"
            data-oid="-m6a7jf"
          ></div>
        </div>
        <div
          className="flex-1 bg-white/20 rounded h-5 mx-4"
          data-oid="zw4gtab"
        ></div>
      </div>
      <div
        className="flex-1 p-3 bg-white m-2 rounded shadow-md"
        data-oid="ul4n:1f"
      >
        <div
          className="flex items-center justify-between mb-3 pb-2 border-b"
          style={{ borderColor: palette.primary }}
          data-oid="qn7:l5-"
        >
          <span className="font-bold text-gray-800 text-sm" data-oid="9r1lchz">
            BISTRO ITALIA
          </span>
          <div
            className="px-3 py-1 rounded-full text-white text-xs font-semibold"
            style={{ backgroundColor: "#dc2626" }}
            data-oid="6fwqtcx"
          >
            BOKA
          </div>
        </div>
        <div className="space-y-1.5" data-oid="-4t3kzz">
          <div className="font-bold text-gray-800 text-xs" data-oid=".i832or">
            Veckans Lunch
          </div>
          <div
            className="flex justify-between text-[10px] text-gray-600"
            data-oid="6cot88b"
          >
            <span data-oid="019fu7i">Pasta Carbonara</span>
            <span className="font-medium" data-oid="guibjoy">
              89 kr
            </span>
          </div>
          <div
            className="flex justify-between text-[10px] text-gray-600"
            data-oid="o87awc6"
          >
            <span data-oid="5x-qfnl">Caesarsallad</span>
            <span className="font-medium" data-oid="osi4lw8">
              79 kr
            </span>
          </div>
          <div
            className="flex justify-between text-[10px] text-gray-600"
            data-oid="2_ms2tx"
          >
            <span data-oid="0ik4x_i">Grillad lax</span>
            <span className="font-medium" data-oid="cj0.prm">
              119 kr
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RetailPreview({
  palette = {
    primary: "#22c55e",
    secondary: "#15803d",
    bg: "#f0fdf4",
    accent: "#4ade80",
  },
}: PreviewProps) {
  return (
    <div
      className="h-full w-full flex flex-col rounded-lg overflow-hidden shadow-lg"
      style={{
        background: `linear-gradient(to bottom, ${palette.secondary}, ${palette.bg})`,
      }}
      data-oid="ez9hxr8"
    >
      <div
        className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2"
        data-oid="gt38e61"
      >
        <div className="flex gap-1.5" data-oid="kxq7dod">
          <div
            className="w-3 h-3 rounded-full bg-red-400"
            data-oid="ld4gjuq"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-yellow-400"
            data-oid="6hiyft5"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-green-400"
            data-oid="slhz.7u"
          ></div>
        </div>
        <div
          className="flex-1 bg-white/20 rounded h-5 mx-4"
          data-oid=".hqwbb."
        ></div>
      </div>
      <div
        className="flex-1 p-3 bg-white m-2 rounded shadow-md"
        data-oid="czsyjpm"
      >
        <div
          className="flex items-center justify-between mb-3 pb-2 border-b"
          style={{ borderColor: palette.primary }}
          data-oid="rx1.dn-"
        >
          <span className="font-bold text-gray-800 text-sm" data-oid="wzhbqs1">
            BUTIK Stockholm
          </span>
          <div
            className="px-3 py-1 rounded-full text-white text-xs font-semibold"
            style={{ backgroundColor: palette.primary }}
            data-oid="j:svsgj"
          >
            KÖP
          </div>
        </div>
        <div className="space-y-1.5" data-oid="10mw5g6">
          <div className="font-bold text-gray-800 text-xs" data-oid="yjd3u60">
            Nya produkter
          </div>
          <div className="grid grid-cols-3 gap-1.5" data-oid="lung5ga">
            <div
              className="aspect-square bg-gray-100 rounded flex items-center justify-center text-xl"
              data-oid="-_rdwa."
            >
              📦
            </div>
            <div
              className="aspect-square bg-gray-100 rounded flex items-center justify-center text-xl"
              data-oid="9043btn"
            >
              📦
            </div>
            <div
              className="aspect-square bg-gray-100 rounded flex items-center justify-center text-xl"
              data-oid="sw85-l4"
            >
              📦
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsultantPreview({
  palette = {
    primary: "#8b5cf6",
    secondary: "#6d28d9",
    bg: "#f5f3ff",
    accent: "#a78bfa",
  },
}: PreviewProps) {
  return (
    <div
      className="h-full w-full flex flex-col rounded-lg overflow-hidden shadow-lg"
      style={{
        background: `linear-gradient(to bottom, ${palette.secondary}, ${palette.bg})`,
      }}
      data-oid="2j.e4sn"
    >
      <div
        className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2"
        data-oid="e_ekvtc"
      >
        <div className="flex gap-1.5" data-oid="d68b4a5">
          <div
            className="w-3 h-3 rounded-full bg-red-400"
            data-oid="pos_3mf"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-yellow-400"
            data-oid="v7o4tot"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-green-400"
            data-oid=":kndj:t"
          ></div>
        </div>
        <div
          className="flex-1 bg-white/20 rounded h-5 mx-4"
          data-oid="4m_nz6v"
        ></div>
      </div>
      <div
        className="flex-1 p-3 bg-white m-2 rounded shadow-md"
        data-oid="pru971z"
      >
        <div
          className="flex items-center justify-between mb-3 pb-2 border-b"
          style={{ borderColor: palette.primary }}
          data-oid="r4h.3pl"
        >
          <span className="font-bold text-gray-800 text-sm" data-oid="jyx7s6g">
            ANDERS ERIKSSON
          </span>
          <span className="text-gray-400 text-[10px]" data-oid="gbkl6uq">
            Konsult
          </span>
        </div>
        <div className="space-y-1.5" data-oid="a0uij0o">
          <div className="font-bold text-gray-800 text-xs" data-oid="qg:k68v">
            Strategi & Ledarskap
          </div>
          <div className="text-gray-500 text-[10px]" data-oid="zq.yy7m">
            20 års erfarenhet
          </div>
          <div className="flex gap-1 flex-wrap" data-oid="8iw3_xo">
            <span
              className="px-1.5 py-0.5 rounded text-[8px] font-medium"
              style={{ backgroundColor: palette.bg, color: palette.secondary }}
              data-oid="ljgc52h"
            >
              Företagsutveckling
            </span>
            <span
              className="px-1.5 py-0.5 rounded text-[8px] font-medium"
              style={{ backgroundColor: palette.bg, color: palette.secondary }}
              data-oid=".s8i4h7"
            >
              Coaching
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const TEMPLATE_IMAGE_PLACEHOLDER = "/templates/placeholder.svg";

// Template Card Component - Fresh modern design with images
function TemplateCard({
  template,
  onClick,
}: {
  template: any;
  onClick: () => void;
}) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = TEMPLATE_IMAGE_PLACEHOLDER;
  };
  return (
    <div
      onClick={onClick}
      className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#c8a46e]/50 transition-all cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c8a46e]/10"
      data-oid="7hlhqvn"
    >
      {/* Website Preview Image */}
      <div className="h-48 overflow-hidden bg-gray-900" data-oid="9.-xdt-">
        <img
          src={template.image || TEMPLATE_IMAGE_PLACEHOLDER}
          alt={template.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={handleImageError}
          data-oid="fvc4jvw"
        />
      </div>

      {/* Content */}
      <div className="p-5" data-oid="l.4qa7j">
        <div
          className="flex items-center justify-between mb-2"
          data-oid=".f48v_1"
        >
          <h3
            className="text-lg font-bold text-white group-hover:text-[#c8a46e] transition-colors"
            data-oid="8.obo2p"
          >
            {template.name}
          </h3>
          <span
            className="px-2 py-1 bg-[#c8a46e]/10 text-[#c8a46e] text-xs font-medium rounded-full"
            data-oid="4.4y1s3"
          >
            {template.category}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4" data-oid="oydcfc3">
          {template.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2" data-oid="wy61jp6">
          {template.features.slice(0, 3).map((feature: string, i: number) => (
            <span
              key={i}
              className="text-xs px-3 py-1.5 bg-[#252525] text-gray-300 rounded-lg border border-[#333333]"
              data-oid="m83:5n5"
            >
              {feature}
            </span>
          ))}
          {template.features.length > 3 && (
            <span
              className="text-xs px-3 py-1.5 bg-[#252525] text-gray-500 rounded-lg border border-[#333333]"
              data-oid="ci8srn_"
            >
              +{template.features.length - 3}
            </span>
          )}
        </div>

        {/* View button */}
        <div
          className="mt-4 pt-4 border-t border-[#2a2a2a] flex items-center justify-between"
          data-oid="7q7lm2q"
        >
          <span
            className="text-[#c8a46e] text-sm font-medium group-hover:translate-x-1 transition-transform"
            data-oid="twdect_"
          >
            Se mall →
          </span>
        </div>
      </div>
    </div>
  );
}

// Focusable selector for modal trap
const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

// Template Modal Component - with full size image preview
function TemplateModal({
  template,
  onClose,
}: {
  template: any;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !modalRef.current) return;
      const focusable = Array.from<HTMLElement>(
        modalRef.current.querySelectorAll(FOCUSABLE),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = TEMPLATE_IMAGE_PLACEHOLDER;
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="template-modal-title"
      data-oid=".f8ffkj"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        data-oid="ugmd-bu"
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative bg-[#1a1a1a] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-[#333333] shadow-2xl"
        data-oid="d6n1jt5"
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Stäng"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#252525] hover:bg-[#333333] rounded-full flex items-center justify-center text-white transition-colors"
          data-oid="_satlja"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            data-oid="x5w:x5u"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
              data-oid="fxs7::o"
            />
          </svg>
        </button>

        <div
          className="flex flex-col lg:flex-row h-full overflow-auto"
          data-oid="o2c.tcs"
        >
          {/* Preview Area - Full Image */}
          <div className="lg:w-2/3 p-6 bg-[#0a0a0a]" data-oid="gsqnc0q">
            <div
              className="text-xs text-gray-500 mb-2 uppercase tracking-wide"
              data-oid="j1_w_04"
            >
              Förhandsvisning
            </div>
            <div
              className="rounded-xl overflow-hidden shadow-2xl border border-[#333333]"
              data-oid="rb8-ip5"
            >
              <img
                src={template.image || TEMPLATE_IMAGE_PLACEHOLDER}
                alt={template.name}
                className="w-full h-auto"
                onError={handleImageError}
                data-oid="w8q4lnd"
              />
            </div>
          </div>

          {/* Controls Area */}
          <div
            className="lg:w-1/3 p-6 bg-[#1a1a1a] border-l border-[#333333]"
            data-oid="d5.z732"
          >
            <h2
              id="template-modal-title"
              className="text-2xl font-bold text-white mb-2"
              data-oid="53f3os6"
            >
              {template.name}
            </h2>
            <p className="text-gray-400 text-sm mb-6" data-oid="u8k2jz6">
              {template.description}
            </p>

            {/* Color Palette Info */}
            <div
              className="mb-6 p-4 bg-[#252525] rounded-xl border border-[#333333]"
              data-oid="lbkz264"
            >
              <div
                className="text-xs text-gray-500 mb-2 uppercase tracking-wide"
                data-oid="5360hii"
              >
                Färgval
              </div>
              <p className="text-gray-300 text-sm" data-oid="5.80aaw">
                Vi anpassar färgerna efter ditt varumärke. Välj mellan olika
                färgscheman i samband med beställning.
              </p>
            </div>

            {/* Features */}
            <div className="mb-8" data-oid="g2zd:ph">
              <div
                className="text-xs text-gray-500 mb-3 uppercase tracking-wide"
                data-oid="-fi-.kp"
              >
                Ingår i mallen
              </div>
              <ul className="space-y-2" data-oid=".vz4j4m">
                {template.features.map((feature: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                    data-oid="mcp5ot2"
                  >
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="6.aw_pe"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                        data-oid="e10a-tu"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA – close modal on click so contact form is visible when we navigate */}
            <Link
              href={`/?mall=${template.id}#contact`}
              onClick={onClose}
              className="block w-full py-4 bg-[#c8a46e] text-[#111111] font-bold rounded-xl hover:bg-[#d4b480] transition-colors text-center"
              data-oid="xzrpu:."
            >
              Välj denna mall
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Examples Section Component
const templates = [
  {
    id: "plumber",
    name: "VVS & Rörmokare",
    category: "Hantverkare",
    description:
      "Akut service, jourdygnet runt, offreförfrågan. Perfekt för dig som vill synas och få fler kunder.",
    features: [
      "Akut kontakt-knapp",
      "Tjänsteöversikt",
      "Prislista",
      "Jourdygnet runt",
      "Offertförfrågan",
    ],
    image: "/templates/plumber.png",
  },
  {
    id: "electrician",
    name: "Elektriker",
    category: "Hantverkare",
    description:
      "Elinstallation, säkerhet, certifierad. Bygg förtroende med dokumenterad kompetens.",
    features: [
      "Säkerhetsfokus",
      "Certifieringar",
      "Kontaktformulär",
      "Tjänstepresentation",
      "Offertförfrågan",
    ],
    image: "/templates/electrician.png",
  },
  {
    id: "salon",
    name: "Salong",
    category: "Skönhet",
    description:
      "Bokning, behandlingar, priser. Låt dina kunder boka direkt online.",
    features: [
      "Online-bokning",
      "Behandlingsmeny",
      "Priser",
      "Galleri",
      "Personal presentation",
    ],
    image: "/templates/salon.png",
  },
  {
    id: "restaurant",
    name: "Restaurang",
    category: "Mat & Dryck",
    description:
      "Meny, bordsbokning, evenemang. Visa upp din mat och skapa stämning.",
    features: [
      "Digital meny",
      "Bordsbokning",
      "Evenemang",
      "Öppettider",
      "Kontakt",
    ],
    image: "/templates/restaurant.png",
  },
  {
    id: "retail",
    name: "Butik",
    category: "Handel",
    description:
      "Produkter, e-handel, öppettider. Visa upp ditt utbud och öka försäljningen.",
    features: ["Produktkatalog", "Öppettider", "Kontakt", "Om oss", "Karta"],
    image: "/templates/retail.png",
  },
  {
    id: "consultant",
    name: "Konsult",
    category: "Företagstjänster",
    description:
      "Expertis, tjänster, kontakt. Bygg trovärdighet och få fler uppdrag.",
    features: ["Tjänsteöversikt", "Om mig", "Kontakt", "Referenser", "Blogg"],
    image: "/templates/consultant.png",
  },
];

// Examples Section Component
function ExamplesSection({ content }: { content: PageContent }) {
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);

  return (
    <>
      <section id="examples" className="py-24 bg-[#111111]" data-oid="p5rky9d">
        <div className="max-w-6xl mx-auto px-6" data-oid="fseu8j9">
          {/* Section Header */}
          <div className="text-center mb-16" data-oid="fe3sbj6">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4"
              data-oid="651y0nu"
            >
              {content.examples.sectionTitle}
            </h2>
            <p className="text-[#999999] max-w-2xl mx-auto" data-oid="1avu0zo">
              {content.examples.sectionSubtitle}
            </p>
          </div>

          {/* Templates Grid */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="ojx-mca"
          >
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onClick={() => setSelectedTemplate(template)}
                data-oid="bvdb7e0"
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12" data-oid="ywlkeoq">
            <p className="text-[#999999] mb-4" data-oid="h2rn6yv">
              Alla mallar anpassas efter ditt företags varumärke och behov
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-3 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors"
              data-oid="mw9vtmw"
            >
              Beställ din hemsida
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedTemplate && (
        <TemplateModal
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
          data-oid="y2d2-sm"
        />
      )}
    </>
  );
}

// Contact Section Component
function ContactSection({ content }: { content: PageContent }) {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [templateId, setTemplateId] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mall = searchParams.get("mall");
    if (mall && templates.some((t) => t.id === mall)) {
      setTemplateId(mall);
    }
  }, [searchParams]);

  useEffect(() => {
    if ((status === "success" || status === "error") && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName) {
      setErrorMessage("Namn krävs");
      setStatus("error");
      return;
    }
    if (!trimmedEmail) {
      setErrorMessage("E-post krävs");
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage("Ogiltig e-postadress");
      setStatus("error");
      return;
    }
    if (!trimmedMessage) {
      setErrorMessage("Meddelande krävs");
      setStatus("error");
      return;
    }
    const templateName =
      templateId && templateId !== "other"
        ? (templates.find((t) => t.id === templateId)?.name ?? "")
        : "";
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          template: templateName,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = data.detail
          ? `${data.error} (${data.detail})`
          : data.error || "Något gick fel";
        setErrorMessage(msg);
        setStatus("error");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTemplateId("");
    } catch {
      setErrorMessage("Kunde inte skicka. Försök igen.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
      ref={sectionRef}
      data-oid="7:b95sw"
    >
      {/* Background */}
      {content.contact.image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${content.contact.image})` }}
          data-oid="e.xlhzq"
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"
        data-oid="2uik3e-"
      />

      <div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        data-oid="nhc6w6j"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4"
          data-oid="woxax1k"
        >
          {content.contact.sectionTitle}
        </h2>
        <p className="text-[#999999] mb-10" data-oid="d5w5_yl">
          {content.contact.sectionSubtitle}
        </p>

        {status === "success" ? (
          <div
            className="max-w-lg mx-auto py-8 px-6 bg-[#111111] border border-[#2a2a2a] rounded-xl text-[#f5f5f0]"
            data-oid="u_qr5d4"
          >
            <p
              className="text-lg font-medium text-[#c8a46e] mb-2"
              data-oid="2af3094"
            >
              Tack för din förfrågan!
            </p>
            <p className="text-[#999999]" data-oid="-ou664o">
              Vi återkommer inom 24 timmar.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-left max-w-lg mx-auto"
            data-oid="w-47vzy"
          >
            {errorMessage && (
              <p
                className="text-red-400 text-sm"
                role="alert"
                data-oid="18qwbx2"
              >
                {errorMessage}
              </p>
            )}
            <div data-oid="q9241dq">
              <label
                htmlFor="contact-name"
                className="block text-[#e5e5e0] text-sm font-medium mb-1.5"
                data-oid="qr17x:x"
              >
                Namn
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Ditt namn"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-[#f5f5f0] placeholder-[#666666] focus:border-[#c8a46e] focus:outline-none disabled:opacity-60"
                data-oid="o:q5gqf"
              />
            </div>
            <div data-oid="m-7vvd6">
              <label
                htmlFor="contact-email"
                className="block text-[#e5e5e0] text-sm font-medium mb-1.5"
                data-oid="4q51dth"
              >
                E-post
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="din@epost.se"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-[#f5f5f0] placeholder-[#666666] focus:border-[#c8a46e] focus:outline-none disabled:opacity-60"
                data-oid="woy30u0"
              />
            </div>
            <div data-oid="p:c7r_4">
              <label
                htmlFor="contact-template"
                className="block text-[#e5e5e0] text-sm font-medium mb-1.5"
                data-oid="pmlkow-"
              >
                Vilken mall är du intresserad av? (valfritt)
              </label>
              <select
                id="contact-template"
                name="template"
                value={templateId}
                onChange={(e) => setTemplateId(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-[#f5f5f0] focus:border-[#c8a46e] focus:outline-none disabled:opacity-60"
                data-oid="kgzc:.p"
              >
                <option value="" data-oid="9a9a_b0">
                  — Välj mall —
                </option>
                {templates.map((t) => (
                  <option key={t.id} value={t.id} data-oid="r1trj62">
                    {t.name}
                  </option>
                ))}
                <option value="other" data-oid="2r7r8zf">
                  Övrigt / ingen specifik
                </option>
              </select>
            </div>
            <div data-oid="96sukit">
              <label
                htmlFor="contact-message"
                className="block text-[#e5e5e0] text-sm font-medium mb-1.5"
                data-oid="pgxajpb"
              >
                Meddelande
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Skriv ditt meddelande..."
                rows={4}
                autoComplete="off"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-[#f5f5f0] placeholder-[#666666] focus:border-[#c8a46e] focus:outline-none resize-none disabled:opacity-60"
                data-oid="wejwir5"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              data-oid="0536stw"
            >
              {status === "loading" ? "Skickar..." : "Skicka förfrågan"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// Default content (full shape for sections)
const defaultContent = {
  hero: {
    badge: "Webbdesign för småföretag i Stockholm",
    heading: "Enkla hemsidor för småföretag – utan krångel",
    subheading:
      "Vi hjälper hantverkare och småföretag att få en professionell hemsida som syns, fungerar och är lätt att äga själv.",
    benefits: [
      "Enkla hemsidor utan krångel",
      "Tydliga priser från 9 900 kr",
      "Du äger din hemsida",
      "Ingen bindningstid",
    ],
    ctaPrimary: "Se våra priser",
    ctaSecondary: "Se exempel",
    trustText: "Fast pris • Ingen bindning • Du äger hemsidan",
    logo: "",
    heroImage: "",
  },
  services: {
    sectionTitle: "Våra tjänster",
    sectionSubtitle: "Alla priser är från-priser och anpassas efter behov.",
    package1: {
      title: "Enkel hemsida",
      price: "9 900 kr",
      priceLabel: "från",
      description: "En tydlig och professionell hemsida utan krångel.",
      features: [
        "Uppstartssamtal",
        "Design anpassad efter ditt företag",
        "1-5 sidor",
        "Mobilanpassad",
      ],
      cta: "Begär offert",
      image: "",
    },
    package2: {
      title: "Webb-hjälp & underhåll",
      price: "490 kr",
      priceLabel: "från / månad",
      description: "För dig som vill ha en trygg kontakt.",
      features: ["Textuppdateringar", "Teknisk support", "Ingen bindning"],
      cta: "Läs mer",
      image: "",
    },
  },
  examples: {
    sectionTitle: "Våra mallar",
    sectionSubtitle: "Vi har färdiga mallar för olika branscher.",
  },
  contact: {
    sectionTitle: "Kontakta oss",
    sectionSubtitle: "Skicka en förfrågan så återkommer vi inom 24 timmar.",
    image: "",
  },
};

// Default page query shape (API returns { page: ... }) – full shape from getPageData
const defaultPageQuery = {
  page: {
    hero: {
      badge: defaultContent.hero.badge,
      heading: defaultContent.hero.heading,
      subheading: defaultContent.hero.subheading,
      benefits: defaultContent.hero.benefits,
      ctaPrimary: defaultContent.hero.ctaPrimary,
      ctaSecondary: defaultContent.hero.ctaSecondary,
      trustText: defaultContent.hero.trustText,
      logo: defaultContent.hero.logo,
      heroImage: defaultContent.hero.heroImage,
    },
    services: {
      sectionTitle: defaultContent.services.sectionTitle,
      sectionSubtitle: defaultContent.services.sectionSubtitle,
      package1: defaultContent.services.package1,
      package2: defaultContent.services.package2,
    },
    examples: {
      sectionTitle: defaultContent.examples.sectionTitle,
      sectionSubtitle: defaultContent.examples.sectionSubtitle,
    },
    contact: {
      sectionTitle: defaultContent.contact.sectionTitle,
      sectionSubtitle: defaultContent.contact.sectionSubtitle,
      image: defaultContent.contact.image,
    },
  },
};

type PageDoc = typeof defaultPageQuery.page;

function mergePackage(
  from: PageDoc["services"] extends { package1?: infer P } ? P : never,
  fallback: typeof defaultContent.services.package1,
): typeof defaultContent.services.package1 {
  if (!from) return fallback;
  return {
    title: from.title ?? fallback.title,
    price: from.price ?? fallback.price,
    priceLabel: from.priceLabel ?? fallback.priceLabel,
    description: from.description ?? fallback.description,
    features: from.features?.length ? from.features : fallback.features,
    cta: from.cta ?? fallback.cta,
    image: from.image ?? fallback.image,
  };
}

/** Merge API page document into full content shape for sections */
function mergePageIntoContent(
  page: PageDoc | null | undefined,
): typeof defaultContent {
  const hero = page?.hero;
  const services = page?.services;
  const examples = page?.examples;
  const contact = page?.contact;
  return {
    ...defaultContent,
    hero: {
      ...defaultContent.hero,
      ...(hero && {
        badge: hero.badge ?? defaultContent.hero.badge,
        heading: hero.heading ?? defaultContent.hero.heading,
        subheading: hero.subheading ?? defaultContent.hero.subheading,
        benefits: hero.benefits?.length
          ? hero.benefits
          : defaultContent.hero.benefits,
        ctaPrimary: hero.ctaPrimary ?? defaultContent.hero.ctaPrimary,
        ctaSecondary: hero.ctaSecondary ?? defaultContent.hero.ctaSecondary,
        trustText: hero.trustText ?? defaultContent.hero.trustText,
        logo: hero.logo ?? defaultContent.hero.logo,
        heroImage: hero.heroImage ?? defaultContent.hero.heroImage,
      }),
    },
    services: {
      ...defaultContent.services,
      ...(services && {
        sectionTitle:
          services.sectionTitle ?? defaultContent.services.sectionTitle,
        sectionSubtitle:
          services.sectionSubtitle ?? defaultContent.services.sectionSubtitle,
        package1: mergePackage(
          services.package1,
          defaultContent.services.package1,
        ),
        package2: mergePackage(
          services.package2,
          defaultContent.services.package2,
        ),
      }),
    },
    examples: {
      ...defaultContent.examples,
      ...(examples && {
        sectionTitle:
          examples.sectionTitle ?? defaultContent.examples.sectionTitle,
        sectionSubtitle:
          examples.sectionSubtitle ?? defaultContent.examples.sectionSubtitle,
      }),
    },
    contact: {
      ...defaultContent.contact,
      ...(contact && {
        sectionTitle:
          contact.sectionTitle ?? defaultContent.contact.sectionTitle,
        sectionSubtitle:
          contact.sectionSubtitle ?? defaultContent.contact.sectionSubtitle,
        image: contact.image ?? defaultContent.contact.image,
      }),
    },
  };
}

export default function Home() {
  const [pageData, setPageData] = useState<{ page: PageDoc } | null>(null);

  useEffect(() => {
    fetch("/api/page-data")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => data && setPageData(data))
      .catch(() => {});
  }, []);

  const content = mergePageIntoContent(pageData?.page ?? defaultPageQuery.page);

  return (
    <main className="min-h-screen bg-[#0a0a0a]" data-oid="ok_x1pu">
      <HeroSection content={content} data-oid="z61vldi" />
      <ServicesSection content={content} data-oid="ag4.e8o" />
      <ExamplesSection content={content} data-oid="83edyub" />
      <Suspense
        fallback={<div className="py-24 min-h-[40vh]" data-oid="g7a.fxm" />}
        data-oid="m313l7q"
      >
        <ContactSection content={content} data-oid="y5-7qwr" />
      </Suspense>
    </main>
  );
}
