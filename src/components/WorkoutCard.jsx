import { FiArrowUpRight, FiClock, FiZap } from 'react-icons/fi';

export default function WorkoutCard({ workout, index, onDetails }) {
  return (
    <article className="workout-card" data-reveal style={{ '--reveal-delay': `${index * 90}ms` }}>
      <div className="workout-image" style={{ backgroundImage: `url("${workout.image}")` }}>
        <span className="image-tag">{workout.label}</span>
        <button className="card-arrow" type="button" onClick={() => onDetails(workout)} aria-label={`View ${workout.title} details`}><FiArrowUpRight /></button>
      </div>
      <div className="workout-info">
        <div className="workout-title-row"><div><span className="category-label">{workout.category}</span><h3>{workout.title}</h3></div><span className="difficulty">{workout.level}</span></div>
        <div className="workout-stats"><span><FiClock />{workout.duration}</span><span><FiZap />{workout.calories} kcal</span></div>
        <div className="workout-progress"><div className="progress-track"><span style={{ width: `${workout.progress}%` }} /></div><span>{workout.progress}%</span></div>
        <button className="workout-details-button" type="button" onClick={() => onDetails(workout)}>Workout details <FiArrowUpRight /></button>
      </div>
    </article>
  );
}
