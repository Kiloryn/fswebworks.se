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
          data-oid="i2jwv1e"
        >
          {/* Light backdrop – tap to close */}
          <button
            type="button"
            aria-label="Stäng meny"
            className="mobile-menu-backdrop absolute inset-0 z-0"
            onClick={closeMobileMenu}
            data-oid="8bzgs4i"
          />

          {/* Compact dropdown – centered below header */}
          <div
            className="mobile-menu-panel absolute left-1/2 top-[5.25rem] z-10 w-[min(calc(100vw-2rem),16rem)] -translate-x-1/2 overflow-hidden py-2"
            onClick={(e) => e.stopPropagation()}
            data-oid="_csaccg"
          >
            <nav className="flex flex-col" data-oid="-2j4t48">
              {MENU_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className="mobile-menu-link"
                  data-oid="hs62iay"
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
        data-oid="it_y897"
      >
        <div className="max-w-6xl mx-auto px-6" data-oid="ih39nh9">
          <div
            className="flex items-center justify-between h-20"
            data-oid="fleqcjt"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0"
              data-oid="v109ph8"
            >
              <div
                className="w-10 h-10 rounded-xl bg-[#c8a46e] flex items-center justify-center"
                data-oid="fm0k8il"
              >
                <span
                  className="text-xl font-bold text-[#111111] w-[21px] h-[28px]"
                  data-oid="kj9yp97"
                >
                  F
                </span>
              </div>
              <span
                className="text-3xl font-semibold text-[#f5f5f0] opacity-[100%] border-0 border-[rgb(229,_231,_235)]"
                data-oid="u2v:yx8"
              >
                FSwebworks
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-8"
              data-oid="f09oxpy"
            >
              {MENU_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[#999999] hover:text-[#f5f5f0] transition-colors"
                  data-oid="br.dj57"
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
              data-oid="oym5_1r"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
                data-oid="biwa7o:"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    data-oid="q47604."
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    data-oid="6ys1oeb"
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
