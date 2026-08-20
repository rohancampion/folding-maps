import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Bot, BrainCircuit, Building2, Cable, ChartNoAxesCombined, ClipboardCheck, CloudCog, GraduationCap, Headphones, Landmark, LockKeyhole, MessagesSquare, Network, RefreshCw, Route, Sparkles, Workflow } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { serviceGroups, services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'AI consulting services',
  description: 'Explore Quiet Gears AI strategy, implementation, agents, automation, private AI, platform deployment and training services for UK organisations.',
  openGraph: { title: 'AI consulting services | Quiet Gears', description: 'From first decision to working system and confident adoption.' },
};

const icons = [Landmark, Route, ClipboardCheck, BrainCircuit, CloudCog, Network, MessagesSquare, Headphones, Workflow, LockKeyhole, RefreshCw, Sparkles, Bot, Cable, ChartNoAxesCombined, Building2, CloudCog, Headphones, GraduationCap];

const groupCopy = {
  Advise: ['Decide where to move', 'Create the evidence, direction and governance needed to invest with confidence.'],
  Build: ['Turn intent into infrastructure', 'Engineer the applications, integrations and controls that make AI useful in daily work.'],
  Enable: ['Make the change stick', 'Build the capability, operating model and local ownership required for sustained adoption.'],
} as const;

export default function ServicesPage() {
  return <>
    <section className="services-hero">
      <div className="services-hero-copy">
        <span className="kicker">Our services</span>
        <h1>From first decision<br/>to <em>working system.</em></h1>
        <p>Quiet Gears combines senior AI advice with hands-on engineering. We help ambitious organisations choose the right opportunity, build it responsibly and embed it into the way work gets done.</p>
        <div className="hero-actions"><Link className="button lime" href="/contact">Discuss your objective <ArrowRight size={17}/></Link><a className="text-link" href="#service-collection">Explore every service <ArrowUpRight size={16}/></a></div>
      </div>
      <div className="service-atlas" aria-hidden="true">
        <div className="atlas-plane"><i/><i/><i/><i/><i/><i/><span>ADVISE</span><span>BUILD</span><span>ENABLE</span></div>
        <div className="atlas-readout"><span>Service system</span><b>19 CONNECTED CAPABILITIES</b></div>
      </div>
    </section>

    <section className="services-intro">
      <span className="kicker">One connected practice</span>
      <h2>Strategy without delivery stalls.<br/><em>Delivery without adoption fades.</em></h2>
      <div><p>Our services are designed as one system. You can enter at the decision, build or enablement stage, then draw on the other capabilities as the work develops.</p><p>Every engagement starts with the operating constraint and ends with a clearer decision, a working release or a stronger internal capability.</p></div>
    </section>

    <div id="service-collection" className="service-collection">
      {serviceGroups.map((group) => {
        const [heading, copy] = groupCopy[group];
        return <section className="service-group" key={group}>
          <div className="service-group-heading"><div><span>{group}</span><h2>{heading}</h2></div><p>{copy}</p></div>
          <div className="service-catalogue">
            {services.filter((service) => service.group === group).map((service) => {
              const Icon = icons[Number(service.number) - 1] ?? Sparkles;
              return <Reveal className="service-catalogue-card" key={service.slug}>
                <Link href={`/services/${service.slug}`} aria-label={`Explore ${service.title}`}>
                  <div className="catalogue-card-top"><span>{service.number}</span><Icon/></div>
                  <div><small>{service.group}</small><h3>{service.title}</h3><p>{service.summary}</p></div>
                  <b>Explore the system <ArrowUpRight size={15}/></b>
                </Link>
              </Reveal>;
            })}
          </div>
        </section>;
      })}
    </div>

    <section className="services-principles">
      <div><span className="kicker">How we think</span><h2>Technical depth.<br/><em>Operational discipline.</em></h2></div>
      <div className="principle-grid">
        <article><span>01</span><h3>Work before tools</h3><p>We model the real task, decision and constraint before choosing a platform.</p></article>
        <article><span>02</span><h3>Controls in the design</h3><p>Identity, data boundaries, human authority and evidence are part of the architecture.</p></article>
        <article><span>03</span><h3>Proof before scale</h3><p>Representative work and explicit acceptance criteria determine whether a release expands.</p></article>
        <article><span>04</span><h3>Capability transferred</h3><p>Your team leaves with ownership, documentation and a route to keep improving.</p></article>
      </div>
    </section>

    <section className="cta-band"><span className="kicker">Choose the next move</span><h2>Bring us the constraint.<br/>We will map the system.</h2><p>A focused first conversation is enough to identify the most useful next decision.</p><Link className="button lime" href="/contact">Start a conversation <ArrowRight size={17}/></Link></section>
  </>;
}
