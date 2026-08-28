import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PREP } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/layout";
import { PageBack } from "@/components/site/page-back";
import { Pic } from "@/components/site/pic";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Så förbereder du innehållet – FSwebworks" },
      {
        name: "description",
        content:
          "Konkreta tips på vad du kan förbereda inför din nya hemsida – från företagsbeskrivning till bilder.",
      },
    ],
  }),
});

function ProcessPage() {
  return (
    <SiteLayout>
      <article className="bg-paper pt-28 text-ink">
        <div className="mx-auto max-w-3xl px-5 pb-8 md:px-8">
          <PageBack onPaper />
          <p className="text-[11px] uppercase tracking-[0.24em] text-subtle">
            Inför projektet
          </p>
          <h1 className="mt-4 font-display text-[2.4rem] italic md:text-6xl">
            Så förbereder du innehållet till din hemsida.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-subtle">
            Du behöver inte ha allt klart från början – men följande hjälper oss
            att komma igång smidigt. Vi börjar alltid med ett samtal.
          </p>
        </div>
        <div className="mx-auto max-w-3xl px-5 pb-8 md:px-8">
          <Pic
            src="/images/studio-desk.jpg?v=5"
            alt="Arbetsbord med laptop och anteckningsbok"
            className="aspect-[16/9] w-full rounded-xl object-cover"
            width={1400}
            height={788}
          />
        </div>
        <ol className="mx-auto max-w-3xl space-y-4 px-5 pb-20 md:px-8">
          {PREP.map((block, i) => (
            <li key={block.title} className="rounded-xl bg-paper-2 p-6 md:p-8">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-3xl italic text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl md:text-3xl">{block.title}</h2>
              </div>
              <ul className="mt-5 space-y-2 text-subtle">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <p className="pt-4 text-subtle">
            Saknas något? Inga problem. Vi hjälper gärna till att strukturera och
            anpassa innehållet under arbetets gång.
          </p>
          <Button asChild size="xl" className="mt-4">
            <Link to="/" hash="contact">
              Kontakta oss
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </ol>
      </article>
    </SiteLayout>
  );
}
