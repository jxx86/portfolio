export default function SectionTitle({ index, title }) {
  return (
    <div className="section-title">
      <span className="section-title__index">{index}</span>
      <h2>{title}</h2>
    </div>
  );
}
