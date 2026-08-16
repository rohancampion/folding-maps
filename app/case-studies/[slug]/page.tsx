import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { BlueprintExhibit, CodeExhibit, MetricStrip, ProcessExhibit, ResearchEvidence } from '@/components/ConsultingExhibits';
import { CaseAnalysisNarrative, EditorialConclusion, NarrativeOpening } from '@/components/EditorialNarrative';
import { InteractiveEvidence } from '@/components/InteractiveEvidence';
import { MechanicalMark } from '@/components/MechanicalVisuals';
import { caseEditorial } from '@/lib/caseEditorial';
import { caseDecisionRows, caseResearch, cases } from '@/lib/content';
import { caseDepth } from '@/lib/paperDepth';

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export default async function CaseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = cases.find((item) => item.slug === slug);
  if (!study) notFound();
  const editorial = caseEditorial[study.slug];
  const evidenceViews = [{
    label: 'Operating evidence',
    title: study.barTitle,
    summary: study.barSubtitle,
    source: study.barNote.replace(/^Source:\s*/i, '').replace(/\.$/, ''),
    points: study.bars.map((bar) => ({
      label: bar.label,
      value: bar.value,
      display: bar.display,
      detail: `This value is part of the stated ${study.status.toLowerCase()} operating model and should be tested against live evidence before it supports an investment claim.`,
    })),
  }];

  return (
    <>
      <article className="detail consulting-detail">
        <Link className="back" href="/case-studies"><ArrowLeft size={16}/> All case studies</Link>
        <div className="report-meta"><span className="badge">{study.status}</span><span>{study.sector}</span><span>Case study</span></div>
        <h1>{study.title}</h1>
        <p className="lede">{study.summary}</p>
        <div className="executive-brief"><span>Executive brief</span><p>{study.brief}</p></div>
        <MetricStrip metrics={study.metrics}/>
        <div className="detail-visual report-visual"><Image src={study.image} alt="" fill priority sizes="(max-width: 1200px) 100vw, 1030px"/><MechanicalMark label="System blueprint"/><div className="case-image-wash"/></div>

        <NarrativeOpening label={editorial.sceneLabel} title={editorial.openingTitle} paragraphs={editorial.openingParagraphs} centralQuestion={editorial.centralQuestion}/>

        <div className="report-body">
          <nav className="report-contents" aria-label="Case study contents">
            <span>In this case</span>
            {study.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{String(index + 1).padStart(2, '0')} {section.heading}</a>)}
          </nav>
          <div className="report-sections">
            {study.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading}>
                <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul className="finding-list">{section.bullets.map((bullet) => <li key={bullet}><Check size={16}/>{bullet}</li>)}</ul>}
              </section>
            ))}
          </div>
        </div>

        <NarrativeOpening label="The analytical turning point" title={editorial.turningTitle} paragraphs={editorial.turningParagraphs}/>
        <CaseAnalysisNarrative depth={caseDepth[study.slug]} decisions={caseDecisionRows[study.slug]}/>
        <ResearchEvidence title="External evidence sharpens the engagement hypothesis" findings={caseResearch[study.slug]}/>
        <BlueprintExhibit eyebrow="Delivery work packages" title="The engagement is organised around four evidence-producing work packages" steps={caseDepth[study.slug].workPackages}/>
        <InteractiveEvidence eyebrow="Interactive case evidence" views={evidenceViews}/>
        <ProcessExhibit number="2" title="Delivery follows a controlled progression from evidence to operation" steps={study.phases}/>
        <CodeExhibit title={study.code.title} eyebrow="System blueprint" lines={study.code.lines} nodes={study.code.nodes}/>
        <EditorialConclusion title={editorial.closingTitle} paragraphs={editorial.closingParagraphs}/>

        <section className="next-step-panel">
          <span>Recommended next steps</span>
          <h2>Move from design to evidence in a bounded release.</h2>
          <ol>{study.nextSteps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>

        {study.status === 'Illustrative' && <aside className="case-disclaimer">This illustrative case demonstrates an engagement pattern that Quiet Gears can deliver. It does not represent a completed client project or a measured client result. All targets, weights and expected benefits are clearly labelled as design assumptions.</aside>}
      </article>
      <section className="cta-band"><h2>Where is friction<br/>holding you back?</h2><Link className="button lime" href="/contact">Talk it through with us <ArrowRight size={17}/></Link></section>
    </>
  );
}
