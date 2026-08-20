import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, Bot, BrainCircuit, Building2, Cable,
  ChartNoAxesCombined, ClipboardCheck, CloudCog, GraduationCap,
  Headphones, Landmark, LockKeyhole, MessagesSquare, Network,
  RefreshCw, Route, Sparkles, Workflow,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { getService, serviceGroups, services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'AI consulting and implementation services',
  description: 'AI strategy, governance, implementation, automation, enterprise platform deployment and training for UK organisations.',
  openGraph: {
    title: 'AI consulting and implementation services | Quiet Gears',
    description: 'Senior advice, production engineering and adoption support delivered as one accountable programme.',
  },
};

const icons = [Landmark, Route, ClipboardCheck, BrainCircuit, CloudCog, Network, MessagesSquare, Headphones, Workflow, LockKeyhole, RefreshCw, Sparkles, Bot, Cable, ChartNoAxesCombined, Building2, CloudCog, Headphones, GraduationCap];

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
        <span className="kicker">AI consulting and implementation</span>
        <h1>AI services built around <em>business outcomes.</em></h1>
        <p>Quiet Gears brings strategy, engineering and adoption into one delivery model. We help organisations make sound investment decisions, implement production systems and build the capability to operate them responsibly.</p>
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

    <section className="services-model" aria-labelledby="services-model-title">
      <div className="services-model-heading">
        <span className="kicker">How we engage</span>
        <h2 id="services-model-title">A structured route from decision to <em>operational value.</em></h2>
        <p>Engagements can begin at any stage. Each stage has a defined purpose, practical outputs and clear ownership.</p>
      </div>
      <div className="services-model-grid">
        {serviceGroups.map((group) => {
          const detail = groupCopy[group];
          return <article key={group}>
            <div><span>{detail.number}</span><b>{group}</b></div>
            <h3>{detail.heading}</h3>
            <p>{detail.copy}</p>
            <small>Typical outcome</small>
            <strong>{detail.outcome}</strong>
          </article>;
        })}
      </div>
    </section>

    <section className="services-decision-routes">
      <div className="services-decision-heading">
        <span className="kicker">Start with the requirement</span>
        <h2>Choose the route that reflects your current priority.</h2>
        <p>These common entry points connect a business requirement to the services most likely to support it.</p>
      </div>
      <div className="decision-route-list">
        {decisionRoutes.map((route, index) => <article key={route.label}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div><h3>{route.label}</h3><p>{route.description}</p></div>
          <div className="decision-route-links">
            {route.services.map((slug) => {
              const service = getService(slug);
              return service ? <Link key={slug} href={`/services/${slug}`}>{service.shortTitle}<ArrowUpRight size={14}/></Link> : null;
            })}
          </div>
        </article>)}
      </div>
    </section>

    <div id="service-catalogue" className="service-collection">
      <div className="service-collection-intro">
        <span className="kicker">Service catalogue</span>
        <h2>Specialist support across the full AI lifecycle.</h2>
        <p>Select a service to review its scope, delivery stages, technical provisions, safeguards and representative use cases.</p>
      </div>
      {serviceGroups.map((group) => {
        const detail = groupCopy[group];
        return <section className="service-group" key={group}>
          <div className="service-group-heading">
            <div><span>{detail.number} / {group}</span><h2>{detail.heading}</h2></div>
            <p>{detail.copy}</p>
          </div>
          <div className="service-catalogue">
            {services.filter((service) => service.group === group).map((service) => {
              const Icon = icons[Number(service.number) - 1] ?? Sparkles;
              return <Reveal className="service-catalogue-card" key={service.slug}>
                <Link href={`/services/${service.slug}`} aria-label={`Explore ${service.title}`}>
                  <div className="catalogue-card-top"><span>{service.number}</span><Icon/></div>
                  <div><small>{service.group}</small><h3>{service.title}</h3><p>{service.summary}</p></div>
                  <b>View service details <ArrowUpRight size={15}/></b>
                </Link>
              </Reveal>;
            })}
          </div>
        </section>;
      })}
    </div>

    <section className="services-principles">
      <div><span className="kicker">Delivery standards</span><h2>Disciplined delivery from <em>first assessment to handover.</em></h2></div>
      <div className="principle-grid">
        <article><span>01</span><h3>Business case first</h3><p>Every engagement begins with the workflow, decision or service outcome that needs to improve.</p></article>
        <article><span>02</span><h3>Controls by design</h3><p>Identity, data boundaries, human authority and evidence requirements are defined in the solution architecture.</p></article>
        <article><span>03</span><h3>Evidence before scale</h3><p>Representative work and agreed acceptance criteria determine whether a release should expand.</p></article>
        <article><span>04</span><h3>Operational ownership</h3><p>Teams receive the documentation, training and support model required to manage ongoing performance.</p></article>
      </div>
    </section>

    <section className="cta-band"><span className="kicker">Next step</span><h2>Define the requirement.<br/>We will structure the response.</h2><p>Use an initial discussion to clarify objectives, constraints and the most appropriate starting point.</p><Link className="button lime" href="/contact">Start a conversation <ArrowRight size={17}/></Link></section>
  </>;
}
