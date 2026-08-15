import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Bot, Code2, Compass, Globe2, Layers3, Workflow } from 'lucide-react';
import { HeroMechanism, SystemStatusStrip } from '@/components/MechanicalVisuals';
import { Marquee, Reveal } from '@/components/Reveal';

const services = [
  { n: '01', icon: Compass, title: 'AI strategy', text: 'A practical roadmap from first opportunity to an AI-enabled operation, grounded in your systems, people and commercial priorities.' },
  { n: '02', icon: Workflow, title: 'AI integration', text: 'Connect capable models to the tools your teams already use, removing handoffs and getting information where it needs to be.' },
  { n: '03', icon: Bot, title: 'Agents and automation', text: 'Purpose-built agents that handle repetitive, multi-step work reliably, with people kept in control where it matters.' },
  { n: '04', icon: Code2, title: 'Applications', text: 'Specialist internal software, portals and operational tools designed around the way your business really works.' },
  { n: '05', icon: Globe2, title: 'Websites', text: 'Fast, distinctive and commercially focused websites built to turn expertise into a stronger pipeline.' },
  { n: '06', icon: Layers3, title: 'Training and support', text: 'Plain-English training and ongoing improvement so your team can use new systems with confidence.' },
];

const process = [
  ['01', 'Find the friction', 'We learn where time, margin or momentum is being lost.'],
  ['02', 'Design the system', 'We shape the smallest, strongest solution for the opportunity.'],
  ['03', 'Build, test, improve', 'We ship quickly, validate with real users and keep refining.'],
  ['04', 'Scale what works', 'We embed the system, train your team and expand the gains.'],
];

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span/> London-based · Servicing Nationwide</div>
        <h1>Put AI to work.<br/><em>Keep moving.</em></h1>
        <p>We design and deploy AI systems and specialist software that help ambitious SMEs move faster, reduce overhead and scale without the drag.</p>
        <div className="hero-actions"><Link className="button lime" href="/contact">Start a conversation <ArrowRight size={17}/></Link><Link className="text-link" href="#services">Explore our services <ArrowUpRight size={16}/></Link></div>
        <SystemStatusStrip/>
      </div>
      <div className="gear-scene"><HeroMechanism/></div>
      <div className="scroll-note">Scroll to discover <span>↓</span></div>
    </section>
    <Marquee/>
    <section className="statement"><Reveal><span className="kicker">The opportunity</span><h2>AI is changing how business gets done.<br/><strong>The advantage belongs to companies<br/>that act with purpose, now.</strong></h2><div className="statement-grid"><p>Useful AI is not a chatbot bolted onto a broken process. It is a well-designed system focused on a real constraint, connected to the right data and built for the people who use it.</p><p>Quiet Gears brings senior thinking and hands-on delivery together. No theatre. No sprawling transformation programme. Just high-quality systems that earn their place.</p></div></Reveal></section>
    <section className="services" id="services"><div className="section-heading"><div><span className="kicker">What we do</span><h2>Useful technology.<br/><em>Quietly delivered.</em></h2></div><p>From first question to working system, we make advanced technology practical for established SMEs.</p></div><div className="service-grid">{services.map(({ n, icon: Icon, title, text }) => <Reveal className="service" key={title}><div className="service-top"><span>{n}</span><Icon/></div><h3>{title}</h3><p>{text}</p><Link href="/contact">Discuss a project <ArrowUpRight size={15}/></Link></Reveal>)}</div></section>
    <section className="process"><div className="process-copy"><span className="kicker">How we work</span><h2>Specialist focus.<br/><em>Serious momentum.</em></h2><p>We keep the distance between decision and delivery short. You work directly with the people thinking, designing and building.</p><Link className="button outline" href="/about">See the full process <ArrowRight size={17}/></Link></div><div className="process-steps">{process.map(([number, title, detail]) => <div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div></div>)}</div></section>
    <section className="cta-band"><span className="kicker">The next move</span><h2>Your competitors are<br/>already exploring AI.</h2><p>Let&apos;s turn exploration into a working advantage.</p><Link className="button lime" href="/contact">Book a free consultation <ArrowRight size={17}/></Link></section>
  </>;
}

