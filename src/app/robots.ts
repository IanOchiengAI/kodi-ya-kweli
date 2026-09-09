import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/estates/', '/about/'],
        disallow: ['/toolkit/'], // Personal legal tools — not meant for indexing
      },
    ],
    sitemap: 'https://kodi-ya-kweli.vercel.app/sitemap.xml',
  };
}
