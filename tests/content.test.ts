import { describe, expect, it } from 'vitest';
import { caseEditorial } from '@/lib/caseEditorial';
import { articleDecisionRows, articleResearch, articles, caseDecisionRows, caseResearch, cases } from '@/lib/content';
import { newsEvidenceViews } from '@/lib/editorialGraphics';
import { articleDepth, caseDepth } from '@/lib/paperDepth';
import { firstConversation, serviceJourney, servicePathways } from '@/lib/serviceModel';
import { newsEditorial } from '@/lib/newsEditorial';
import { newsNarrative } from '@/lib/newsNarrative';

describe('editorial content', () => {
  it('has unique routes for all case studies and articles', () => {
    const slugs = [...cases, ...articles].map((item) => item.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('labels unfinished or fictional case work', () => {
    expect(cases.every((item) => ['In progress', 'Illustrative'].includes(item.status))).toBe(true);
  });

  it('provides research and decision detail for every paper', () => {
    expect(cases.every((item) => caseResearch[item.slug]?.length >= 4 && caseDecisionRows[item.slug]?.length >= 4)).toBe(true);
    expect(articles.every((item) => articleResearch[item.slug]?.length >= 4 && articleDecisionRows[item.slug]?.length >= 4)).toBe(true);
  });

  it('provides an extensive implementation layer for every paper', () => {
    expect(articles.every((item) => articleDepth[item.slug]?.playbook.length >= 4 && articleDepth[item.slug]?.risks.length >= 4 && articleDepth[item.slug]?.scorecard.length >= 4)).toBe(true);
    expect(cases.every((item) => caseDepth[item.slug]?.baseline.length >= 4 && caseDepth[item.slug]?.workPackages.length >= 4 && caseDepth[item.slug]?.risks.length >= 4 && caseDepth[item.slug]?.acceptance.length >= 4)).toBe(true);
  });

  it('provides a prose-first editorial analysis for every news article', () => {
    expect(articles.every((item) => newsEditorial[item.slug]?.sections.length === 5 && newsEditorial[item.slug]?.takeaways.length === 3)).toBe(true);
  });

  it('gives every report a narrative arc and an analyst conclusion', () => {
    expect(articles.every((item) => newsNarrative[item.slug]?.sceneParagraphs.length >= 2 && newsNarrative[item.slug]?.conclusionParagraphs.length >= 2)).toBe(true);
    expect(cases.every((item) => caseEditorial[item.slug]?.openingParagraphs.length >= 2 && caseEditorial[item.slug]?.turningParagraphs.length >= 2 && caseEditorial[item.slug]?.closingParagraphs.length >= 2)).toBe(true);
  });

  it('provides multiple sourced interactive evidence views for every news report', () => {
    expect(articles.every((item) => newsEvidenceViews[item.slug]?.length >= 2 && newsEvidenceViews[item.slug].every((view) => view.points.length >= 2 && view.source.length > 0))).toBe(true);
  });

  it('spells out the client service and first-conversation pipeline', () => {
    expect(serviceJourney).toHaveLength(6);
    expect(servicePathways).toHaveLength(3);
    expect(firstConversation).toHaveLength(3);
  });

  it('does not use em dashes in published content', () => {
    expect(JSON.stringify({ cases, articles, caseResearch, articleResearch, articleDepth, caseDepth, serviceJourney, servicePathways, newsEditorial, newsNarrative, caseEditorial, newsEvidenceViews })).not.toContain('—');
  });
});
