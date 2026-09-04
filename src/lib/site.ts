export const SITE = {
  name: "FSwebworks",
  email: "fredrik@fswebworks.se",
  city: "Stockholm",
  tagline: "Webbdesign för småföretag i Sverige",
  description:
    "Enkla och professionella hemsidor för hantverkare och småföretag i hela Sverige. Med bas i Stockholm. Från 9 900 kr, ingen bindning.",
} as const;

export const NAV = [
  { label: "Exempel", section: "exempel" },
  { label: "Priser", section: "priser" },
  { label: "Så går det till", section: "process" },
  { label: "Kontakt", section: "contact" },
] as const;

export const PROMISES = [
  "Inget krångel",
  "Tydliga priser",
  "Ingen bindningstid",
  "Du äger hemsidan själv",
] as const;

export const FEATURES = [
  {
    title: "Tydlig presentation",
    body: "Företag, tjänster och kontakt samlat – besökaren förstår direkt vad ni gör.",
  },
  {
    title: "Lätt att ta kontakt",
    body: "Kontaktformulär och tydliga uppgifter så kunder slipper leta.",
  },
  {
    title: "Redo att växa",
    body: "Grund för sökmotoroptimering och framtida utbyggnad – utan att börja med ett stort projekt.",
  },
] as const;

export const STEPS = [
  {
    title: "Första kontakt",
    body: "Du hör av dig via formulär eller e-post. Vi bokar ett kort samtal där vi går igenom dina önskemål och behov.",
  },
  {
    title: "Offert",
    body: "Efter samtalet skickar vi en tydlig offert. När du godkänner offerten startar vi arbetet.",
  },
  {
    title: "Innehåll till hemsidan",
    body: "Du skickar texter, bilder och information om ditt företag. Du behöver inte ha allt klart från början – vi hjälper dig att strukturera innehållet.",
  },
  {
    title: "Vi bygger hemsidan",
    body: "Vi designar och bygger din hemsida och ser till att den fungerar lika bra på mobil som på dator.",
  },
  {
    title: "Lansering",
    body: "När allt är klart publiceras hemsidan och vi går igenom den tillsammans.",
  },
] as const;

export const SERVICES = [
  {
    id: "hemsida",
    name: "Skapa hemsida",
    price: "9 900 kr",
    suffix: "från, exkl. moms",
    description:
      "Vi skapar en hemsida som visar vad ni gör och gör det lätt att höra av sig. Startpriset täcker en komplett sida för ett vanligt småföretag. Behöver ni mer går vi igenom det och sätter pris innan vi börjar.",
    fits: [
      "Saknar en hemsida idag",
      "Har en gammal hemsida som behöver moderniseras",
      "Vill ha en tydlig och representativ närvaro på nätet",
    ],
    cta: "Begär offert",
    subject: "offert",
    featured: true,
  },
  {
    id: "service",
    name: "Drift och webbhjälp",
    price: "690 kr",
    suffix: "/ månad, exkl. moms · valfritt",
    description:
      "Vi tar hand om drift, certifikat och mindre text- och bildändringar. För dig som vill slippa teknik.",
    fits: [
      "Vill slippa tänka på teknisk drift och uppdateringar",
      "Behöver göra mindre ändringar av texter eller bilder löpande",
      "Vill ha en fast kontaktväg när något behöver justeras",
    ],
    cta: "Fråga om serviceavtal",
    subject: "service",
    featured: false,
  },
  {
    id: "timme",
    name: "Hjälp vid behov",
    price: "950 kr",
    suffix: "/ timme, exkl. moms",
    description:
      "Har du inget månadsavtal eller behöver du större anpassningar? Vi hjälper till med ändringar, uppdateringar eller utbyggnad per timme precis när behovet uppstår.",
    fits: [
      "Bara behöver hjälp någon gång ibland",
      "Vill betala per tillfälle utan fast månadskostnad",
    ],
    cta: "Hör av dig",
    subject: "ovrigt",
    featured: false,
  },
] as const;

export const INCLUDED = [
  "Uppstartssamtal och genomgång av behov",
  "Design efter er verksamhet – inte en mall",
  "Startsida, tjänster, om oss och kontakt",
  "Fungerar på telefon",
  "Formulär så kunder når er",
  "Grund så ni syns på Google",
  "Genomgång innan sidan går live",
] as const;

export const FAQ = [
  {
    q: "Vad ingår i startpriset från 9 900 kr?",
    a: "Startpriset täcker en komplett, professionell hemsida för ett typiskt småföretag med presentation av verksamhet, tjänster och kontaktvägar. Har du behov av fler sektioner, speciella funktioner eller flerspråkighet går vi igenom det och ger ett fast pris i offerten innan arbetet påbörjas.",
  },
  {
    q: "Hur fungerar ägarskap och drift?",
    a: "Du äger din domän, bilder och innehåll. Det finns ingen inlåsning hos oss. Vi kan sköta drift och teknik så du slipper det – och om du senare vill flytta sidan går det.",
  },
  {
    q: "Måste jag teckna serviceavtalet för 690 kr/månad?",
    a: "Nej, serviceavtalet är helt valfritt. Med avtalet tar vi hand om webbdrift, SSL, löpande tekniskt underhåll och mindre innehållsändringar. Väljer du att inte ha avtalet driftas sidan enligt överenskommet upplägg, och du kan anlita oss per timme (950 kr/tim) om du vill ha hjälp senare.",
  },
  {
    q: "Hjälper ni till med domän och e-post?",
    a: "Ja, vi hjälper till att koppla ihop domänen med hemsidan och peka DNS-inställningar rätt så att din e-post fortsätter fungera hos din befintliga e-postleverantör. Däremot tillhandahåller vi inte generell IT-support för personliga datorer, mobiler eller e-postprogram.",
  },
  {
    q: "Måste jag skriva alla texter själv?",
    a: "Vi utgår från information och stödord från dig eftersom du känner ditt hantverk bäst. Vi hjälper till att strukturera, anpassa och finslipa texterna så att de fungerar bra på webben. Vill du ha mer omfattande copytexter kan vi erbjuda det som tillägg.",
  },
  {
    q: "Är jag bunden till er om ni bygger hemsidan?",
    a: "Nej. Vi tillämpar inga inlåsande avtal. Målet är att du ska stanna hos oss för att servicen fungerar smidigt – inte för att du sitter fast i ett kontrakt.",
  },
] as const;

export const SUBJECTS = [
  { value: "", label: "— Välj —" },
  { value: "offert", label: "Offert / ny hemsida" },
  { value: "kontakta-mig", label: "Kontakta mig" },
  { value: "service", label: "Serviceärende" },
  { value: "ovrigt", label: "Övrigt" },
] as const;

export const EXAMPLES = [
  {
    slug: "vvs",
    name: "VVS och rörmokare",
    brand: "Din Rörmokare",
    blurb:
      "Akut jour, recensioner och ROT. Så syns en rörmokare när någon googlar VVS Stockholm.",
    image: "/images/vvs.jpg?v=6",
  },
  {
    slug: "elektriker",
    name: "Elektriker",
    brand: "Stockholms Elkraft",
    blurb:
      "A-behörig installation och felavhjälpning. Bygg förtroende med dokumenterad kompetens.",
    image: "/images/elektriker.jpg?v=5",
  },
  {
    slug: "salong",
    name: "Salong och skönhet",
    brand: "Ateljé Linné",
    blurb:
      "Boka tid, frisör med namn och prislista. Det en salong behöver för att fylla stolen.",
    image: "/images/salong.jpg?v=5",
  },
  {
    slug: "restaurang",
    name: "Restaurang",
    brand: "Trattoria Nove",
    blurb:
      "Meny, bordsbokning och karta. Visa maten så gästen blir hungrig – och hittar dit.",
    image: "/images/restaurang.jpg?v=5",
  },
  {
    slug: "malare",
    name: "Målare",
    brand: "Stockholms Måleri",
    blurb:
      "Färg, ROT och kostnadsfri offert. Ett rum som säljer hantverket – och en sida som tar in jobb.",
    image: "/images/malare.jpg?v=5",
  },
  {
    slug: "konsult",
    name: "Konsult",
    brand: "Anders Eriksson",
    blurb:
      "Ett samtal, tre uppdragstyper, tydlig kontakt. En sida som får fler att boka trettio minuter.",
    image: "/images/konsult.jpg?v=5",
  },
] as const;

export const PREP = [
  {
    title: "Om företaget",
    items: [
      "Kort beskrivning av vad ni gör",
      "Hur länge ni har funnits (om relevant)",
      "Var ni verkar (ort/region)",
    ],
  },
  {
    title: "Tjänster",
    items: [
      "Vilka tjänster ni erbjuder",
      "Eventuella specialområden",
      "Hur kunder kontaktar er",
    ],
  },
  {
    title: "Kontaktuppgifter",
    items: ["Telefon", "E-post", "Adress (om relevant)", "Organisationsnummer"],
  },
  {
    title: "Bilder (om ni har)",
    items: [
      "Logotyp",
      "Bilder på arbete, lokaler eller team (mobilbilder fungerar oftast utmärkt)",
    ],
  },
  {
    title: "Övrigt (valfritt)",
    items: [
      "Referenser eller omdömen",
      "Certifieringar",
      "Tidigare material (broschyr, Facebooksida, gammal hemsida)",
    ],
  },
] as const;
