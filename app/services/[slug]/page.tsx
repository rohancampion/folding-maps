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
            <span className={styles.eyebrow}>Service scope</span>
            <h2 id="service-scope">The operating problem and the result.</h2>
            <p>{service.explanation}</p>
          </div>
        </section>

        <section className={styles.fit} aria-labelledby="fit-title">
          <div className={styles.sectionHeading}>
            <p>Fit</p>
            <h2 id="fit-title">Suitable assignments and required input.</h2>
          </div>
          <div className={styles.fitGrid}>
            <article>
              <h3>Strong fit</h3>
              {service.idealFor.map((item) => <p key={item}>{item}</p>)}
            </article>
            <article>
              <h3>Poor fit</h3>
              <p>{service.poorFit}</p>
            </article>
            <article>
              <h3>Client input</h3>
              {service.clientInputs.map((item) => <p key={item}>{item}</p>)}
            </article>
          </div>
        </section>

        <section className={styles.useCases} aria-labelledby="use-cases-title">
          <div className={styles.sectionHeading}>
            <p>Use cases</p>
            <h2 id="use-cases-title">Problems this service addresses.</h2>
          </div>
          <div className={styles.cards}>
            {service.useCases.map((useCase, index) => (
              <article key={useCase.title}>
                <span>0{index + 1}</span>
                <h3>{useCase.title}</h3>
                <p>{useCase.problem}</p>
                <strong>Example release</strong>
                <small>{useCase.example}</small>
                <div className={styles.path} aria-label={`${useCase.title} delivery path`}>
                  {useCase.path.map((step) => <b key={step}>{step}</b>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.delivery} aria-labelledby="delivery-title">
          <div className={styles.sectionHeading}>
            <p>Delivery</p>
            <h2 id="delivery-title">Four stages to a working release.</h2>
          </div>
          <div className={styles.stages}>
            {service.stages.map((stage, index) => (
              <article key={stage.label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{stage.label}</h3>
                <p>{stage.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.scope} aria-labelledby="included-title">
          <div>
            <p className={styles.eyebrow}>Named outputs</p>
            <h2 id="included-title">Included in the engagement.</h2>
          </div>
          <div className={styles.outputList}>
            {service.provisions.map((provision, index) => (
              <div key={provision}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{provision}</p>
              </div>
            ))}
          </div>
          <aside>
            <p className={styles.eyebrow}>Supporting expertise</p>
            <div className={styles.technologyList}>
              {service.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </aside>
        </section>

        <section className={styles.controls} aria-labelledby="controls-title">
          <div className={styles.sectionHeading}>
            <p>Controls</p>
            <h2 id="controls-title">Conditions for a safe release.</h2>
          </div>
          <div className={styles.controlGrid}>
            {service.safeguards.map((safeguard, index) => (
              <article key={safeguard}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{safeguard}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.measurement} aria-labelledby="measurement-title">
          <div className={styles.sectionHeading}>
            <p>Measurement</p>
            <h2 id="measurement-title">Measures for the business decision.</h2>
          </div>
          <div className={styles.measureGrid}>
            {service.measures.map((measure, index) => (
              <div key={measure}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{measure}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.startingBrief} aria-labelledby="brief-title">
          <div>
            <p className={styles.eyebrow}>Scoping input</p>
            <h2 id="brief-title">Information needed to scope the work.</h2>
          </div>
          <div className={styles.briefGrid}>
            <p><strong>Current work</strong>Show the real input, decision, handoff and accepted output.</p>
            <p><strong>Working examples</strong>Bring examples, volumes, failure cases and the systems staff use now.</p>
            <p><strong>Constraints</strong>Name deadlines, data boundaries, approval rules and service commitments.</p>
            <p><strong>Decision</strong>Agree the result that would justify a pilot, release or stop decision.</p>
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
