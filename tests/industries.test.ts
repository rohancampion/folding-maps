import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { industries } from '@/lib/industries';

describe('industry perspectives', () => {
  it('provides all 26 requested industry routes', () => {
    expect(industries).toHaveLength(26);
    expect(new Set(industries.map((industry) => industry.slug)).size).toBe(26);
  });

  it('keeps every perspective complete and editorially distinct', () => {
    expect(new Set(industries.map((industry) => industry.headline)).size).toBe(26);
    expect(new Set(industries.map((industry) => industry.thesis)).size).toBe(26);
    expect(new Set(industries.map((industry) => industry.contextTitle)).size).toBe(26);
    expect(industries.every((industry) => (
      industry.context.length === 2
      && industry.opportunities.length === 3
      && industry.questions.length === 3
      && industry.controls.length === 2
      && industry.roadmap.length === 3
      && industry.signalLabels.length === 4
    ))).toBe(true);
  });

  it('uses professional long-form content rather than thin route copy', () => {
    expect(industries.every((industry) => JSON.stringify(industry).split(/\s+/).length > 300)).toBe(true);
  });

  it('contains no em dashes or table markup', () => {
    const published = JSON.stringify(industries);
    const page = readFileSync('app/industries/[slug]/page.tsx', 'utf8');
    expect(published).not.toContain('—');
    expect(`${published}${page}`.toLowerCase()).not.toContain('<table');
  });

  it('provides a detailed visual system for every page', () => {
    const visual = readFileSync('components/IndustrySignal.tsx', 'utf8');
    expect(new Set(industries.map((industry) => industry.motif)).size).toBe(6);
    expect(visual).toContain('role="img"');
    expect(visual).toContain('signalLabels');
  });
});
