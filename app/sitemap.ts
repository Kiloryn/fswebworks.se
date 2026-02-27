import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fswebworks.se';

const publicRoutes = [
  '/',
  '/process',
  '/examples',
  '/vvs',
  '/elektriker',
  '/salong',
  '/restaurang',
  '/malare',
  '/konsult',
  '/clients/kund1',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '/' ? 'monthly' : 'yearly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
