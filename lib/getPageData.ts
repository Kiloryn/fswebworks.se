import fs from 'fs/promises'
import path from 'path'

/**
 * Shape of the page data returned by the API (subset of content/pageData.json).
 */
export type PageData = {
  hero?: {
    badge?: string | null
    heading?: string | null
    subheading?: string | null
    ctaPrimary?: string | null
    ctaSecondary?: string | null
  } | null
  services?: {
    sectionTitle?: string | null
    sectionSubtitle?: string | null
  } | null
  contact?: {
    sectionTitle?: string | null
    sectionSubtitle?: string | null
  } | null
}

/**
 * Read content/pageData.json and return the shape used by the homepage.
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
  const contact = raw.contact as Record<string, unknown> | undefined
  const page: PageData = {
    hero: hero
      ? {
          badge: (hero.badge as string) ?? null,
          heading: (hero.heading as string) ?? null,
          subheading: (hero.subheading as string) ?? null,
          ctaPrimary: (hero.ctaPrimary as string) ?? null,
          ctaSecondary: (hero.ctaSecondary as string) ?? null,
        }
      : null,
    services: services
      ? {
          sectionTitle: (services.sectionTitle as string) ?? null,
          sectionSubtitle: (services.sectionSubtitle as string) ?? null,
        }
      : null,
    contact: contact
      ? {
          sectionTitle: (contact.sectionTitle as string) ?? null,
          sectionSubtitle: (contact.sectionSubtitle as string) ?? null,
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
        ctaPrimary: 'Se våra priser',
        ctaSecondary: 'Se exempel',
      },
      services: {
        sectionTitle: 'Våra tjänster',
        sectionSubtitle: 'Alla priser är från-priser och anpassas efter behov.',
      },
      contact: {
        sectionTitle: 'Kontakta oss',
        sectionSubtitle: 'Skicka en förfrågan så återkommer vi inom 24 timmar.',
      },
    },
  }
}
