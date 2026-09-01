import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-canvas text-fg">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
