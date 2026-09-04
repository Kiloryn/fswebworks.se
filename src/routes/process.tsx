import { createFileRoute } from "@tanstack/react-router";
import { PREP } from "@/lib/site";
import { SiteLayout } from "@/components/site/layout";
import { PageBack } from "@/components/site/page-back";
import { SectionLink } from "@/components/site/section-link";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Det vi behöver från er – FSwebworks" },
      {
        name: "description",
        content:
          "Checklista inför ny hemsida: företag, tjänster, kontaktuppgifter och bilder.",
      },
    ],
  }),
});

function ProcessPage() {
  return (
    <SiteLayout>
      <article className="bg-paper pt-28 text-ink">
        <div className="mx-auto max-w-2xl px-5 pb-24 md:px-8">
          <PageBack
            onPaper
            section="process"
            label="Tillbaka till så går det till"
          />
          <h1 className="font-display text-[2.15rem] md:text-5xl">
            Det vi behöver från er.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-subtle">
            Ni behöver inte ha allt klart. Tre rader och ett par bilder räcker
            för att börja. Resten tar vi i samtalet.
          </p>

          <ol className="mt-12">
            {PREP.map((block, i) => (
              <li key={block.title} className="border-t border-ink/10 py-8">
                <p className="text-sm text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1 font-display text-2xl">{block.title}</h2>
                <ul className="mt-4 space-y-1.5 text-sm text-subtle">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <p className="border-t border-ink/10 pt-8 text-sm text-subtle">
            Saknas något? Vi strukturerar det tillsammans.{" "}
            <SectionLink
              section="contact"
              className="text-brass underline decoration-brass/40 underline-offset-4 hover:decoration-brass"
            >
              Begär offert
            </SectionLink>
          </p>
        </div>
      </article>
    </SiteLayout>
  );
}
