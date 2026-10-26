import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import Brand from './Brand';

const links = [
  ['Home', '#home'],
  ['Workouts', '#workouts'],
  ['Nutrition', '#nutrition'],
  ['Progress', '#progress'],
  ['Contact', '#contact'],
];

export default function Navbar({ dashboardOpen, onDashboard, onHome }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', updateScrolled, { passive: true });
    updateScrolled();
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);
  const handleDashboard = () => {
    setOpen(false);
    onDashboard();
  };
  const handleHome = () => {
    setOpen(false);
    onHome();
  };
  return (
    <header className={`site-header${scrolled || dashboardOpen ? ' site-header-scrolled' : ''}${dashboardOpen ? ' site-header-dashboard' : ''}`}>
      <nav className="navbar container-wide" aria-label="Main navigation">
        <Brand href={dashboardOpen ? '#dashboard-view' : '#home'} />
        {!dashboardOpen && <>
          <div className={`nav-links${open ? ' nav-links-open' : ''}`}>
            {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          </div>
          <button className="nav-cta" type="button" onClick={handleDashboard}>My dashboard <FiArrowUpRight /></button>
          <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </>}
        {dashboardOpen && <button className="nav-cta" type="button" onClick={handleHome}><FiArrowUpRight className="back-home-icon" /> Back to PULSE</button>}
      </nav>
    </header>
  );
}
