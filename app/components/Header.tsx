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
            {/* Logo – inline SVG so CSS animations run on every load (no image cache) */}
            <Link
              href="/"
              className={`flex items-center justify-center shrink-0 overflow-hidden transition-all duration-300 max-w-[50%] md:max-w-none ${
                scrolled ? "h-14" : "h-20"
              }`}
              aria-label="FSwebworks logo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
                aria-hidden
                className={`w-auto object-contain object-center transition-all duration-300 min-h-[320px] md:min-h-[420px] ${
                  scrolled ? "md:min-h-[320px]" : ""
                }`}
              >
                <title>FSwebworks logo</title>
                <defs>
                  <style>{`
                    .logo-cls-1 { fill: #c8de6e; }
                    .logo-bracket-left {
                      transform: translateX(350px);
                      animation: logoSlideLeft 2s cubic-bezier(0.25, 1, 0.5, 1) forwards 0.8s;
                    }
                    .logo-bracket-right {
                      transform: translateX(-330px);
                      animation: logoSlideRight 2s cubic-bezier(0.25, 1, 0.5, 1) forwards 0.8s;
                    }
                    .logo-text {
                      opacity: 0;
                      clip-path: inset(0 50% 0 50%);
                      animation: logoRevealText 2s cubic-bezier(0.25, 1, 0.5, 1) forwards 0.8s;
                    }
                    @keyframes logoSlideLeft {
                      to { transform: translateX(0); }
                    }
                    @keyframes logoSlideRight {
                      to { transform: translateX(0); }
                    }
                    @keyframes logoRevealText {
                      30% { opacity: 1; }
                      100% { opacity: 1; clip-path: inset(0 0 0 0); }
                    }
                  `}</style>
                </defs>
                <g className="logo-bracket-left">
                  <path className="logo-cls-1" d="M117.02,500.07l23.48-23.2c.34-.34.73-.52,1.17-.52.28,0,.5.08.66.23l.09.09c.28.28.42.59.42.94,0,.38-.16.72-.47,1.03l-22.27,21.98,22.27,21.98c.31.31.47.66.47,1.03,0,.34-.14.66-.42.94l-.09.09c-.16.16-.38.23-.66.23-.44,0-.83-.17-1.17-.52l-23.48-23.2c-.22-.22-.33-.41-.33-.56s.11-.34.33-.56Z" />
                </g>
                <g className="logo-text">
                  <path className="logo-cls-1" d="M156.44,458.92h43.83c.78,0,1.17.42,1.17,1.27v.05c0,.88-.39,1.31-1.17,1.31h-42.56v30.7h34.5c.81,0,1.22.42,1.22,1.27v.05c0,.88-.41,1.31-1.22,1.31h-34.5v29.62c0,.88-.41,1.31-1.22,1.31h-.05c-.84,0-1.27-.44-1.27-1.31v-64.31c0-.84.42-1.27,1.27-1.27Z" />
                  <path className="logo-cls-1" d="M207.49,515.21c0-.34.12-.64.38-.89l.09-.09c.22-.12.45-.19.7-.19.44,0,.91.3,1.41.89,2.44,3.03,5.37,5.32,8.79,6.87s7.62,2.32,12.59,2.32c4.22,0,7.99-.56,11.32-1.69s5.98-2.93,7.97-5.41c1.98-2.48,2.98-5.66,2.98-9.54,0-3.34-1.15-6.01-3.45-7.99-2.3-1.98-4.88-3.41-7.76-4.29-2.88-.87-6.53-1.75-10.97-2.62-5.16-.94-9.38-2.12-12.68-3.56-3.3-1.44-5.77-3.24-7.43-5.41-1.66-2.17-2.48-4.82-2.48-7.95,0-3.69.96-6.84,2.88-9.47s4.66-4.62,8.2-5.98c3.55-1.36,7.74-2.04,12.59-2.04,4.28,0,7.99.58,11.13,1.73,3.14,1.16,6.15,3.12,9.02,5.91.28.28.42.63.42,1.03,0,.31-.09.59-.28.84l-.09.09c-.25.16-.52.23-.8.23-.25,0-.5-.08-.75-.23-.25-.16-.55-.39-.89-.7-1.88-1.59-3.58-2.83-5.11-3.7-1.53-.87-3.29-1.52-5.27-1.95-1.98-.42-4.45-.63-7.38-.63-3.66,0-7.07.48-10.24,1.45-3.17.97-5.77,2.55-7.8,4.76-2.03,2.2-3.05,5.09-3.05,8.65,0,4.09,1.87,7.24,5.6,9.45,3.73,2.2,8.74,3.9,15.02,5.09,5,1,9.08,2.01,12.23,3.02,3.16,1.02,5.93,2.67,8.32,4.97s3.59,5.4,3.59,9.3c0,4.25-1.08,7.81-3.23,10.69-2.16,2.88-5.11,5.02-8.86,6.42s-8,2.11-12.75,2.11c-5,0-9.38-.79-13.15-2.37-3.77-1.58-7.16-4.2-10.2-7.85-.41-.47-.61-.89-.61-1.27Z" />
                  <path className="logo-cls-1" d="M289.85,524.87c-.16.34-.34.59-.56.73-.22.14-.42.21-.61.21h-.14c-.53,0-.92-.31-1.17-.94l-26.91-64.12c-.09-.25-.14-.45-.14-.61,0-.38.14-.67.42-.89.28-.22.58-.33.89-.33h.14c.41,0,.73.3.98.89l25.83,61.73,25.69-61.73c.22-.59.56-.89,1.03-.89h.09c.31,0,.62.11.91.33.3.22.45.52.45.89,0,.16-.05.36-.14.61l-10.55,25.36,14.91,35.53,25.83-61.83c.22-.59.55-.89.98-.89h.14c.31,0,.62.12.91.35.3.23.45.54.45.91,0,.19-.05.38-.14.56l-26.91,64.12c-.16.34-.34.59-.56.73-.22.14-.41.21-.56.21h-.23c-.19,0-.39-.07-.61-.21-.22-.14-.41-.38-.56-.73l-15-35.48-14.86,35.48Z" />
                  <path className="logo-cls-1" d="M360.39,458.92h43.5c1,0,1.5.42,1.5,1.27v.05c0,.44-.13.77-.4.98-.27.22-.63.33-1.1.33h-42.23v28.31h34.59c.47,0,.85.1,1.15.3.3.2.45.52.45.96v.05c0,.44-.15.76-.45.96-.3.2-.68.3-1.15.3h-34.59v30.75h43.17c1,0,1.5.42,1.5,1.27v.05c0,.44-.13.77-.4.98-.27.22-.63.33-1.1.33h-44.44c-.84,0-1.27-.44-1.27-1.31v-64.31c0-.84.42-1.27,1.27-1.27Z" />
                  <path className="logo-cls-1" d="M417.25,458.92h26.91c3.12,0,6,.74,8.62,2.23,2.62,1.48,4.71,3.51,6.26,6.07,1.55,2.56,2.32,5.41,2.32,8.53,0,3.28-.84,6.2-2.53,8.77-1.69,2.56-3.97,4.59-6.84,6.09,2.34.69,4.48,1.94,6.42,3.75,1.94,1.81,3.47,3.95,4.59,6.42,1.12,2.47,1.69,5,1.69,7.59,0,3-.75,5.82-2.25,8.46-1.5,2.64-3.53,4.77-6.09,6.38-2.56,1.61-5.34,2.48-8.34,2.6h-30.75c-.84,0-1.27-.44-1.27-1.31v-64.31c0-.84.42-1.27,1.27-1.27ZM418.52,489.9h25.64c2.66,0,5.11-.62,7.36-1.85,2.25-1.23,4.04-2.92,5.37-5.06,1.33-2.14,1.99-4.54,1.99-7.2s-.66-5.03-1.99-7.22c-1.33-2.19-3.12-3.91-5.37-5.18s-4.7-1.9-7.36-1.9h-25.64v28.41ZM418.52,523.23h29.58c3.12,0,5.74-.83,7.85-2.48,2.11-1.66,3.67-3.63,4.69-5.93,1.02-2.3,1.52-4.41,1.52-6.35,0-3.06-.78-5.81-2.34-8.25-1.56-2.44-3.48-4.34-5.77-5.7-2.28-1.36-4.45-2.04-6.52-2.04h-29.02v30.75Z" />
                  <path className="logo-cls-1" d="M499.94,524.87c-.16.34-.34.59-.56.73-.22.14-.42.21-.61.21h-.14c-.53,0-.92-.31-1.17-.94l-26.91-64.12c-.09-.25-.14-.45-.14-.61,0-.38.14-.67.42-.89.28-.22.58-.33.89-.33h.14c.41,0,.73.3.98.89l25.83,61.73,25.69-61.73c.22-.59.56-.89,1.03-.89h.09c.31,0,.62.11.91.33.3.22.45.52.45.89,0,.16-.05.36-.14.61l-10.55,25.36,14.91,35.53,25.83-61.83c.22-.59.55-.89.98-.89h.14c.31,0,.62.12.91.35s.45.54.45.91c0,.19-.05.38-.14.56l-26.91,64.12c-.16.34-.34.59-.56.73-.22.14-.41.21-.56.21h-.23c-.19,0-.39-.07-.61-.21-.22-.14-.41-.38-.56-.73l-15-35.48-14.86,35.48Z" />
                  <path className="logo-cls-1" d="M566.74,475.21c3.09-5.23,7.27-9.38,12.54-12.45,5.27-3.06,11.01-4.59,17.23-4.59s11.97,1.53,17.16,4.59c5.19,3.06,9.29,7.21,12.3,12.45,3.02,5.23,4.52,10.98,4.52,17.23s-1.51,11.94-4.52,17.16c-3.02,5.22-7.12,9.34-12.3,12.38-5.19,3.03-10.91,4.55-17.16,4.55s-12.01-1.52-17.27-4.55c-5.27-3.03-9.44-7.16-12.52-12.38-3.08-5.22-4.62-10.94-4.62-17.16s1.55-11.99,4.64-17.23ZM569.08,508.25c2.81,4.8,6.64,8.59,11.48,11.37,4.84,2.78,10.16,4.17,15.94,4.17s11.06-1.39,15.84-4.17c4.78-2.78,8.55-6.56,11.3-11.34s4.12-10.06,4.12-15.84-1.38-11.12-4.12-15.94c-2.75-4.81-6.52-8.61-11.3-11.39-4.78-2.78-10.06-4.17-15.84-4.17s-11.09,1.4-15.94,4.2c-4.84,2.8-8.67,6.6-11.48,11.41-2.81,4.81-4.22,10.11-4.22,15.89s1.41,11.02,4.22,15.82Z" />
                  <path className="logo-cls-1" d="M669.67,500.5h-24.19v24c0,.88-.41,1.31-1.22,1.31h-.05c-.84,0-1.27-.44-1.27-1.31v-64.31c0-.84.42-1.27,1.27-1.27h25.45c3.75,0,7.22.94,10.41,2.81s5.71,4.41,7.57,7.62c1.86,3.2,2.79,6.68,2.79,10.43,0,4.16-1.12,7.92-3.35,11.3s-5.18,5.91-8.84,7.59l10.5,25.36c.06.25.09.41.09.47,0,.34-.13.65-.4.91-.27.27-.55.4-.87.4h-.14c-.22,0-.45-.07-.7-.21s-.45-.38-.61-.73l-10.5-25.22c-1.88.56-3.86.84-5.95.84ZM645.49,497.87h24.19c3.34,0,6.41-.8,9.19-2.41,2.78-1.61,4.97-3.8,6.56-6.56s2.39-5.8,2.39-9.12-.8-6.41-2.39-9.21c-1.59-2.8-3.78-5.01-6.56-6.63-2.78-1.62-5.84-2.44-9.19-2.44h-24.19v36.38Z" />
                  <path className="logo-cls-1" d="M754.19,523.84c.19.22.28.45.28.7,0,.34-.13.64-.4.89-.27.25-.57.38-.91.38h-.05c-.5,0-.97-.28-1.41-.84l-30.61-36.38-15.56,16.55v19.17c0,1-.41,1.5-1.22,1.5h-.05c-.84,0-1.27-.5-1.27-1.5v-63.84c0-1,.42-1.5,1.27-1.5h.05c.81,0,1.22.5,1.22,1.5v41.2l39.05-41.86c.56-.59,1.03-.89,1.41-.89h.09c.34,0,.64.13.89.4.25.27.38.57.38.91s-.11.63-.33.84l-24.14,25.59,31.31,37.17Z" />
                  <path className="logo-cls-1" d="M763.66,515.21c0-.34.12-.64.38-.89l.09-.09c.22-.12.45-.19.7-.19.44,0,.91.3,1.41.89,2.44,3.03,5.37,5.32,8.79,6.87s7.62,2.32,12.59,2.32c4.22,0,7.99-.56,11.32-1.69s5.98-2.93,7.97-5.41,2.98-5.66,2.98-9.54c0-3.34-1.15-6.01-3.45-7.99-2.3-1.98-4.88-3.41-7.76-4.29-2.88-.87-6.53-1.75-10.97-2.62-5.16-.94-9.38-2.12-12.68-3.56-3.3-1.44-5.77-3.24-7.43-5.41-1.66-2.17-2.48-4.82-2.48-7.95,0-3.69.96-6.84,2.88-9.47s4.66-4.62,8.2-5.98,7.74-2.04,12.59-2.04c4.28,0,7.99.58,11.13,1.73,3.14,1.16,6.15,3.12,9.02,5.91.28.28.42.63.42,1.03,0,.31-.09.59-.28.84l-.09.09c-.25.16-.52.23-.8.23-.25,0-.5-.08-.75-.23-.25-.16-.55-.39-.89-.7-1.88-1.59-3.58-2.83-5.11-3.7-1.53-.87-3.29-1.52-5.27-1.95s-4.45-.63-7.38-.63c-3.66,0-7.07.48-10.24,1.45-3.17.97-5.77,2.55-7.8,4.76s-3.05,5.09-3.05,8.65c0,4.09,1.87,7.24,5.6,9.45s8.74,3.9,15.02,5.09c5,1,9.08,2.01,12.23,3.02,3.16,1.02,5.93,2.67,8.32,4.97s3.59,5.4,3.59,9.3c0,4.25-1.08,7.81-3.23,10.69-2.16,2.88-5.11,5.02-8.86,6.42s-8,2.11-12.75,2.11c-5,0-9.38-.79-13.15-2.37-3.77-1.58-7.16-4.2-10.2-7.85-.41-.47-.61-.89-.61-1.27Z" />
                </g>
                <g className="logo-bracket-right">
                  <path className="logo-cls-1" d="M822.53,525.81h-.09c-.34,0-.66-.09-.96-.28s-.45-.48-.45-.89c0-.19.05-.39.14-.61l25.36-64.17c.22-.59.55-.89.98-.89h.14c.31,0,.62.12.91.35s.45.54.45.91c0,.19-.05.38-.14.56l-25.31,64.17c-.22.56-.56.84-1.03.84Z" />
                  <path className="logo-cls-1" d="M884.36,501.2l-23.48,23.2c-.34.34-.73.52-1.17.52-.28,0-.5-.08-.66-.23l-.09-.09c-.28-.28-.42-.59-.42-.94,0-.38.16-.72.47-1.03l22.27-21.98-22.27-21.98c-.31-.31-.47-.66-.47-1.03,0-.34.14-.66.42-.94l.09-.09c.16-.16.38-.23.66-.23.44,0,.83.17,1.17.52l23.48,23.2c.22.22.33.41.33.56s-.11.34-.33.56Z" />
                </g>
              </svg>
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
