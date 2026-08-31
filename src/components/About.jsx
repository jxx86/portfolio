import profile from '../data/profile.js';
import SectionTitle from './SectionTitle.jsx';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="reveal">
          <SectionTitle index="01" title="关于我" />
        </div>
        <div className="about reveal">
          {profile.about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}
