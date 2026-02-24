/**
 * Gemensam typdefinition för alla templates (exempelsidor).
 * Använd denna för typsäkerhet när du skapar eller anpassar sidor för nya kunder.
 */
export interface TemplateData {
  category: string;
  companyName: string;
  tagline: string;
  description: string;
  services: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  contact: {
    phone: string;
    email: string;
    address: string;
    orgNumber: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  features: string[];
}
