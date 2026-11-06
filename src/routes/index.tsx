import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/page";
import { SiteLayout } from "@/components/site/layout";

type HomeSearch = { amne?: string };

export const Route = createFileRoute("/")({
  validateSearch: (s: Record<string, unknown>): HomeSearch => ({
    amne: typeof s.amne === "string" ? s.amne : undefined,
  }),
  head: () => ({
    links: [
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
    ],
  }),
  component: Home,
});

function Home() {
  const { amne } = Route.useSearch();
  return (
    <SiteLayout>
      <HomePage defaultSubject={amne ?? ""} />
    </SiteLayout>
  );
}
