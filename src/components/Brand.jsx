import { FiActivity } from 'react-icons/fi';

export default function Brand({ footer = false, href = '#home' }) {
  return (
    <a className={`brand${footer ? ' brand-footer' : ''}`} href={href} aria-label="PULSE fitness home">
      <span className="brand-mark"><FiActivity /></span>
      <span className="brand-copy"><strong>PULSE<span></span></strong><small>MOVE WITH INTENTION</small></span>
    </a>
  );
}
