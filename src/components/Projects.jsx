import profile from '../data/profile.js';
import SectionTitle from './SectionTitle.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="reveal">
          <SectionTitle index="03" title="精选项目" />
        </div>
        <div className="projects">
          {profile.projects.map((p) => (
            <a className="project reveal" href={`#/project/${p.id}`} key={p.id}>
              <div className="project__meta">
                <span className="project__role">{p.role}</span>
                <span className="project__period">{p.period}</span>
              </div>
              <h3 className="project__name">{p.name}</h3>
              <p className="project__summary">{p.summary}</p>
              <div className="project__metrics">
                {p.metrics.map((m) => <span className="chip chip--sm" key={m}>{m}</span>)}
              </div>
              <span className="project__more">查看案例 →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
