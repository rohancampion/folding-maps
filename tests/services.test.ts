import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getService, serviceAliases, services } from '../lib/services';

const publishedStrings = services.flatMap((service) => [
  service.title,
  service.shortTitle,
  service.summary,
  service.outcome,
  ...service.offerings.flatMap((offering) => [
    offering.title,
    offering.detail,
    ...offering.subservices.flatMap((item) => [item.title, item.detail]),
  ]),
  ...service.applications.flatMap((item) => [item.title, item.detail]),
  ...service.deliverables.flatMap((item) => [item.title, item.detail]),
  ...(service.technicalScope ?? []).flatMap((item) => [item.term, item.detail]),
  ...service.faqs.flatMap((item) => [item.question, item.answer]),
]);

const titles = services.flatMap((service) => [
  service.title,
  ...service.offerings.flatMap((offering) => [
    offering.title,
    ...offering.subservices.map((item) => item.title),
  ]),
  ...service.applications.map((item) => item.title),
  ...service.deliverables.map((item) => item.title),
  ...(service.technicalScope ?? []).map((item) => item.term),
  ...service.faqs.map((item) => item.question),
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

  it('gives every page services, sub-services, applications, deliverables and FAQs', () => {
    services.forEach((service) => {
      expect(service.summary.length).toBeGreaterThan(80);
      expect(service.outcome.length).toBeGreaterThan(70);
      expect(service.offerings.length).toBeGreaterThanOrEqual(3);
      expect(service.offerings.length).toBeLessThanOrEqual(4);
      expect(service.applications.length).toBeGreaterThanOrEqual(3);
      expect(service.deliverables.length).toBeGreaterThanOrEqual(4);
      expect(service.deliverables.length).toBeLessThanOrEqual(6);
      expect(service.faqs).toHaveLength(4);

      service.offerings.forEach((offering) => {
        expect(offering.detail.length).toBeGreaterThan(70);
        expect(offering.subservices.length).toBeGreaterThanOrEqual(2);
        offering.subservices.forEach((item) => expect(item.detail.length).toBeGreaterThan(45));
      });
      service.applications.forEach((item) => expect(item.detail.length).toBeGreaterThan(70));
      service.deliverables.forEach((item) => expect(item.detail.length).toBeGreaterThan(55));
      service.faqs.forEach((item) => {
        expect(item.question).toMatch(/^(Can|Does|Is|Are)\b/);
        expect(item.answer.length).toBeGreaterThan(60);
      });
    });
  });

  it('keeps retired service routes mapped to their consolidated service', () => {
    expect(Object.keys(serviceAliases)).toHaveLength(8);
    Object.entries(serviceAliases).forEach(([legacySlug, canonicalSlug]) => {
      expect(getService(legacySlug)).toBeUndefined();
      expect(getService(canonicalSlug)).toBeDefined();
    });
  });

  it('publishes Secure AI Systems as a local and offline hardware capability', () => {
    const secureAI = getService('secure-ai-systems');
    expect(secureAI?.group).toBe('Build');
    expect(secureAI?.summary).toMatch(/private-cloud.*on-premises.*offline/i);
    expect(secureAI?.offerings.map((item) => item.title)).toContain('Local and offline systems');
    expect(secureAI?.deliverables.map((item) => item.title)).toContain('Configured hardware option');
    expect(secureAI?.technicalScope?.map((item) => item.term)).toContain('Hardware specification');
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
    expect(copy).not.toMatch(/\bgood to know\b/i);
    expect(copy).not.toMatch(/\bnot just\b/i);
    expect(copy).not.toMatch(/\b(seamless|holistic|pivotal|unlock|empower|elevate|delve|cutting-edge|game-changing|synergy|tapestry|realm|robust|bespoke)\b/i);
    expect(copy.toLowerCase()).not.toContain('rather than');
    expect(copy.toLowerCase()).not.toContain('instead of');
    expect(copy).not.toMatch(/,\s+not\s+/i);
    expect(copy).not.toContain('—');
  });

  it('uses the product-page structure without retired content or staged delivery material', () => {
    const detailPage = readFileSync('app/services/[slug]/page.tsx', 'utf8');
    const serviceData = readFileSync('lib/services.ts', 'utf8');
    const shell = readFileSync('components/Shell.tsx', 'utf8');

    expect(detailPage).not.toContain('<table');
    expect(detailPage).toContain('service.offerings.map');
    expect(detailPage).toContain('offering.subservices.map');
    expect(detailPage).toContain('service.applications.map');
    expect(detailPage).toContain('service.deliverables.map');
    expect(detailPage).toContain('service.technicalScope.map');
    expect(detailPage).toContain('service.faqs.map');
    expect(detailPage).toContain('<details');
    expect(detailPage).toContain('<summary>');
    expect(detailPage).toContain('<dl');
    expect(detailPage).not.toMatch(/service\.(promise|explanation|serviceSections|decisions|results|expertise)\b/);
    expect(serviceData).not.toMatch(/\b(promise|explanation|serviceSections|decisions|results|expertise)\??:/);
    expect(detailPage).not.toMatch(/Four stages|delivery path|Poor fit|Example release/i);
    expect(shell).toContain("['Process automation', '/services/workflow-automation']");
    expect(shell).not.toContain("['Workflow automation', '/services/workflow-automation']");
  });
});
