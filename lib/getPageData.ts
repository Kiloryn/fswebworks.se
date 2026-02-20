import fs from 'fs/promises'
import path from 'path'

/** Service package as in pageData.json */
export type ServicePackage = {
  title?: string | null
  price?: string | null
  priceLabel?: string | null
  description?: string | null
  features?: string[] | null
  cta?: string | null
  image?: string | null
}

/**
 * Full shape of the page data returned by the API (matches content/pageData.json).
 */
export type PageData = {
  hero?: {
    badge?: string | null
    heading?: string | null
    subheading?: string | null
    benefits?: string[] | null
    ctaPrimary?: string | null
    ctaSecondary?: string | null
    trustText?: string | null
    logo?: string | null
    heroImage?: string | null
  } | null
  services?: {
    sectionTitle?: string | null
    sectionSubtitle?: string | null
    package1?: ServicePackage | null
    package2?: ServicePackage | null
  } | null
  examples?: {
    sectionTitle?: string | null
    sectionSubtitle?: string | null
  } | null
  contact?: {
    sectionTitle?: string | null
    sectionSubtitle?: string | null
    image?: string | null
  } | null
}

function asString(v: unknown): string | null {
  if (v == null) return null
  return typeof v === 'string' ? v : null
}

function asStringArray(v: unknown): string[] | null {
  if (!Array.isArray(v)) return null
  const out = v.filter((x): x is string => typeof x === 'string')
  return out.length ? out : null
}

function parsePackage(raw: unknown): ServicePackage | null {
  if (!raw || typeof raw !== 'object') return null
  const o = raw as Record<string, unknown>
  return {
    title: asString(o.title),
    price: asString(o.price),
    priceLabel: asString(o.priceLabel),
    description: asString(o.description),
    features: asStringArray(o.features),
    cta: asString(o.cta),
    image: asString(o.image),
  }
}

/**
 * Read content/pageData.json and return the full shape used by the homepage.
 */
export async function getPageData(): Promise<{ page: PageData }> {
  const filePath = path.join(process.cwd(), 'content', 'pageData.json')
  let raw: Record<string, unknown>
  try {
    const text = await fs.readFile(filePath, 'utf-8')
    raw = JSON.parse(text) as Record<string, unknown>
  } catch {
    return getDefaultPageQuery()
  }
  const hero = raw.hero as Record<string, unknown> | undefined
  const services = raw.services as Record<string, unknown> | undefined
  const examples = raw.examples as Record<string, unknown> | undefined
  const contact = raw.contact as Record<string, unknown> | undefined

  const page: PageData = {
    hero: hero
      ? {
          badge: asString(hero.badge),
          heading: asString(hero.heading),
          subheading: asString(hero.subheading),
          benefits: asStringArray(hero.benefits),
          ctaPrimary: asString(hero.ctaPrimary),
          ctaSecondary: asString(hero.ctaSecondary),
          trustText: asString(hero.trustText),
          logo: asString(hero.logo),
          heroImage: asString(hero.heroImage),
        }
      : null,
    services: services
      ? {
          sectionTitle: asString(services.sectionTitle),
          sectionSubtitle: asString(services.sectionSubtitle),
          package1: parsePackage(services.package1),
          package2: parsePackage(services.package2),
        }
      : null,
    examples: examples
      ? {
          sectionTitle: asString(examples.sectionTitle),
          sectionSubtitle: asString(examples.sectionSubtitle),
        }
      : null,
    contact: contact
      ? {
          sectionTitle: asString(contact.sectionTitle),
          sectionSubtitle: asString(contact.sectionSubtitle),
          image: asString(contact.image),
        }
      : null,
  }
  return { page }
}

function getDefaultPageQuery(): { page: PageData } {
  return {
    page: {
      hero: {
        badge: 'Webbdesign för småföretag i Stockholm',
        heading: 'Enkla hemsidor för småföretag – utan krångel',
        subheading:
          'Vi hjälper hantverkare och småföretag att få en professionell hemsida som syns, fungerar och är lätt att äga själv.',
        benefits: ['Enkla hemsidor utan krångel', 'Tydliga priser från 9 900 kr', 'Du äger din hemsida', 'Ingen bindningstid'],
        ctaPrimary: 'Se våra priser',
        ctaSecondary: 'Se exempel',
        trustText: 'Fast pris • Ingen bindning • Du äger hemsidan',
        logo: null,
        heroImage: null,
      },
      services: {
        sectionTitle: 'Våra tjänster',
        sectionSubtitle: 'Alla priser är från-priser och anpassas efter behov.',
        package1: {
          title: 'Enkel hemsida',
          price: '9 900 kr',
          priceLabel: 'från',
          description: 'En tydlig och professionell hemsida utan krångel.',
          features: ['Uppstartssamtal', 'Design anpassad efter ditt företag', '1-5 sidor', 'Mobilanpassad'],
          cta: 'Begär offert',
          image: null,
        },
        package2: {
          title: 'Webb-hjälp & underhåll',
          price: '490 kr',
          priceLabel: 'från / månad',
          description: 'För dig som vill ha en trygg kontakt.',
          features: ['Textuppdateringar', 'Teknisk support', 'Ingen bindning'],
          cta: 'Läs mer',
          image: null,
        },
      },
      examples: {
        sectionTitle: 'Våra mallar',
        sectionSubtitle: 'Vi har färdiga mallar för olika branscher.',
      },
      contact: {
        sectionTitle: 'Kontakta oss',
        sectionSubtitle: 'Skicka en förfrågan så återkommer vi inom 24 timmar.',
        image: null,
      },
    },
  }
}
