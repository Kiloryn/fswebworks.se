import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Tjänster', href: '#services' },
  { label: 'Om oss', href: '#features' },
  { label: 'Kontakt', href: '#contact' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#111111]/90 backdrop-blur-xl border-b border-[#2a2a2a]/50'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#c8a46e]/10 flex items-center justify-center group-hover:bg-[#c8a46e]/20 transition-colors">
                <span className="text-xl font-display text-[#c8a46e]">F</span>
              </div>
              <span className="text-xl font-medium text-[#f5f5f0] hidden sm:block">
                fswebworks
              </span>
            </a>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm text-[#999999] hover:text-[#f5f5f0] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c8a46e] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA button */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-[#c8a46e] hover:bg-[#d4b480] text-[#111111] px-6 py-2 text-sm font-medium rounded-full transition-all duration-300"
              >
                Börja projekt
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-[#f5f5f0]"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-[#111111]/95 backdrop-blur-xl" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-2xl text-[#f5f5f0] hover:text-[#c8a46e] transition-colors"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isMobileMenuOpen ? 'fadeInUp 0.5s ease forwards' : 'none'
              }}
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={() => scrollToSection('#contact')}
            className="bg-[#c8a46e] hover:bg-[#d4b480] text-[#111111] px-8 py-4 text-base font-medium rounded-full transition-all duration-300 mt-4"
          >
            Börja projekt
          </Button>
        </div>
      </div>
    </>
  );
}
