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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
          data-oid="ckf6mdo"
        >
          {/* Light backdrop – tap to close */}
          <button
            type="button"
            aria-label="Stäng meny"
            className="mobile-menu-backdrop absolute inset-0 z-0"
            onClick={closeMobileMenu}
            data-oid="uhgw2ma"
          />

          {/* Compact dropdown – centered below header */}
          <div
            className="mobile-menu-panel absolute left-1/2 top-[5.25rem] z-10 w-[min(calc(100vw-2rem),16rem)] -translate-x-1/2 overflow-hidden py-2"
            onClick={(e) => e.stopPropagation()}
            data-oid="5__fxmj"
          >
            <nav className="flex flex-col" data-oid="kzv94ie">
              {MENU_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className="mobile-menu-link"
                  data-oid="3rnsejt"
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
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]/80 transition-all duration-300"
        data-oid="-e34z1_"
      >
        <div className="max-w-6xl mx-auto px-6" data-oid="lle:ce5">
          <div
            className="flex items-center justify-between h-20"
            data-oid="z7_aw_o"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0"
              data-oid="-ygl4fd"
            >
              <div
                className="w-10 h-10 rounded-xl bg-[#c8a46e] flex items-center justify-center"
                data-oid="7qx735a"
              >
                <span
                  className="text-xl font-bold text-[#111111]"
                  data-oid="35.2z9w"
                >
                  F
                </span>
              </div>
              <span
                className="text-xl font-semibold text-[#f5f5f0]"
                data-oid="svlz8ag"
              >
                FSwebworks
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-8"
              data-oid="d_y3ev2"
            >
              {MENU_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[#999999] hover:text-[#f5f5f0] transition-colors"
                  data-oid=":sew4_y"
                >
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
              data-oid="oi-:ryn"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
                data-oid="56qsish"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    data-oid="rghvdm7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    data-oid="q2u_s.g"
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
