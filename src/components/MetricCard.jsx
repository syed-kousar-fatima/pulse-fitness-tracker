export default function MetricCard({ icon: Icon, label, value, unit, change, color }) {
  return (
    <article className={`metric-card metric-${color}`} data-reveal>
      <div className="metric-top"><span className="metric-icon"><Icon /></span><span className="metric-change">{change}</span></div>
      <p>{label}</p>
      <div className="metric-value">{value}<small>{unit}</small></div>
    </article>
  );
}
