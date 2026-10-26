import { useEffect } from 'react';
import { FiActivity, FiClock, FiX, FiZap } from 'react-icons/fi';

export default function DetailModal({ item, type, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  if (!item) return null;

  const workout = type === 'workout';
  const details = workout ? item.exercises : item.ingredients;

  return (
    <div className="detail-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-modal-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close details"><FiX /></button>
        <div className="modal-image" style={{ backgroundImage: `url("${item.image}")` }}>
          <span className="modal-image-label">{workout ? item.category : item.type}</span>
        </div>
        <div className="modal-content">
          <span className="eyebrow"><i />{workout ? item.label : 'GOOD FOOD, YOUR WAY'}</span>
          <h2 id="detail-modal-title">{item.title}</h2>
          <p className="modal-description">{item.description}</p>
          <div className="modal-stats">
            {workout ? <>
              <span><FiClock /><b>{item.duration}</b><small>DURATION</small></span>
              <span><FiActivity /><b>{item.level}</b><small>DIFFICULTY</small></span>
              <span><FiZap /><b>{item.calories} kcal</b><small>EST. BURN</small></span>
            </> : <>
              <span><FiClock /><b>{item.type.split('·')[1]?.trim()}</b><small>PREP TIME</small></span>
              <span><FiZap /><b>{item.calories} kcal</b><small>ENERGY</small></span>
              <span><FiActivity /><b>{item.protein}</b><small>PROTEIN</small></span>
            </>}
          </div>
          {!workout && <div className="modal-nutrition-macros"><span>Carbohydrates <b>{item.carbs}</b></span><span>Total fat <b>{item.fat}</b></span><span>Protein <b>{item.protein}</b></span></div>}
          {workout && <div className="modal-progress"><div><span>YOUR SESSION PROGRESS</span><b>{item.progress}%</b></div><div className="progress-track"><span style={{ width: `${item.progress}%` }} /></div></div>}
          <div className="modal-list">
            <h3>{workout ? 'What you’ll do' : 'What’s inside'}</h3>
            {details.map((detail, index) => <div className="modal-list-item" key={detail}><span>{String(index + 1).padStart(2, '0')}</span><p>{detail}</p></div>)}
          </div>
        </div>
      </section>
    </div>
  );
}
