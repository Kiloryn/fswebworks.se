"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

const MENU_LINKS = [
  { href: "#hero", label: "Hem" },
  { href: "#services", label: "Tjänster" },
  { href: "#examples", label: "Mallar" },
  { href: "#contact", label: "Kontakt" },
] as const;

const SCROLL_THRESHOLD = 24;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let tick: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      if (tick != null) return;
      tick = setTimeout(() => {
        setScrolled(
          typeof window !== "undefined" && window.scrollY > SCROLL_THRESHOLD,
        );
        tick = null;
      }, 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const mobileMenuPortal =
    mounted &&
    createPortal(
      mobileMenuOpen ? (
        <div
          className="md:hidden fixed inset-0 z-[9999]"
          role="dialog"
          aria-modal="true"
          aria-label="Meny"
        >
          {/* Light backdrop – tap to close */}
          <button
            type="button"
            aria-label="Stäng meny"
            className="mobile-menu-backdrop absolute inset-0 z-0"
            onClick={closeMobileMenu}
          />

          {/* Compact dropdown – centered below header */}
          <div
            className={`mobile-menu-panel absolute left-1/2 z-10 w-[min(calc(100vw-2rem),16rem)] -translate-x-1/2 overflow-hidden py-2 transition-all duration-300 ${
              scrolled ? "top-14" : "top-[5.25rem]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col">
              {MENU_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className="mobile-menu-link"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null,
      document.body,
    );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/75 border-[#2a2a2a]/70 shadow-lg shadow-black/20"
            : "bg-[#0a0a0a]/90 border-[#2a2a2a]/80"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-14" : "h-20"
            }`}
          >
            {/* Logo – SVG viewBox 1000×1000, logotexten i mitten; på mobil begränsad bredd så menyknappen syns */}
            <Link
              href="/"
              className={`flex items-center justify-center shrink-0 overflow-hidden transition-all duration-300 hover:scale-105 max-w-[50%] md:max-w-none ${
                scrolled ? "h-14" : "h-20"
              }`}
            >
              <img
                src="/fswebworks.svg"
                alt="FSwebworks logo"
                className={`w-auto object-contain object-center transition-all duration-300 min-h-[320px] md:min-h-[420px] ${
                  scrolled ? "md:min-h-[320px]" : ""
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {MENU_LINKS.map(({ href, label }) => (
                <Link key={href} href={href} className="nav-link-header py-1">
                  {label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button - large touch target, explicit handlers */}
            <button
              type="button"
              {...(mobileMenuOpen
                ? {
                    "aria-label": "Stäng meny",
                    "aria-expanded": "true" as const,
                  }
                : {
                    "aria-label": "Öppna meny",
                    "aria-expanded": "false" as const,
                  })}
              className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 text-[#f5f5f0] hover:text-[#c8a46e] active:opacity-80 transition-colors cursor-pointer touch-manipulation"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleMenu();
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu rendered via portal */}
      {mobileMenuPortal}
    </>
  );
}
