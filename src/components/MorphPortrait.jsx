import { useRef } from 'react';

export default function MorphPortrait({ src, hoverSrc, name }) {
  const wrap = useRef(null);

  const onMove = (e) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `translate(${(x * 16).toFixed(1)}px, ${(y * 16).toFixed(1)}px) scale(1.02)`;
  };

  const onLeave = () => {
    const el = wrap.current;
    if (el) el.style.transform = '';
  };

  return (
    <div className="portrait-wrap" ref={wrap} onMouseMove={onMove} onMouseLeave={onLeave}>
      <img className="portrait portrait--base" src={src} alt={name} />
      <img className="portrait portrait--morph" src={hoverSrc} alt="" aria-hidden="true" />
    </div>
  );
}
