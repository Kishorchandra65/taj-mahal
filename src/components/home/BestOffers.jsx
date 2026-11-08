export default function BestOffers() {
  return (
    <section className="offers-section">
      <div className="container">
        <div className="offer-banner">
          <div className="offer-content">
            <h3>Exklusive Angebote</h3>
            <div className="offer-splits">
              <div className="offer-item">
                <span className="offer-num">10%</span>
                <span className="offer-text">Rabatt auf Abholung</span>
              </div>
              <div className="offer-divider"></div>
              <div className="offer-item">
                <span className="offer-num">5%</span>
                <span className="offer-text">Rabatt auf Lieferung</span>
              </div>
            </div>
          </div>
          <a href="#order" className="btn btn-primary">Jetzt Bestellen</a>
        </div>
      </div>
    </section>
  );
}