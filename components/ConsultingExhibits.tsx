import { Cog } from 'lucide-react';
import type { BlueprintStep } from '@/lib/paperDepth';

type Metric = {
  value: string;
  label: string;
  detail?: string;
};

export type ResearchFinding = {
  statistic: string;
  finding: string;
  implication: string;
  source: string;
  href: string;
};

export function MetricStrip({ metrics }: { metrics: Metric[] }) {
  return (
    <section className="metric-strip" aria-label="Key facts">
      {metrics.map((metric) => (
        <div className="metric-item" key={`${metric.value}-${metric.label}`}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          {metric.detail && <small>{metric.detail}</small>}
        </div>
      ))}
    </section>
  );
}

export function ProcessExhibit({
  number,
  title,
  steps,
}: {
  number: string;
  title: string;
  steps: { label: string; detail: string }[];
}) {
  return (
    <figure className="consulting-exhibit process-exhibit">
      <figcaption><span>Exhibit {number}</span><h2>{title}</h2></figcaption>
      <div className="process-flow">
        {steps.map((step, index) => (
          <div className="process-node" key={step.label}>
            <b>{String(index + 1).padStart(2, '0')}</b>
            <strong>{step.label}</strong>
            <p>{step.detail}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}

export function CodeExhibit({
  title,
  eyebrow,
  lines,
  nodes,
}: {
  title: string;
  eyebrow: string;
  lines: string[];
  nodes: string[];
}) {
  return (
    <figure className="code-exhibit">
      <figcaption><span>{eyebrow}</span><h2>{title}</h2></figcaption>
      <div className="code-system">
        <div className="code-window" aria-label="Illustrative implementation pattern">
          <div className="code-dots"><i/><i/><i/></div>
          <pre><code>{lines.map((line, index) => <span key={`${line}-${index}`}><b>{String(index + 1).padStart(2, '0')}</b>{line}</span>)}</code></pre>
        </div>
        <div className="system-nodes" aria-label="System architecture">
          {nodes.map((node, index) => <div key={node}><i>{String(index + 1).padStart(2, '0')}</i><span>{node}</span></div>)}
        </div>
      </div>
    </figure>
  );
}

export function ResearchEvidence({
  title,
  findings,
}: {
  title: string;
  findings: ResearchFinding[];
}) {
  return (
    <section className="research-evidence">
      <div className="research-heading"><span>Research context</span><h2>{title}</h2><p>Findings are paraphrased from the linked original publications. Their scope and populations differ, so they inform the thesis rather than prove a universal outcome.</p></div>
      <div className="research-grid">
        {findings.map((item) => (
          <article key={`${item.statistic}-${item.source}`}>
            <strong>{item.statistic}</strong>
            <h3>{item.finding}</h3>
            <p>{item.implication}</p>
            <a href={item.href} target="_blank" rel="noreferrer">Source: {item.source}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BlueprintExhibit({
  title,
  eyebrow,
  steps,
}: {
  title: string;
  eyebrow: string;
  steps: BlueprintStep[];
}) {
  return (
    <section className="depth-blueprint">
      <div className="depth-heading"><span>{eyebrow}</span><h2>{title}</h2><p>Each work package ends with an explicit decision and a tangible output. The sequence keeps delivery connected to operating evidence.</p></div>
      <div className="depth-blueprint-grid">
        {steps.map((step, index) => (
          <article key={step.title}>
            <div className="depth-gear"><Cog size={42}/><b>{String(index + 1).padStart(2, '0')}</b></div>
            <h3>{step.title}</h3>
            <dl>
              <div><dt>Decision</dt><dd>{step.decision}</dd></div>
              <div><dt>Work</dt><dd>{step.actions}</dd></div>
              <div><dt>Output</dt><dd>{step.deliverable}</dd></div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
