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
        <section className={styles.explanation} aria-labelledby="service-scope">
          <p>{service.promise}</p>
          <div>
            <span className={styles.eyebrow}>Service brief</span>
            <h2 id="service-scope">The business case for this service.</h2>
            <p>{service.explanation}</p>
          </div>
        </section>

        <section className={styles.applications} aria-labelledby="applications-title">
          <div className={styles.sectionHeading}>
            <p>Applications</p>
            <h2 id="applications-title">Common business conditions.</h2>
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

        <section className={styles.serviceContent} aria-labelledby="included-title">
          <div className={styles.sectionHeading}>
            <p>Service</p>
            <h2 id="included-title">Service scope.</h2>
          </div>
          <div className={styles.serviceSections}>
            {service.serviceSections.map((section, index) => (
              <article key={section.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{section.title}</h3>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>
            ))}
          </div>
          <div className={styles.expertise}>
            <p className={styles.eyebrow}>Supporting expertise</p>
            <div>
              {service.expertise.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className={styles.decisions} aria-labelledby="decisions-title">
          <div className={styles.sectionHeading}>
            <p>Decisions</p>
            <h2 id="decisions-title">Leadership decisions.</h2>
          </div>
          <div className={styles.decisionGrid}>
            {service.decisions.map((decision, index) => (
              <article key={decision.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{decision.title}</h3>
                <p>{decision.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.results} aria-labelledby="results-title">
          <div className={styles.sectionHeading}>
            <p>Results</p>
            <h2 id="results-title">Investment measures.</h2>
          </div>
          <div className={styles.resultGrid}>
            {service.results.map((result, index) => (
              <article key={result.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{result.title}</h3>
                <p>{result.detail}</p>
              </article>
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
