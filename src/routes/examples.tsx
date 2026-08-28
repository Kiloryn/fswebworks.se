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
      <div className="bg-ink pt-28">
        <div className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
          <PageBack />
          <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
            Urval
          </p>
          <h1 className="mt-4 max-w-[14ch] font-display text-[2.4rem] italic md:text-6xl">
            Exempel på sidor vi bygger.
          </h1>
          <p className="mt-5 max-w-xl text-muted">
            Klicka på en kategori för att se hur sidan kan se ut. Alla exempel
            kan anpassas efter ditt företags uttryck och behov.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {EXAMPLES.map((ex, i) => (
              <a
                key={ex.slug}
                href={`/${ex.slug}`}
                className={`group overflow-hidden rounded-xl bg-ink-2 ${i === 0 ? "md:col-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
                  <Pic
                    src={ex.image}
                    alt={`${ex.name} exempelsida`}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={1200}
                    height={750}
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-gold">
                      {ex.brand}
                    </p>
                    <h2 className="mt-1 font-display text-3xl italic md:text-4xl">
                      {ex.name}
                    </h2>
                    <p className="mt-2 max-w-lg text-sm text-muted">{ex.blurb}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm text-gold">
                      Öppna exempel
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-14 rounded-xl bg-ink-2 p-8 text-center md:p-12">
            <h2 className="font-display text-3xl italic">Vill du ha en egen?</h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Vi anpassar layout, färg och ton efter din verksamhet – inte efter
              en generisk mall.
            </p>
            <Button asChild className="mt-6">
              <SectionLink section="contact">
                Kontakta oss
              </SectionLink>
            </Button>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
