import { AlertTriangle, ArrowDownRight, ArrowUpRight, Eye, Target } from 'lucide-react';
import type { ReactNode } from 'react';
import type { DecisionRow } from '@/lib/content';
import type { CaseDepth } from '@/lib/paperDepth';

export function NarrativeOpening({
  label,
  title,
  paragraphs,
  centralQuestion,
}: {
  label: string;
  title: string;
  paragraphs: string[];
  centralQuestion?: string;
}) {
  return (
    <section className="narrative-opening">
      <span>{label}</span>
      <h2>{title}</h2>
      <div>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      {centralQuestion && <blockquote><b>The central question</b>{centralQuestion}</blockquote>}
    </section>
  );
}

export function AnalystLens({ lens }: { lens: { upside: string; downside: string; signal: string } }) {
  const items = [
    { label: 'Upside case', text: lens.upside, icon: <ArrowUpRight/> },
    { label: 'Downside case', text: lens.downside, icon: <ArrowDownRight/> },
    { label: 'Signal to watch', text: lens.signal, icon: <Eye/> },
  ];
  return (
    <section className="analyst-lens">
      <div className="analyst-lens-heading"><span>Analyst lens</span><h2>Where the argument creates value, and where it can break</h2></div>
      <div>{items.map((item) => <article key={item.label}>{item.icon}<span>{item.label}</span><p>{item.text}</p></article>)}</div>
    </section>
  );
}

export function EditorialConclusion({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section className="editorial-conclusion">
      <span>Analyst conclusion</span>
      <h2>{title}</h2>
      <div>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>
  );
}

function ProseGroup({
  eyebrow,
  title,
  intro,
  children,
  tone,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  tone?: string;
}) {
  return (
    <section className={`case-prose-group ${tone ?? ''}`}>
      <div className="case-prose-heading"><span>{eyebrow}</span><h2>{title}</h2><p>{intro}</p></div>
      <div className="case-prose-items">{children}</div>
    </section>
  );
}

export function CaseAnalysisNarrative({ depth, decisions }: { depth: CaseDepth; decisions: DecisionRow[] }) {
  return (
    <div className="case-analysis-narrative">
      <ProseGroup eyebrow="Operating baseline" title="The change begins with observable work, not a target architecture" intro="Each operating area is tested against real evidence before a target state is accepted.">
        {depth.baseline.map((row, index) => (
          <article key={row.area}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{row.area}</h3><p><strong>Today, {row.currentState.toLowerCase()}.</strong> The diagnostic tests this by asking the team to {row.evidence.toLowerCase()}. The intended change is {row.targetState.toLowerCase()}.</p></div></article>
        ))}
      </ProseGroup>

      <ProseGroup eyebrow="Decision architecture" title="The system is designed around decisions that can be explained" intro="Evidence, control and performance remain connected so that faster work does not weaken accountability.">
        {decisions.map((row, index) => (
          <article key={row.decision}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{row.decision}</h3><p>The decision uses <strong>{row.evidence.toLowerCase()}</strong>. Its principal control is {row.control.toLowerCase()}, while management watches {row.measure.toLowerCase()} for evidence that the design is working.</p></div></article>
        ))}
      </ProseGroup>

      <ProseGroup eyebrow="Risk and counterargument" title="A credible design states how it could fail" intro="The early signal matters because it gives the operating owner time to intervene before a control failure becomes an outcome." tone="case-prose-risks">
        {depth.risks.map((row, index) => (
          <article key={row.risk}><span><AlertTriangle/>{String(index + 1).padStart(2, '0')}</span><div><h3>{row.risk}</h3><p>The warning sign is <strong>{row.earlySignal.toLowerCase()}</strong>. The primary response is {row.control.toLowerCase()}, owned by the {row.owner.toLowerCase()}.</p></div></article>
        ))}
      </ProseGroup>

      <ProseGroup eyebrow="Acceptance and value" title="Release is tied to evidence that management can act on" intro="A measure earns its place only when movement changes a release, operating or investment decision." tone="case-prose-acceptance">
        {depth.acceptance.map((row, index) => (
          <article key={row.outcome}><span><Target/>{String(index + 1).padStart(2, '0')}</span><div><h3>{row.outcome}</h3><p>The outcome is defined as <strong>{row.definition.toLowerCase()}</strong>. Management should monitor {row.leading.toLowerCase()} before the result moves, then use the evidence to {row.decision.toLowerCase()}.</p></div></article>
        ))}
      </ProseGroup>
    </div>
  );
}
