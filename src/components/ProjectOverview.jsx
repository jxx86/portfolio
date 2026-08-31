const CARDS = [
  { to: 'intro', num: '01', label: '产品需求文档', sub: 'PRD', desc: '产品背景、目标、用户、场景与功能需求' },
  { to: 'flow', num: '02', label: '流程图', desc: '核心业务流程图与信息架构结构' },
  { to: 'proto', num: '03', label: '原型页面', desc: '关键页面与高保真原型' },
];

export default function ProjectOverview({ project }) {
  if (!project) {
    return (
      <div className="notfound">
        <p>没有找到这个项目。</p>
        <a href="#projects">← 返回项目列表</a>
      </div>
    );
  }

  return (
    <article className="case">
      <div className="container">
        <a href="#projects" className="case-back">← 返回</a>

        <header className="case__head">
          <div className="case__meta">
            <span className="case__role">{project.role}</span>
            <span className="case__period">{project.period}</span>
          </div>
          <h1 className="case__title">{project.name}</h1>
          <p className="case__summary">{project.summary}</p>
          <div className="case__metrics">
            {project.metrics.map((m) => <span className="stat" key={m}>{m}</span>)}
          </div>
          <div className="case__tags">
            {project.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
          </div>
        </header>

        <p className="case__section-lead">选择一个部分深入了解这个项目。</p>
        <div className="case__cards">
          {CARDS.map((c) => (
            <a key={c.to} href={`#/project/${project.id}/${c.to}`} className="case-card">
              <span className="case-card__num">{c.num}</span>
              <h2 className="case-card__title">{c.label}</h2>
              {c.sub && <p className="case-card__sub">{c.sub}</p>}
              <p className="case-card__desc">{c.desc}</p>
              <span className="case-card__go">进入 →</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
