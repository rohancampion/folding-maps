import type { MetadataRoute } from 'next';
import { articles, cases } from '@/lib/content';
import { industries } from '@/lib/industries';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://quietgears.co.uk';
  const paths = [
    '',
    '/about',
    '/services',
    '/industries',
    '/case-studies',
    '/news',
    '/contact',
    '/privacy',
    '/terms',
    '/accessibility',
    ...industries.map((industry) => `/industries/${industry.slug}`),
    ...services.map((service) => `/services/${service.slug}`),
    ...cases.map((study) => `/case-studies/${study.slug}`),
    ...articles.map((article) => `/news/${article.slug}`),
  ];
  return paths.map((url) => ({ url: base + url, lastModified: new Date() }));
}
