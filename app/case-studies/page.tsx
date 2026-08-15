import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { HeroMechanism, MechanicalMark } from '@/components/MechanicalVisuals';
import { cases } from '@/lib/content';

export const metadata = { title: 'Case studies' };

export default function Cases() {
  return (
    <>
      <section className="page-hero report-hero report-hero-layout">
        <div className="report-hero-copy"><span className="kicker">Case studies</span>
          <h1>From operational friction<br/><em>to working systems.</em></h1>
          <p>Detailed engagement papers covering operating baselines, delivery work packages, technical design, governance, acceptance controls and the path to measurable value. Illustrative work and in-progress outcomes are labelled clearly.</p>
          <div className="section-proof"><div><strong>{cases.length}</strong><span>Detailed studies</span></div><div><strong>5</strong><span>Operating sectors</span></div><div><strong>9</strong><span>Evidence exhibits per case</span></div></div>
        </div>
        <HeroMechanism compact/>
      </section>
      <section className="case-list expanded-case-list">
        <div className="collection-heading"><span>Selected work</span><p>Each paper combines commercial context, operating detail and a technical blueprint.</p></div>
        {cases.map((study, index) => (
          <Link href={`/case-studies/${study.slug}`} className="case-card" key={study.slug}>
            <div className={`case-visual visual-${index % 3}`}><Image src={study.image} alt="" fill sizes="(max-width: 800px) 100vw, 50vw"/><span>{study.sector}</span><MechanicalMark label="Delivery system"/><div className="case-image-wash"/></div>
            <div className="case-copy"><div><span className="badge">{study.status}</span><span>{study.sector}</span></div><h2>{study.title}</h2><p>{study.summary}</p><div className="card-facts">{study.metrics.slice(0, 2).map((metric) => <span key={metric.label}><strong>{metric.value}</strong>{metric.label}</span>)}</div><b>Read the full case <ArrowUpRight size={16}/></b></div>
          </Link>
        ))}
      </section>
    </>
  );
}

