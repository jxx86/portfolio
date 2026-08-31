import profile from '../data/profile.js';
import MorphPortrait from './MorphPortrait.jsx';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__body">
            <p className="hero__intro">嗨 <span>👋</span>，我是 <b>{profile.name}</b></p>
            <h1 className="hero__name">
              <span>{profile.title}</span>
              <span>{profile.valueProp}</span>
            </h1>
            <p className="hero__tag">{profile.tagline}</p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="#contact">联系方式</a>
              <a className="btn btn--ghost" href="#projects">查看我的作品 →</a>
            </div>
          </div>
          <div className="hero__portrait">
            <MorphPortrait
              src={profile.portrait}
              hoverSrc={profile.portraitHover}
              name={profile.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
