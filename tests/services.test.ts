import { describe, expect, it } from 'vitest';
import { getService, services } from '../lib/services';

describe('services content model', () => {
  it('publishes the complete service collection with unique routes', () => {
    expect(services).toHaveLength(20);
    expect(new Set(services.map(({ slug }) => slug)).size).toBe(services.length);
    services.forEach((service) => expect(getService(service.slug)).toBe(service));
  });

  it('gives every service technical depth and at least two concrete use cases', () => {
    services.forEach((service) => {
      expect(service.explanation.length).toBeGreaterThan(120);
      expect(service.technologies.length).toBeGreaterThanOrEqual(4);
      expect(service.stages).toHaveLength(4);
      expect(service.useCases.length).toBeGreaterThanOrEqual(2);
      expect(service.provisions.length).toBeGreaterThanOrEqual(4);
      expect(service.safeguards.length).toBeGreaterThanOrEqual(4);
      service.useCases.forEach((useCase) => {
        expect(useCase.problem.length).toBeGreaterThan(50);
        expect(useCase.example.length).toBeGreaterThan(70);
        expect(useCase.path).toHaveLength(4);
      });
    });
  });

  it('publishes Secure AI Systems as a local and offline build capability', () => {
    const secureAI = getService('secure-ai-systems');
    expect(secureAI?.group).toBe('Build');
    expect(secureAI?.summary).toMatch(/local and offline models/i);
    expect(secureAI?.technologies).toContain('Network isolation');
    expect(secureAI?.safeguards).toContain('No routine cloud model or telemetry dependency');
  });

  it('contains no pricing or em dashes in the service catalogue', () => {
    const content = JSON.stringify(services);
    expect(content).not.toMatch(/£|GBP|pricing/i);
    expect(content).not.toContain('—');
  });
});
