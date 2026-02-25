"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const MENU_LINKS = [
  { href: "/", label: "Hem" },
  { href: "/process", label: "Så här går det till" },
  { href: "/#pricing", label: "Priser" },
  { href: "/examples", label: "Exempel" },
  { href: "/#contact", label: "Kontakt" },
] as const;

const SCROLL_THRESHOLD = 24;

const LOGO_STYLE = `
  .logo-cls-1 { fill: #c8a46e; }
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
`;

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
          data-oid="ms_myox"
        >
          <button
            type="button"
            aria-label="Stäng meny"
            className="mobile-menu-backdrop absolute inset-0 z-0"
            onClick={closeMobileMenu}
            data-oid="524dqnw"
          />

          <div
            className="mobile-menu-panel absolute left-1/2 z-10 w-[min(calc(100vw-2rem),16rem)] -translate-x-1/2 top-14 overflow-hidden py-2"
            onClick={(e) => e.stopPropagation()}
            data-oid="w:a_i95"
          >
            <nav className="flex flex-col" data-oid=".op_nfh">
              {MENU_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className="mobile-menu-link"
                  data-oid="xtfx-ew"
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
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${
          scrolled
            ? "bg-white/75 dark:bg-[#0a0a0a]/75 border-gray-200/70 dark:border-[#2a2a2a]/70 shadow-lg shadow-black/10 dark:shadow-black/20"
            : "bg-white/90 dark:bg-[#0a0a0a]/90 border-gray-200/80 dark:border-[#2a2a2a]/80"
        }`}
        data-oid="03m::ry"
      >
        <div className="max-w-6xl mx-auto px-6" data-oid="t.8ctoe">
          <div
            className="flex items-center justify-between overflow-hidden h-14"
            data-oid="0kx:mze"
          >
            <Link
              href="/"
              className="flex items-center justify-center shrink-0 h-full min-h-0 overflow-hidden max-w-[50%] md:max-w-none"
              aria-label="FSwebworks logo"
              data-oid=":bc6bib"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="30 369 865 150"
                aria-hidden
                className="block w-auto h-full max-h-full min-h-0 object-contain object-center"
                data-oid="p_fvvn8"
              >
                <title data-oid="2me0.7a">FSwebworks logo</title>
                <defs data-oid="ts-_ttd">
                  <style data-oid="_d_xf-7">{LOGO_STYLE}</style>
                </defs>
                <g className="logo-bracket-left" data-oid="07w9xww">
                  <path
                    className="logo-cls-1"
                    d="M35.4,452.92l26.09-25.78c.38-.38.82-.57,1.3-.57.31,0,.56.09.73.26l.1.1c.31.31.47.66.47,1.04,0,.42-.17.8-.52,1.15l-24.74,24.43,24.74,24.43c.35.35.52.73.52,1.15,0,.38-.16.73-.47,1.04l-.1.1c-.17.17-.42.26-.73.26-.49,0-.92-.19-1.3-.57l-26.09-25.78c-.24-.24-.36-.45-.36-.62s.12-.38.36-.62Z"
                    data-oid="4lz3kk0"
                  />
                </g>
                <g className="logo-text" data-oid="2koa3nz">
                  <path
                    className="logo-cls-1"
                    d="M74.41,481.51h-.1c-.38,0-.74-.1-1.07-.31-.33-.21-.49-.54-.49-.99,0-.21.05-.43.16-.68l28.18-71.3c.24-.66.61-.99,1.09-.99h.16c.35,0,.69.13,1.02.39.33.26.49.6.49,1.02,0,.21-.05.42-.16.62l-28.12,71.3c-.24.62-.62.94-1.15.94Z"
                    data-oid="qeim_lu"
                  />

                  <path
                    className="logo-cls-1"
                    d="M116.7,407.19h48.7c.87,0,1.3.47,1.3,1.41v.05c0,.97-.43,1.46-1.3,1.46h-47.29v34.11h38.33c.9,0,1.35.47,1.35,1.41v.05c0,.97-.45,1.46-1.35,1.46h-38.33v32.92c0,.97-.45,1.46-1.35,1.46h-.05c-.94,0-1.41-.49-1.41-1.46v-71.46c0-.94.47-1.41,1.41-1.41Z"
                    data-oid="tr2:u9d"
                  />

                  <path
                    className="logo-cls-1"
                    d="M173.42,469.74c0-.38.14-.71.42-.99l.1-.1c.24-.14.5-.21.78-.21.49,0,1.01.33,1.56.99,2.71,3.37,5.96,5.91,9.77,7.63s8.46,2.58,13.98,2.58c4.69,0,8.88-.62,12.58-1.88s6.65-3.25,8.85-6.02c2.2-2.76,3.31-6.29,3.31-10.6,0-3.72-1.28-6.67-3.83-8.88-2.55-2.2-5.43-3.79-8.62-4.77-3.19-.97-7.26-1.94-12.19-2.92-5.73-1.04-10.43-2.36-14.09-3.96-3.66-1.6-6.42-3.6-8.26-6.02-1.84-2.41-2.76-5.36-2.76-8.83,0-4.1,1.07-7.6,3.2-10.52s5.17-5.13,9.11-6.64c3.94-1.51,8.6-2.27,13.98-2.27,4.76,0,8.88.64,12.37,1.93,3.49,1.29,6.83,3.47,10.03,6.56.31.31.47.7.47,1.15,0,.35-.1.66-.31.94l-.1.1c-.28.17-.57.26-.89.26-.28,0-.56-.09-.83-.26-.28-.17-.61-.43-.99-.78-2.08-1.77-3.98-3.14-5.68-4.11-1.7-.97-3.65-1.69-5.86-2.16-2.21-.47-4.94-.7-8.2-.7-4.06,0-7.86.54-11.38,1.61-3.52,1.08-6.42,2.84-8.67,5.29-2.26,2.45-3.39,5.65-3.39,9.61,0,4.55,2.07,8.05,6.22,10.5,4.15,2.45,9.71,4.33,16.69,5.65,5.56,1.11,10.09,2.23,13.59,3.36,3.51,1.13,6.59,2.97,9.24,5.52s3.98,6,3.98,10.34c0,4.72-1.2,8.68-3.59,11.88-2.4,3.19-5.68,5.57-9.84,7.13-4.17,1.56-8.89,2.34-14.17,2.34-5.56,0-10.43-.88-14.61-2.63-4.18-1.75-7.96-4.66-11.33-8.72-.45-.52-.68-.99-.68-1.41Z"
                    data-oid="wtckt.w"
                  />

                  <path
                    className="logo-cls-1"
                    d="M264.93,480.47c-.17.38-.38.65-.62.81-.24.16-.47.23-.68.23h-.16c-.59,0-1.02-.35-1.3-1.04l-29.9-71.25c-.1-.28-.16-.5-.16-.68,0-.42.16-.75.47-.99s.64-.37.99-.37h.16c.45,0,.82.33,1.09.99l28.7,68.59,28.54-68.59c.24-.66.62-.99,1.15-.99h.1c.35,0,.69.12,1.02.37.33.24.5.57.5.99,0,.17-.05.4-.16.68l-11.72,28.18,16.56,39.48,28.7-68.7c.24-.66.61-.99,1.09-.99h.16c.35,0,.69.13,1.02.39.33.26.49.6.49,1.02,0,.21-.05.42-.16.62l-29.9,71.25c-.17.38-.38.65-.62.81-.24.16-.45.23-.62.23h-.26c-.21,0-.43-.08-.68-.23-.24-.16-.45-.42-.62-.81l-16.67-39.43-16.51,39.43Z"
                    data-oid="8t18puc"
                  />

                  <path
                    className="logo-cls-1"
                    d="M343.31,407.19h48.33c1.11,0,1.67.47,1.67,1.41v.05c0,.49-.15.85-.44,1.09-.3.24-.7.36-1.22.36h-46.93v31.46h38.44c.52,0,.95.11,1.28.34.33.23.5.58.5,1.07v.05c0,.49-.17.84-.5,1.07-.33.23-.75.34-1.28.34h-38.44v34.17h47.97c1.11,0,1.67.47,1.67,1.41v.05c0,.49-.15.85-.44,1.09-.3.24-.7.36-1.22.36h-49.38c-.94,0-1.41-.49-1.41-1.46v-71.46c0-.94.47-1.41,1.41-1.41Z"
                    data-oid="ajynnic"
                  />

                  <path
                    className="logo-cls-1"
                    d="M406.49,407.19h29.9c3.47,0,6.67.83,9.58,2.47,2.92,1.65,5.23,3.9,6.95,6.74,1.72,2.85,2.58,6.01,2.58,9.48,0,3.65-.94,6.89-2.81,9.74-1.88,2.85-4.41,5.1-7.61,6.77,2.61.76,4.98,2.15,7.14,4.17,2.15,2.01,3.85,4.39,5.1,7.14,1.25,2.74,1.88,5.56,1.88,8.44,0,3.33-.83,6.47-2.5,9.4s-3.92,5.29-6.77,7.08c-2.85,1.79-5.94,2.75-9.27,2.89h-34.17c-.94,0-1.41-.49-1.41-1.46v-71.46c0-.94.47-1.41,1.41-1.41ZM407.89,441.62h28.49c2.95,0,5.68-.69,8.18-2.06,2.5-1.37,4.49-3.25,5.96-5.62,1.47-2.38,2.21-5.04,2.21-8s-.74-5.59-2.21-8.02c-1.48-2.43-3.46-4.35-5.96-5.75s-5.23-2.11-8.18-2.11h-28.49v31.56ZM407.89,478.65h32.87c3.47,0,6.38-.92,8.72-2.76,2.34-1.84,4.08-4.04,5.21-6.59,1.13-2.55,1.69-4.9,1.69-7.06,0-3.4-.87-6.46-2.6-9.17-1.74-2.71-3.87-4.82-6.41-6.33-2.54-1.51-4.95-2.27-7.24-2.27h-32.24v34.17Z"
                    data-oid="ooza:t8"
                  />

                  <path
                    className="logo-cls-1"
                    d="M498.36,480.47c-.17.38-.38.65-.62.81-.24.16-.47.23-.68.23h-.16c-.59,0-1.02-.35-1.3-1.04l-29.9-71.25c-.1-.28-.16-.5-.16-.68,0-.42.16-.75.47-.99s.64-.37.99-.37h.16c.45,0,.82.33,1.09.99l28.7,68.59,28.54-68.59c.24-.66.62-.99,1.15-.99h.1c.35,0,.68.12,1.02.37.33.24.49.57.49.99,0,.17-.05.4-.16.68l-11.72,28.18,16.56,39.48,28.7-68.7c.24-.66.61-.99,1.09-.99h.16c.35,0,.69.13,1.02.39.33.26.5.6.5,1.02,0,.21-.05.42-.16.62l-29.9,71.25c-.17.38-.38.65-.62.81s-.45.23-.62.23h-.26c-.21,0-.43-.08-.68-.23s-.45-.42-.62-.81l-16.67-39.43-16.51,39.43Z"
                    data-oid=".f.g-xb"
                  />

                  <path
                    className="logo-cls-1"
                    d="M572.58,425.29c3.44-5.82,8.08-10.42,13.93-13.83,5.85-3.4,12.23-5.1,19.14-5.1s13.3,1.7,19.06,5.1c5.76,3.4,10.32,8.01,13.67,13.83,3.35,5.82,5.03,12.2,5.03,19.14s-1.67,13.26-5.03,19.06c-3.35,5.8-7.91,10.38-13.67,13.75-5.76,3.37-12.12,5.05-19.06,5.05s-13.34-1.68-19.19-5.05-10.49-7.95-13.91-13.75-5.13-12.15-5.13-19.06,1.72-13.33,5.16-19.14ZM575.19,462.01c3.12,5.33,7.38,9.54,12.76,12.63,5.38,3.09,11.28,4.64,17.71,4.64s12.29-1.54,17.6-4.64c5.31-3.09,9.5-7.29,12.55-12.6,3.05-5.31,4.58-11.18,4.58-17.6s-1.53-12.36-4.58-17.71c-3.06-5.35-7.24-9.57-12.55-12.66-5.31-3.09-11.18-4.63-17.6-4.63s-12.33,1.55-17.71,4.66-9.63,7.34-12.76,12.68-4.69,11.23-4.69,17.66,1.56,12.25,4.69,17.58Z"
                    data-oid=":zgt82-"
                  />

                  <path
                    className="logo-cls-1"
                    d="M686.96,453.39h-26.88v26.67c0,.97-.45,1.46-1.35,1.46h-.05c-.94,0-1.41-.49-1.41-1.46v-71.46c0-.94.47-1.41,1.41-1.41h28.28c4.17,0,8.02,1.04,11.56,3.12,3.54,2.08,6.34,4.91,8.41,8.46,2.07,3.56,3.1,7.42,3.1,11.59,0,4.62-1.24,8.8-3.72,12.55s-5.75,6.56-9.82,8.44l11.67,28.18c.07.28.1.45.1.52,0,.38-.15.72-.44,1.02-.3.29-.62.44-.96.44h-.16c-.24,0-.5-.08-.78-.23-.28-.16-.5-.42-.68-.81l-11.67-28.02c-2.08.62-4.29.94-6.61.94ZM660.08,450.47h26.88c3.71,0,7.12-.89,10.21-2.68,3.09-1.79,5.52-4.22,7.29-7.29,1.77-3.07,2.66-6.45,2.66-10.13s-.89-7.13-2.66-10.23c-1.77-3.11-4.2-5.56-7.29-7.37-3.09-1.8-6.49-2.71-10.21-2.71h-26.88v40.42Z"
                    data-oid="h9tnna_"
                  />

                  <path
                    className="logo-cls-1"
                    d="M780.86,479.33c.21.24.31.5.31.78,0,.38-.15.71-.44.99-.29.28-.63.42-1.02.42h-.05c-.56,0-1.08-.31-1.56-.94l-34.01-40.42-17.29,18.39v21.3c0,1.11-.45,1.67-1.35,1.67h-.05c-.94,0-1.41-.55-1.41-1.67v-70.94c0-1.11.47-1.67,1.41-1.67h.05c.9,0,1.35.56,1.35,1.67v45.78l43.39-46.51c.62-.66,1.15-.99,1.56-.99h.1c.38,0,.71.15.99.44.28.29.42.63.42,1.02s-.12.69-.37.94l-26.82,28.44,34.79,41.3Z"
                    data-oid="_n-k8tj"
                  />

                  <path
                    className="logo-cls-1"
                    d="M791.38,469.74c0-.38.14-.71.42-.99l.1-.1c.24-.14.5-.21.78-.21.49,0,1.01.33,1.56.99,2.71,3.37,5.96,5.91,9.77,7.63s8.46,2.58,13.98,2.58c4.69,0,8.88-.62,12.58-1.88s6.65-3.25,8.85-6.02c2.2-2.76,3.31-6.29,3.31-10.6,0-3.72-1.28-6.67-3.83-8.88-2.55-2.2-5.42-3.79-8.62-4.77-3.2-.97-7.26-1.94-12.19-2.92-5.73-1.04-10.43-2.36-14.09-3.96-3.66-1.6-6.42-3.6-8.25-6.02-1.84-2.41-2.76-5.36-2.76-8.83,0-4.1,1.07-7.6,3.2-10.52s5.17-5.13,9.11-6.64,8.6-2.27,13.98-2.27c4.76,0,8.88.64,12.37,1.93,3.49,1.29,6.83,3.47,10.03,6.56.31.31.47.7.47,1.15,0,.35-.1.66-.31.94l-.1.1c-.28.17-.57.26-.89.26-.28,0-.56-.09-.83-.26-.28-.17-.61-.43-.99-.78-2.08-1.77-3.98-3.14-5.68-4.11-1.7-.97-3.65-1.69-5.86-2.16s-4.94-.7-8.2-.7c-4.06,0-7.86.54-11.38,1.61-3.52,1.08-6.42,2.84-8.67,5.29-2.26,2.45-3.39,5.65-3.39,9.61,0,4.55,2.08,8.05,6.22,10.5,4.15,2.45,9.71,4.33,16.69,5.65,5.55,1.11,10.09,2.23,13.59,3.36,3.51,1.13,6.59,2.97,9.25,5.52s3.98,6,3.98,10.34c0,4.72-1.2,8.68-3.59,11.88-2.4,3.19-5.68,5.57-9.84,7.13-4.17,1.56-8.89,2.34-14.17,2.34-5.56,0-10.43-.88-14.61-2.63-4.18-1.75-7.96-4.66-11.33-8.72-.45-.52-.68-.99-.68-1.41Z"
                    data-oid="lc7cewt"
                  />
                </g>
                <g className="logo-bracket-right" data-oid="21z.qz9">
                  <path
                    className="logo-cls-1"
                    d="M887.99,454.17l-26.09,25.78c-.38.38-.82.57-1.3.57-.31,0-.56-.09-.73-.26l-.1-.1c-.31-.31-.47-.66-.47-1.04,0-.42.17-.8.52-1.15l24.74-24.43-24.74-24.43c-.35-.35-.52-.73-.52-1.15,0-.38.16-.73.47-1.04l.1-.1c.17-.17.42-.26.73-.26.49,0,.92.19,1.3.57l26.09,25.78c.24.24.37.45.37.62s-.12.38-.37.62Z"
                    data-oid="yj3y_y9"
                  />
                </g>
              </svg>
            </Link>

            <nav
              className="hidden md:flex items-center gap-8"
              data-oid="aq5v8d1"
            >
              {MENU_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="nav-link-header py-1"
                  data-oid="ms.okl8"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-0" data-oid="-qx6rm2">
              <ThemeToggle data-oid="rlb9.5c" />
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
                className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 text-stone-700 dark:text-[#f5f5f0] hover:text-[#c8a46e] active:opacity-80 cursor-pointer touch-manipulation"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleMenu();
                }}
                data-oid=".h27ne:"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                  data-oid="5k.gjbv"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                      data-oid="79wg:8y"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                      data-oid="5-7e7g:"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuPortal}
    </>
  );
}
