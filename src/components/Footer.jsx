import { FiArrowUpRight, FiInstagram, FiMail, FiMapPin, FiTwitter, FiYoutube } from 'react-icons/fi';
import Brand from './Brand';

export default function Footer({ onDashboard }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top container-wide">
        <div className="footer-brand-column"><Brand footer /><p>Real progress, made personal.<br />Find your rhythm. Move with intention.</p><div className="social-links"><a href="https://instagram.com" aria-label="Instagram"><FiInstagram /></a><a href="https://youtube.com" aria-label="YouTube"><FiYoutube /></a><a href="https://twitter.com" aria-label="Twitter"><FiTwitter /></a></div></div>
        <div className="footer-column"><h3>Explore</h3><a href="#home">Home</a><a href="#workouts">Workouts</a><a href="#nutrition">Nutrition</a><a href="#progress">Progress</a></div>
        <div className="footer-column"><h3>Your PULSE</h3><button className="footer-dashboard-link" type="button" onClick={onDashboard}>Dashboard</button><a href="#goals">Your goals</a><a href="#bmi">BMI calculator</a><a href="#workouts">Find a workout</a></div>
        <div className="footer-column footer-contact"><h3>Get in touch</h3><a href="mailto:hello@pulse.fit"><FiMail />hello@pulse.fit</a><span><FiMapPin />Madhapur,Hyderabad</span><a className="footer-contact-link" href="mailto:hello@pulse.fit">We’d love to hear from you <FiArrowUpRight /></a></div>
      </div>
      <div className="footer-bottom container-wide"><span>© 2025 PULSE fitness. Move in your own direction.</span><div><a href="#contact">Privacy</a><a href="#contact">Terms</a><a href="#home">Back to top ↑</a></div></div>
    </footer>
  );
}
