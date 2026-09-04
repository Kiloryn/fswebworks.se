import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { SiteLayout } from "@/components/site/layout";
import { PageBack } from "@/components/site/page-back";

export const Route = createFileRoute("/integritet")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Integritetspolicy – FSwebworks" },
      {
        name: "description",
        content: "Hur FSwebworks behandlar personuppgifter från kontaktformuläret.",
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <article className="bg-paper pt-28 text-ink">
        <div className="mx-auto max-w-2xl px-5 pb-24 md:px-8">
          <PageBack onPaper />
          <h1 className="font-display text-4xl md:text-5xl">
            Integritetspolicy
          </h1>
          <p className="mt-5 text-subtle">
            Den här policyn beskriver hur FSwebworks behandlar personuppgifter
            när du använder kontaktformuläret på fswebworks.se. Senast
            uppdaterad: maj 2026.
          </p>
          <section className="mt-10 space-y-8 text-[15px] leading-relaxed">
            <div>
              <h2 className="font-display text-2xl">Vilka uppgifter samlar vi in?</h2>
              <p className="mt-3 text-subtle">
                När du skickar en förfrågan via kontaktformuläret tar vi emot
                namn, e-postadress, telefonnummer (om du anger det), valfritt
                ämne och ditt meddelande.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl">Varför behandlar vi uppgifterna?</h2>
              <p className="mt-3 text-subtle">
                Vi använder uppgifterna för att läsa, besvara och följa upp din
                förfrågan om våra tjänster. Behandlingen sker med stöd av vårt
                berättigade intresse att kunna kommunicera med potentiella och
                befintliga kunder.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl">Hur länge sparas uppgifterna?</h2>
              <p className="mt-3 text-subtle">
                Förfrågningar sparas så länge det behövs för att hantera ditt
                ärende och enligt bokförings- eller affärsregler som gäller för
                oss. Vi sparar inte uppgifterna längre än nödvändigt.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl">Vem delar vi uppgifter med?</h2>
              <p className="mt-3 text-subtle">
                Meddelandet skickas till {SITE.email} via e-posttjänsten Resend,
                som behandlar uppgifterna som personuppgiftsbiträde för att
                kunna leverera mejlet. Vi säljer inte dina uppgifter och delar
                dem inte med tredje part i marknadsföringssyfte.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl">Dina rättigheter</h2>
              <p className="mt-3 text-subtle">
                Du kan begära tillgång till, rättelse eller radering av dina
                uppgifter, samt invända mot eller begränsa viss behandling.
                Kontakta oss så hjälper vi dig.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl">Kontakt</h2>
              <p className="mt-3 text-subtle">
                FSwebworks ·{" "}
                <a className="text-ink underline decoration-gold underline-offset-4" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
            </div>
          </section>
          <p className="mt-12">
            <Link to="/" className="text-sm text-subtle hover:text-ink">
              ← Tillbaka till startsidan
            </Link>
          </p>
        </div>
      </article>
    </SiteLayout>
  );
}
