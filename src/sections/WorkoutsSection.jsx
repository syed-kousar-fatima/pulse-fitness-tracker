import { useMemo, useState } from 'react';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import WorkoutCard from '../components/WorkoutCard';
import WorkoutCategoryCard from '../components/WorkoutCategoryCard';
import DetailModal from '../components/DetailModal';
import { workoutCategories, workouts } from '../data/fitnessData';

export default function WorkoutsSection() {
  const [category, setCategory] = useState(null);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const filtered = useMemo(() => category ? workouts.filter((workout) => workout.category === category) : [], [category]);
  return (
    <section className="workouts-section section-pad" id="workouts">
      <div className="container-wide">
        <div className="workouts-header"><SectionHeading eyebrow="MADE TO MOVE YOU" title={category ? `Find your ${category.toLowerCase()}` : 'A good day to'} highlight={category ? 'session.' : 'get moving.'} description={category ? `Pick a ${category.toLowerCase()} session that fits your energy today. Every workout includes a clear breakdown and your progress.` : 'Whatever your energy looks like today, there’s a workout that meets you there.'} /><a className="text-link desktop-link" href="#goals">Set a new goal <FiArrowUpRight /></a></div>
        {category ? (
          <>
            <button className="back-categories" type="button" onClick={() => setCategory(null)}><FiArrowLeft /> All categories</button>
            <div className="workout-grid">{filtered.map((workout, i) => <WorkoutCard key={workout.title} workout={workout} index={i} onDetails={setSelectedWorkout} />)}</div>
          </>
        ) : (
          <div className="category-grid">{workoutCategories.map((item, index) => <WorkoutCategoryCard key={item.name} category={item} index={index} onSelect={setCategory} />)}</div>
        )}
        <div className="workout-footer"><span>GOOD FORM STARTS WHERE YOU ARE.</span><a href="#goals">Your next goal is waiting <FiArrowUpRight /></a></div>
      </div>
      <DetailModal item={selectedWorkout} type="workout" onClose={() => setSelectedWorkout(null)} />
    </section>
  );
}
