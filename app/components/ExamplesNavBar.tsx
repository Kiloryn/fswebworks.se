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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div
      className="bg-gray-100 dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-[#2a2a2a] py-2 px-4"
      data-oid="p_41pcj"
    >
      <div
        className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm"
        data-oid="w_l_cbo"
      >
        <p
          className="text-gray-600 dark:text-[#999999] shrink-0"
          data-oid="x..1.7w"
        >
          Exempelsida från FS Webworks.
        </p>
        <span
          className="text-gray-400 dark:text-[#444] hidden sm:inline"
          data-oid="p7xr6te"
        >
          ·
        </span>
        <Link
          href="/"
          className="text-[#c8a46e] hover:text-[#d4b480] underline font-medium shrink-0"
          data-oid="u:a04w6"
        >
          Till huvudsidan
        </Link>
        <Link
          href="/examples"
          className="text-[#c8a46e] hover:text-[#d4b480] underline font-medium shrink-0"
          data-oid="litnn66"
        >
          Alla exempelsidor
        </Link>
        {isExamplePage && (
          <>
            <span
              className="text-gray-400 dark:text-[#444] hidden sm:inline"
              data-oid="k58ur_h"
            >
              ·
            </span>
            <div
              className="relative shrink-0"
              ref={dropdownRef}
              data-oid="ba6_x0l"
            >
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="text-[#c8a46e] hover:text-[#d4b480] font-medium underline inline-flex items-center gap-1"
                aria-expanded={open ? "true" : "false"}
                aria-haspopup="true"
                data-oid="x1h6s_h"
              >
                Byta exempel
                <span
                  className="text-[#666] text-xs"
                  aria-hidden
                  data-oid="fvljjsu"
                >
                  {open ? " ▲" : " ▼"}
                </span>
              </button>
              {open && (
                <nav
                  className="absolute top-full left-0 mt-1 py-1 min-w-[180px] bg-white dark:bg-[#252525] border border-gray-200 dark:border-[#2a2a2a] rounded-lg shadow-lg z-50 max-h-[70vh] overflow-y-auto"
                  aria-label="Välj annat exempel"
                  data-oid="mtazui0"
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
                            ? "text-[#c8a46e] bg-gray-100 dark:bg-[#2a2a2a] font-medium"
                            : "text-gray-800 dark:text-[#e0e0e0] hover:bg-gray-100 dark:hover:bg-[#2a2a2a] hover:text-gray-900 dark:hover:text-[#f5f5f0]"
                        }`}
                        data-oid="5izm.fi"
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
