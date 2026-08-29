import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FullBleedHero } from '@/components/FullBleedHero';
import { PrecisionLabel } from '@/components/PrecisionLabel';
import { articles } from '@/lib/content';
import { newsEditorial } from '@/lib/newsEditorial';
import styles from './news.module.css';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'AI news and analysis for UK business leaders',
  description: 'Evidence-led analysis for leaders navigating AI, automation, governance and operating-model change.',
  path: '/news',
});

export default function News() {
  return (
    <>
      <FullBleedHero
        desktopSrc="/images/rebrand/research-fern-desktop.webp"
        mobileSrc="/images/rebrand/research-fern-mobile.webp"
        eyebrow="Insights"
        title="Evidence for better technology decisions."
        summary="Analysis for leaders working through AI, automation and operating change."
        focalPosition="50% 46%"
      />
      <section className={styles.journal} aria-labelledby="latest-analysis-title">
        <div className={styles.journalHeading}>
          <PrecisionLabel index="01–08" label="Latest analysis" />
          <h2 id="latest-analysis-title">Read the analysis.</h2>
        </div>
        <div className={styles.storyField}>
        {articles.map((article, index) => {
          const editorial = newsEditorial[article.slug];
          return <Link className={`${styles.story} ${index === 0 ? styles.leadStory : ''}`} href={`/news/${article.slug}`} key={article.slug}>
            <div className={styles.storyArt}>
              <Image src={article.image} alt="" fill sizes={index === 0 ? '100vw' : '(max-width: 800px) 100vw, 44vw'} className={styles.storyImage}/>
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className={styles.storyCopy}>
              <PrecisionLabel index={article.tag} label={article.date} detail={article.read} />
              <h3>{editorial.title}</h3>
              <span className={styles.storyAction}>Read the analysis <ArrowUpRight size={15}/></span>
            </div>
          </Link>;
        })}
        </div>
      </section>
    </>
  );
}
