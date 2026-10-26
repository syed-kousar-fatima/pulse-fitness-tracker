import { FiArrowUpRight, FiClock } from 'react-icons/fi';

export default function MealCard({ meal, index, onDetails }) {
  return (
    <article className="meal-card" data-reveal style={{ '--reveal-delay': `${index * 100}ms` }}>
      <div className="meal-image" style={{ backgroundImage: `url("${meal.image}")` }}><span><FiClock />{meal.type}</span></div>
      <div className="meal-content">
        <div className="meal-title"><h3>{meal.title}</h3><button type="button" onClick={() => onDetails(meal)} aria-label={`View ${meal.title} details`}><FiArrowUpRight /></button></div>
        <div className="meal-calories"><span>{meal.calories}</span> kcal <span className="meal-per-serving">per serving</span></div>
        <div className="nutrition-macros"><span><i className="macro-protein" />Protein <b>{meal.protein}</b></span><span><i className="macro-carbs" />Carbs <b>{meal.carbs}</b></span><span><i className="macro-fat" />Fat <b>{meal.fat}</b></span></div>
      </div>
    </article>
  );
}
