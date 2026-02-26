import type { TemplateData } from "@/lib/templates/template-types";

export const vvsData: TemplateData = {
  category: "VVS & Rörmokare",
  companyName: "Din Rörmokare i Stockholm",
  tagline: "Akut VVS-service dygnet runt – snabbt, pålitligt och med fast pris",
  description:
    "Vi hjälper dig med allt från akut läckage och stopp till renovering och nyinstallation. Jour dygnet runt i Stockholm och närliggande områden.",
  services: [
    {
      title: "Akut VVS",
      description: "Läckage, stopp eller trasig värmepanna? Vi åker ut så snabbt som möjligt – dygnet runt.",
      icon: "🔧",
    },
    {
      title: "Läcktätning & reparation",
      description: "Reparation av rör, kranar, toaletter och vattenvärmare. Ersättning vid behov.",
      icon: "💧",
    },
    {
      title: "Stopp i avlopp",
      description: "Professionell rensning av avlopp och avloppsrör. Mindre och större stopp.",
      icon: "🚿",
    },
    {
      title: "Nyinstallation & renovering",
      description: "Badrum, kök eller hel renovering. Vi ger kostnadsfri offert på uppdrag.",
      icon: "🏠",
    },
  ],
  contact: {
    phone: "08-123 456 78",
    email: "info@dinromokare.se",
    address: "Stockholm och runtom",
    orgNumber: "556123-4567",
  },
  colors: {
    primary: "#1e40af",
    secondary: "#1e3a8a",
    accent: "#3b82f6",
  },
  features: [
    "Akut kontakt-knapp",
    "Tjänsteöversikt",
    "Prislista",
    "Jour dygnet runt",
    "Offertförfrågan",
  ],
};

export const priceList = [
  { item: "Utryckning (akuttid)", price: "from 1 290 kr" },
  { item: "Enklare reparation (timpris)", price: "from 690 kr" },
  { item: "Stopp i avlopp", price: "from 1 490 kr" },
  { item: "Läcktätning", price: "Pris enligt offert" },
];
