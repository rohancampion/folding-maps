import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HeroMechanism } from '@/components/MechanicalVisuals';
import { industries, industryFamilies } from '@/lib/industries';

export const metadata = {
  title: 'Industries',
  description: 'Practical AI integration for ambitious SMEs across 26 industries.',
};

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero report-hero report-hero-layout industry-index-hero">
        <div className="report-hero-copy">
          <span className="kicker">Industry expertise</span>
          <h1>AI shaped around<br/><em>how your sector works.</em></h1>
          <p>Sector context changes what good AI looks like. We combine operating knowledge, careful controls and hands-on engineering to give established SMEs a credible route from opportunity to working advantage.</p>
          <div className="section-proof">
            <div><strong>{industries.length}</strong><span>Specialist industry perspectives</span></div>
            <div><strong>{industryFamilies.length}</strong><span>Connected sector families</span></div>
            <div><strong>1</strong><span>Measured first release at a time</span></div>
          </div>
        </div>
        <HeroMechanism compact/>
      </section>

      <section className="industry-index-intro">
        <span className="kicker">Built for the mid-market</span>
        <h2>Industry depth without<br/><em>big-programme drag.</em></h2>
        <div>
          <p>Every perspective starts with the operating decisions, data conditions and controls specific to the sector. It then narrows the opportunity to a release an SME can own, test and improve.</p>
          <p>The pages are not generic technology catalogues. Each one frames where AI earns its place, where human authority remains essential and how leaders can establish value before scaling.</p>
        </div>
      </section>

      <section className="industry-directory" aria-label="Industry directory">
        {industryFamilies.map((family) => {
          const familyIndustries = industries.filter((industry) => industry.family === family);
          return (
            <section className="industry-family" key={family}>
              <div className="industry-family-heading">
                <span>{String(industryFamilies.indexOf(family) + 1).padStart(2, '0')}</span>
                <h2>{family}</h2>
                <p>{familyIndustries.length} specialist perspectives</p>
              </div>
              <div className="industry-card-grid">
                {familyIndustries.map((industry) => (
                  <Link className={`industry-card motif-${industry.motif}`} href={`/industries/${industry.slug}`} key={industry.slug} style={{ '--card-accent': industry.accent } as React.CSSProperties}>
                    <span>{industry.eyebrow}</span>
                    <h3>{industry.name}</h3>
                    <p>{industry.lead}</p>
                    <b>Explore the perspective <ArrowUpRight size={15}/></b>
                    <i aria-hidden="true"/>
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
