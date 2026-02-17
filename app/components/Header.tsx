'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#c8a46e] flex items-center justify-center">
              <span className="text-xl font-bold text-[#111111]">F</span>
            </div>
            <span className="text-xl font-semibold text-[#f5f5f0]">FSwebworks</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-[#999999] hover:text-[#f5f5f0] transition-colors"
            >
              Hem
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#999999] hover:text-[#f5f5f0] transition-colors"
            >
              Tjänster
            </button>
            <button 
              onClick={() => scrollToSection('examples')}
              className="text-[#999999] hover:text-[#f5f5f0] transition-colors"
            >
              Mallar
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#999999] hover:text-[#f5f5f0] transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#f5f5f0]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#2a2a2a]">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-[#999999] hover:text-[#f5f5f0] text-left py-2"
              >
                Hem
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-[#999999] hover:text-[#f5f5f0] text-left py-2"
              >
                Tjänster
              </button>
              <button 
                onClick={() => scrollToSection('examples')}
                className="text-[#999999] hover:text-[#f5f5f0] text-left py-2"
              >
                Mallar
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[#999999] hover:text-[#f5f5f0] text-left py-2"
              >
                Kontakt
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
