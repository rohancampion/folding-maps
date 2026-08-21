import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PrecisionLabel } from '@/components/PrecisionLabel';
import { services } from '@/lib/services';
import { createPageMetadata } from '@/lib/seo';
import styles from './services.module.css';

export const metadata: Metadata = createPageMetadata({
  title: 'AI consulting and software services',
  description: 'Advisory, engineering, secure local AI and adoption services for organisations with difficult decisions, sensitive data or work that needs to run better.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero services-hero-corporate">
        <div className="services-hero-copy">
          <PrecisionLabel index="QG-SV" label="Services" detail="Strategy / automation / implementation" />
          <h1>One clear view of<br /><em>what we offer.</em></h1>
          <p>Services are ordered by the needs we see most often. Open any offering for its scope, delivery stages, safeguards and example applications.</p>
          <div className="hero-actions">
            <Link className="button lime" href="/contact">Discuss your requirement <ArrowRight size={17} /></Link>
            <a className="text-link" href="#services-offered">See all services <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="service-atlas" aria-hidden="true">
          <div className="atlas-plane"><i /><i /><i /><i /><i /><i /><span>STRATEGY</span><span>AUTOMATION</span><span>DELIVERY</span></div>
          <div className="atlas-readout"><span>Service directory</span><b>TEN SERVICES / ONE LIST</b></div>
        </div>
      </section>

      <section id="services-offered" className={styles.directory} aria-labelledby="services-title">
        <div className={styles.directoryIntro}>
          <PrecisionLabel index="01" label="Services offered" />
          <h2 id="services-title">Choose the capability.<br /><em>See exactly what follows.</em></h2>
          <p>All offerings are shown once, ranked by likely demand and the most common starting points for clients.</p>
        </div>

        <div className={styles.serviceList}>
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug} aria-label={`Explore ${service.title}`}>
              <span>{service.number}</span>
              <div>
                <div className={styles.serviceTitle}>
                  <h3>{service.title}</h3>
                  <small>{service.group}</small>
                  {service.slug === 'secure-ai-systems' && <small>Local / offline</small>}
                </div>
                <p>{service.summary}</p>
              </div>
              <ArrowUpRight size={17} />
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <span className="kicker">Not sure which service fits?</span>
        <h2>Show us where<br />the work catches.</h2>
        <p>We will help identify the smallest useful starting point.</p>
        <Link className="button lime" href="/contact">Start a conversation <ArrowRight size={17} /></Link>
      </section>
    </>
  );
}
