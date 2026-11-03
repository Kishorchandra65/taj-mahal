const pillars = [
  { n: '01', title: 'Clay Oven Tandoor', desc: 'Our meats and breads are cooked in a traditional charcoal-fired clay oven, sealing in the smoky essence.' },
  { n: '02', title: 'Hand-Ground Masalas', desc: 'We never use store-bought powders. Our master chefs roast and grind whole spices daily.' },
  { n: '03', title: '100% Halal Sourcing', desc: 'We partner directly with certified local farms to ensure the highest quality, ethically sourced meats.' },
  { n: '04', title: 'Generational Recipes', desc: 'Our menu is a carefully preserved archive of Nawabi and Mughlai culinary history.' },
];

export default function Pillars() {
  return (
    <section className="pillars-section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow-pill">The Taj Mahal Standard</div>
          <h2 className="section-title">The Art of Royal Cooking</h2>
          <p className="section-desc">
            Why families have trusted us with their most important celebrations since 1978.
          </p>
        </div>
        <div className="pillars-grid">
          {pillars.map((p) => (
            <div className="pillar-card" key={p.n}>
              <div className="pillar-icon-box">{p.n}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}