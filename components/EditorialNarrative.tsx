export function NarrativeOpening({
  label,
  title,
  paragraphs,
  centralQuestion,
}: {
  label?: string;
  title: string;
  paragraphs: string[];
  centralQuestion?: string;
}) {
  return (
    <section className="narrative-opening">
      {label ? <span>{label}</span> : null}
      <h2>{title}</h2>
      <div>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      {centralQuestion && <blockquote><b>Decision test</b>{centralQuestion}</blockquote>}
    </section>
  );
}
