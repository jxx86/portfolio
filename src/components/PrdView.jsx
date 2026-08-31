import { useEffect, useRef, useState } from 'react';

export default function PrdView({ src, toc }) {
  const [html, setHtml] = useState('');
  const [active, setActive] = useState(0);
  const boxRef = useRef(null);

  useEffect(() => {
    let ok = true;
    fetch(src)
      .then((r) => r.text())
      .then((text) => {
        if (!ok) return;
        const doc = new DOMParser().parseFromString(text, 'text/html');
        const el = doc.querySelector('.doc');
        if (el) setHtml(el.innerHTML);
      })
      .catch(() => {});
    return () => { ok = false; };
  }, [src]);

  const findHeading = (t) => {
    if (!boxRef.current) return null;
    return Array.from(boxRef.current.querySelectorAll('h2')).find((h) => h.textContent.includes(t.title));
  };

  useEffect(() => {
    if (!html) return;
    const onScroll = () => {
      let cur = 0;
      toc.forEach((t, i) => {
        const h = findHeading(t);
        if (h && h.getBoundingClientRect().top <= 130) cur = i;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [html, toc]);

  const toSection = (i) => {
    const h = findHeading(toc[i]);
    if (h) h.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="prd-layout">
      <aside className="prd-toc">
        <p className="prd-toc__label">目录</p>
        {toc.map((t, i) => (
          <button
            key={t.title}
            type="button"
            className={`prd-toc__item${active === i ? ' active' : ''}`}
            onClick={() => toSection(i)}
          >
            {t.n && <span className="prd-toc__num">{t.n}</span>}
            <span>{t.title}</span>
          </button>
        ))}
      </aside>
      <div className="prd-doc" ref={boxRef}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
