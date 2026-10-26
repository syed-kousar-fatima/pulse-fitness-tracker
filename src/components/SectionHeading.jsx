export default function SectionHeading({ eyebrow, title, highlight, description, align = 'left', light = false }) {
  return (
    <div className={`section-heading align-${align}${light ? ' heading-light' : ''}`} data-reveal>
      <span className="eyebrow"><i />{eyebrow}</span>
      <h2>{title} {highlight && <em>{highlight}</em>}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
