import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-canvas text-fg md:min-h-dvh">
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-[60] focus:bg-gold focus:px-3 focus:py-2 focus:text-gold-fg"
      >
        Hoppa till innehållet
      </a>
      <SiteHeader />
      <main id="innehall">{children}</main>
      <SiteFooter />
    </div>
  );
}
