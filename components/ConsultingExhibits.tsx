import { Cog, ShieldAlert, Target } from 'lucide-react';
import type { BaselineRow, BlueprintStep, RiskRow, ScorecardRow } from '@/lib/paperDepth';

type Metric = {
  value: string;
  label: string;
  detail?: string;
};

type Bar = {
  label: string;
  value: number;
  display: string;
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

export function BarExhibit({
  number,
  title,
  subtitle,
  bars,
  note,
}: {
  number: string;
  title: string;
  subtitle: string;
  bars: Bar[];
  note: string;
}) {
  return (
    <figure className="consulting-exhibit">
      <figcaption>
        <span>Exhibit {number}</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </figcaption>
      <div className="bar-chart">
        {bars.map((bar) => (
          <div className="bar-row" key={bar.label}>
            <div className="bar-label"><span>{bar.label}</span><strong>{bar.display}</strong></div>
            <div className="bar-track" aria-hidden="true"><i style={{ width: `${Math.max(4, bar.value)}%` }}/></div>
          </div>
        ))}
      </div>
      <small className="exhibit-note">{note}</small>
    </figure>
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

export function OperatingTable({
  title,
  rows,
}: {
  title: string;
  rows: { decision: string; evidence: string; control: string; measure: string }[];
}) {
  return (
    <section className="operating-table-wrap">
      <span>Decision architecture</span>
      <h2>{title}</h2>
      <div className="operating-table" role="table" aria-label={title}>
        <div className="operating-table-head" role="row"><b>Decision</b><b>Required evidence</b><b>Control</b><b>Performance measure</b></div>
        {rows.map((row) => <div role="row" key={row.decision}><strong>{row.decision}</strong><span>{row.evidence}</span><span>{row.control}</span><span>{row.measure}</span></div>)}
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

export function BaselineMatrix({ title, rows }: { title: string; rows: BaselineRow[] }) {
  return (
    <section className="depth-table-wrap baseline-matrix">
      <div className="depth-heading"><span>Operating baseline</span><h2>{title}</h2><p>The diagnostic tests the current state using observable work, then describes the controlled operating state the release is intended to create.</p></div>
      <div className="depth-table" role="table" aria-label={title}>
        <div className="depth-table-head" role="row"><b>Operating area</b><b>Current condition</b><b>Evidence to collect</b><b>Target condition</b></div>
        {rows.map((row) => <div role="row" key={row.area}><strong>{row.area}</strong><span>{row.currentState}</span><span>{row.evidence}</span><span>{row.targetState}</span></div>)}
      </div>
    </section>
  );
}

export function RiskRegister({ title, rows }: { title: string; rows: RiskRow[] }) {
  return (
    <section className="depth-table-wrap risk-register">
      <div className="depth-heading"><span><ShieldAlert size={15}/> Delivery and operating risk</span><h2>{title}</h2><p>Risks become manageable when the early signal, control and accountable owner are agreed before release.</p></div>
      <div className="depth-table" role="table" aria-label={title}>
        <div className="depth-table-head" role="row"><b>Risk</b><b>Early signal</b><b>Primary control</b><b>Accountable owner</b></div>
        {rows.map((row) => <div role="row" key={row.risk}><strong>{row.risk}</strong><span>{row.earlySignal}</span><span>{row.control}</span><span>{row.owner}</span></div>)}
      </div>
    </section>
  );
}

export function ScorecardExhibit({ title, rows }: { title: string; rows: ScorecardRow[] }) {
  return (
    <section className="depth-table-wrap scorecard-exhibit">
      <div className="depth-heading"><span><Target size={15}/> Measurement system</span><h2>{title}</h2><p>Measures are useful only when their definition is stable and their movement changes a management decision.</p></div>
      <div className="depth-table" role="table" aria-label={title}>
        <div className="depth-table-head" role="row"><b>Outcome</b><b>Definition</b><b>Leading evidence</b><b>Decision supported</b></div>
        {rows.map((row) => <div role="row" key={row.outcome}><strong>{row.outcome}</strong><span>{row.definition}</span><span>{row.leading}</span><span>{row.decision}</span></div>)}
      </div>
    </section>
  );
}

