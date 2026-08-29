import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FullBleedHero } from '@/components/FullBleedHero';
import { PrecisionLabel } from '@/components/PrecisionLabel';
import { cases } from '@/lib/content';
import styles from './case-studies.module.css';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'AI implementation case studies',
  description: 'Decision papers showing how Quiet Gears connects operational problems, control models and delivery architecture for UK SMEs.',
  path: '/case-studies',
});

const caseImagery: Record<string, string> = {
  'yacht-operations': '/images/cases/yacht-operations.webp',
  'cold-chain': '/images/cases/cold-chain.webp',
  'property-pipeline': '/images/cases/property-pipeline.webp',
  'professional-services-intake': '/images/cases/professional-services-intake.webp',
  'field-service-planning': '/images/cases/field-service-planning.webp',
};

export default function Cases() {
  return (
    <>
      <FullBleedHero
        desktopSrc="/images/rebrand/hero-doorway-desktop.webp"
        mobileSrc="/images/rebrand/hero-doorway-mobile.webp"
        eyebrow="Selected work"
        title="Working systems, documented clearly."
        summary="Decision papers from operational problem to controlled delivery."
        focalPosition="50% 48%"
      />
      <section className={styles.collection} aria-labelledby="selected-work-title">
        <div className={styles.collectionHeading}>
          <PrecisionLabel index="01–05" label="Case studies" />
          <h2 id="selected-work-title">Read the work.</h2>
        </div>
        {cases.map((study, index) => (
          <Link href={`/case-studies/${study.slug}`} className={styles.caseStudy} key={study.slug}>
            <div className={styles.caseVisual}>
              <Image
                src={caseImagery[study.slug] ?? study.image}
                alt=""
                fill
                sizes="(max-width: 800px) 100vw, 58vw"
                className={styles.caseImage}
              />
              <span className={styles.caseIndex}>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className={styles.caseCopy}>
              <PrecisionLabel index={study.status === 'In progress' ? 'ACTIVE' : 'ANONYMISED'} label={study.sector} />
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
              <span className={styles.caseAction}>Read the decision paper <ArrowUpRight size={16}/></span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
