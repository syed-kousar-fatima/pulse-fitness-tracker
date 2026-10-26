import { useState } from 'react';
import { FiArrowUpRight, FiHeart } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import MealCard from '../components/MealCard';
import DetailModal from '../components/DetailModal';
import { meals } from '../data/fitnessData';

export default function NutritionSection() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  return (
    <section className="nutrition-section section-pad" id="nutrition">
      <div className="container-wide">
        <div className="nutrition-top"><SectionHeading eyebrow="FEEL GOOD, EAT WELL" title="Good things" highlight="start here." description="Fuel that feels as good as it tastes. Simple, balanced meals for the life you actually live." /><div className="nutrition-stamp" data-reveal><FiHeart /><span>REAL FOOD.<br />REAL GOOD.</span></div></div>
        <div className="nutrition-callout" data-reveal><div><span className="eyebrow"><i /> YOUR DAILY FUEL</span><h3>Eat well. Feel everything.</h3><p>Thoughtful meals, not rules. Find a balance that works for your body and your day.</p></div><div className="nutrition-callout-stats"><span><strong>2,140</strong><small>CAL DAILY GOAL</small></span><i /><span><strong>124<span>g</span></strong><small>PROTEIN TARGET</small></span></div><a href="#nutrition" aria-label="Explore meal plans"><FiArrowUpRight /></a></div>
        <div className="meal-grid">{meals.map((meal, index) => <MealCard key={meal.title} meal={meal} index={index} onDetails={setSelectedMeal} />)}</div>
        <div className="nutrition-footer"><span>FUEL YOUR OWN KIND OF STRONG.</span><span className="nutrition-count">06 IDEAS · TAP AN ARROW FOR INGREDIENTS</span></div>
      </div>
      <DetailModal item={selectedMeal} type="nutrition" onClose={() => setSelectedMeal(null)} />
    </section>
  );
}
