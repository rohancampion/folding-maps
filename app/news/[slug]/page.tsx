import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { BarExhibit, CodeExhibit, MetricStrip } from '@/components/ConsultingExhibits';
import { articles } from '@/lib/content';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <article className="article-detail insight-report">
      <Link className="back" href="/news"><ArrowLeft size={16}/> All insights</Link>
      <div className="report-meta"><span>{article.tag}</span><span>{article.date}</span><span>{article.read}</span></div>
      <h1>{article.title}</h1>
      <p className="lede">{article.intro}</p>
      <div className="article-hero-image"><Image src={article.image} alt="" fill priority sizes="(max-width: 1000px) 100vw, 860px"/><span>{article.artLabel}</span></div>

      <section className="thesis-panel"><span>Our perspective</span><p>{article.thesis}</p></section>
      <MetricStrip metrics={article.metrics}/>

      <section className="key-findings">
        <span>Key findings</span>
        <div>{article.takeaways.map((takeaway, index) => <p key={takeaway}><b>{String(index + 1).padStart(2, '0')}</b>{takeaway}</p>)}</div>
      </section>

      <div className="report-body article-report-body">
        <nav className="report-contents" aria-label="Article contents">
          <span>In this briefing</span>
          {article.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{String(index + 1).padStart(2, '0')} {section.heading}</a>)}
        </nav>
        <div className="report-sections">
          {article.sections.map((section, index) => (
            <section id={`section-${index + 1}`} key={section.heading}>
              <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </div>

      <BarExhibit number="1" title={article.exhibit.title} subtitle={article.exhibit.subtitle} bars={article.exhibit.bars} note={article.exhibit.note}/>
      <CodeExhibit title={article.code.title} eyebrow="Implementation pattern" lines={article.code.lines} nodes={article.code.nodes}/>

      <section className="next-step-panel article-actions">
        <span>Leadership agenda</span>
        <h2>Translate the analysis into an operating decision.</h2>
        <ol>{article.actions.map((action) => <li key={action}><Check size={16}/>{action}</li>)}</ol>
      </section>

      <aside className="references">
        <h2>Sources and further reading</h2>
        <p>External evidence is used for context. Quiet Gears analysis and illustrative exhibits are identified separately.</p>
        <ol>{article.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} <ArrowUpRight size={14}/></a></li>)}</ol>
      </aside>
    </article>
  );
}

