import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const read = (path: string) => readFileSync(path, 'utf8');

describe('botanical-industrial rebrand', () => {
  it('keeps Industries routable but removes it from discovery surfaces', () => {
    const shell = read('components/Shell.tsx');
    const sitemap = read('app/sitemap.ts');
    const industryLayout = read('app/industries/layout.tsx');

    expect(shell).not.toContain("['Industries'");
    expect(shell).not.toContain("'/industries'");
    expect(sitemap).not.toContain('/industries');
    expect(industryLayout).toContain('index: false');
    expect(industryLayout).toContain('follow: false');
  });

  it('publishes the approved homepage message without a process section', () => {
    const home = read('app/page.tsx');

    expect(home).toContain('Quiet Gears: AI Consulting & Engineering');
    expect(home).toContain('Senior advice and working software for UK SMEs.');
    expect(home).not.toMatch(/How we work|styles\.process|processGrid/);
  });

  it('keeps service marketing pages free of workflow and blueprint components', () => {
    const page = read('app/services/[slug]/page.tsx');

    expect(page).not.toContain('ServiceSystemLab');
    expect(page).not.toContain('service-provision-section');
    expect(page).not.toContain('blueprint-stack');
    expect(page).not.toContain('technical-blueprint');
    expect(page).not.toContain('useCase.path');
    expect(page).not.toContain('<ul>');
    expect(page).not.toContain('<ol>');
  });
});
