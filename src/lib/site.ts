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
      "Vi skapar en enkel och professionell hemsida som presenterar ditt företag och gör det lätt för kunder att ta kontakt. Hemsidan anpassas efter din verksamhet och fungerar lika bra på mobil som på dator.",
    fits: [
      "Saknar en hemsida idag",
      "Har en gammal hemsida som behöver uppdateras",
      "Vill ha en enkel och professionell närvaro på nätet",
    ],
    cta: "Begär offert",
    subject: "offert",
    featured: true,
  },
  {
    id: "service",
    name: "Serviceavtal",
    price: "690 kr",
    suffix: "/ månad, exkl. moms · valfritt",
    description:
      "För dig som vill ha löpande hjälp med din hemsida. Vi hjälper till med mindre uppdateringar och ser till att sidan fortsätter fungera bra över tid.",
    fits: [
      "Vill slippa tänka på tekniska uppdateringar",
      "Ibland behöver ändra texter eller bilder",
      "Vill ha en kontakt att höra av dig till när något behöver ändras",
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
      "Behöver du bara hjälp ibland? Vi hjälper till med ändringar, uppdateringar eller förbättringar när behov uppstår.",
    fits: [
      "Bara behöver hjälp någon gång ibland",
      "Vill betala per tillfälle istället för ett avtal",
    ],
    cta: "Hör av dig",
    subject: "ovrigt",
    featured: false,
  },
] as const;

export const INCLUDED = [
  "Uppstartssamtal",
  "Design anpassad efter ditt företag",
  "1–5 sidor (Startsida, Om oss, Tjänster, Kontakt)",
  "Mobilanpassad design",
  "Kontaktformulär",
  "Grundläggande sökmotoroptimering",
  "Genomgång när hemsidan är klar",
] as const;

export const FAQ = [
  {
    q: "Måste jag skriva texterna själv?",
    a: "Ja, i grunden utgår vi från texter och information från dig, eftersom du känner din verksamhet bäst. Vi hjälper gärna till att strukturera, anpassa och lägga in texterna så att de fungerar bra på webben. Om du vill ha hjälp med formuleringar eller texter kan det erbjudas som tillägg.",
  },
  {
    q: "Vad händer om jag inte har färdiga texter?",
    a: "Det är väldigt vanligt. Vi börjar ofta med enkla utkast, stödfrågor eller befintligt material, och bygger vidare därifrån. Målet är att det ska kännas enkelt – inte stressande.",
  },
  {
    q: "Kan ni hjälpa till att ändra texter i efterhand?",
    a: "Absolut. Mindre textändringar kan göras via vår löpande webb-hjälp eller som enstaka uppdrag vid behov.",
  },
  {
    q: "Är jag bunden till er om ni bygger hemsidan?",
    a: "Nej. Du äger alltid din hemsida och väljer själv om du vill ha fortsatt hjälp eller inte.",
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
      "Meny, bordsbokning och öppettider. Visa maten och skapa hungriga gäster.",
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
      "Tydlig expertis och enkel kontakt. En sida som får fler att boka ett samtal.",
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
