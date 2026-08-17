export type ReportSource = {
  label: string;
  href: string;
  detail?: string;
};

export type ReportParagraph = {
  text: string;
  sources?: ReportSource[];
};

export type ReportSection<TExhibit> = {
  heading: string;
  purpose: string;
  role?: 'analysis' | 'counterargument' | 'conclusion';
  transition?: string;
  paragraphs: ReportParagraph[];
  exhibits?: TExhibit[];
};

export function dedupeSources(sources: ReportSource[]) {
  const registry = new Map<string, ReportSource>();
  sources.forEach((source) => {
    const current = registry.get(source.href);
    registry.set(source.href, current ? { ...current, detail: current.detail ?? source.detail } : source);
  });
  return [...registry.values()];
}
