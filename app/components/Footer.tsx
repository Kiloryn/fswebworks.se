"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-16"
      data-oid="7ms2g6a"
    >
      <div className="max-w-6xl mx-auto px-6" data-oid="tm2oxw8">
        <div className="grid md:grid-cols-3 gap-12" data-oid="j9ckv9i">
          {/* Company Info */}
          <div data-oid="ymrjm:-">
            <div className="flex items-center gap-2 mb-4" data-oid="1dlm99p">
              <div
                className="w-10 h-10 rounded-xl bg-[#c8a46e] flex items-center justify-center"
                data-oid="0hrx5qp"
              >
                <span
                  className="text-xl font-bold text-[#111111]"
                  data-oid="_f.wlij"
                >
                  F
                </span>
              </div>
              <span
                className="text-xl font-semibold text-[#f5f5f0]"
                data-oid="r-l8c-6"
              >
                FSwebworks
              </span>
            </div>
            <p
              className="text-[#666666] text-sm leading-relaxed"
              data-oid="10qm_o5"
            >
              Vi skapar enkla och professionella hemsidor för småföretag i
              Stockholm. Vårt mål är att hjälpa hantverkare och företag att
              synas online.
            </p>
          </div>

          {/* Quick Links - with smooth scroll */}
          <div data-oid="006dzdg">
            <h3
              className="text-[#f5f5f0] font-semibold mb-4"
              data-oid=":6nvqs8"
            >
              Länkar
            </h3>
            <ul className="space-y-3" data-oid="b-zwhpi">
              <li data-oid="aam1k_7">
                <Link
                  href="#services"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm text-left"
                  data-oid="r4lwnfi"
                >
                  Tjänster & Priser
                </Link>
              </li>
              <li data-oid="1i3mdtg">
                <Link
                  href="#examples"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm text-left"
                  data-oid="cl:fw43"
                >
                  Våra Mallar
                </Link>
              </li>
              <li data-oid="8p98jtt">
                <Link
                  href="#contact"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm text-left"
                  data-oid="j9t:.op"
                >
                  Kontakta oss
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-oid="u:mmiie">
            <h3
              className="text-[#f5f5f0] font-semibold mb-4"
              data-oid="4fzg3yf"
            >
              Kontakt
            </h3>
            <ul className="space-y-3" data-oid=".a0-a3a">
              <li className="text-[#666666] text-sm" data-oid="a6:kg2y">
                Stockholm, Sverige
              </li>
              <li data-oid="mbow3h4">
                <a
                  href="mailto:fredrik@fswebworks.se"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm"
                  data-oid="je:.etu"
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
          data-oid="x.8:3fs"
        >
          <p className="text-[#666666] text-sm text-center" data-oid="4vbrrst">
            © {currentYear} FSwebworks. Alla rättigheter reserverade.
          </p>
        </div>
      </div>
    </footer>
  );
}
