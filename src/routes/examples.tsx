import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EXAMPLES } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/layout";
import { PageBack } from "@/components/site/page-back";
import { Pic } from "@/components/site/pic";
import { SectionLink } from "@/components/site/section-link";

export const Route = createFileRoute("/examples")({
  component: ExamplesPage,
  head: () => ({
    meta: [
      { title: "Exempel på hemsidor – FSwebworks" },
      {
        name: "description",
        content:
          "Klicka på en kategori för att se en exempelsida. Alla exempel kan anpassas efter ditt företags uttryck.",
      },
    ],
  }),
});

function ExamplesPage() {
  return (
    <SiteLayout>
      <div className="bg-paper pt-28 text-ink">
        <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
          <PageBack />
          <p className="text-[11px] uppercase tracking-[0.24em] text-subtle">
            Exempel
          </p>
          <h1 className="mt-4 max-w-[14ch] font-display text-[2.4rem] italic md:text-6xl">
            Exempel på sidor vi bygger.
          </h1>
          <p className="mt-5 max-w-xl text-subtle">
            Klicka in och testa. Layout, färg och ton anpassas efter er – inte
            efter en mall.
          </p>
          <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {EXAMPLES.map((ex, i) => {
              const featured = i < 2;
              return (
                <a
                  key={ex.slug}
                  href={`/${ex.slug}`}
                  className={`group ${featured ? "lg:col-span-2" : ""}`}
                >
                  <div
                    className={`overflow-hidden bg-paper-2 ${
                      featured ? "aspect-[4/3] lg:aspect-[16/10]" : "aspect-[4/3]"
                    }`}
                  >
                    <Pic
                      src={ex.image}
                      alt={`${ex.name} exempelsida`}
                      className="size-full object-cover"
                      width={featured ? 1200 : 800}
                      height={featured ? 750 : 600}
                      priority={i === 0}
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">
                        {ex.short}
                      </p>
                      <h2 className="mt-1 min-h-[2.5rem] font-display text-2xl leading-tight group-hover:text-brass md:text-3xl">
                        {ex.name}
                      </h2>
                    </div>
                    <span className="mt-6 shrink-0 text-sm text-brass">
                      Öppna
                      <ArrowRight className="ml-1 inline size-3.5" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-ink/10 pt-10 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl italic">Vill du ha en egen?</h2>
              <p className="mt-2 max-w-md text-subtle">
                Vi sätter färg och ton efter er verksamhet.
              </p>
            </div>
            <Button asChild>
              <SectionLink section="contact">Kontakta oss</SectionLink>
            </Button>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
