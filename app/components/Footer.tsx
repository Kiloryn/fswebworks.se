'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#c8a46e] flex items-center justify-center">
                <span className="text-xl font-bold text-[#111111]">F</span>
              </div>
              <span className="text-xl font-semibold text-[#f5f5f0]">FSwebworks</span>
            </div>
            <p className="text-[#666666] text-sm leading-relaxed">
              Vi skapar enkla och professionella hemsidor för småföretag i Stockholm. 
              Vårt mål är att hjälpa hantverkare och företag att synas online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#f5f5f0] font-semibold mb-4">Länkar</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#pricing"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm"
                >
                  Priser
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm"
                >
                  Så här går det till
                </Link>
              </li>
              <li>
                <Link
                  href="/examples"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm"
                >
                  Exempel på sidor
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm"
                >
                  Kontakta oss
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#f5f5f0] font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="text-[#666666] text-sm">
                Stockholm, Sverige
              </li>
              <li>
                <a href="mailto:fredrik@fswebworks.se" className="text-[#666666] hover:text-[#c8a46e] transition-colors text-sm">
                  fredrik@fswebworks.se
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#2a2a2a]">
          <p className="text-[#666666] text-sm text-center">
            © {currentYear} FSwebworks. Alla rättigheter reserverade.
          </p>
        </div>
      </div>
    </footer>
  );
}
