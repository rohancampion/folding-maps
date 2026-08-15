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

