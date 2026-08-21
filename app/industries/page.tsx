import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HeroMechanism } from '@/components/MechanicalVisuals';
import { PrecisionLabel } from '@/components/PrecisionLabel';
import { industries, industryFamilies } from '@/lib/industries';
import styles from './industries-index.module.css';

export const metadata = {
  title: 'Industries',
  description: 'Practical AI integration for ambitious SMEs across 26 industries.',
};

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero report-hero report-hero-layout industry-index-hero">
        <div className="report-hero-copy">
          <PrecisionLabel index="QG–IN" label="Industry expertise" detail="Operating context before technology" />
          <h1>AI shaped around<br/><em>how your sector works.</em></h1>
          <p>Sector context changes what good AI looks like. We combine operating knowledge, careful controls and hands-on engineering to give established SMEs a credible route from opportunity to measurable performance.</p>
        </div>
        <HeroMechanism compact/>
      </section>

      <section className={styles.intro}>
        <PrecisionLabel index="01" label="Built for the mid-market" />
        <h2>Industry depth without<br/><em>big-programme drag.</em></h2>
        <div className={styles.introCopy}>
          <p>Every perspective starts with the operating decisions, data conditions and controls specific to the sector. It then narrows the opportunity to a release an SME can own, test and improve.</p>
          <p>The pages are not generic technology catalogues. Each one frames where AI earns its place, where human authority remains essential and how leaders can establish value before scaling.</p>
        </div>
      </section>

      <section className={styles.directory} aria-label="Industry directory">
        {industryFamilies.map((family) => {
          const familyIndustries = industries.filter((industry) => industry.family === family);
          return (
            <section className={styles.family} key={family}>
              <div className={styles.familyHeading}>
                <PrecisionLabel
                  index={String(industryFamilies.indexOf(family) + 1).padStart(2, '0')}
                  label="Sector family"
                  detail={`${familyIndustries.length} specialist perspectives`}
                />
                <h2>{family}</h2>
              </div>
              <div className={styles.industryField}>
                {familyIndustries.map((industry, index) => (
                  <Link href={`/industries/${industry.slug}`} key={industry.slug}>
                    <span>{String(index + 1).padStart(2, '0')} / {industry.eyebrow}</span>
                    <h3>{industry.name}</h3>
                    <p>{industry.lead}</p>
                    <ArrowUpRight aria-hidden="true" size={17}/>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </section>

      <section className="cta-band">
        <span className="kicker">Your operating context</span>
        <h2>See a sector challenge<br/>worth solving?</h2>
        <p>We will help you turn it into a focused, evidence-led first release.</p>
        <Link className="button lime" href="/contact">Start a conversation <ArrowRight size={17}/></Link>
      </section>
    </>
  );
}
