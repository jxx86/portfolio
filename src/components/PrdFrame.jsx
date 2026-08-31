import { useEffect, useRef } from 'react';

// 覆盖原 PRD 的紫色/红色主题，统一成黑白
const OVERRIDE = ':root{--brand:#111112;--brand-deep:#111112;--brand-soft:#f1f1f4;--accent:#111112;--ok:#111112;--warn:#111112;--ink:#17192b;--ink-2:#5b5b6b;--ink-3:#6f7076;--ink-4:#9a9aa2;--line:#e6e6ea;--line-2:#f1f1f4;--bg:#ffffff;--bg-soft:#fbfbfa;}';

export default function PrdFrame({ src }) {
  const ref = useRef(null);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    const apply = () => {
      try {
        const doc = iframe.contentDocument;
        if (!doc || !doc.head || !doc.body) return;
        let s = doc.querySelector('style[data-prd-theme]');
        if (!s) {
          s = doc.createElement('style');
          s.setAttribute('data-prd-theme', '');
          doc.head.appendChild(s);
        }
        s.textContent = OVERRIDE;
      } catch (e) { /* ignore */ }
    };

    iframe.addEventListener('load', apply);
    window.addEventListener('resize', apply);
    const t = setTimeout(apply, 700);
    return () => {
      iframe.removeEventListener('load', apply);
      window.removeEventListener('resize', apply);
      clearTimeout(t);
    };
  }, []);

  return <iframe ref={ref} src={src} className="prd-frame" title="产品需求文档" />;
}
