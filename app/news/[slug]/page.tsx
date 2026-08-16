import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { CodeExhibit, MetricStrip, ResearchEvidence } from '@/components/ConsultingExhibits';
import { AnalystLens, EditorialConclusion, NarrativeOpening } from '@/components/EditorialNarrative';
import { InteractiveEvidence } from '@/components/InteractiveEvidence';
import { MechanicalMark } from '@/components/MechanicalVisuals';
import { NewsAnalysisProse } from '@/components/NewsAnalysisProse';
import { articleResearch, articles } from '@/lib/content';
import { newsEvidenceViews } from '@/lib/editorialGraphics';
import { newsEditorial } from '@/lib/newsEditorial';
import { newsNarrative } from '@/lib/newsNarrative';
import { articleDepth } from '@/lib/paperDepth';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const editorial = newsEditorial[article.slug];
  const narrative = newsNarrative[article.slug];

  return (
    <article className="article-detail insight-report prose-first-report">
      <Link className="back" href="/news"><ArrowLeft size={16}/> All analysis</Link>
      <div className="report-meta"><span>{article.tag}</span><span>{article.date}</span><span>{article.read}</span></div>
      <h1>{editorial.title}</h1>
      <p className="lede">{editorial.standfirst}</p>
      <div className="article-hero-image"><Image src={article.image} alt="" fill priority sizes="(max-width: 1000px) 100vw, 860px"/><span>{article.artLabel}</span><MechanicalMark label="Evidence briefing"/></div>

      <section className="thesis-panel"><span>Central contention</span><p>{editorial.thesis}</p></section>
      <MetricStrip metrics={article.metrics}/>

      <section className="key-findings">
        <span>The argument in brief</span>
        <div>{editorial.takeaways.map((takeaway, index) => <p key={takeaway}><b>{String(index + 1).padStart(2, '0')}</b>{takeaway}</p>)}</div>
      </section>

      <NarrativeOpening label={narrative.sceneLabel} title={narrative.sceneTitle} paragraphs={narrative.sceneParagraphs}/>

      <div className="report-body article-report-body">
        <nav className="report-contents" aria-label="Analysis contents">
          <span>In this analysis</span>
          {editorial.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{String(index + 1).padStart(2, '0')} {section.heading}</a>)}
        </nav>
        <div className="report-sections editorial-report-sections">
          {editorial.sections.map((section, index) => (
            <section id={`section-${index + 1}`} key={section.heading}>
              <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </div>

      <AnalystLens lens={narrative.analystLens}/>
      <InteractiveEvidence views={newsEvidenceViews[article.slug]}/>
      <ResearchEvidence title="What the wider evidence says" findings={articleResearch[article.slug]}/>
      <NewsAnalysisProse depth={articleDepth[article.slug]}/>
      <CodeExhibit title={article.code.title} eyebrow="Implementation pattern" lines={article.code.lines} nodes={article.code.nodes}/>
      <EditorialConclusion title={narrative.conclusionTitle} paragraphs={narrative.conclusionParagraphs}/>

      <section className="next-step-panel article-actions">
        <span>Leadership agenda</span>
        <h2>Translate the analysis into an operating decision.</h2>
        <ol>{article.actions.map((action) => <li key={action}><Check size={16}/>{action}</li>)}</ol>
      </section>

      <aside className="references">
        <h2>Sources and further reading</h2>
        <p>External evidence is used for context. Quiet Gears analysis and illustrative charts are identified separately.</p>
        <ol>{article.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} <ArrowUpRight size={14}/></a></li>)}</ol>
      </aside>
    </article>
  );
}
