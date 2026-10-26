import { FiArrowDown, FiArrowUpRight, FiPlay, FiStar } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-photo" />
      <div className="hero-overlay" />
      <div className="hero-content container-wide">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="status-dot" /> YOUR SPACE TO GET STRONGER</div>
          <h1>Find your<br />own <em>pulse.</em></h1>
          <p className="hero-description">Less pressure. More progress. A fitness experience built around you, wherever you’re starting from.</p>
          <div className="hero-actions"><a className="button button-lime" href="#workouts">Find your workout <FiArrowUpRight /></a><a className="play-link" href="#dashboard"><span><FiPlay /></span>Take a look around</a></div>
          <div className="hero-social-proof"><div className="avatar-stack"><img src="https://i.pinimg.com/736x/46/16/1a/46161a7e865d2240146a4b0ebc673b9d.jpg" alt="" /><img src="https://i.pinimg.com/736x/3d/93/a5/3d93a5eaac7de157c7a4ab2dff25ecb2.jpg" alt="" /><img src="https://i.pinimg.com/736x/0f/bd/b8/0fbdb837f796dcb763a69affcdc74fa4.jpg" alt="" /></div><span><b>12k+</b> people finding their form</span><span className="proof-rating"><FiStar /> 4.9</span></div>
        </div>
        <div className="hero-side-note"><span>01 / 04</span><i /><span>MADE FOR YOUR REAL LIFE</span></div>
        <a className="scroll-cue" href="#dashboard"><FiArrowDown /><span>SCROLL TO EXPLORE</span></a>
        <div className="hero-float-card"><div className="float-card-top"><span className="float-label">TODAY’S MOMENTUM</span><span className="live-dot" /></div><div className="float-number">82<span>%</span></div><div className="float-bottom"><span>You're on a roll.</span><div className="mini-bars">{[30, 47, 38, 70, 52, 88, 63, 100, 75].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div></div></div>
      </div>
      <div className="hero-bottom-line"><span>YOUR PACE. YOUR PATH.</span><span>SCROLL A LITTLE, FEEL A LOT <FiArrowDown /></span></div>
    </section>
  );
}
