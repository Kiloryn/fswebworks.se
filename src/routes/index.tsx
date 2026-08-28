import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/page";
import { SiteLayout } from "@/components/site/layout";

type HomeSearch = { amne?: string };

export const Route = createFileRoute("/")({
  validateSearch: (s: Record<string, unknown>): HomeSearch => ({
    amne: typeof s.amne === "string" ? s.amne : undefined,
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
