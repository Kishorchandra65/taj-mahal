export default function Hero() {
  return (
    <section className="home-hero">
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2560&q=85"
        alt="Royal Indian Restaurant Interior"
        className="hero-bg-image"
      />
      
      <div className="hero-glow-orb gold"></div>
      <div className="hero-glow-orb burgundy"></div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span>★</span> Est. 1978 • Royal Indian Dining
        </div>
        
        <h1 className="hero-title">
          A Legacy of Royal Flavors,<br />
          <span className="gold-text italic">Crafted</span> in Clay & Fire.
        </h1>
        
        <p className="hero-subtitle">
          Experience the grandeur of Awadhi and Mughlai cuisine. Slow-cooked curries, tandoor-smoked delicacies, and hand-ground spices served in an ambiance of pure opulence.
        </p>

        <div className="hero-actions">
          <a href="#reserve" className="btn btn-primary">
            Book Your Table
          </a>
          <a href="#order" className="btn btn-secondary">
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
}