import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SectionScroll } from "@/components/site/section-scroll";
import { BackToTop } from "@/components/site/back-to-top";
import { ThemeProvider } from "@/lib/theme";
import { SITE } from "@/lib/site";
import appCss from "../styles.css?url";

const THEME_BOOT = `(function(){try{if(localStorage.getItem('fswebworks-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} – ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { name: "theme-color", content: "#F3EEE5" },
      { name: "color-scheme", content: "light dark" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preload", href: "/videos/hero-poster.jpg", as: "image" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,560&family=Outfit:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="sv" className="antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
        <HeadContent />
      </head>
      <body className="bg-canvas text-fg">
        <PreviewHostBridge />
        <ThemeProvider>
          <AuthProvider>
            <SectionScroll />
            <BackToTop />
            <Outlet />
          </AuthProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}