"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-16"
      data-oid="2jpw83m"
    >
      <div className="max-w-6xl mx-auto px-6" data-oid="jgxqo.x">
        <div className="grid md:grid-cols-3 gap-12" data-oid="li317e4">
          {/* Company Info */}
          <div data-oid="c:xjkvz">
            <div className="flex items-center gap-2 mb-4" data-oid="12t_6ge">
              <div
                className="w-10 h-10 rounded-xl bg-[#c8a46e] flex items-center justify-center"
                data-oid="qx1d.g4"
              >
                <span
                  className="text-xl font-bold text-[#111111]"
                  data-oid="xgmant:"
                >
                  F
                </span>
              </div>
              <span
                className="text-xl font-semibold text-[#f5f5f0]"
                data-oid="3yl975j"
              >
                FSwebworks
              </span>
            </div>
            <p
              className="text-[#666666] text-sm leading-relaxed"
              data-oid="o8hfe5f"
            >
              Vi skapar enkla och professionella hemsidor för småföretag i
              Stockholm. Vårt mål är att hjälpa hantverkare och företag att
              synas online.
            </p>
          </div>

          {/* Quick Links - with smooth scroll */}
          <div data-oid="xylbaiz">
            <h3
              className="text-[#f5f5f0] font-semibold mb-4"
              data-oid="co2q8_5"
            >
              Länkar
            </h3>
            <ul className="space-y-3" data-oid="d8iric5">
              <li data-oid="4845pht">
                <Link
                  href="#services"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm text-left"
                  data-oid=":8mlpqf"
                >
                  Tjänster & Priser
                </Link>
              </li>
              <li data-oid="dh-txi6">
                <Link
                  href="#examples"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm text-left"
                  data-oid="09zffl1"
                >
                  Våra Mallar
                </Link>
              </li>
              <li data-oid="94a2ded">
                <Link
                  href="#contact"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm text-left"
                  data-oid="cij7hzn"
                >
                  Kontakta oss
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-oid="i.qk8sz">
            <h3
              className="text-[#f5f5f0] font-semibold mb-4"
              data-oid="fo5fqeb"
            >
              Kontakt
            </h3>
            <ul className="space-y-3" data-oid="s38i5vh">
              <li className="text-[#666666] text-sm" data-oid="x7i9jat">
                Stockholm, Sverige
              </li>
              <li data-oid="v.cqvhu">
                <a
                  href="mailto:fredrik@fswebworks.se"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm"
                  data-oid="pc5w:ho"
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
          data-oid="w-8i2gp"
        >
          <p className="text-[#666666] text-sm text-center" data-oid="lsnk1gy">
            © {currentYear} FSwebworks. Alla rättigheter reserverade.
          </p>
        </div>
      </div>
    </footer>
  );
}
