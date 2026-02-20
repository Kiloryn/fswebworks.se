"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-16"
      data-oid="9ha.zo:"
    >
      <div className="max-w-6xl mx-auto px-6" data-oid="0yy09df">
        <div className="grid md:grid-cols-3 gap-12" data-oid="awmlp_d">
          {/* Company Info */}
          <div data-oid="4zq2rn1">
            <div className="flex items-center gap-2 mb-4" data-oid="9s66i5g">
              <div
                className="w-10 h-10 rounded-xl bg-[#c8a46e] flex items-center justify-center"
                data-oid="n-yt8kg"
              >
                <span
                  className="text-xl font-bold text-[#111111]"
                  data-oid="-ca:k5t"
                >
                  F
                </span>
              </div>
              <span
                className="text-xl font-semibold text-[#f5f5f0]"
                data-oid="m4vk01h"
              >
                FSwebworks
              </span>
            </div>
            <p
              className="text-[#666666] text-sm leading-relaxed"
              data-oid="3_95bh1"
            >
              Vi skapar enkla och professionella hemsidor för småföretag i
              Stockholm. Vårt mål är att hjälpa hantverkare och företag att
              synas online.
            </p>
          </div>

          {/* Quick Links - with smooth scroll */}
          <div data-oid="v5yq865">
            <h3
              className="text-[#f5f5f0] font-semibold mb-4"
              data-oid="gx-op:6"
            >
              Länkar
            </h3>
            <ul className="space-y-3" data-oid="vrbt1iv">
              <li data-oid="fgv5c6j">
                <Link
                  href="#services"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm text-left"
                  data-oid="3aqj0pk"
                >
                  Tjänster & Priser
                </Link>
              </li>
              <li data-oid="d1aa9m:">
                <Link
                  href="#examples"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm text-left"
                  data-oid="4eqihg7"
                >
                  Våra Mallar
                </Link>
              </li>
              <li data-oid="9.q3ddx">
                <Link
                  href="#contact"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm text-left"
                  data-oid="04grl-2"
                >
                  Kontakta oss
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-oid="m_fr7-5">
            <h3
              className="text-[#f5f5f0] font-semibold mb-4"
              data-oid="wei_05e"
            >
              Kontakt
            </h3>
            <ul className="space-y-3" data-oid="a45yj5c">
              <li className="text-[#666666] text-sm" data-oid="t.1rkas">
                Stockholm, Sverige
              </li>
              <li data-oid="oi4qwx5">
                <a
                  href="mailto:fredrik@fswebworks.se"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm"
                  data-oid="o5994su"
                >
                  fredrik@fswebworks.se
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 border-t border-[#2a2a2a]"
          data-oid="qp9k7sw"
        >
          <p className="text-[#666666] text-sm text-center" data-oid="i2zjbjn">
            © {currentYear} FSwebworks. Alla rättigheter reserverade.
          </p>
        </div>
      </div>
    </footer>
  );
}
