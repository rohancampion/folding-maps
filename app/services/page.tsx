import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FullBleedHero } from '@/components/FullBleedHero';
import { services } from '@/lib/services';
import { createPageMetadata } from '@/lib/seo';
import styles from './services.module.css';

export const metadata: Metadata = createPageMetadata({
  title: 'AI consulting and engineering services',
  description: 'Senior advice, working AI software and practical adoption support for UK SMEs.',
  path: '/services',
});

export default function ServicesPage() {
  return <>
    <FullBleedHero
      desktopSrc="/images/rebrand/services-workbench-desktop.webp"
      mobileSrc="/images/rebrand/services-workbench-mobile.webp"
      eyebrow="Services"
      title="From a hard decision to working software."
      summary="Choose focused advice, hands-on engineering or support for the team that will run it."
      focalPosition="50% 53%"
    >
      <Link className={styles.heroAction} href="/contact">Discuss a project <ArrowRight size={17} /></Link>
    </FullBleedHero>

    <section className={styles.directory} aria-labelledby="services-title">
      <div className={styles.directoryHeading}>
        <p>Capabilities</p>
        <h2 id="services-title">Choose a starting point.</h2>
      </div>
      <div className={styles.serviceGrid}>
        {services.map((service) => <Link href={`/services/${service.slug}`} className={styles.service} key={service.slug}>
          <span className={styles.number}>{service.number}</span>
          <div><small>{service.group}</small><h3>{service.title}</h3><p>{service.summary}</p></div>
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>)}
      </div>
    </section>
  </>;
}
