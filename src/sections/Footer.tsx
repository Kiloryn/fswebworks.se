import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Webbdesign', href: '#services' },
    { label: 'Webbutveckling', href: '#services' },
    { label: 'E-handel', href: '#services' },
    { label: 'Webbapplikationer', href: '#services' }
  ],
  company: [
    { label: 'Om oss', href: '#features' },
    { label: 'Kontakt', href: '#contact' }
  ]
};

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#0d0d0d] border-t border-[#1a1a1a]">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#hero" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#c8a46e]/10 flex items-center justify-center">
                  <span className="text-xl font-display text-[#c8a46e]">F</span>
                </div>
                <span className="text-xl font-medium text-[#f5f5f0]">fswebworks</span>
              </a>
              <p className="text-sm text-[#666666] leading-relaxed mb-6">
                Vi bygger snygga webbplatser för småföretag.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-medium text-[#f5f5f0] uppercase tracking-wider mb-6">Tjänster</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-sm text-[#666666] hover:text-[#f5f5f0] transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-medium text-[#f5f5f0] uppercase tracking-wider mb-6">Företag</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-sm text-[#666666] hover:text-[#f5f5f0] transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#444444]">
              © {new Date().getFullYear()} FSwebworks. Alla rättigheter förbehållna.
            </p>
            <div className="flex gap-6">
              <a href="/integritetspolicy" className="text-xs text-[#444444] hover:text-[#666666] transition-colors">
                Integritetspolicy
              </a>
              <a href="/anvandarvillkor" className="text-xs text-[#444444] hover:text-[#666666] transition-colors">
                Användarvillkor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
