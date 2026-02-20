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
      data-oid="0:pkbi1"
    >
      {/* Background */}
      <div
        className="inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] right-auto bottom-auto absolute left-[713px] top-[512px]"
        data-oid="s8jjofo"
      />

      {content.hero.heroImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${content.hero.heroImage})` }}
          data-oid="5hd-iwf"
        />
      )}

      <div
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center"
        data-oid="x0jsw3s"
      >
        {/* Badge */}
        <div
          className="inline-block px-4 py-2 bg-[#c8a46e]/10 border border-[#c8a46e]/20 text-[#c8a46e] text-sm mb-8 w-[334px] h-[55px] rounded-[9998px]"
          data-oid="w3sjl_s"
        >
          {content.hero.badge}
        </div>

        {/* Logo - only show if uploaded */}
        {content.hero.logo && (
          <div className="mb-8" data-oid="3lqsilc">
            <img
              src={content.hero.logo}
              alt="Logo"
              className="h-24 mx-auto object-contain"
              data-oid="_tc-v9d"
            />
          </div>
        )}

        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl font-bold text-[#f5f5f0] mb-6 max-w-4xl mx-auto leading-tight"
          data-oid="vsaap0q"
        >
          {content.hero.heading}
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-[#999999] mb-10 max-w-2xl mx-auto leading-relaxed"
          data-oid="98856a1"
        >
          {content.hero.subheading}
        </p>

        {/* Benefits */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-10"
          data-oid="l8i5o._"
        >
          {content.hero.benefits?.map((benefit: string, i: number) => (
            <div
              key={i}
              className="flex items-center gap-2 text-[#999999]"
              data-oid="m.wrd9b"
            >
              <svg
                className="w-5 h-5 text-[#c8a46e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="a_45c5z"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                  data-oid="yrpb5x9"
                />
              </svg>
              {benefit}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-oid="rzvqy59"
        >
          <Link
            href="#services"
            className="px-8 py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors text-center"
            data-oid="uzmqrza"
          >
            {content.hero.ctaPrimary}
          </Link>
          <Link
            href="#examples"
            className="px-8 py-4 bg-transparent border border-[#333333] text-[#f5f5f0] font-semibold rounded-lg hover:border-[#c8a46e] hover:text-[#c8a46e] transition-colors text-center"
            data-oid="awd61kt"
          >
            {content.hero.ctaSecondary}
          </Link>
        </div>

        {/* Trust Text */}
        <p className="text-[#666666] mt-8 text-sm" data-oid="e8p:8nd">
          {content.hero.trustText}
        </p>
      </div>
    </section>
  );
}

// Services Section Component
function ServicesSection({ content }: { content: PageContent }) {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]" data-oid="o5fx9jf">
      <div className="max-w-6xl mx-auto px-6" data-oid="n_i99w_">
        {/* Section Header */}
        <div className="text-center mb-16" data-oid="iz3tai5">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4"
            data-oid="fuyxgna"
          >
            {content.services.sectionTitle}
          </h2>
          <p className="text-[#999999] max-w-2xl mx-auto" data-oid="w6x7np_">
            {content.services.sectionSubtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8" data-oid="izrqnnn">
          {/* Package 1 */}
          <div
            className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#c8a46e]/30 transition-colors"
            data-oid="w.l2z.7"
          >
            {content.services.package1.image ? (
              <img
                src={content.services.package1.image}
                alt={content.services.package1.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
                data-oid="1yl9:.."
              />
            ) : (
              <div
                className="w-full h-48 bg-gradient-to-br from-[#1a1a1a] to-[#111111] rounded-lg mb-6 flex items-center justify-center"
                data-oid="boalhug"
              >
                <span className="text-6xl" data-oid="n.4rsp7">
                  🏠
                </span>
              </div>
            )}
            <div className="flex items-baseline gap-2 mb-4" data-oid="dwl8qq9">
              <span
                className="text-3xl font-bold text-[#f5f5f0]"
                data-oid="tm64vjw"
              >
                {content.services.package1.price}
              </span>
              <span className="text-[#666666]" data-oid="xlkr5cj">
                / {content.services.package1.priceLabel}
              </span>
            </div>
            <h3
              className="text-xl font-semibold text-[#f5f5f0] mb-3"
              data-oid="ko7vdc1"
            >
              {content.services.package1.title}
            </h3>
            <p className="text-[#999999] mb-6" data-oid="dqtfxlv">
              {content.services.package1.description}
            </p>
            <ul className="space-y-3 mb-8" data-oid="1w9yjpa">
              {content.services.package1.features?.map(
                (feature: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#999999]"
                    data-oid="6hun5o0"
                  >
                    <svg
                      className="w-5 h-5 text-[#c8a46e] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="b.6k3m0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                        data-oid="ecvjqya"
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
              data-oid="j5607qn"
            >
              {content.services.package1.cta}
            </Link>
          </div>

          {/* Package 2 */}
          <div
            className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#c8a46e]/30 transition-colors"
            data-oid="r83lanq"
          >
            {content.services.package2.image ? (
              <img
                src={content.services.package2.image}
                alt={content.services.package2.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
                data-oid="yu1e631"
              />
            ) : (
              <div
                className="w-full h-48 bg-gradient-to-br from-[#1a1a1a] to-[#111111] rounded-lg mb-6 flex items-center justify-center"
                data-oid="vfu7ija"
              >
                <span className="text-6xl" data-oid=".ej07jk">
                  🔧
                </span>
              </div>
            )}
            <div className="flex items-baseline gap-2 mb-4" data-oid="khr1znk">
              <span
                className="text-3xl font-bold text-[#f5f5f0]"
                data-oid="x.8m.vs"
              >
                {content.services.package2.price}
              </span>
              <span className="text-[#666666]" data-oid="rui-n0v">
                / {content.services.package2.priceLabel}
              </span>
            </div>
            <h3
              className="text-xl font-semibold text-[#f5f5f0] mb-3"
              data-oid="fbjf_b1"
            >
              {content.services.package2.title}
            </h3>
            <p className="text-[#999999] mb-6" data-oid="o-hu27u">
              {content.services.package2.description}
            </p>
            <ul className="space-y-3 mb-8" data-oid="j5_de3p">
              {content.services.package2.features?.map(
                (feature: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#999999]"
                    data-oid="5ai9:dj"
                  >
                    <svg
                      className="w-5 h-5 text-[#c8a46e] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="hwoxlxs"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                        data-oid="a0m1:.."
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
              data-oid="l2x7ml0"
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
      data-oid="e_1sv13"
    >
      {/* Browser header */}
      <div
        className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2"
        data-oid="fdtpmq:"
      >
        <div className="flex gap-1.5" data-oid="3t3s3m_">
          <div
            className="w-3 h-3 rounded-full bg-red-400"
            data-oid="d0bq4kx"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-yellow-400"
            data-oid="zxvsy4s"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-green-400"
            data-oid="pdmhgo8"
          ></div>
        </div>
        <div
          className="flex-1 bg-white/20 rounded h-5 mx-4"
          data-oid="9:mpu2-"
        ></div>
      </div>
      {/* Website preview */}
      <div
        className="flex-1 p-3 bg-white m-2 rounded shadow-md"
        data-oid="sp8hosu"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between mb-3 pb-2 border-b"
          style={{ borderColor: palette.primary }}
          data-oid="iw0arih"
        >
          <div className="flex items-center gap-2" data-oid="1n0l036">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: palette.primary }}
              data-oid="pht33lr"
            >
              P
            </div>
            <span
              className="font-bold text-gray-800 text-sm"
              data-oid="t7qpjg0"
            >
              RÖR-PRO
            </span>
          </div>
          <div
            className="px-3 py-1 rounded-full text-white text-xs font-semibold"
            style={{ backgroundColor: "#22c55e" }}
            data-oid="5uad:c6"
          >
            RING
          </div>
        </div>
        {/* Hero content */}
        <div className="space-y-1.5" data-oid="4v:jt42">
          <div className="font-bold text-gray-800 text-xs" data-oid="hhrjk_f">
            Din rörmokare i Stockholm
          </div>
          <div
            className="flex items-center gap-1 text-green-600 text-[10px]"
            data-oid="9y2b7j2"
          >
            <span data-oid="k6s0:s7">✓</span> Akut service
          </div>
          <div
            className="flex items-center gap-1 text-green-600 text-[10px]"
            data-oid="rs0lca9"
          >
            <span data-oid="9bfjdcr">✓</span> Jour dygnet runt
          </div>
          <div
            className="flex items-center gap-1 text-green-600 text-[10px]"
            data-oid="4z01e7p"
          >
            <span data-oid="duinad-">✓</span> Fri offert
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
      data-oid="kb3ga11"
    >
      <div
        className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2"
        data-oid="gyiaxhi"
      >
        <div className="flex gap-1.5" data-oid="x6p9b6a">
          <div
            className="w-3 h-3 rounded-full bg-red-400"
            data-oid="y:2mwot"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-yellow-400"
            data-oid="f4471s6"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-green-400"
            data-oid="b-.coyt"
          ></div>
        </div>
        <div
          className="flex-1 bg-white/20 rounded h-5 mx-4"
          data-oid="9gmt3uv"
        ></div>
      </div>
      <div
        className="flex-1 p-3 bg-white m-2 rounded shadow-md"
        data-oid="fbcgs6p"
      >
        <div
          className="flex items-center justify-between mb-3 pb-2 border-b"
          style={{ borderColor: palette.primary }}
          data-oid="c7ys9.z"
        >
          <div className="flex items-center gap-2" data-oid="y48hlc4">
            <span className="text-lg" data-oid="1:g1rop">
              ⚡
            </span>
            <span
              className="font-bold text-gray-800 text-sm"
              data-oid="by1.by."
            >
              EL-SÄKERT
            </span>
          </div>
          <div
            className="px-3 py-1 rounded-full text-white text-xs font-semibold"
            style={{ backgroundColor: palette.primary }}
            data-oid="7v5d7ye"
          >
            KONTAKT
          </div>
        </div>
        <div className="space-y-1.5" data-oid="meryl4n">
          <div className="font-bold text-gray-800 text-xs" data-oid="1mhw6-m">
            Elinstallation & Säkerhet
          </div>
          <div className="flex gap-1 flex-wrap" data-oid="3j:db3h">
            <span
              className="px-1.5 py-0.5 rounded text-[8px] font-medium"
              style={{ backgroundColor: palette.bg, color: palette.secondary }}
              data-oid="7r:kn2s"
            >
              Certifierad
            </span>
            <span
              className="px-1.5 py-0.5 rounded text-[8px] font-medium"
              style={{ backgroundColor: palette.bg, color: palette.secondary }}
              data-oid="viwwqxf"
            >
              A-behörighet
            </span>
          </div>
          <div className="text-gray-500 text-[10px]" data-oid="y8.cb9o">
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
      data-oid="pbhu.bg"
    >
      <div
        className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2"
        data-oid=":c6lkf-"
      >
        <div className="flex gap-1.5" data-oid="cyqz-q-">
          <div
            className="w-3 h-3 rounded-full bg-red-400"
            data-oid="9b49d.-"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-yellow-400"
            data-oid=":tu64ow"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-green-400"
            data-oid="cr221d1"
          ></div>
        </div>
        <div
          className="flex-1 bg-white/20 rounded h-5 mx-4"
          data-oid="hnyddjl"
        ></div>
      </div>
      <div
        className="flex-1 p-3 bg-white m-2 rounded shadow-md"
        data-oid="h_nwwbr"
      >
        <div
          className="flex items-center justify-between mb-3 pb-2 border-b"
          style={{ borderColor: palette.primary }}
          data-oid=":vwmp_a"
        >
          <span
            className="font-bold text-gray-800 text-sm italic"
            data-oid="qu11lgl"
          >
            GLAMOUR SALONG
          </span>
          <div
            className="px-3 py-1 rounded-full text-white text-xs font-semibold"
            style={{ backgroundColor: palette.primary }}
            data-oid="makkdda"
          >
            BOKA
          </div>
        </div>
        <div className="space-y-1.5" data-oid="ubdp19w">
          <div className="font-bold text-gray-800 text-xs" data-oid="ykp:pzm">
            Hårvård & Styling
          </div>
          <div className="text-gray-600 text-[10px]" data-oid="wa5kvez">
            Klippning • Färgning • Styling
          </div>
          <div className="text-gray-400 text-[10px]" data-oid="1cbqnh6">
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
      data-oid="ch-90l:"
    >
      <div
        className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2"
        data-oid="tq5:az_"
      >
        <div className="flex gap-1.5" data-oid="yjqtqa8">
          <div
            className="w-3 h-3 rounded-full bg-red-400"
            data-oid="xsact.g"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-yellow-400"
            data-oid="yh3s8ky"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-green-400"
            data-oid="h1-3e.c"
          ></div>
        </div>
        <div
          className="flex-1 bg-white/20 rounded h-5 mx-4"
          data-oid="nk5u8pt"
        ></div>
      </div>
      <div
        className="flex-1 p-3 bg-white m-2 rounded shadow-md"
        data-oid="5xb_x7x"
      >
        <div
          className="flex items-center justify-between mb-3 pb-2 border-b"
          style={{ borderColor: palette.primary }}
          data-oid="xqfo4fn"
        >
          <span className="font-bold text-gray-800 text-sm" data-oid="c_wpmey">
            BISTRO ITALIA
          </span>
          <div
            className="px-3 py-1 rounded-full text-white text-xs font-semibold"
            style={{ backgroundColor: "#dc2626" }}
            data-oid="2yzogiw"
          >
            BOKA
          </div>
        </div>
        <div className="space-y-1.5" data-oid="d8tfn8f">
          <div className="font-bold text-gray-800 text-xs" data-oid="jugww58">
            Veckans Lunch
          </div>
          <div
            className="flex justify-between text-[10px] text-gray-600"
            data-oid="vwm8u1f"
          >
            <span data-oid="5gi0omg">Pasta Carbonara</span>
            <span className="font-medium" data-oid="2k52ki3">
              89 kr
            </span>
          </div>
          <div
            className="flex justify-between text-[10px] text-gray-600"
            data-oid="_g.gep3"
          >
            <span data-oid="ktat2_3">Caesarsallad</span>
            <span className="font-medium" data-oid="e-1jgn1">
              79 kr
            </span>
          </div>
          <div
            className="flex justify-between text-[10px] text-gray-600"
            data-oid=":gzdfw6"
          >
            <span data-oid="2w73_y6">Grillad lax</span>
            <span className="font-medium" data-oid="wyyfzpw">
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
      data-oid="y3e8eae"
    >
      <div
        className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2"
        data-oid="lglh33p"
      >
        <div className="flex gap-1.5" data-oid="5a8z4:d">
          <div
            className="w-3 h-3 rounded-full bg-red-400"
            data-oid="zzoiw9b"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-yellow-400"
            data-oid="dqxizz_"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-green-400"
            data-oid="x9ewvxx"
          ></div>
        </div>
        <div
          className="flex-1 bg-white/20 rounded h-5 mx-4"
          data-oid="on4jpsw"
        ></div>
      </div>
      <div
        className="flex-1 p-3 bg-white m-2 rounded shadow-md"
        data-oid="n9x-o00"
      >
        <div
          className="flex items-center justify-between mb-3 pb-2 border-b"
          style={{ borderColor: palette.primary }}
          data-oid="xc7hjnp"
        >
          <span className="font-bold text-gray-800 text-sm" data-oid="olc5con">
            BUTIK Stockholm
          </span>
          <div
            className="px-3 py-1 rounded-full text-white text-xs font-semibold"
            style={{ backgroundColor: palette.primary }}
            data-oid="tju5t.t"
          >
            KÖP
          </div>
        </div>
        <div className="space-y-1.5" data-oid="qw3prai">
          <div className="font-bold text-gray-800 text-xs" data-oid="8f3tbym">
            Nya produkter
          </div>
          <div className="grid grid-cols-3 gap-1.5" data-oid="wjmffv3">
            <div
              className="aspect-square bg-gray-100 rounded flex items-center justify-center text-xl"
              data-oid="tti_.ya"
            >
              📦
            </div>
            <div
              className="aspect-square bg-gray-100 rounded flex items-center justify-center text-xl"
              data-oid="9763vl-"
            >
              📦
            </div>
            <div
              className="aspect-square bg-gray-100 rounded flex items-center justify-center text-xl"
              data-oid="1qb:5y."
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
      data-oid="zrtqg6b"
    >
      <div
        className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2"
        data-oid=":z5o5ba"
      >
        <div className="flex gap-1.5" data-oid="e_.0uqj">
          <div
            className="w-3 h-3 rounded-full bg-red-400"
            data-oid="qgf7jp:"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-yellow-400"
            data-oid="3c:mu5q"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-green-400"
            data-oid="eng.70g"
          ></div>
        </div>
        <div
          className="flex-1 bg-white/20 rounded h-5 mx-4"
          data-oid="vm4-oe8"
        ></div>
      </div>
      <div
        className="flex-1 p-3 bg-white m-2 rounded shadow-md"
        data-oid="-vckpuq"
      >
        <div
          className="flex items-center justify-between mb-3 pb-2 border-b"
          style={{ borderColor: palette.primary }}
          data-oid="32hy.:0"
        >
          <span className="font-bold text-gray-800 text-sm" data-oid="f5jv2t7">
            ANDERS ERIKSSON
          </span>
          <span className="text-gray-400 text-[10px]" data-oid="7pgz2zf">
            Konsult
          </span>
        </div>
        <div className="space-y-1.5" data-oid="t43a5ez">
          <div className="font-bold text-gray-800 text-xs" data-oid="zq0nf8s">
            Strategi & Ledarskap
          </div>
          <div className="text-gray-500 text-[10px]" data-oid="7sr3c_3">
            20 års erfarenhet
          </div>
          <div className="flex gap-1 flex-wrap" data-oid="lwvapjp">
            <span
              className="px-1.5 py-0.5 rounded text-[8px] font-medium"
              style={{ backgroundColor: palette.bg, color: palette.secondary }}
              data-oid="ge7vd8o"
            >
              Företagsutveckling
            </span>
            <span
              className="px-1.5 py-0.5 rounded text-[8px] font-medium"
              style={{ backgroundColor: palette.bg, color: palette.secondary }}
              data-oid=".llqnnu"
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
      data-oid="uq:5ecq"
    >
      {/* Website Preview Image */}
      <div className="h-48 overflow-hidden bg-gray-900" data-oid="dd4971p">
        <img
          src={template.image || TEMPLATE_IMAGE_PLACEHOLDER}
          alt={template.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={handleImageError}
          data-oid="s--qkm-"
        />
      </div>

      {/* Content */}
      <div className="p-5" data-oid="mweh3h-">
        <div
          className="flex items-center justify-between mb-2"
          data-oid="opvil4w"
        >
          <h3
            className="text-lg font-bold text-white group-hover:text-[#c8a46e] transition-colors"
            data-oid="j6241bj"
          >
            {template.name}
          </h3>
          <span
            className="px-2 py-1 bg-[#c8a46e]/10 text-[#c8a46e] text-xs font-medium rounded-full"
            data-oid="_jto8gr"
          >
            {template.category}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4" data-oid=":r.dj4p">
          {template.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2" data-oid="al49ah0">
          {template.features.slice(0, 3).map((feature: string, i: number) => (
            <span
              key={i}
              className="text-xs px-3 py-1.5 bg-[#252525] text-gray-300 rounded-lg border border-[#333333]"
              data-oid="534lk9t"
            >
              {feature}
            </span>
          ))}
          {template.features.length > 3 && (
            <span
              className="text-xs px-3 py-1.5 bg-[#252525] text-gray-500 rounded-lg border border-[#333333]"
              data-oid="6v7507f"
            >
              +{template.features.length - 3}
            </span>
          )}
        </div>

        {/* View button */}
        <div
          className="mt-4 pt-4 border-t border-[#2a2a2a] flex items-center justify-between"
          data-oid="-pqo0w8"
        >
          <span
            className="text-[#c8a46e] text-sm font-medium group-hover:translate-x-1 transition-transform"
            data-oid="dzbbf.d"
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
      data-oid="rs4c6xe"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        data-oid="6gi0nwy"
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative bg-[#1a1a1a] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-[#333333] shadow-2xl"
        data-oid="hbbgzzv"
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Stäng"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#252525] hover:bg-[#333333] rounded-full flex items-center justify-center text-white transition-colors"
          data-oid="mgdza.7"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            data-oid="lf2mio:"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
              data-oid="ouz_oj1"
            />
          </svg>
        </button>

        <div
          className="flex flex-col lg:flex-row h-full overflow-auto"
          data-oid="qt_l85l"
        >
          {/* Preview Area - Full Image */}
          <div className="lg:w-2/3 p-6 bg-[#0a0a0a]" data-oid="u99bm7-">
            <div
              className="text-xs text-gray-500 mb-2 uppercase tracking-wide"
              data-oid="-4ri:vm"
            >
              Förhandsvisning
            </div>
            <div
              className="rounded-xl overflow-hidden shadow-2xl border border-[#333333]"
              data-oid="h83m86h"
            >
              <img
                src={template.image || TEMPLATE_IMAGE_PLACEHOLDER}
                alt={template.name}
                className="w-full h-auto"
                onError={handleImageError}
                data-oid="z5ql3w5"
              />
            </div>
          </div>

          {/* Controls Area */}
          <div
            className="lg:w-1/3 p-6 bg-[#1a1a1a] border-l border-[#333333]"
            data-oid="9bsxp1o"
          >
            <h2
              id="template-modal-title"
              className="text-2xl font-bold text-white mb-2"
              data-oid="8pp43bs"
            >
              {template.name}
            </h2>
            <p className="text-gray-400 text-sm mb-6" data-oid="18o.s3.">
              {template.description}
            </p>

            {/* Color Palette Info */}
            <div
              className="mb-6 p-4 bg-[#252525] rounded-xl border border-[#333333]"
              data-oid="tuwcu2s"
            >
              <div
                className="text-xs text-gray-500 mb-2 uppercase tracking-wide"
                data-oid="o-1ur5k"
              >
                Färgval
              </div>
              <p className="text-gray-300 text-sm" data-oid="9nkv8it">
                Vi anpassar färgerna efter ditt varumärke. Välj mellan olika
                färgscheman i samband med beställning.
              </p>
            </div>

            {/* Features */}
            <div className="mb-8" data-oid="16wnd4h">
              <div
                className="text-xs text-gray-500 mb-3 uppercase tracking-wide"
                data-oid="dmf-c2:"
              >
                Ingår i mallen
              </div>
              <ul className="space-y-2" data-oid="yekumqx">
                {template.features.map((feature: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                    data-oid="3--0:f3"
                  >
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="bafegux"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                        data-oid="sydesis"
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
              data-oid="ia9759i"
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
      <section id="examples" className="py-24 bg-[#111111]" data-oid="oiwc974">
        <div className="max-w-6xl mx-auto px-6" data-oid="ulobkmi">
          {/* Section Header */}
          <div className="text-center mb-16" data-oid="u-y27s4">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4"
              data-oid="rcxeh6e"
            >
              {content.examples.sectionTitle}
            </h2>
            <p className="text-[#999999] max-w-2xl mx-auto" data-oid="2guh1qi">
              {content.examples.sectionSubtitle}
            </p>
          </div>

          {/* Templates Grid */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid=".hgn8wr"
          >
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onClick={() => setSelectedTemplate(template)}
                data-oid="8iv4e5-"
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12" data-oid="77.11tx">
            <p className="text-[#999999] mb-4" data-oid="08:60so">
              Alla mallar anpassas efter ditt företags varumärke och behov
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-3 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors"
              data-oid="5yhubpb"
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
          data-oid="hks.5k8"
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
      data-oid="s-.425g"
    >
      {/* Background */}
      {content.contact.image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${content.contact.image})` }}
          data-oid="lo055x5"
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"
        data-oid="1pw3dv4"
      />

      <div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        data-oid="00bt7_9"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4"
          data-oid="5o5umn7"
        >
          {content.contact.sectionTitle}
        </h2>
        <p className="text-[#999999] mb-10" data-oid="0..7qoy">
          {content.contact.sectionSubtitle}
        </p>

        {status === "success" ? (
          <div
            className="max-w-lg mx-auto py-8 px-6 bg-[#111111] border border-[#2a2a2a] rounded-xl text-[#f5f5f0]"
            data-oid="bglkqkv"
          >
            <p
              className="text-lg font-medium text-[#c8a46e] mb-2"
              data-oid="orjeap-"
            >
              Tack för din förfrågan!
            </p>
            <p className="text-[#999999]" data-oid="0i2xqn3">
              Vi återkommer inom 24 timmar.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-left max-w-lg mx-auto"
            data-oid=":x:ifby"
          >
            {errorMessage && (
              <p
                className="text-red-400 text-sm"
                role="alert"
                data-oid="-crhz86"
              >
                {errorMessage}
              </p>
            )}
            <div data-oid="9hlm8d0">
              <label
                htmlFor="contact-name"
                className="block text-[#e5e5e0] text-sm font-medium mb-1.5"
                data-oid="2w1kbjt"
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
                data-oid="x-g0snq"
              />
            </div>
            <div data-oid="7.vpq:7">
              <label
                htmlFor="contact-email"
                className="block text-[#e5e5e0] text-sm font-medium mb-1.5"
                data-oid="w_enb89"
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
                data-oid="--u9sh:"
              />
            </div>
            <div data-oid="eb7187e">
              <label
                htmlFor="contact-template"
                className="block text-[#e5e5e0] text-sm font-medium mb-1.5"
                data-oid="zhfm5:d"
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
                data-oid="oodc2g8"
              >
                <option value="" data-oid="49nvwly">
                  — Välj mall —
                </option>
                {templates.map((t) => (
                  <option key={t.id} value={t.id} data-oid="gc062rt">
                    {t.name}
                  </option>
                ))}
                <option value="other" data-oid="v5.q56n">
                  Övrigt / ingen specifik
                </option>
              </select>
            </div>
            <div data-oid="4w8nsal">
              <label
                htmlFor="contact-message"
                className="block text-[#e5e5e0] text-sm font-medium mb-1.5"
                data-oid="rjyzbj8"
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
                data-oid="u8n7.gi"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              data-oid="5kgt2:4"
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
    <main className="min-h-screen bg-[#0a0a0a]" data-oid="hq:a37l">
      <HeroSection content={content} data-oid="f0-8p3p" />
      <ServicesSection content={content} data-oid="._ni8mz" />
      <ExamplesSection content={content} data-oid="okr72j7" />
      <Suspense
        fallback={<div className="py-24 min-h-[40vh]" data-oid="yjg2swt" />}
        data-oid="kpxjdwg"
      >
        <ContactSection content={content} data-oid="q-apt5f" />
      </Suspense>
    </main>
  );
}
