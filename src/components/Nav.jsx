import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';

// 导航显示顺序（让高亮从左到右平滑移动）
const items = [
  { id: 'top', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'projects', label: '项目' },
  { id: 'experience', label: '经历' },
  { id: 'contact', label: '联系我' },
];

// 页面从上到下的顺序，用于判断当前高亮哪个区块
const pageOrder = ['top', 'about', 'projects', 'experience', 'contact'];

export default function Nav() {
  const [active, setActive] = useState('top');

  useEffect(() => {
    const onScroll = () => {
      let cur = 'top';
      for (const id of pageOrder) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="nav">
      <div className="nav__inner">
        {items.map((it) => (
          <a
            key={it.id}
            className={`nav__link${active === it.id ? ' active' : ''}`}
            href={`#${it.id}`}
          >
            {it.label}
          </a>
        ))}
        <ThemeToggle />
      </div>
    </header>
  );
}
