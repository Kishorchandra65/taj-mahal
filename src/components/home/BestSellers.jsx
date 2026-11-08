const bestSellers = [
  {
    id: '17',
    name: 'Taj Mahal Kabab',
    desc: 'Zartes Hähnchenfleisch, mariniert in aromatischen Gewürzen und traditionell über Holzkohle gegrillt.',
    price: '18,90',
    image: 'https://tajmahal-oldenburg.de/wp-content/uploads/2021/04/2019-03-20-15-Small.jpg',
    badge: 'Bestseller'
  },
  {
    id: '37',
    name: 'Chicken Makhni',
    desc: 'Zartes Hähnchenfleisch in einer cremigen Butter-Tomaten-Sauce mit feinen indischen Gewürzen.',
    price: '17,90',
    image: 'https://tajmahal-oldenburg.de/wp-content/uploads/2021/05/butter-chicken-Small.png',
    badge: ''
  },
  {
    id: '73a',
    name: 'Matar-Paneer',
    desc: 'Indischer Frischkäse und grüne Erbsen in einer würzigen Tomaten-Curry-Sauce mit feinen Gewürzen.',
    price: '14,90',
    image: 'https://tajmahal-oldenburg.de/wp-content/uploads/2020/12/Matar-Paneer.jpg',
    badge: ''
  }
];

export default function BestSellers() {
  return (
    <section className="best-sellers-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Beliebt bei unseren Gästen</span>
          <h2 className="section-title">Unsere Spezialitäten</h2>
        </div>

        <div className="best-sellers-grid">
          {bestSellers.map((item) => (
            <div className="bestseller-card" key={item.id}>
              <div className="bestseller-img-wrap">
                <img src={item.image} alt={item.name} />
                {item.badge && <span className="bestseller-badge">{item.badge}</span>}
              </div>
              <div className="bestseller-content">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="bestseller-footer">
                  <span className="price">€{item.price}</span>
                  <a href="#order" className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.7rem' }}>Bestellen</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}