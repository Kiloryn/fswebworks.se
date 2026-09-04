import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SectionScroll } from "@/components/site/section-scroll";
import { BackToTop } from "@/components/site/back-to-top";
import { SITE } from "@/lib/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} – ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { name: "theme-color", content: "#0B0A08" },
      { name: "color-scheme", content: "only light" },
      { name: "supported-color-schemes", content: "light" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preload", href: "/videos/hero-poster.jpg", as: "image" },
      {
        rel: "preload",
        href: "/fonts/fraunces-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/outfit-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="sv" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-canvas text-fg">
        <PreviewHostBridge />
        <SectionScroll />
        <BackToTop />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}