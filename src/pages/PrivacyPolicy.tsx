import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
            Integritetspolicy
          </h1>
          <p className="text-[#999999] mb-12">
            Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
          </p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">1. Inledning</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                FSwebworks ("vi", "oss", "vår") värnar om din integritet och personuppgifter.
                Denna integritetspolicy förklarar hur vi samlar in, använder och skyddar dina personuppgifter
                när du besöker vår webbplats fswebworks.se.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">2. Insamling av personuppgifter</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                Vi samlar in personuppgifter som du frivilligt lämnar till oss när du:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-2 mb-4">
                <li>Kontaktar oss via kontaktformuläret</li>
                <li>Skickar e-post till oss</li>
                <li>Ringer eller kommunicerar med oss på annat sätt</li>
              </ul>
              <p className="text-[#999999] leading-relaxed mb-4">
                De personuppgifter vi kan samla in inkluderar:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-2">
                <li>Namn</li>
                <li>E-postadress</li>
                <li>Telefonnummer</li>
                <li>Meddelande och projektinformation som du delar med oss</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">3. Användning av personuppgifter</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                Vi använder dina personuppgifter för att:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-2">
                <li>Svara på dina förfrågningar och ge dig support</li>
                <li>Kommunicera med dig om ditt projekt</li>
                <li>Skicka offerter och projektinformation</li>
                <li>Förbättra våra tjänster</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">4. Delning av personuppgifter</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                Vi säljer, hyr eller delar aldrig dina personuppgifter med tredje part i
                marknadsföringssyfte. Vi kan dela personuppgifter med:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-2">
                <li>Tekniska leverantörer som hjälper oss att driva vår webbplats (t.ex. webbhotell)</li>
                <li>Myndigheter om det krävs enligt lag</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">5. Cookies</h2>
              <p className="text-[#999999] leading-relaxed">
                Vår webbplats använder grundläggande cookies för att förbättra användarupplevelsen.
                Inga personuppgifter samlas in genom cookies utan ditt samtycke.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">6. Dina rättigheter</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                Enligt GDPR har du rätt att:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-2">
                <li>Få information om vilka personuppgifter vi har om dig</li>
                <li>Begära rättelse av felaktiga uppgifter</li>
                <li>Begära radering av dina personuppgifter</li>
                <li>Invända mot vår behandling av dina personuppgifter</li>
                <li>Återkalla ditt samtycke när som helst</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">7. Säkerhet</h2>
              <p className="text-[#999999] leading-relaxed">
                Vi använder lämpliga tekniska och organisatoriska säkerhetsåtgärder för att
                skydda dina personuppgifter mot obehörig åtkomst, förlust eller missbruk.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#f5f5f0] mb-4">8. Kontakta oss</h2>
              <p className="text-[#999999] leading-relaxed mb-4">
                Om du har frågor om vår integritetspolicy eller hur vi hanterar dina personuppgifter,
                kontakta oss gärna:
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
