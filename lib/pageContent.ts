/** Service package as used by ServicesSection */
export interface ServicePackageContent {
  title: string;
  price: string;
  priceLabel: string;
  description: string;
  features: string[];
  cta: string;
  image: string;
}

/** Merged page content shape used by all homepage sections */
export interface PageContent {
  hero: {
    badge: string;
    heading: string;
    subheading: string;
    benefits: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    trustText: string;
    logo: string;
    heroImage: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    package1: ServicePackageContent;
    package2: ServicePackageContent;
  };
  examples: {
    sectionTitle: string;
    sectionSubtitle: string;
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    image: string;
  };
}
