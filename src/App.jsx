import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectOverview from './components/ProjectOverview.jsx';
import ProjectSection from './components/ProjectSection.jsx';
import { getProject } from './data/profile.js';

function getRoute() {
  const h = window.location.hash;
  const m = h.match(/^#\/project\/([^/]+)\/(intro|flow|proto)$/);
  if (m) return { page: 'section', id: decodeURIComponent(m[1]), section: m[2] };
  const p = h.match(/^#\/project\/([^/]+)$/);
  if (p) return { page: 'project', id: decodeURIComponent(p[1]) };
  return { page: 'home' };
}

function scrollTopInstant() {
  const html = document.documentElement;
  const prev = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  html.style.scrollBehavior = prev;
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHash = () => {
      const r = getRoute();
      setRoute(r);
      if (r.page === 'project' || r.page === 'section') scrollTopInstant();
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [route]);

  useEffect(() => {
    if (route.page !== 'home') return;
    const id = window.location.hash.replace('#', '');
    if (id && id !== '/') {
      const timer = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [route]);

  const project = (route.page === 'project' || route.page === 'section') ? getProject(route.id) : null;
  const key = route.page === 'section'
    ? `${route.id}-${route.section}`
    : route.page === 'project' ? route.id : 'home';

  return (
    <>
      <Nav />
      <main>
        <div className="page" key={key}>
          {route.page === 'home' ? (
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </>
          ) : route.page === 'project' ? (
            <ProjectOverview project={project} />
          ) : (
            <ProjectSection project={project} section={route.section} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
