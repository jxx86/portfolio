const Arrow = () => <div className="arch-arrow"><span>↓</span></div>;

export default function ArchitectureDiagram({ layers }) {
  if (!layers || layers.length === 0) return null;

  return (
    <div className="arch">
      {layers.map((layer, i) => (
        <div key={layer.name}>
          <div className="arch-layer">
            <p className="arch-layer__name">{layer.name}</p>
            <div className="arch-layer__items">
              {layer.items.map((it) => <span className="arch-item" key={it}>{it}</span>)}
            </div>
          </div>
          {i < layers.length - 1 && <Arrow />}
        </div>
      ))}
    </div>
  );
}
