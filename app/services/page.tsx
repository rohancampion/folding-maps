import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FullBleedHero } from '@/components/FullBleedHero';
import { services } from '@/lib/services';
import { createPageMetadata } from '@/lib/seo';
import styles from './services.module.css';

export const metadata: Metadata = createPageMetadata({
  title: 'AI consulting and engineering services',
  description: 'AI consulting and engineering services for UK SMEs, each tied to a defined business problem and measurable result.',
  path: '/services',
});

export default function ServicesPage() {
  return <>
    <FullBleedHero
      desktopSrc="/images/rebrand/services-workbench-desktop.webp"
      mobileSrc="/images/rebrand/services-workbench-mobile.webp"
      eyebrow="Services"
      title="AI services for measurable business results."
      summary="Each service addresses a defined business problem and states the result the client will measure."
      focalPosition="50% 53%"
    >
      <Link className={styles.heroAction} href="/contact">Discuss a project <ArrowRight size={17} /></Link>
    </FullBleedHero>

    <section className={styles.directory} aria-labelledby="services-title">
      <div className={styles.directoryHeading}>
        <p>Consulting and engineering</p>
        <h2 id="services-title">Services tied to a business decision.</h2>
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
