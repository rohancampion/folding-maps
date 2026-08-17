import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { CodeExhibit } from '@/components/ConsultingExhibits';
import { NarrativeOpening } from '@/components/EditorialNarrative';
import { InteractiveEvidence } from '@/components/InteractiveEvidence';
import { MechanicalMark } from '@/components/MechanicalVisuals';
import { NarrativeSections, ReportActionAgenda, ReportReferences } from '@/components/NarrativeReport';
import { articleResearch, articles } from '@/lib/content';
import { newsEvidenceViews } from '@/lib/editorialGraphics';
import { newsEditorial, type NewsExhibitPlacement } from '@/lib/newsEditorial';
import { dedupeSources } from '@/lib/reportNarrative';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const editorial = newsEditorial[article.slug];
  const references = dedupeSources([
    ...article.sources,
    ...articleResearch[article.slug].map(({ source, href, finding }) => ({ label: source, href, detail: finding })),
    ...editorial.sections.flatMap((section) => section.paragraphs.flatMap((paragraph) => paragraph.sources ?? [])),
  ]);
  const renderExhibit = (placement: NewsExhibitPlacement) => placement.kind === 'evidence'
    ? <InteractiveEvidence key={`evidence-${placement.view}`} views={[newsEvidenceViews[article.slug][placement.view]]}/>
    : <CodeExhibit key="system" title={article.code.title} eyebrow="Implementation pattern" lines={article.code.lines} nodes={article.code.nodes}/>;

  return (
    <article className="article-detail insight-report prose-first-report">
      <Link className="back" href="/news"><ArrowLeft size={16}/> All analysis</Link>
      <div className="report-meta"><span>{article.tag}</span><span>{article.date}</span><span>{article.read}</span></div>
      <h1>{editorial.title}</h1>
      <p className="lede">{editorial.standfirst}</p>
      <div className="article-hero-image"><Image src={article.image} alt="" fill priority sizes="(max-width: 1000px) 100vw, 860px"/><span>{article.artLabel}</span><MechanicalMark label="Evidence briefing"/></div>

      <NarrativeOpening label={editorial.sceneLabel} title={editorial.sceneTitle} paragraphs={editorial.sceneParagraphs}/>
      <section className="thesis-panel"><span>Central contention</span><p>{editorial.thesis}</p></section>

      <NarrativeSections sections={editorial.sections} className="editorial-report-sections continuous-report-sections" contentsLabel="In this analysis" renderExhibit={renderExhibit}/>

      <ReportActionAgenda eyebrow="Leadership agenda" title="Decisions arising from the analysis" actions={article.actions}/>

      <ReportReferences id="news-references" title="Sources and further reading" introduction="External evidence is used for context. Quiet Gears analysis and illustrative charts are identified separately." sources={references}/>
    </article>
  );
}
