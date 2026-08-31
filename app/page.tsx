import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { ResponsiveBackground } from '@/components/ResponsiveBackground';
import { PrismaHero } from '@/components/ui/prisma-hero';
import { articles } from '@/lib/content';
import { absoluteUrl, createPageMetadata, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/seo';
import styles from './home.module.css';

export const metadata: Metadata = createPageMetadata({
  title: 'AI Consulting & Engineering',
  description: 'Senior advice and working AI software for UK SMEs.',
  path: '/',
});

const homeJsonLd = [
  { '@context': 'https://schema.org', '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME, url: SITE_URL, email: 'enquiries@quietgears.xyz', description: SITE_DESCRIPTION, image: absoluteUrl('/og.png'), address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' }, areaServed: { '@type': 'Country', name: 'United Kingdom' } },
  { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: SITE_NAME, url: SITE_URL, publisher: { '@id': `${SITE_URL}/#organization` } },
];

const serviceGroups = [
  { title: 'Advise', text: 'Choose the right use, investment and controls.', href: '/services/ai-strategy', image: '/images/rebrand/research-fern-desktop.webp', mobile: '/images/rebrand/research-fern-mobile.webp', position: '50% 45%' },
  { title: 'Build', text: 'Build proprietary AI systems and software for your team', href: '/services/ai-implementation', image: '/images/rebrand/services-workbench-desktop.webp', mobile: '/images/rebrand/services-workbench-mobile.webp', position: '50% 54%' },
  { title: 'Enable', text: 'Give teams the skills and standards to use AI well.', href: '/services/enterprise-ai', image: '/images/rebrand/studio-table-desktop.webp', mobile: '/images/rebrand/studio-table-mobile.webp', position: '50% 49%' },
];

const latestPublications = articles.slice(-2);

export default function Home() {
  return <>
    <JsonLd data={homeJsonLd} />
    <PrismaHero />

    <section className={styles.services} aria-labelledby="services-title">
      <div className={styles.sectionHeading}>
        <p>What we do</p>
        <h2 id="services-title">Advice. Software. Capability.</h2>
      </div>
      <div className={styles.serviceGrid}>
        {serviceGroups.map((service) => <Link href={service.href} className={styles.service} key={service.title}>
          <ResponsiveBackground desktopSrc={service.image} mobileSrc={service.mobile} alt="" objectPosition={service.position} />
          <span className={styles.mediaShade} />
          <div><h3>{service.title}</h3><p>{service.text}</p></div>
          <ArrowUpRight size={20} aria-hidden="true" />
        </Link>)}
      </div>
      <Link className={styles.inlineLink} href="/services">View all services <ArrowRight size={16} /></Link>
    </section>

    <section className={styles.work} aria-labelledby="publications-title">
      <div className={styles.sectionHeading}>
        <p>Latest publications</p>
        <h2 id="publications-title">Evidence for better technology decisions.</h2>
      </div>
      <div className={styles.workGrid}>
        {latestPublications.map((article, index) => <Link className={styles.workPanel} href={`/news/${article.slug}`} key={article.slug}>
          <Image src={article.image} alt="" fill sizes="(min-width: 900px) 50vw, 100vw" style={{ objectFit: 'cover' }} preload={index === 0} />
          <span className={styles.mediaShade} />
          <div><p>{article.tag} · {article.date}</p><h3>{article.title}</h3></div>
          <ArrowUpRight size={22} aria-hidden="true" />
        </Link>)}
      </div>
    </section>

    <section className={`${styles.cta} contact-band`} aria-labelledby="cta-title">
      <h2 id="cta-title">Make the work move.</h2>
      <Link className={styles.ctaLink} href="/contact">Start a conversation <ArrowRight size={17} /></Link>
    </section>
  </>;
}
