import type { Metadata } from "next";
import BackFromIntegritet from "@/app/components/BackFromIntegritet";

export const metadata: Metadata = {
  title: "Integritetspolicy – FSwebworks",
  description:
    "Hur FSwebworks behandlar personuppgifter när du kontaktar oss via webbplatsen.",
  alternates: { canonical: "/integritet" },
};

type IntegritetPageProps = {
  searchParams?: { return?: string };
};

export default function IntegritetPage({ searchParams }: IntegritetPageProps) {
  const fromContact = searchParams?.return === "contact";
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-[#f5f5f0] mb-6">
          Integritetspolicy
        </h1>
        <p className="text-stone-600 dark:text-[#d4d0c8] leading-relaxed mb-8">
          Den här policyn beskriver hur FSwebworks behandlar personuppgifter när
          du använder kontaktformuläret på fswebworks.se. Senast uppdaterad: maj
          2026.
        </p>

        <div className="space-y-8 text-stone-600 dark:text-[#d4d0c8] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-[#f5f5f0] mb-3">
              Vilka uppgifter samlar vi in?
            </h2>
            <p>
              När du skickar en förfrågan via kontaktformuläret kan vi ta emot
              namn, e-postadress, telefonnummer (om du anger det), valfritt ämne
              och ditt meddelande.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-[#f5f5f0] mb-3">
              Varför behandlar vi uppgifterna?
            </h2>
            <p>
              Vi använder uppgifterna för att läsa, besvara och följa upp din
              förfrågan om våra tjänster. Behandlingen sker med stöd av vårt
              berättigade intresse att kunna kommunicera med potentiella och
              befintliga kunder.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-[#f5f5f0] mb-3">
              Hur länge sparas uppgifterna?
            </h2>
            <p>
              Förfrågningar sparas i vår e-post så länge det behövs för att
              hantera ditt ärende och enligt bokförings- eller affärsregler som
              gäller för oss. Vi sparar inte uppgifterna längre än nödvändigt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-[#f5f5f0] mb-3">
              Vem delar vi uppgifter med?
            </h2>
            <p>
              Meddelanden skickas via e-posttjänsten Resend till vår angivna
              kontaktadress. Resend fungerar som personuppgiftsbiträde enligt
              sina villkor. Vi säljer inte dina uppgifter och delar dem inte med
              tredje part i marknadsföringssyfte.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-[#f5f5f0] mb-3">
              Dina rättigheter
            </h2>
            <p>
              Du kan begära tillgång till, rättelse eller radering av dina
              uppgifter, samt invända mot eller begränsa viss behandling. Kontakta
              oss så hjälper vi dig.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-[#f5f5f0] mb-3">
              Kontakt
            </h2>
            <p>
              FSwebworks ·{" "}
              <a
                href="mailto:fredrik@fswebworks.se"
                className="text-[#c8a46e] hover:underline"
              >
                fredrik@fswebworks.se
              </a>
            </p>
          </section>
        </div>

        <p className="mt-12">
          <BackFromIntegritet
            fallbackHref={fromContact ? "/#contact" : "/"}
            useFallback={fromContact}
          >
            {fromContact
              ? "← Tillbaka till kontaktformuläret"
              : "← Tillbaka till startsidan"}
          </BackFromIntegritet>
        </p>
      </div>
    </div>
  );
}
