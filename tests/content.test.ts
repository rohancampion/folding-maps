import { describe, expect, it } from 'vitest';
import { articleDecisionRows, articleResearch, articles, caseDecisionRows, caseResearch, cases } from '@/lib/content';

describe('editorial content', () => {
  it('has unique routes for all case studies and articles', () => {
    const slugs = [...cases, ...articles].map((item) => item.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('labels unfinished or fictional case work', () => {
    expect(cases.every((item) => ['In progress', 'Illustrative'].includes(item.status))).toBe(true);
  });

  it('provides research and decision detail for every paper', () => {
    expect(cases.every((item) => caseResearch[item.slug]?.length >= 3 && caseDecisionRows[item.slug]?.length >= 4)).toBe(true);
    expect(articles.every((item) => articleResearch[item.slug]?.length >= 3 && articleDecisionRows[item.slug]?.length >= 4)).toBe(true);
  });

  it('does not use em dashes in published content', () => {
    expect(JSON.stringify({ cases, articles, caseResearch, articleResearch })).not.toContain('—');
  });
});

