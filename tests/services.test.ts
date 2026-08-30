import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getService, serviceAliases, services } from '../lib/services';

const publishedStrings = services.flatMap((service) => [
  service.title,
  service.shortTitle,
  service.promise,
  service.summary,
  service.explanation,
  ...service.applications.flatMap((item) => [item.title, item.detail]),
  ...service.serviceSections.flatMap((section) => [section.title, ...section.paragraphs]),
  ...service.decisions.flatMap((item) => [item.title, item.detail]),
  ...service.results.flatMap((item) => [item.title, item.detail]),
  ...service.expertise,
]);

const titles = services.flatMap((service) => [
  service.title,
  ...service.applications.map((item) => item.title),
  ...service.serviceSections.map((section) => section.title),
  ...service.decisions.map((item) => item.title),
  ...service.results.map((item) => item.title),
]);

describe('services content model', () => {
  it('publishes the consolidated service collection with unique routes', () => {
    expect(services).toHaveLength(10);
    expect(services.map(({ slug }) => slug)).toEqual([
      'ai-strategy',
      'workflow-automation',
      'claude-implementation',
      'chatgpt-training-for-teams',
      'ai-chatbot',
      'ai-implementation',
      'secure-ai-systems',
      'enterprise-ai',
      'agentic-ai',
      'legacy-modernisation',
    ]);
    expect(new Set(services.map(({ slug }) => slug)).size).toBe(services.length);
    services.forEach((service) => expect(getService(service.slug)).toBe(service));
  });

  it('gives every service substantial applications, service detail, decisions and results', () => {
    services.forEach((service) => {
      expect(service.explanation.length).toBeGreaterThan(240);
      expect(service.applications.length).toBeGreaterThanOrEqual(3);
      expect(service.serviceSections.length).toBeGreaterThanOrEqual(3);
      expect(service.serviceSections.length).toBeLessThanOrEqual(4);
      expect(service.decisions).toHaveLength(4);
      expect(service.results).toHaveLength(4);
      expect(service.expertise.length).toBeGreaterThanOrEqual(4);
      service.applications.forEach((item) => expect(item.detail.length).toBeGreaterThan(120));
      service.serviceSections.forEach((section) => {
        expect(section.paragraphs).toHaveLength(2);
        expect(section.paragraphs.join(' ').length).toBeGreaterThan(220);
      });
      service.decisions.forEach((item) => expect(item.detail.length).toBeGreaterThanOrEqual(60));
      service.results.forEach((item) => expect(item.detail.length).toBeGreaterThanOrEqual(60));
    });
    expect(new Set(services.map((service) => service.serviceSections.length)).size).toBeGreaterThan(1);
  });

  it('keeps retired service routes mapped to their consolidated service', () => {
    expect(Object.keys(serviceAliases)).toHaveLength(8);
    Object.entries(serviceAliases).forEach(([legacySlug, canonicalSlug]) => {
      expect(getService(legacySlug)).toBeUndefined();
      expect(getService(canonicalSlug)).toBeDefined();
    });
  });

  it('publishes Secure AI Systems as a local and offline build capability', () => {
    const secureAI = getService('secure-ai-systems');
    expect(secureAI?.group).toBe('Build');
    expect(secureAI?.summary).toMatch(/local, offline, private-cloud/i);
    expect(secureAI?.serviceSections.map((section) => section.title)).toContain('Confidentiality and availability');
    expect(secureAI?.results.map((result) => result.title)).toContain('Protected task volume');
  });

  it('uses direct titles without interrogative framing', () => {
    expect(titles.join(' ')).not.toMatch(/\b(what|where|how|why|when|which|who|whether)\b/i);
  });

  it('keeps banned vocabulary and stock structures out of service copy', () => {
    const copy = publishedStrings.join(' ');
    expect(copy).not.toMatch(/\b(records?|pipelines?|workflows?|rollouts?|evidence)\b/i);
    expect(copy).not.toMatch(/\bdata flows?\b/i);
    expect(copy).not.toMatch(/\bown(?:s|ed|ing|ership)?\b/i);
    expect(copy).not.toMatch(/\bearn(?:s|ed|ing)?\b/i);
    expect(copy).not.toMatch(/take ownership/i);
    expect(copy.toLowerCase()).not.toContain('rather than');
    expect(copy.toLowerCase()).not.toContain('instead of');
    expect(copy).not.toMatch(/,\s+not\s+/i);
    expect(copy).not.toContain('—');
  });

  it('shows services and results without staged delivery material or tables', () => {
    const detailPage = readFileSync('app/services/[slug]/page.tsx', 'utf8');
    const indexPage = readFileSync('app/services/page.tsx', 'utf8');
    const shell = readFileSync('components/Shell.tsx', 'utf8');
    const pages = `${detailPage}\n${indexPage}`;
    expect(pages).not.toContain('<table');
    expect(pages).not.toMatch(/service\.(stages|useCases|poorFit|clientInputs|path)/);
    expect(pages).not.toMatch(/Four stages|delivery path|Poor fit|Example release/i);
    expect(detailPage).toContain('service.serviceSections');
    expect(detailPage).toContain('service.results');
    expect(shell).toContain("['Process automation', '/services/workflow-automation']");
    expect(shell).not.toContain("['Workflow automation', '/services/workflow-automation']");
  });
});
