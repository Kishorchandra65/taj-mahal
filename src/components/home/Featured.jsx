import { featuredDishes } from '../../data/products';

export default function Featured() {
  return (
    <section className="featured-section" id="menu">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">The Royal Menu</span>
          <h2 className="section-title">Signature Masterpieces</h2>
        </div>

        <div className="featured-grid">
          {featuredDishes.map((p) => (
            <article className="dish-card" key={p.id}>
              <div className="dish-img-wrap">
                <img src={p.image} alt={p.name} className="dish-img" loading="lazy" />
                <span className="dish-category">{p.category}</span>
              </div>
              <div className="dish-content">
                <h3 className="dish-title">{p.name}</h3>
                <p className="dish-desc">{p.tagline}</p>
                <a href="#reserve" className="dish-link">Order or Reserve →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}