import type { CSSProperties } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { IndustrySignal } from '@/components/IndustrySignal';
import { getIndustry, industries } from '@/lib/industries';

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} AI consulting`,
    description: industry.lead,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  const index = industries.findIndex((item) => item.slug === industry.slug);
  const next = industries[(index + 1) % industries.length];
  const style = { '--industry-accent': industry.accent } as CSSProperties;

  return (
    <>
      <article className={`industry-detail industry-layout-${index % 4} motif-${industry.motif}`} style={style}>
        <section className="industry-hero">
          <div className="industry-hero-copy">
            <Link className="back" href="/industries"><ArrowLeft size={16}/> All industries</Link>
            <span className="kicker">{industry.family} · {industry.eyebrow}</span>
            <h1>{industry.name}</h1>
            <h2>{industry.headline}</h2>
            <p>{industry.lead}</p>
          </div>
          <div className="industry-hero-plate" aria-hidden="true">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <i/><i/><i/>
            <b>SECTOR<br/>SYSTEM</b>
          </div>
        </section>

        <section className="industry-thesis">
          <span>Our sector thesis</span>
          <blockquote>{industry.thesis}</blockquote>
        </section>

        <section className="industry-context">
          <div className="industry-section-heading">
            <span>01 / Operating reality</span>
            <h2>{industry.contextTitle}</h2>
          </div>
          <div className="industry-context-copy">
            {industry.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="industry-opportunities">
          <div className="industry-section-heading light">
            <span>02 / Where AI earns its place</span>
            <h2>{industry.opportunitiesTitle}</h2>
            <p>Each starting point is narrow enough to govern and material enough to measure.</p>
          </div>
          <div className="opportunity-grid">
            {industry.opportunities.map((opportunity, opportunityIndex) => (
              <article key={opportunity.title}>
                <span>{String(opportunityIndex + 1).padStart(2, '0')}</span>
                <h3>{opportunity.title}</h3>
                <p>{opportunity.copy}</p>
                <b>{opportunity.measure}</b>
              </article>
            ))}
          </div>
        </section>

        <section className="industry-signal-section">
          <div className="industry-section-heading">
            <span>03 / Decision architecture</span>
            <h2>{industry.signalTitle}</h2>
            <p>{industry.signalCopy}</p>
          </div>
          <IndustrySignal name={industry.name} motif={industry.motif} signalLabels={industry.signalLabels}/>
        </section>

        <section className="industry-questions">
          <div className="industry-section-heading">
            <span>04 / Leadership agenda</span>
            <h2>{industry.questionsTitle}</h2>
          </div>
          <ol>
            {industry.questions.map((question, questionIndex) => (
              <li key={question}><span>{String(questionIndex + 1).padStart(2, '0')}</span><p>{question}</p></li>
            ))}
          </ol>
        </section>

        <section className="industry-controls">
          <div className="industry-section-heading light">
            <span>05 / Responsible delivery</span>
            <h2>{industry.controlTitle}</h2>
          </div>
          <div>
            {industry.controls.map((control) => (
              <article key={control.title}>
                <ShieldCheck/>
                <h3>{control.title}</h3>
                <p>{control.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="industry-roadmap">
          <div className="industry-section-heading">
            <span>06 / First-release path</span>
            <h2>{industry.roadmapTitle}</h2>
          </div>
          <div className="industry-roadmap-steps">
            {industry.roadmap.map((step, stepIndex) => (
              <article key={step.title}>
                <div><span>{String(stepIndex + 1).padStart(2, '0')}</span><Check size={16}/></div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="industry-close">
          <span>{industry.name}</span>
          <h2>{industry.closing}</h2>
          <Link className="button lime" href={`/contact?industry=${encodeURIComponent(industry.name)}`}>Discuss the opportunity <ArrowRight size={17}/></Link>
        </section>

        <Link className="industry-next" href={`/industries/${next.slug}`}>
          <span>Next industry</span>
          <strong>{next.name}</strong>
          <ArrowRight/>
        </Link>
      </article>
    </>
  );
}
