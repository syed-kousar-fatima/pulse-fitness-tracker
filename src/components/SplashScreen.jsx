import { FiActivity } from 'react-icons/fi';

export default function SplashScreen({ onFinish }) {
  return (
    <div className="splash-screen" onClick={onFinish} role="status" aria-label="Loading PULSE fitness">
      <div className="splash-content">
        <div className="splash-icon"><FiActivity /></div>
        <p aria-label="PULSE">
          {'PULSE'.split('').map((letter, index) => (
            <span
              className="splash-letter"
              key={letter}
              style={{ animationDelay: `${index * 110}ms` }}
              aria-hidden="true"
            >
              {letter}
            </span>
          ))}
          <span className="splash-period" aria-hidden="true">.</span>
        </p>
        <small>MOVE WITH INTENTION</small>
        <div className="splash-progress"><span /></div>
      </div>
    </div>
  );
}
