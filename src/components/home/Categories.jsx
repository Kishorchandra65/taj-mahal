import { categories } from '../../data/products';

export default function Categories() {
  return (
    <section className="categories-section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow-pill">Curated Selections</div>
          <h2 className="section-title">Explore Our Menu</h2>
          <p className="section-desc">
            From fiery tandoori starters to slow-cooked royal curries.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((c) => (
            <a href={`#${c.id}`} className="category-card" key={c.id}>
              <img src={c.image} alt={c.title} className="category-card-img" loading="lazy" />
              <div className="category-overlay">
                <h3 className="category-card-title">{c.title}</h3>
                <div className="category-card-meta">
                  <span>{c.meta}</span>
                  <span>Explore →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}