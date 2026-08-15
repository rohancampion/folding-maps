import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { HeroMechanism, MechanicalMark } from '@/components/MechanicalVisuals';
import { articleResearch, articles } from '@/lib/content';
import { newsEditorial } from '@/lib/newsEditorial';

export const metadata = { title: 'News and insights' };

export default function News() {
  return (
    <>
      <section className="page-hero report-hero insight-hero report-hero-layout">
        <div className="report-hero-copy"><span className="kicker">News and analysis</span>
          <h1>Evidence for better<br/><em>technology decisions.</em></h1>
          <p>Argument-led analysis for leaders navigating AI, automation and operating-model change. Each report develops a clear contention, tests it against external evidence, considers where it can fail and ends with practical management action.</p>
          <div className="section-proof"><div><strong>{articles.length}</strong><span>Long-form analyses</span></div><div><strong>{articles.reduce((total, article) => total + article.sources.length + articleResearch[article.slug].length, 0)}</strong><span>Linked research references</span></div><div><strong>5</strong><span>Reported sections per analysis</span></div></div>
        </div>
        <HeroMechanism compact/>
      </section>
      <section className="news-grid expanded-news-grid">
        <div className="collection-heading"><span>Latest analysis</span><p>Structured around argument, evidence, counterargument and practical action.</p></div>
        {articles.map((article, index) => {
          const editorial = newsEditorial[article.slug];
          return <Link className={`article-card ${index === 0 ? 'featured' : ''}`} href={`/news/${article.slug}`} key={article.slug}>
            <div className={`article-art art-${index % 4}`}><Image src={article.image} alt="" fill sizes={index === 0 ? '(max-width: 800px) 100vw, 55vw' : '(max-width: 800px) 100vw, 45vw'}/><span>{article.artLabel}</span><MechanicalMark label="Research system"/></div>
            <div className="article-copy"><div><span>{article.tag}</span><span>{article.date} · {article.read}</span></div><h2>{editorial.title}</h2><p>{editorial.standfirst}</p><div className="article-thesis"><span>Central contention</span>{editorial.thesis}</div><b>Read the analysis <ArrowUpRight size={15}/></b></div>
          </Link>;
        })}
      </section>
    </>
  );
}
