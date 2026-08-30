import Link from 'next/link';
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

      <article className="report rebrand-report-body">
        <div className="metric-strip">
          {study.metrics.map((metric) => (
            <div className="metric-item" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              {metric.detail ? <small>{metric.detail}</small> : null}
            </div>
          ))}
        </div>

        <p className="caveat">
          <strong>Current result</strong>
          {editorial.statusStatement}
        </p>

        <p className="lede">{report.standfirst}</p>

        <div className="executive-brief">
          <span>Result sought</span>
          <p>{report.thesis}</p>
        </div>

        {report.opening && (
          <NarrativeOpening
            label={report.opening.label}
            title={report.opening.title}
            paragraphs={report.opening.paragraphs}
            centralQuestion={report.opening.centralQuestion}
          />
        )}

        <NarrativeSections
          sections={report.sections}
          className="continuous-case-sections"
          contentsLabel="Contents"
          idPrefix={`case-${study.slug}`}
          renderExhibit={() => null}
        />

        <ReportActionAgenda
          eyebrow="Next decision"
          title="Next steps for this engagement"
          actions={report.actionAgenda}
        />

        <ReportReferences
          id="case-references"
          title="Sources"
          introduction="External sources provide context only. Client results are stated separately."
          sources={references}
        />
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
