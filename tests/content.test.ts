import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { caseEditorial } from '@/lib/caseEditorial';
import { articleResearch, articles, caseResearch, cases } from '@/lib/content';
import { newsEvidenceViews } from '@/lib/editorialGraphics';
import { firstConversation, serviceJourney, servicePathways } from '@/lib/serviceModel';
import { newsEditorial } from '@/lib/newsEditorial';

describe('editorial content', () => {
  it('has unique routes for all case studies and articles', () => {
    const slugs = [...cases, ...articles].map((item) => item.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('labels unfinished or fictional case work', () => {
    expect(cases.every((item) => ['In progress', 'Illustrative'].includes(item.status))).toBe(true);
  });

  it('provides centralised research metadata for every paper', () => {
    expect(cases.every((item) => caseResearch[item.slug]?.length >= 4)).toBe(true);
    expect(articles.every((item) => articleResearch[item.slug]?.length >= 4)).toBe(true);
  });

  it('gives every news article one substantial narrative essay', () => {
    expect(articles.every((item) => {
      const editorial = newsEditorial[item.slug];
      return editorial?.sceneParagraphs.length >= 2
        && editorial.thesis.length > 0
        && editorial.sections.length >= 4
        && editorial.sections.length <= 6
        && editorial.sections.every((section) => section.purpose.length > 0 && section.paragraphs.length >= 3);
    })).toBe(true);
  });

  it('gives all 11 reports explicit causal transitions', () => {
    const reports = [
      ...articles.map((item) => newsEditorial[item.slug]),
      ...cases.map((item) => caseEditorial[item.slug]),
    ];
    expect(reports).toHaveLength(11);
    expect(reports.every((report) => !report.sections[0].transition && report.sections.slice(1).every((section) => section.transition && section.transition.length > 40))).toBe(true);
  });

  it('gives every case study one decision-led operating narrative', () => {
    expect(cases.every((item) => {
      const editorial = caseEditorial[item.slug];
      return editorial?.openingParagraphs.length >= 2
        && editorial.centralQuestion.length > 0
        && editorial.thesis.length > 0
        && editorial.statusStatement.length > 0
        && editorial.sections.length >= 4
        && editorial.sections.length <= 6
        && editorial.sections.every((section) => section.purpose.length > 0 && section.paragraphs.length >= 3);
    })).toBe(true);
  });

  it('uses concise, information-led case section and exhibit titles', () => {
    expect(cases.every((item) => {
      const editorial = caseEditorial[item.slug];
      const titles = [editorial.evidenceTitle, editorial.processTitle, editorial.systemTitle, ...editorial.sections.map((section) => section.heading)];
      return titles.every((title) => title.split(/\s+/).length <= 6 && !/^(the|a|an)\s/i.test(title));
    })).toBe(true);
  });

  it('uses report-specific, information-led news headings', () => {
    expect(articles.every((item) => newsEditorial[item.slug].sections.every((section) => section.heading.split(/\s+/).length <= 6 && !/^(the|a|an)\s/i.test(section.heading)))).toBe(true);
  });

  it('places each case graphic inside its argument with interpretation after it', () => {
    expect(cases.every((item) => {
      const editorial = caseEditorial[item.slug];
      const placements = editorial.sections.flatMap((section) => (section.exhibits ?? []).map((placement) => ({ placement, paragraphCount: section.paragraphs.length })));
      return placements.length === 3
        && new Set(placements.map(({ placement }) => placement.kind)).size === 3
        && placements.every(({ placement, paragraphCount }) => placement.afterParagraph < paragraphCount - 1)
        && editorial.evidenceInterpretation.establishes.length > 0
        && editorial.evidenceInterpretation.doesNotEstablish.length > 0
        && editorial.evidenceInterpretation.management.length > 0;
    })).toBe(true);
  });

  it('labels illustrative cases and integrates sources into case arguments', () => {
    expect(cases.every((item) => {
      const editorial = caseEditorial[item.slug];
      const hasInlineSource = editorial.sections.some((section) => section.paragraphs.some((paragraph) => paragraph.sources?.length));
      return hasInlineSource && (item.status !== 'Illustrative' || editorial.statusStatement.toLowerCase().includes('illustrative'));
    })).toBe(true);
  });

  it('integrates two interpreted evidence views into every news essay', () => {
    expect(articles.every((item) => {
      const editorial = newsEditorial[item.slug];
      const placedViews = editorial.sections.flatMap((section) => section.exhibits?.filter((exhibit) => exhibit.kind === 'evidence') ?? []);
      const systemViews = editorial.sections.flatMap((section) => section.exhibits?.filter((exhibit) => exhibit.kind === 'system') ?? []);
      return placedViews.length === 2
        && new Set(placedViews.map((item) => item.view)).size === 2
        && systemViews.length === 1
        && [...placedViews, ...systemViews].every((item) => item.afterParagraph >= 0)
        && newsEvidenceViews[item.slug]?.length === 2
        && newsEvidenceViews[item.slug].every((view) => view.points.length >= 2 && view.source.length > 0 && view.interpretation?.establishes && view.interpretation.doesNotEstablish && view.interpretation.management);
    })).toBe(true);
  });

  it('provides one conclusion section and one action agenda per report', () => {
    expect(articles.every((item) => {
      const sections = newsEditorial[item.slug].sections;
      const conclusion = sections.at(-1);
      return Boolean(conclusion && conclusion.role === 'conclusion' && conclusion.paragraphs.length >= 3 && sections.filter((section) => section.role === 'conclusion').length === 1 && sections.filter((section) => section.role === 'counterargument').length === 1 && item.actions.length >= 3 && item.actions.length <= 4);
    })).toBe(true);
    expect(cases.every((item) => {
      const sections = caseEditorial[item.slug].sections;
      const conclusion = sections.at(-1);
      return Boolean(conclusion && conclusion.role === 'conclusion' && conclusion.paragraphs.length >= 3 && sections.filter((section) => section.role === 'conclusion').length === 1 && item.nextSteps.length >= 3 && item.nextSteps.length <= 4);
    })).toBe(true);
  });

  it('keeps every numerical body claim sourced or explicitly qualified', () => {
    const hasNumber = /\b\d+(?:\.\d+)?(?:%|x|:\d+)?\b/;
    const qualified = /illustrative|target|measured|not (?:a |an )?measured|proposed|discovery|pilot|baseline|hypothesis|assumptions?|weeks?|minutes?|percent|survey|research/i;
    expect(articles.every((item) => newsEditorial[item.slug].sections.every((section) => section.paragraphs.every((paragraph) => !hasNumber.test(paragraph.text) || paragraph.sources?.length || qualified.test(paragraph.text))))).toBe(true);
    expect(cases.every((item) => caseEditorial[item.slug].sections.every((section) => section.paragraphs.every((paragraph) => !hasNumber.test(paragraph.text) || paragraph.sources?.length || qualified.test(paragraph.text) || item.status === 'Illustrative')))).toBe(true);
  });

  it('labels every composite or illustrative opening scene', () => {
    expect(articles.every((item) => /composite|illustrative/i.test(newsEditorial[item.slug].sceneLabel))).toBe(true);
    expect(cases.every((item) => item.status === 'In progress' || /illustrative/i.test(caseEditorial[item.slug].sceneLabel))).toBe(true);
  });

  it('preserves reduced motion, focus visibility and accessible chart state', () => {
    const styles = readFileSync('app/globals.css', 'utf8');
    const chart = readFileSync('components/InteractiveEvidence.tsx', 'utf8');
    expect(styles).toContain('@media(prefers-reduced-motion:reduce)');
    expect(styles).toContain(':focus-visible');
    expect(chart).toContain('aria-labelledby');
    expect(chart).toContain('aria-pressed');
    expect(chart).toContain('onFocus');
  });

  it('places source links inside the news argument', () => {
    expect(articles.every((item) => newsEditorial[item.slug].sections.some((section) => section.paragraphs.some((paragraph) => paragraph.sources?.length)))).toBe(true);
  });

  it('spells out the client service and first-conversation pipeline', () => {
    expect(serviceJourney).toHaveLength(6);
    expect(servicePathways).toHaveLength(3);
    expect(firstConversation).toHaveLength(3);
  });

  it('does not use em dashes in published content', () => {
    expect(JSON.stringify({ cases, articles, caseResearch, articleResearch, serviceJourney, servicePathways, newsEditorial, caseEditorial, newsEvidenceViews })).not.toContain('—');
  });
});
