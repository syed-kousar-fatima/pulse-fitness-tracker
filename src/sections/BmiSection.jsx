import { useState } from 'react';
import { FiArrowUpRight, FiInfo, FiRefreshCw } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import { calculateBmi, getBmiLabel } from '../utils/bmi';

export default function BmiSection() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const bmi = calculateBmi(height, weight);
  const progress = bmi ? Math.min(100, Math.max(8, ((bmi - 12) / 28) * 100)) : 0;
  const reset = () => { setHeight(''); setWeight(''); };
  return (
    <section className="bmi-section section-pad" id="bmi">
      <div className="container-wide bmi-layout">
        <div className="bmi-copy"><SectionHeading eyebrow="A LITTLE CONTEXT" title="Get to know" highlight="your numbers." description="A starting point, not the whole story. Use BMI as one small piece of your personal wellness picture." /><div className="bmi-disclaimer"><FiInfo /><p>BMI is a general screening measure and doesn’t account for muscle mass, age, or individual differences. It’s one data point—not a diagnosis.</p></div></div>
        <div className="bmi-calculator" data-reveal>
          <div className="bmi-card-heading"><span className="eyebrow"><i /> YOUR BODY, YOUR BASELINE</span><button type="button" onClick={reset} aria-label="Reset BMI calculator"><FiRefreshCw /></button></div>
          <h3>BMI calculator</h3><p className="bmi-subtitle">Enter your details to see your estimate.</p>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>Height <span>cm</span><input type="number" min="1" max="300" placeholder="e.g. 170" value={height} onChange={(event) => setHeight(event.target.value)} /></label>
            <label>Weight <span>kg</span><input type="number" min="1" max="600" placeholder="e.g. 68" value={weight} onChange={(event) => setWeight(event.target.value)} /></label>
          </form>
          <div className="bmi-result"><div className="bmi-result-copy"><small>YOUR ESTIMATED BMI</small><strong>{bmi ?? '—'}</strong><span>{bmi ? getBmiLabel(bmi) : 'Enter height and weight'}</span></div><div className="bmi-meter-wrap"><div className="bmi-meter"><i style={{ left: `${progress}%` }} /></div><div className="bmi-meter-labels"><span>LOW</span><span>HEALTHY</span><span>HIGH</span></div></div></div>
          <a href="#goals" className="bmi-cta">A number doesn’t define you <FiArrowUpRight /></a>
        </div>
      </div>
    </section>
  );
}
