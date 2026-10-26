import { weeklyActivity } from '../data/fitnessData';

export default function ProgressChart() {
  const points = weeklyActivity.map((item, index) => `${42 + index * 75},${190 - item.value * 1.35}`).join(' ');
  const area = `42,190 ${points} 492,190`;
  return (
    <div className="activity-chart">
      <div className="chart-y-labels"><span>12k</span><span>9k</span><span>6k</span><span>3k</span><span>0</span></div>
      <svg className="chart-svg" viewBox="0 0 534 220" role="img" aria-label="Weekly activity chart">
        <defs><linearGradient id="activityFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#c9f66f" stopOpacity=".23" /><stop offset="100%" stopColor="#c9f66f" stopOpacity="0" /></linearGradient></defs>
        {[28, 68, 108, 148, 188].map((y) => <line key={y} x1="42" x2="492" y1={y} y2={y} className="chart-grid-line" />)}
        <polygon points={area} fill="url(#activityFill)" />
        <polyline points={points} className="chart-line" />
        {weeklyActivity.map((item, index) => <circle key={item.day} cx={42 + index * 75} cy={190 - item.value * 1.35} r="4.5" className={index === 3 ? 'chart-dot chart-dot-active' : 'chart-dot'} />)}
      </svg>
      <div className="chart-x-labels">{weeklyActivity.map((item) => <span key={item.day}>{item.day}</span>)}</div>
    </div>
  );
}
