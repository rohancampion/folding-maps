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

