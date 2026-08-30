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
    const hero = read('components/ui/prisma-hero.tsx');

    expect(home).toContain("import { PrismaHero } from '@/components/ui/prisma-hero'");
    expect(home).toContain('<PrismaHero />');
    expect(hero).toContain('Quiet Gears: AI Consulting & Engineering');
    expect(hero).toContain('AI Consulting &amp; Engineering for SMEs');
    expect(hero).toContain('<WordsPullUp text="Quiet Gears" />');
    expect(home).not.toMatch(/How we work|styles\.process|processGrid/);
  });

  it('publishes the catalogue depth on every service page', () => {
    const page = read('app/services/[slug]/page.tsx');

    expect(page).not.toContain('ServiceSystemLab');
    expect(page).not.toContain('Operational ownership');
    expect(page).toContain('service.applications.map');
    expect(page).toContain('service.serviceSections.map');
    expect(page).toContain('service.expertise.map');
    expect(page).toContain('service.decisions.map');
    expect(page).toContain('service.results.map');
    expect(page).not.toMatch(/service\.(useCases|stages|provisions|safeguards|idealFor|poorFit|clientInputs|measures)/);
  });

  it('shows case-study photography without a colour treatment', () => {
    const listing = read('app/case-studies/case-studies.module.css');
    const detail = read('app/rebrand.css');
    const home = read('app/home.module.css');

    expect(listing).not.toMatch(/\.caseImage\s*\{[^}]*filter:/);
    expect(listing).not.toMatch(/\.caseStudy:hover \.caseImage\s*\{[^}]*filter:/);
    expect(detail).not.toContain('.case-rebrand-hero img');
    expect(home).not.toContain('.workPanel img{z-index:-2;filter');
  });
});
