import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PrecisionLabel } from '@/components/PrecisionLabel';
import { serviceGroups, services } from '@/lib/services';
import { createPageMetadata } from '@/lib/seo';
import styles from './services.module.css';

export const metadata: Metadata = createPageMetadata({
  title: 'AI consulting and software services',
  description: 'Advisory, engineering, secure local AI and adoption services for organisations with difficult decisions, sensitive data or work that needs to run better.',
  path: '/services',
});

const groupCopy = {
  Advise: {
    number: '01',
    heading: 'Decide what deserves to change',
    copy: 'Clarify the opportunity, constraints and controls before committing people, data or budget.',
  },
  Build: {
    number: '02',
    heading: 'Create the working system',
    copy: 'Design and deliver software, automation and AI infrastructure around a defined operational need.',
  },
  Enable: {
    number: '03',
    heading: 'Make the change sustainable',
    copy: 'Give leaders and teams the operating model, skills and support needed to own what comes next.',
  },
} as const;

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero services-hero-corporate">
        <div className="services-hero-copy">
          <PrecisionLabel index="QG-SV" label="Services" detail="Advise / build / enable" />
          <h1>One clear view of<br /><em>what we offer.</em></h1>
          <p>Every service sits in one of three groups. Start with the kind of help you need, then open any offering for its scope, delivery stages, safeguards and example applications.</p>
          <div className="hero-actions">
            <Link className="button lime" href="/contact">Discuss your requirement <ArrowRight size={17} /></Link>
            <a className="text-link" href="#services-offered">See all services <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="service-atlas" aria-hidden="true">
          <div className="atlas-plane"><i /><i /><i /><i /><i /><i /><span>ADVISE</span><span>BUILD</span><span>ENABLE</span></div>
          <div className="atlas-readout"><span>Service directory</span><b>THREE GROUPS / ONE SYSTEM</b></div>
        </div>
      </section>

      <section id="services-offered" className={styles.directory} aria-labelledby="services-title">
        <div className={styles.directoryIntro}>
          <PrecisionLabel index="01" label="Services offered" />
          <h2 id="services-title">Choose the capability.<br /><em>See exactly what follows.</em></h2>
          <p>All offerings are shown once, grouped by their primary role in the work.</p>
        </div>

        <div className={styles.serviceGroups}>
          {serviceGroups.map((group) => {
            const detail = groupCopy[group];
            const groupedServices = services.filter((service) => service.group === group);
            return (
              <section className={styles.serviceGroup} key={group} aria-labelledby={`group-${group.toLowerCase()}`}>
                <header>
                  <span>{detail.number}</span>
                  <div>
                    <small>{group}</small>
                    <h3 id={`group-${group.toLowerCase()}`}>{detail.heading}</h3>
                    <p>{detail.copy}</p>
                  </div>
                  <b>{groupedServices.length} services</b>
                </header>

                <div className={styles.serviceList}>
                  {groupedServices.map((service) => (
                    <Link href={`/services/${service.slug}`} key={service.slug} aria-label={`Explore ${service.title}`}>
                      <span>{service.number}</span>
                      <div>
                        <div className={styles.serviceTitle}>
                          <h4>{service.title}</h4>
                          {service.slug === 'secure-ai-systems' && <small>Local / offline</small>}
                        </div>
                        <p>{service.summary}</p>
                      </div>
                      <ArrowUpRight size={17} />
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
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
