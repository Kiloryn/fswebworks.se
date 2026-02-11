import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f5f0]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#1a1a1a] bg-[#111111]/80 backdrop-blur-lg">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#c8a46e]/10 flex items-center justify-center">
                <span className="text-xl font-display text-[#c8a46e]">F</span>
              </div>
              <span className="text-xl font-medium text-[#f5f5f0]">fswebworks</span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-[#999999] hover:text-[#c8a46e] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Tillbaka
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#f5f5f0] mb-4">
            Användarvillkor
          </h1>
          <p className="text-[#999999] mb-12">
            Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
          </p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">1. Allmänt</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                Välkommen till FSwebworks. Genom att använda vår webbplats och våra tjänster
                accepterar du dessa användarvillkor. Läs igenom dem noggrant.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">2. Våra tjänster</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                FSwebworks erbjuder webbutveckling, webbdesign och relaterade tjänster.
                Alla tjänster levereras enligt överenskommelse i offert eller avtal.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">3. Avtal och offerter</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                När du beställer en tjänst från oss:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-2">
                <li>Vi skickar en offert med pris och leveranstid</li>
                <li>Avtalet blir bindande när du accepterar offerten</li>
                <li>Betalning sker enligt överenskommelse i offerten</li>
                <li>Ändringar i projektet kan påverka pris och leveranstid</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">4. Betalningsvillkor</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                Betalning sker enligt faktura eller överenskommelse:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-2">
                <li>Förskottsbetalning kan krävas för nya kunder</li>
                <li>Betalningsvillkor är normalt 30 dagar</li>
                <li>Vid försenad betalning tillkommer dröjsmålsränta enligt lag</li>
                <li>Alla priser är i svenska kronor (SEK) exklusive moms om inget annat anges</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">5. Leverans</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                Vi strävar efter att leverera enligt överenskommen tid. Leveranstiden kan påverkas av:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-2">
                <li>Förseningar i leverans av material eller information från kund</li>
                <li>Ändringar i projektomfattningen</li>
                <li>Tekniska eller andra oförutsedda händelser</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">6. Upphovsrätt och äganderätt</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                När projektet är färdigställt och helt betalt:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-2">
                <li>Övergår äganderätten till webbplatsen till kunden</li>
                <li>FSwebworks behåller rätt att visa projektet i vår portfolio</li>
                <li>Tredjepartslicenser och öppen källkod följer respektive licens</li>
                <li>Material som kund tillhandahåller måste vara lagligt att använda</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">7. Ansvarsbegränsning</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                FSwebworks ansvarar för att leverera tjänster med professionell kvalitet.
                Vi ansvarar dock inte för:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-2">
                <li>Indirekta skador eller förlust av intäkter</li>
                <li>Problem orsakade av tredje parts tjänster (webbhotell, domänleverantörer, etc.)</li>
                <li>Innehåll som kunden publicerar på webbplatsen</li>
                <li>Skador som uppstår efter leverans om kunden ändrat i webbplatsen</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">8. Support och underhåll</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                Efter leverans:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-2">
                <li>Mindre bugfixar ingår i 30 dagar efter leverans</li>
                <li>Längre support eller underhåll kan avtalas separat</li>
                <li>Nya funktioner eller större ändringar debiteras enligt timkostnad eller offert</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">9. Uppsägning</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                Om kunden vill avbryta ett pågående projekt:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-2">
                <li>Måste uppsägning ske skriftligt</li>
                <li>Utfört arbete fram till uppsägning debiteras</li>
                <li>Eventuell förskottsbetalning kvittas mot utfört arbete</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">10. Ändringar i villkoren</h2>
              <p className="text-[#999999] leading-relaxed">
                Vi förbehåller oss rätten att ändra dessa villkor. Ändringar träder i kraft
                när de publiceras på vår webbplats. Pågående projekt följer de villkor som
                gällde vid avtalets ingående.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">11. Tillämplig lag</h2>
              <p className="text-[#999999] leading-relaxed">
                Svensk lag tillämpas på dessa villkor och eventuella tvister.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">12. Kontakt</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                Vid frågor om våra användarvillkor, kontakta oss:
              </p>
              <div className="text-[#999999] space-y-2">
                <p>FSwebworks</p>
                <p>E-post: fredrik@fswebworks.se</p>
                <p>Telefon: +46 76 206 02 12</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
