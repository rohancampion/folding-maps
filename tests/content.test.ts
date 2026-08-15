import { describe, expect, it } from 'vitest';
import { articleDecisionRows, articleResearch, articles, caseDecisionRows, caseResearch, cases } from '@/lib/content';
import { articleDepth, caseDepth } from '@/lib/paperDepth';
import { firstConversation, serviceJourney, servicePathways } from '@/lib/serviceModel';

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

  it('spells out the client service and first-conversation pipeline', () => {
    expect(serviceJourney).toHaveLength(6);
    expect(servicePathways).toHaveLength(3);
    expect(firstConversation).toHaveLength(3);
  });

  it('does not use em dashes in published content', () => {
    expect(JSON.stringify({ cases, articles, caseResearch, articleResearch, articleDepth, caseDepth, serviceJourney, servicePathways })).not.toContain('—');
  });
});

