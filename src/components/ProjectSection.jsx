import { useState } from 'react';
import FlowDiagram from './FlowDiagram.jsx';
import PrdView from './PrdView.jsx';

const SECTIONS = [
  { key: 'intro', label: '产品需求文档' },
  { key: 'flow', label: '流程图' },
  { key: 'proto', label: '原型页面' },
];

function Block({ index, title, children }) {
  return (
    <div className="case__block">
      <div className="case__block-head">
        <span className="case__block-index">{index}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function ProjectSection({ project, section }) {
  const [viewer, setViewer] = useState(null);

  if (!project) {
    return (
      <div className="notfound">
        <p>没有找到这个项目。</p>
        <a href="#projects">← 返回项目列表</a>
      </div>
    );
  }

  const active = SECTIONS.find((s) => s.key === section)?.key ?? 'intro';
  const current = SECTIONS.find((s) => s.key === active);

  return (
    <article className="case case--section">
      <div className="container">
        <a href={`#/project/${project.id}`} className="case-back">← 返回</a>

        <header className="case__head">
          <p className="case__title-sm">{project.name}</p>
          <h1 className="case__section-title">{current.label}</h1>
          <p className="case__summary">{project.summary}</p>
        </header>

        {active === 'intro' && (
          <div className="case__body">
            {project.prdUrl ? (
              <PrdView src={project.prdUrl} toc={project.prdToc} />
            ) : (
              <>
                <Block index="01" title="项目背景与目标">
                  <p>{project.background}</p>
                  <ul>{project.goals.map((g) => <li key={g}>{g}</li>)}</ul>
                </Block>
                <Block index="02" title="用户与需求分析">
                  <p>{project.users}</p>
                  <ul>{project.needs.map((n) => <li key={n}>{n}</li>)}</ul>
                </Block>
                <Block index="03" title="解决方案与功能设计">
                  <p>{project.solution}</p>
                  <ul>{project.features.map((f) => <li key={f}>{f}</li>)}</ul>
                </Block>
                <Block index="06" title="迭代思考">
                  <ul>{project.iteration.map((i) => <li key={i}>{i}</li>)}</ul>
                </Block>
                {project.tech && project.tech.length > 0 && (
                  <Block index="07" title="技术栈">
                    <div className="case__tags">
                      {project.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
                    </div>
                  </Block>
                )}
              </>
            )}
          </div>
        )}

        {active === 'flow' && (
          <div className="case__body">
            <Block index="04" title="产品流程与结构">
              <FlowDiagram
                biz={project.bizMermaid}
                exceptions={project.flowExceptions}
                arch={project.archLayers}
              />
            </Block>
          </div>
        )}

        {active === 'proto' && (
          <div className="case__body">
            <Block index="05" title="关键页面与原型">
              <div className="screens">
                {project.screens.map((s) => (
                  <button
                    type="button"
                    className="screen"
                    key={s.title}
                    onClick={() => setViewer(s)}
                  >
                    <div className="screen__img">
                      {s.image
                        ? <img src={s.image} alt={s.title} loading="lazy" />
                        : '原型占位'}
                    </div>
                    <p className="screen__title">{s.title}</p>
                    <p className="screen__note">{s.note}</p>
                  </button>
                ))}
              </div>
            </Block>
          </div>
        )}
      </div>

      {viewer && viewer.image && (
        <div className="viewer" onClick={() => setViewer(null)}>
          <div className="viewer__inner" onClick={(e) => e.stopPropagation()}>
            <button className="viewer__close" onClick={() => setViewer(null)} aria-label="关闭">×</button>
            <p className="viewer__title">{viewer.title}</p>
            <img className="viewer__img" src={viewer.image} alt={viewer.title} />
            <p className="viewer__note">{viewer.note}</p>
          </div>
        </div>
      )}
    </article>
  );
}
