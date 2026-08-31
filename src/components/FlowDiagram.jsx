import { useEffect, useRef, useState } from 'react';
import ArchitectureDiagram from './ArchitectureDiagram.jsx';

export default function FlowDiagram({ biz, exceptions, arch }) {
  const ref = useRef(null);
  const [view, setView] = useState('arch');

  useEffect(() => {
    if (view !== 'biz') return;
    let cancelled = false;
    (async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        if (cancelled) return;
        const dark = document.documentElement.classList.contains('dark');
        mermaid.initialize({
          startOnLoad: false,
          theme: dark ? 'dark' : 'neutral',
          flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis' },
        });
        const id = 'flow-' + Date.now().toString(36);
        const { svg } = await mermaid.render(id, biz);
        if (cancelled || !ref.current) return;
        ref.current.innerHTML = svg;
      } catch (e) {
        if (ref.current) ref.current.innerHTML = '<p class="flow-error">流程图渲染失败，请刷新重试</p>';
      }
    })();
    return () => { cancelled = true; };
  }, [biz, view]);

  return (
    <div className="flow">
      <div className="flow-tabs">
        <button type="button" className={`flow-tab${view === 'arch' ? ' active' : ''}`} onClick={() => setView('arch')}>
          系统架构分层图
        </button>
        <button type="button" className={`flow-tab${view === 'biz' ? ' active' : ''}`} onClick={() => setView('biz')}>
          核心业务流程图
        </button>
      </div>

      {view === 'biz' ? (
        <>
          <div className="flow-svg" ref={ref} />
          {exceptions && exceptions.length > 0 && (
            <div className="flow-exceptions">
              <p className="flow-exceptions__label">异常与边界</p>
              <div className="flow-exceptions__grid">
                {exceptions.map((e) => (
                  <div className="flow-exc" key={e.title}>
                    <span className="flow-exc__title">{e.title}</span>
                    <span className="flow-exc__note">{e.note}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <ArchitectureDiagram layers={arch} />
      )}
    </div>
  );
}
