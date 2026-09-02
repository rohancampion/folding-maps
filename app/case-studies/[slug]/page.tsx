import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FullBleedHero } from '@/components/FullBleedHero';
import { NarrativeOpening } from '@/components/EditorialNarrative';
import { NarrativeSections, ReportActionAgenda, ReportReferences } from '@/components/NarrativeReport';
import { JsonLd } from '@/components/JsonLd';
import { caseEditorial } from '@/lib/caseEditorial';
import { caseResearch, cases } from '@/lib/content';
import { dedupeSources } from '@/lib/reportNarrative';
import { getCaseReport } from '@/lib/reportModel';
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';
import styles from './case-detail.module.css';

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = cases.find((item) => item.slug === slug);
  if (!study) return {};
  return createPageMetadata({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
    image: study.image,
    type: 'article',
  });
}

export default async function CaseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = cases.find((item) => item.slug === slug);
  if (!study) notFound();

  const editorial = caseEditorial[study.slug];
  const research = caseResearch[study.slug];
  const report = getCaseReport(study, research);
  const references = dedupeSources(
    research.map(({ source, href, finding }) => ({ label: source, href, detail: finding })),
  );

  const pageUrl = absoluteUrl(`/case-studies/${study.slug}`);
  const jsonLd = [
    breadcrumbJsonLd([
      { name: 'Work', path: '/case-studies' },
      { name: study.title, path: `/case-studies/${study.slug}` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: study.title,
      description: study.summary,
      image: absoluteUrl(study.image),
      mainEntityOfPage: pageUrl,
      author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      articleSection: study.sector,
    },
  ];

  if (study.slug === 'chapelhall' && study.showcase) {
    const [marketWide, artwork, marketPortrait, studio, artworkVariant, studioVariant, marketBooth, marketViewer, artworkVariantTwo, studioVariantTwo] = study.showcase.images;

    return (
      <>
        <JsonLd data={jsonLd} />
        <article className={styles.chapelhall}>
          <section className={styles.photoHero} aria-labelledby="chapelhall-title">
            <Image src={study.image} alt="ChapelHall, a living room for contemporary art" width={1672} height={941} priority className={styles.heroImage} />
            <Link className={styles.backLink} href="/case-studies"><ArrowLeft size={15} aria-hidden="true" /> All projects</Link>
          </section>

          <section className={styles.introBand}>
            <h1 id="chapelhall-title">{study.title}</h1>
            <div className={styles.introCopy}><p>{study.summary}</p><p>{editorial.openingParagraphs[1]}</p></div>
          </section>

          <figure className={styles.fullFold}>
            <Image src={marketWide.src} alt={marketWide.alt} width={1536} height={1024} sizes="100vw" />
            <figcaption>{marketWide.caption}</figcaption>
          </figure>

          <section className={styles.textFold}>
            <h2>{editorial.sections[0].heading}</h2>
            <div>{editorial.sections[0].paragraphs.slice(0, 2).map((paragraph) => <p key={paragraph.text}>{paragraph.text}</p>)}</div>
          </section>

          <section className={styles.artSplit} aria-label="ChapelHall artwork and art-market campaign imagery">
            <figure><Image src={artwork.src} alt={artwork.alt} width={1600} height={2400} sizes="(max-width: 60rem) 100vw, 58vw" /><figcaption>{artwork.caption}</figcaption></figure>
            <figure><Image src={marketPortrait.src} alt={marketPortrait.alt} width={1024} height={1536} sizes="(max-width: 60rem) 100vw, 34vw" /><figcaption>{marketPortrait.caption}</figcaption></figure>
          </section>

          <section className={styles.textFoldAlt}>
            <h2>{editorial.sections[1].heading}</h2>
            <div>{editorial.sections[1].paragraphs.slice(0, 2).map((paragraph) => <p key={paragraph.text}>{paragraph.text}</p>)}</div>
          </section>

          <section className={styles.marketPair} aria-label="Further art-market campaign studies">
            <figure><Image src={marketBooth.src} alt={marketBooth.alt} width={1536} height={1024} sizes="(max-width: 60rem) 100vw, 58vw" /><figcaption>{marketBooth.caption}</figcaption></figure>
            <figure><Image src={marketViewer.src} alt={marketViewer.alt} width={1024} height={1536} sizes="(max-width: 60rem) 100vw, 32vw" /><figcaption>{marketViewer.caption}</figcaption></figure>
          </section>

          <figure className={styles.fullFoldDark}>
            <Image src={studio.src} alt={studio.alt} width={1600} height={1260} sizes="100vw" />
            <figcaption>{studio.caption}</figcaption>
          </figure>

          <section className={styles.textFold}>
            <h2>{editorial.sections[2].heading}</h2>
            <div>{editorial.sections[2].paragraphs.slice(0, 2).map((paragraph) => <p key={paragraph.text}>{paragraph.text}</p>)}</div>
          </section>

          <section className={styles.variantSplit} aria-label="ChapelHall artwork variants">
            <figure><Image src={artworkVariant.src} alt={artworkVariant.alt} width={1024} height={1536} sizes="(max-width: 60rem) 100vw, 42vw" /><figcaption>{artworkVariant.caption}</figcaption></figure>
            <figure><Image src={studioVariant.src} alt={studioVariant.alt} width={1411} height={1114} sizes="(max-width: 60rem) 100vw, 50vw" /><figcaption>{studioVariant.caption}</figcaption></figure>
          </section>

          <section className={styles.materialStudy} aria-label="Further artwork and gallery studies">
            <figure><Image src={artworkVariantTwo.src} alt={artworkVariantTwo.alt} width={1024} height={1536} sizes="(max-width: 60rem) 100vw, 36vw" /><figcaption>{artworkVariantTwo.caption}</figcaption></figure>
            <figure><Image src={studioVariantTwo.src} alt={studioVariantTwo.alt} width={1536} height={1152} sizes="(max-width: 60rem) 100vw, 54vw" /><figcaption>{studioVariantTwo.caption}</figcaption></figure>
          </section>

          <section className={styles.delivery}>
            <h2>Delivered for ChapelHall</h2>
            <ul>{study.nextSteps.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </article>

        <section className={`${styles.chapelContact} ${'contact-' + 'band'}`}>
          <div className="container inner"><div><h2>Discuss a business problem.</h2></div><Link className="button" href="/contact">Start an enquiry <ArrowRight size={17} aria-hidden="true" /></Link></div>
        </section>
      </>
    );
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <FullBleedHero
        className="case-rebrand-hero"
        desktopSrc={study.image}
        mobileSrc={study.image}
        eyebrow={`${study.sector} · Project`}
        title={study.title}
        summary={study.brief}
        focalPosition="50% 50%"
      >
        <Link className="back" href="/case-studies">
          <ArrowLeft size={15} aria-hidden="true" /> All projects
        </Link>
      </FullBleedHero>

      <article className={`report rebrand-report-body ${styles.caseNarrative}`}>

        {study.showcase ? (
          <section className={styles.showcase} aria-labelledby="client-showcase-title">
            <div className={styles.showcaseIntro}>
              <span>{study.showcase.label}</span>
              <div className={styles.wordmark} aria-label="ChapelHall">CHAPELHALL</div>
              <h2 id="client-showcase-title">{study.showcase.title}</h2>
              <p>{study.showcase.summary}</p>
            </div>
            <div className={styles.showcaseGrid}>
              {study.showcase.images.map((item, index) => (
                <figure className={index === 0 ? styles.showcaseWide : styles.showcasePortrait} key={item.src}>
                  <div className={styles.showcaseImage}>
                    <Image src={item.src} alt={item.alt} fill sizes={index === 0 ? '(max-width: 800px) 100vw, 62vw' : '(max-width: 800px) 100vw, 32vw'} />
                  </div>
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {study.showcase ? (
          <section className={styles.showcase} aria-labelledby="client-showcase-title">
            <div className={styles.showcaseIntro}>
              <span>{study.showcase.label}</span>
              <div className={styles.wordmark} aria-label="ChapelHall">CHAPELHALL</div>
              <h2 id="client-showcase-title">{study.showcase.title}</h2>
              <p>{study.showcase.summary}</p>
            </div>
            <div className={styles.showcaseGrid}>
              {study.showcase.images.map((item, index) => (
                <figure className={index === 0 ? styles.showcaseWide : styles.showcasePortrait} key={item.src}>
                  <div className={styles.showcaseImage}>
                    <Image src={item.src} alt={item.alt} fill sizes={index === 0 ? '(max-width: 800px) 100vw, 62vw' : '(max-width: 800px) 100vw, 32vw'} />
                  </div>
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {report.opening && (
          <NarrativeOpening
            title={report.opening.title}
            paragraphs={report.opening.paragraphs}
            centralQuestion={report.opening.centralQuestion}
          />
        )}

        {study.visuals?.[0] ? (
          <figure className={styles.caseVisualWide}>
            <Image src={study.visuals[0].src} alt={study.visuals[0].alt} width={study.visuals[0].width} height={study.visuals[0].height} sizes="(max-width: 60rem) 100vw, 86vw" />
            <figcaption>{study.visuals[0].caption}</figcaption>
          </figure>
        ) : null}

        <NarrativeSections
          sections={report.sections}
          className="continuous-case-sections"
          contentsLabel="Contents"
          idPrefix={`case-${study.slug}`}
          renderExhibit={() => null}
          showContents={false}
          showSectionNumbers={false}
        />

        {study.visuals?.[1] ? (
          <figure className={styles.caseVisualPortrait}>
            <Image src={study.visuals[1].src} alt={study.visuals[1].alt} width={study.visuals[1].width} height={study.visuals[1].height} sizes="(max-width: 40rem) 100vw, 34rem" />
            <figcaption>{study.visuals[1].caption}</figcaption>
          </figure>
        ) : null}

        <ReportActionAgenda
          title={study.actionPanel?.title ?? 'Next steps'}
          actions={report.actionAgenda}
        />

        {references.length ? (
          <ReportReferences
            id="case-references"
            title="Sources"
            sources={references}
          />
        ) : null}
      </article>

      <section className="contact-band">
        <div className="container inner">
          <div>
            <span className="kicker">Enquiries</span>
            <h2>Discuss a business problem.</h2>
          </div>
          <Link className="button" href="/contact">
            Start an enquiry <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
