import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FullBleedHero } from '@/components/FullBleedHero';
import { PrecisionLabel } from '@/components/PrecisionLabel';
import { cases } from '@/lib/content';
import styles from './case-studies.module.css';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'AI consulting and engineering case studies',
  description: 'Business problems, practical interventions and clearly stated results from Quiet Gears engagements with UK SMEs.',
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
        title="Business problems and the test for success."
        summary="Each case sets out the business constraint, the management decision and the result used to judge the work."
        focalPosition="50% 48%"
      />
      <section className={styles.collection} aria-labelledby="selected-work-title">
        <div className={styles.collectionHeading}>
          <PrecisionLabel index="01–05" label="Case studies" />
          <h2 id="selected-work-title">Five current engagements.</h2>
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
              <span className={styles.caseAction}>Read the case study <ArrowUpRight size={16}/></span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
