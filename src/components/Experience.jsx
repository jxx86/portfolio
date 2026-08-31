import profile from '../data/profile.js';
import SectionTitle from './SectionTitle.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="reveal">
          <SectionTitle index="04" title="经历" />
        </div>

        <div className="timeline reveal">
          <h3 className="timeline__label">工作经历</h3>
          {profile.experience.map((e, i) => (
            <div className="timeline__item" key={i}>
              <div className="timeline__meta">
                <span className="timeline__title">{e.org}</span>
                <span className="timeline__period">{e.period}</span>
              </div>
              <p className="timeline__role">{e.role}</p>
              <ul>
                {e.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="timeline reveal">
          <h3 className="timeline__label">教育背景</h3>
          {profile.education.map((e, i) => (
            <div className="timeline__item" key={i}>
              <div className="timeline__meta">
                <span className="timeline__title">{e.school}</span>
                <span className="timeline__period">{e.period}</span>
              </div>
              <p className="timeline__role">{e.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
