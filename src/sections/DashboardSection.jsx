import { FiActivity, FiArrowUpRight, FiClock, FiDroplet, FiHeart, FiTarget, FiZap } from 'react-icons/fi';
import MetricCard from '../components/MetricCard';
import SectionHeading from '../components/SectionHeading';
import ProgressChart from '../components/ProgressChart';

export default function DashboardSection({ standalone = false }) {
  return (
    <section className={`dashboard-section section-pad${standalone ? ' dashboard-section-standalone' : ''}`} id={standalone ? 'dashboard-view' : 'dashboard'}>
      <div className="container-wide">
        <div className="dashboard-intro"><SectionHeading eyebrow={standalone ? 'YOUR PERSONAL FITNESS SPACE' : 'MONDAY, OCTOBER 26'} title={standalone ? 'Your dashboard,' : 'Your day, in'} highlight={standalone ? 'in motion.' : 'motion.'} description={standalone ? 'A clear look at your activity, daily balance, and the progress you’re building.' : 'Small wins add up. Here’s how you’re showing up today.'} /><div className="dashboard-date" data-reveal><span className="date-number">26</span><span>OCT<br />MONDAY</span><i /></div></div>
        <div className="metrics-grid">
          <MetricCard icon={FiActivity} label="Steps today" value="8,426" unit="steps" change="+12.8%" color="lime" />
          <MetricCard icon={FiZap} label="Calories burned" value="684" unit="kcal" change="+8.2%" color="orange" />
          <MetricCard icon={FiClock} label="Active time" value="56" unit="min" change="+16.4%" color="violet" />
          <MetricCard icon={FiHeart} label="Heart rate" value="72" unit="bpm" change="Resting" color="pink" />
        </div>
        <div className="dashboard-lower">
          <div className="activity-panel" data-reveal>
            <div className="panel-heading"><div><span className="eyebrow"><i /> YOUR MOVEMENT</span><h3>Weekly activity</h3></div><button type="button" className="select-button">This week <span>⌄</span></button></div>
            <div className="chart-summary"><strong>42,890 <small>steps</small></strong><span><i /> 18% vs last week</span></div>
            <ProgressChart />
          </div>
          <div className="daily-panel" data-reveal>
            <div className="panel-heading"><div><span className="eyebrow"><i /> THE DAILY MIX</span><h3>Today’s balance</h3></div><span className="daily-icon"><FiTarget /></span></div>
            <div className="ring-wrap"><div className="daily-ring"><div><strong>74<span>%</span></strong><small>DAILY GOAL</small></div></div><div className="ring-caption">You’re doing great.<br />Keep it rolling.</div></div>
            <div className="daily-goals">
              <div><span className="goal-dot goal-lime"><FiActivity /></span><span>Move</span><b>42 <small>/ 60 min</small></b></div>
              <div><span className="goal-dot goal-orange"><FiZap /></span><span>Burn</span><b>684 <small>/ 900 kcal</small></b></div>
              <div><span className="goal-dot goal-blue"><FiDroplet /></span><span>Hydrate</span><b>5 <small>/ 8 glasses</small></b></div>
            </div>
            <a className="text-link" href="#goals">See all goals <FiArrowUpRight /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
