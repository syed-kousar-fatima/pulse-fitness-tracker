import { useState } from 'react';
import { FiArrowUpRight, FiCheck, FiPlus, FiTarget } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import { initialGoals } from '../data/fitnessData';

export default function GoalsSection() {
  const [goals, setGoals] = useState(initialGoals);
  const updateGoal = (index, amount) => setGoals((current) => current.map((goal, i) => i === index ? { ...goal, current: Math.min(goal.target, Math.max(0, goal.current + amount)) } : goal));
  return (
    <section className="goals-section section-pad" id="goals">
      <div className="container-wide">
        <div className="goals-heading"><SectionHeading eyebrow="ONE STEP AT A TIME" title="Your goals." highlight="Your rules." description="Make space for what matters to you. Every little win belongs here." /><div className="goal-count" data-reveal><span>03</span><small>IN<br />MOTION</small></div></div>
        <div className="goals-grid">{goals.map((goal, index) => {
          const percent = Math.round((goal.current / goal.target) * 100);
          return <article className={`goal-card goal-card-${goal.color}`} key={goal.title} data-reveal style={{ '--reveal-delay': `${index * 100}ms` }}>
            <div className="goal-card-top"><span className="goal-card-icon"><FiTarget /></span><span className="goal-tag">{percent >= 100 ? 'COMPLETE' : 'IN PROGRESS'}</span></div>
            <h3>{goal.title}</h3><p>{goal.detail}</p>
            <div className="goal-number"><strong>{goal.current}</strong><span>/ {goal.target} {goal.unit}</span></div>
            <div className="goal-track"><i style={{ width: `${percent}%` }} /></div>
            <div className="goal-card-bottom"><span>{percent}% there</span><button type="button" onClick={() => updateGoal(index, 1)} aria-label={`Add progress to ${goal.title}`}>{percent >= 100 ? <FiCheck /> : <FiPlus />}</button></div>
          </article>;
        })}</div>
        <div className="goals-foot"><span>Your pace. Your goals. Your kind of progress.</span><a href="#bmi" className="text-link">Keep building <FiArrowUpRight /></a></div>
      </div>
    </section>
  );
}
