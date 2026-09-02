import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FullBleedHero } from '@/components/FullBleedHero';
import { PrecisionLabel } from '@/components/PrecisionLabel';
import { cases } from '@/lib/content';
import styles from './case-studies.module.css';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Selected Case Studies',
  description: "Solutions we've deployed across a wide array of industries.",
  path: '/case-studies',
});

const caseImagery: Record<string, string> = {
  chapelhall: '/images/cases/chapelhall/hero.png',
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
        eyebrow="Work"
        title="Selected Case Studies"
        summary="Solutions we've deployed across a wide array of industries"
        focalPosition="50% 48%"
      />
      <section className={styles.collection} aria-label="Selected case studies">
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
              <PrecisionLabel index={study.status === 'In progress' ? 'ACTIVE' : study.status === 'Published' ? 'CLIENT' : 'ANONYMISED'} label={study.sector} />
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
