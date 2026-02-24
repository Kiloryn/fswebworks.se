"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { EXAMPLE_CATEGORIES } from "@/lib/example-categories";
import { useRef, useEffect, useState } from "react";

export default function ExamplesNavBar() {
  const pathname = usePathname();
  const currentSlug = pathname?.replace(/^\//, "").split("/")[0] || "";
  const isExamplePage = EXAMPLE_CATEGORIES.some((c) => c.slug === currentSlug);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="bg-[#1a1a1a] border-b border-[#2a2a2a] py-2 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm">
        <p className="text-[#999999] shrink-0">
          Exempelsida från FS Webworks.
        </p>
        <span className="text-[#444] hidden sm:inline">·</span>
        <Link
          href="/"
          className="text-[#c8a46e] hover:text-[#d4b480] underline font-medium shrink-0"
        >
          Till huvudsidan
        </Link>
        <Link
          href="/examples"
          className="text-[#c8a46e] hover:text-[#d4b480] underline font-medium shrink-0"
        >
          Alla exempelsidor
        </Link>
        {isExamplePage && (
          <>
            <span className="text-[#444] hidden sm:inline">·</span>
            <div className="relative shrink-0" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="text-[#c8a46e] hover:text-[#d4b480] font-medium underline inline-flex items-center gap-1"
                aria-expanded={open ? "true" : "false"}
                aria-haspopup="true"
              >
                Byta exempel
                <span className="text-[#666] text-xs" aria-hidden>
                  {open ? " ▲" : " ▼"}
                </span>
              </button>
              {open && (
                <nav
                  className="absolute top-full left-0 mt-1 py-1 min-w-[180px] bg-[#252525] border border-[#2a2a2a] rounded-lg shadow-lg z-50 max-h-[70vh] overflow-y-auto"
                  aria-label="Välj annat exempel"
                >
                  {EXAMPLE_CATEGORIES.map((cat) => {
                    const isCurrent = currentSlug === cat.slug;
                    return (
                      <Link
                        key={cat.slug}
                        href={`/${cat.slug}`}
                        onClick={() => setOpen(false)}
                        className={`block px-3 py-2 text-left text-sm transition-colors ${
                          isCurrent
                            ? "text-[#c8a46e] bg-[#2a2a2a] font-medium"
                            : "text-[#e0e0e0] hover:bg-[#2a2a2a] hover:text-[#f5f5f0]"
                        }`}
                      >
                        {cat.name}
                      </Link>
                    );
                  })}
                </nav>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
