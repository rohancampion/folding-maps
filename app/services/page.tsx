import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PrecisionLabel } from '@/components/PrecisionLabel';
import { getService, serviceGroups, services } from '@/lib/services';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'AI consulting and implementation services',
  description: 'AI strategy, governance, implementation, automation, enterprise platform deployment and training for UK organisations.',
  openGraph: {
    title: 'AI consulting and implementation services | Quiet Gears',
    description: 'Senior advice, production engineering and adoption support delivered as one accountable programme.',
  },
};

const groupCopy = {
  Advise: {
    number: '01',
    heading: 'Strategy, readiness and governance',
    copy: 'Establish the business case, priorities, controls and delivery roadmap before making significant commitments.',
    outcome: 'Clear decisions, accountable ownership and an investable plan.',
  },
  Build: {
    number: '02',
    heading: 'Implementation and engineering',
    copy: 'Design, integrate and launch dependable AI systems around defined workflows, data boundaries and user responsibilities.',
    outcome: 'Production capability with measurable operating performance.',
  },
  Enable: {
    number: '03',
    heading: 'Adoption and operational capability',
    copy: 'Equip leaders and teams to operate, govern and improve AI services after the first release.',
    outcome: 'Sustained adoption, internal ownership and controlled scale.',
  },
} as const;

const decisionRoutes = [
  {
    label: 'We need a clear direction',
    description: 'Assess readiness, prioritise opportunities and establish an accountable roadmap.',
    services: ['ai-readiness', 'ai-strategy', 'fractional-ai-officer'],
  },
  {
    label: 'We need to improve a workflow',
    description: 'Redesign a high-friction process and implement a controlled automation or agent.',
    services: ['workflow-automation', 'agentic-ai', 'ai-implementation'],
  },
  {
    label: 'We need an approved AI platform',
    description: 'Configure enterprise tools around identity, knowledge, policy and representative work.',
    services: ['claude-implementation', 'chatgpt-implementation', 'perplexity-implementation'],
  },
  {
    label: 'We need adoption at scale',
    description: 'Create common standards, develop role capability and transfer operational ownership.',
    services: ['enterprise-ai', 'chatgpt-training-for-teams', 'fractional-ai-officer'],
  },
] as const;

export default function ServicesPage() {
  return <>
    <section className="services-hero services-hero-corporate">
      <div className="services-hero-copy">
        <PrecisionLabel index="QG–SV" label="AI consulting and implementation" detail="Strategy / engineering / adoption" />
        <h1>AI services built around <em>business outcomes.</em></h1>
        <p>Quiet Gears brings strategy, engineering and adoption into one accountable delivery model. We help leadership teams make sound investment decisions, implement production systems and build the capability to operate them responsibly.</p>
        <div className="hero-actions">
          <Link className="button lime" href="/contact">Discuss your requirements <ArrowRight size={17}/></Link>
          <a className="text-link" href="#service-catalogue">View the service catalogue <ArrowUpRight size={16}/></a>
        </div>
      </div>
      <div className="service-atlas" aria-hidden="true">
        <div className="atlas-plane"><i/><i/><i/><i/><i/><i/><span>STRATEGY</span><span>DELIVERY</span><span>ADOPTION</span></div>
        <div className="atlas-readout"><span>Operating model</span><b>ONE ACCOUNTABLE DELIVERY PARTNER</b></div>
      </div>
    </section>

    <section className={styles.model} aria-labelledby="services-model-title">
      <div className={styles.modelHeading}>
        <PrecisionLabel index="01" label="How we engage" />
        <h2 id="services-model-title">A structured route from decision to <em>operational value.</em></h2>
        <p>Engagements can begin at any stage. Each stage has a defined purpose, practical outputs and clear ownership.</p>
      </div>
      <div className={styles.modelChapters}>
        {serviceGroups.map((group) => {
          const detail = groupCopy[group];
          return <article key={group}>
            <PrecisionLabel index={detail.number} label={group} />
            <h3>{detail.heading}</h3>
            <p>{detail.copy}</p>
            <blockquote><span>Typical outcome</span>{detail.outcome}</blockquote>
          </article>;
        })}
      </div>
    </section>

    <section className={styles.routes}>
      <div className={styles.routesHeading}>
        <PrecisionLabel index="02" label="Decision routes" />
        <h2>Choose the route that reflects your current priority.</h2>
        <p>Begin with the operating requirement. The appropriate service mix follows from the decision, workflow or capability that needs to improve.</p>
      </div>
      <div className={styles.compass}>
        {decisionRoutes.map((route, index) => <article key={route.label}>
          <PrecisionLabel index={String(index + 1).padStart(2, '0')} label="Requirement" />
          <h3>{route.label}</h3>
          <p>{route.description}</p>
          <div className={styles.routeLinks}>
            {route.services.map((slug) => {
              const service = getService(slug);
              return service ? <Link key={slug} href={`/services/${slug}`}>{service.shortTitle}<ArrowUpRight size={14}/></Link> : null;
            })}
          </div>
        </article>)}
      </div>
    </section>

    <section id="service-catalogue" className={styles.catalogue}>
      <div className={styles.catalogueIntro}>
        <PrecisionLabel index="03" label="Capabilities" />
        <h2>Specialist support across the full AI lifecycle.</h2>
        <p>Each capability page defines scope, delivery stages, technical provisions, safeguards and representative use cases.</p>
      </div>
      {serviceGroups.map((group) => {
        const detail = groupCopy[group];
        return <section className={styles.capabilityField} key={group}>
          <div className={styles.capabilityHeading}>
            <PrecisionLabel index={detail.number} label={group} />
            <h2>{detail.heading}</h2>
            <p>{detail.copy}</p>
          </div>
          <div className={styles.capabilityCloud} role="navigation" aria-label={`${group} services`}>
            {services.filter((service) => service.group === group).map((service) => (
                <Link href={`/services/${service.slug}`} key={service.slug} aria-label={`Explore ${service.title}`}>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <ArrowUpRight size={16}/>
                </Link>
            ))}
          </div>
        </section>;
      })}
    </section>

    <section className={styles.standards}>
      <PrecisionLabel index="QG–04" label="Delivery standard" detail="Applied to every engagement" />
      <h2>Disciplined delivery from <em>first assessment to handover.</em></h2>
      <div className={styles.standardStatement}>
        <p><strong>Business case first.</strong> Begin with the workflow, decision or service outcome that needs to improve.</p>
        <p><strong>Controls by design.</strong> Define identity, data boundaries, human authority and evidence in the architecture.</p>
        <p><strong>Evidence before scale.</strong> Use representative work and agreed acceptance criteria to determine expansion.</p>
        <p><strong>Operational ownership.</strong> Transfer the documentation, training and support model required for ongoing performance.</p>
      </div>
    </section>

    <section className="cta-band"><span className="kicker">Next step</span><h2>Define the requirement.<br/>We will structure the response.</h2><p>Use an initial discussion to clarify objectives, constraints and the most appropriate starting point.</p><Link className="button lime" href="/contact">Start a conversation <ArrowRight size={17}/></Link></section>
  </>;
}
