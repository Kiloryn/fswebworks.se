import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-canvas text-fg md:min-h-dvh">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
