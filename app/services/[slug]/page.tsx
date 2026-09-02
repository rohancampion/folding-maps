import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FullBleedHero } from '@/components/FullBleedHero';
import { getService, serviceAliases, services } from '@/lib/services';
import { createPageMetadata } from '@/lib/seo';
import styles from './service-detail.module.css';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...services.map(({ slug }) => ({ slug })),
    ...Object.keys(serviceAliases).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(serviceAliases[slug] ?? slug);
  if (!service) return {};
  return createPageMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
    image: null,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const canonicalSlug = serviceAliases[slug];
  if (canonicalSlug) permanentRedirect(`/services/${canonicalSlug}`);

  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <FullBleedHero
        desktopSrc="/images/rebrand/services-workbench-desktop.webp"
        mobileSrc="/images/rebrand/services-workbench-mobile.webp"
        eyebrow={`${service.number} · ${service.group}`}
        title={service.title}
        summary={service.summary}
        focalPosition="50% 52%"
      >
        <Link className={styles.back} href="/services">
          <ArrowLeft size={15} aria-hidden="true" /> All services
        </Link>
      </FullBleedHero>

      <article className={styles.detail}>
        <section className={styles.outcome} aria-labelledby="service-result">
          <div>
            <p className={styles.eyebrow}>Service result</p>
            <h2 id="service-result">{service.outcome}</h2>
          </div>
        </section>

        <section className={styles.offerings} aria-labelledby="offerings-title">
          <div className={styles.sectionHeading}>
            <p>Services</p>
            <h2 id="offerings-title">Available services.</h2>
          </div>
          <div className={styles.offeringList}>
            {service.offerings.map((offering, index) => (
              <article key={offering.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{offering.title}</h3>
                  <p>{offering.detail}</p>
                  <div className={styles.subservices}>
                    {offering.subservices.map((subservice) => (
                      <div key={subservice.title}>
                        <h4>{subservice.title}</h4>
                        <p>{subservice.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.applications} aria-labelledby="applications-title">
          <div className={styles.sectionHeading}>
            <p>Applications</p>
            <h2 id="applications-title">Business applications.</h2>
          </div>
          <div className={styles.applicationGrid}>
            {service.applications.map((application, index) => (
              <article key={application.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{application.title}</h3>
                <p>{application.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.deliverables} aria-labelledby="deliverables-title">
          <div className={styles.sectionHeading}>
            <p>Deliverables</p>
            <h2 id="deliverables-title">Included deliverables.</h2>
          </div>
          <div className={styles.deliverableGrid}>
            {service.deliverables.map((deliverable, index) => (
              <article key={deliverable.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{deliverable.title}</h3>
                <p>{deliverable.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {service.technicalScope && (
          <section className={styles.technical} aria-labelledby="technical-title">
            <div className={styles.sectionHeading}>
              <p>Specifications</p>
              <h2 id="technical-title">Technical scope.</h2>
            </div>
            <dl className={styles.specificationList}>
              {service.technicalScope.map((item, index) => (
                <div key={item.term}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <dt>{item.term}</dt>
                  <dd>{item.detail}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section className={styles.faq} aria-labelledby="faq-title">
          <div className={styles.sectionHeading}>
            <p>FAQ</p>
            <h2 id="faq-title">Frequently asked questions.</h2>
          </div>
          <div className={styles.faqList}>
            {service.faqs.map((item, index) => (
              <details key={item.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item.question}
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>

      <section className={styles.cta} aria-labelledby="service-cta">
        <div>
          <p>{service.shortTitle}</p>
          <h2 id="service-cta">Discuss a defined piece of work.</h2>
        </div>
        <Link href="/contact">Start a conversation <ArrowRight size={17} aria-hidden="true" /></Link>
      </section>
    </>
  );
}
