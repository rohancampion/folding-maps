import type { ArticleDepth } from '@/lib/paperDepth';

export function NewsAnalysisProse({ depth }: { depth: ArticleDepth }) {
  return (
    <div className="news-analysis-prose">
      <section className="editorial-prose-section">
        <div className="editorial-prose-heading"><span>Management brief</span><h2>Turning the argument into an operating decision</h2><p>A useful analysis should change what leaders do next. The sequence below moves from the first management choice to a release supported by observable evidence.</p></div>
        <div className="editorial-prose-column">
          {depth.playbook.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{step.title}</h3><p><strong>The decision is {step.decision.toLowerCase()}</strong> {step.actions} The work should leave a concrete result: {step.deliverable.toLowerCase()}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-prose-section editorial-risks">
        <div className="editorial-prose-heading"><span>Counterargument and risk</span><h2>Where the thesis can fail in practice</h2><p>The strongest case for action includes the conditions under which it would be wrong. These are the early signals that deserve management attention.</p></div>
        <div className="editorial-prose-column">
          {depth.risks.map((row, index) => (
            <article key={row.risk}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{row.risk}</h3><p>{row.earlySignal} is the warning sign. The practical control is {row.control.toLowerCase()}, with accountability held by the {row.owner.toLowerCase()}.</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-prose-section editorial-measurement">
        <div className="editorial-prose-heading"><span>What to measure</span><h2>A scorecard should support a decision, not decorate a report</h2><p>Each measure needs a stable definition, an earlier signal and a management response. Otherwise, reporting grows while understanding does not.</p></div>
        <div className="editorial-prose-column">
          {depth.scorecard.map((row, index) => (
            <article key={row.outcome}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{row.outcome}</h3><p>{row.definition}. Management should watch {row.leading.toLowerCase()} as the leading evidence. Movement should support a clear decision: {row.decision.toLowerCase()}.</p></div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
