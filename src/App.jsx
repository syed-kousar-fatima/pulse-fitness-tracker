import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import Footer from './components/Footer';
import DashboardSection from './sections/DashboardSection';
import HeroSection from './sections/HeroSection';
import WorkoutsSection from './sections/WorkoutsSection';
import ProgressSection from './sections/ProgressSection';
import NutritionSection from './sections/NutritionSection';
import GoalsSection from './sections/GoalsSection';
import BmiSection from './sections/BmiSection';
import useReveal from './hooks/useReveal';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  useReveal();

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), 1550);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateScrollState = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  const openDashboard = () => {
    setDashboardOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeDashboard = () => {
    setDashboardOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <Navbar dashboardOpen={dashboardOpen} onDashboard={openDashboard} onHome={closeDashboard} />
      {dashboardOpen ? (
        <main className="standalone-dashboard"><DashboardSection standalone /></main>
      ) : (
        <>
          <main>
            <HeroSection />
            <WorkoutsSection />
            <ProgressSection />
            <NutritionSection />
            <GoalsSection />
            <BmiSection />
          </main>
          <Footer onDashboard={openDashboard} />
        </>
      )}
      {showBackToTop && <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><FiArrowUp /></button>}
    </>
  );
}
