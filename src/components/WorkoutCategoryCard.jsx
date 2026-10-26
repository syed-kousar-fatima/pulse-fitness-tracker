import { FiArrowUpRight } from 'react-icons/fi';

export default function WorkoutCategoryCard({ category, index, onSelect }) {
  return (
    <button className="category-card" type="button" onClick={() => onSelect(category.name)} data-reveal style={{ '--reveal-delay': `${index * 90}ms`, backgroundImage: `linear-gradient(0deg, rgba(12,15,10,.88), rgba(12,15,10,.05) 78%), url("${category.image}")` }}>
      <span className="category-count">{category.count}</span>
      <span className="category-card-content"><span className="category-tagline">{category.tagline}</span><strong>{category.name}</strong></span>
      <span className="category-explore">Explore more <FiArrowUpRight /></span>
    </button>
  );
}
