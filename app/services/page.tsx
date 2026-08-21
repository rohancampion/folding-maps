import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { PrecisionLabel } from '@/components/PrecisionLabel';
import { getService, serviceGroups, services } from '@/lib/services';
import { createPageMetadata } from '@/lib/seo';
import styles from './services.module.css';

export const metadata: Metadata = createPageMetadata({
  title: 'AI consulting and software services',
  description: 'Focused advisory and engineering for organisations with a costly workflow, a difficult software decision or an AI system that needs to work in practice.',
  path: '/services',
});

const groupCopy = {
  Advise: {
    number: '01',
    heading: 'Choose the right move',
    copy: 'Turn a broad ambition or stubborn constraint into a decision leaders can act on.',
  },
  Build: {
    number: '02',
    heading: 'Change the working system',
    copy: 'Create or repair the software, connections and controls around a defined piece of work.',
  },
  Enable: {
    number: '03',
    heading: 'Make it part of the operation',
    copy: 'Give teams the confidence, working rules and support needed to own what has changed.',
  },
} as const;

const decisionRoutes = [
  {
    label: 'A decision is stuck',
    description: 'There are many plausible AI opportunities, but no defensible order of action.',
    services: ['ai-readiness', 'ai-strategy', 'fractional-ai-officer'],
  },
  {
    label: 'A workflow is dragging',
    description: 'People are compensating for slow handoffs, repeated entry or fragmented information.',
    services: ['workflow-automation', 'agentic-ai', 'ai-implementation'],
  },
  {
    label: 'A tool needs to earn its place',
    description: 'An AI platform has been chosen, but roles, knowledge, access and proof of value are unresolved.',
    services: ['claude-implementation', 'chatgpt-implementation', 'perplexity-implementation'],
  },
  {
    label: 'A pilot needs an owner',
    description: 'Something promising exists, but it is not yet supported, measured or embedded in normal work.',
    services: ['enterprise-ai', 'chatgpt-training-for-teams', 'fractional-ai-officer'],
  },
] as const;

const workingRules = [
  ['Start with the constraint', 'Name the work that is slow, fragile or hard to govern before choosing technology.'],
  ['Release something inspectable', 'Use real tasks and agreed checks to learn whether the intervention holds up.'],
  ['Name the future owner', 'Build the documentation, controls and confidence needed to run the system day to day.'],
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero services-hero-corporate">
        <div className="services-hero-copy">
          <PrecisionLabel index="QG–SV" label="Services" detail="Decide / make / embed" />
          <h1>Start with the work<br /><em>that is not working.</em></h1>
          <p>Bring us a blocked decision, an awkward workflow or a system nobody quite owns. We will help isolate the real constraint and take the smallest credible route from diagnosis to a working change.</p>
          <div className="hero-actions">
            <Link className="button lime" href="/contact">Tell us what is stuck <ArrowRight size={17} /></Link>
            <a className="text-link" href="#service-catalogue">Browse capabilities <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="service-atlas" aria-hidden="true">
          <div className="atlas-plane"><i /><i /><i /><i /><i /><i /><span>DECIDE</span><span>MAKE</span><span>EMBED</span></div>
          <div className="atlas-readout"><span>Working principle</span><b>ONE PROBLEM IN CLEAR VIEW</b></div>
        </div>
      </section>

      <section className={styles.routes} aria-labelledby="routes-title">
        <div className={styles.sectionHeading}>
          <PrecisionLabel index="01" label="Where to begin" />
          <h2 id="routes-title">Find the sentence that sounds familiar.</h2>
          <p>You do not need to diagnose the solution before speaking to us. A recognisable operating problem is enough to start.</p>
        </div>
        <div className={styles.routeList}>
          {decisionRoutes.map((route, index) => (
            <article key={route.label}>
              <span>0{index + 1}</span>
              <h3>{route.label}</h3>
              <p>{route.description}</p>
              <div className={styles.routeLinks}>
                {route.services.map((slug) => {
                  const service = getService(slug);
                  return service ? <Link key={slug} href={`/services/${slug}`}>{service.shortTitle}<ArrowUpRight size={14} /></Link> : null;
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="service-catalogue" className={styles.catalogue} aria-labelledby="catalogue-title">
        <div className={styles.sectionHeading}>
          <PrecisionLabel index="02" label="Capabilities" />
          <h2 id="catalogue-title">Explore only the depth you need.</h2>
          <p>The catalogue is grouped by the job to be done. Open a group to compare its specialist services.</p>
        </div>
        <div className={styles.capabilityGroups}>
          {serviceGroups.map((group, index) => {
            const detail = groupCopy[group];
            const groupedServices = services.filter((service) => service.group === group);
            return (
              <details key={group} open={index === 0}>
                <summary>
                  <span>{detail.number}</span>
                  <div>
                    <small>{group}</small>
                    <h3>{detail.heading}</h3>
                    <p>{detail.copy}</p>
                  </div>
                  <b>{groupedServices.length} services</b>
                  <ChevronDown aria-hidden="true" size={22} />
                </summary>
                <div className={styles.serviceList}>
                  {groupedServices.map((service) => (
                    <Link href={`/services/${service.slug}`} key={service.slug} aria-label={`Explore ${service.title}`}>
                      <span>{service.number}</span>
                      <div>
                        <h4>{service.title}</h4>
                        <p>{service.summary}</p>
                      </div>
                      <ArrowUpRight size={16} />
                    </Link>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <section className={styles.workingStandard}>
        <div className={styles.sectionHeading}>
          <PrecisionLabel index="03" label="Working standard" />
          <h2>Simple rules for complicated work.</h2>
        </div>
        <div className={styles.ruleList}>
          {workingRules.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <span className="kicker">Next step</span>
        <h2>Show us where<br />the work catches.</h2>
        <p>An initial conversation is enough to identify the useful next question.</p>
        <Link className="button lime" href="/contact">Start a conversation <ArrowRight size={17} /></Link>
      </section>
    </>
  );
}
