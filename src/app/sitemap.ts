import { MetadataRoute } from 'next';
import { getAllEstateSlugs } from '@/data/estates';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kodi-ya-kweli.vercel.app';
  const estateUrls = getAllEstateSlugs().map((slug) => ({
    url: `${baseUrl}/estates/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/estates`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/toolkit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/toolkit/deposit-demand`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/toolkit/fair-rent-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/toolkit/inspection-checklist`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    ...estateUrls,
  ];
}
