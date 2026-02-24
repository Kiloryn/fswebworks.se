import type { TemplateData } from "@/lib/templates/template-types";

export const elektrikerData: TemplateData = {
  category: "Elektriker",
  companyName: "Nordic Elkraft",
  tagline: "Certifierad elinstallation och säkerhet – för dig som vill ha det gjort rätt",
  description:
    "Vi utför nyinstallationer, felavhjälpning och elbesiktning i Stockholm. A-behöriga och dokumenterad kompetens. Alltid med fokus på säkerhet och normer.",
  services: [
    {
      title: "Nyinstallation",
      description: "El i nybyggen, tillbyggen och vid renovering. Full följsamhet mot Elsäkerhetsverket.",
      icon: "⚡",
    },
    {
      title: "Felavhjälpning",
      description: "Strömavbrott, sladdar som löser ut, eller annat elfel. Vi felsöker och åtgärdar.",
      icon: "🔌",
    },
    {
      title: "Elbesiktning",
      description: "Säkerhetskontroll och besiktning inför försäljning eller hyra. Du får en tydlig rapport.",
      icon: "📋",
    },
    {
      title: "Smarta hem & uppgraderingar",
      description: "Uppgradering av elanläggning, ljusstyrning och smarta lösningar vid behov.",
      icon: "🏠",
    },
  ],
  contact: {
    phone: "08-456 789 01",
    email: "info@nordicelkraft.se",
    address: "Stockholm",
    orgNumber: "556234-5678",
  },
  colors: {
    primary: "#eab308",
    secondary: "#1f2937",
    accent: "#facc15",
  },
  features: [
    "Säkerhetsfokus",
    "Certifieringar",
    "Kontaktformulär",
    "Tjänstepresentation",
    "Offertförfrågan",
  ],
};

export const certifications = [
  "A-behörighet enligt Elsäkerhetsverket",
  "Försäkringsgodkänd",
  "Strukturerad dokumentation och rapporter",
];
