import { FiArrowUpRight, FiAward, FiTrendingUp } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';

const weeks = [
  { label: 'WEEK 01', value: '3.2', unit: 'hrs', bar: 40 },
  { label: 'WEEK 02', value: '4.5', unit: 'hrs', bar: 58 },
  { label: 'WEEK 03', value: '5.1', unit: 'hrs', bar: 72 },
  { label: 'WEEK 04', value: '6.4', unit: 'hrs', bar: 92 },
];

export default function ProgressSection() {
  return (
    <section className="progress-section section-pad" id="progress">
      <div className="container-wide progress-layout">
        <div className="progress-copy"><SectionHeading eyebrow="LOOK HOW FAR" title="Progress looks" highlight="good on you." description="No finish line, no keeping up. Just you, getting a little stronger every week." /><a className="button button-dark" href="#goals">See your progress <FiArrowUpRight /></a><div className="progress-quote"><span>“</span><p>You don’t have to see the whole staircase. Just take the first step.</p><small>— MARTIN LUTHER KING JR.</small></div></div>
        <div className="progress-visual" data-reveal>
          <div className="progress-card-main">
            <div className="progress-card-header"><div><span className="eyebrow"><i /> YOUR JOURNEY</span><h3>More you, every week.</h3></div><span className="trend-pill"><FiTrendingUp /> +32%</span></div>
            <div className="progress-total"><strong>19.2</strong><span>hours of movement<br />this month</span></div>
            <div className="week-bars">{weeks.map((week, i) => <div className="week-bar-col" key={week.label}><span className="bar-value">{week.value}<small>{week.unit}</small></span><div className="week-bar"><i style={{ height: `${week.bar}%`, animationDelay: `${i * 110}ms` }} /></div><span className="bar-label">{week.label}</span></div>)}</div>
            <div className="progress-card-foot"><span><i /> ACTIVE MINUTES</span><span>Last 4 weeks</span></div>
          </div>
          <div className="achievement-card"><span className="achievement-icon"><FiAward /></span><div><small>LATEST MILESTONE</small><strong>First 5K done!</strong><span>You showed up. It counted.</span></div><span className="achievement-spark">✳</span></div>
          <div className="progress-sticker"><span>KEEP</span><strong>GOING</strong><i>✳</i></div>
        </div>
      </div>
    </section>
  );
}
