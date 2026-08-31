import profile from '../data/profile.js';
import SectionTitle from './SectionTitle.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="reveal">
          <SectionTitle index="02" title="专业能力" />
        </div>
        <div className="skills-grid reveal">
          <div className="abilities">
            {profile.abilities.map((a) => (
              <div className="ability" key={a.name}>
                <div className="ability__head">
                  <span>{a.name}</span>
                  <span className="ability__num">{a.level}%</span>
                </div>
                <div className="ability__bar">
                  <span style={{ width: `${a.level}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="tools">
            <p className="tools__label">工具 &amp; 方法</p>
            <div className="tools__list">
              {profile.tools.map((t) => <span className="chip" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
