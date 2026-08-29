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
  return createPageMetadata({ title: service.title, description: service.summary, path: `/services/${service.slug}`, image: null });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const canonicalSlug = serviceAliases[slug];
  if (canonicalSlug) permanentRedirect(`/services/${canonicalSlug}`);
  const service = getService(slug);
  if (!service) notFound();
  const displayUseCases = [
    ...service.useCases,
    {
      title: 'Operational ownership',
      problem: 'The team needs a clear owner, acceptance criteria and a support path after launch.',
      example: service.provisions.at(-1) ?? 'A named owner accepts the release and its operating controls.',
    },
  ].slice(0, 3);

  return <>
    <FullBleedHero
      desktopSrc="/images/rebrand/services-workbench-desktop.webp"
      mobileSrc="/images/rebrand/services-workbench-mobile.webp"
      eyebrow={`${service.number} · ${service.group}`}
      title={service.title}
      summary={service.summary}
      focalPosition="50% 52%"
    >
      <Link className={styles.back} href="/services"><ArrowLeft size={15} /> All services</Link>
    </FullBleedHero>

    <article className={styles.detail}>
      <section className={styles.explanation} aria-labelledby="service-explanation">
        <p>{service.promise}</p>
        <div><h2 id="service-explanation">What we do</h2><p>{service.explanation}</p></div>
      </section>

      <section className={styles.useCases} aria-labelledby="use-cases-title">
        <div className={styles.sectionHeading}><p>Use cases</p><h2 id="use-cases-title">Where this service helps.</h2></div>
        <div className={styles.cards}>{displayUseCases.map((useCase, index) => <article key={useCase.title}>
          <span>0{index + 1}</span>
          <h3>{useCase.title}</h3>
          <p>{useCase.problem}</p>
          <small>{useCase.example}</small>
        </article>)}</div>
      </section>
    </article>

    <section className={styles.cta} aria-labelledby="service-cta">
      <div><p>{service.shortTitle}</p><h2 id="service-cta">Talk through the work.</h2></div>
      <Link href="/contact">Start a conversation <ArrowRight size={17} /></Link>
    </section>
  </>;
}
