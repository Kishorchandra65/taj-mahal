import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-main)' }}>
      
      {/* --- HERO SECTION --- */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="section-subtitle">Über Uns</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Willkommen im <span className="gold-text italic">Tajmahal</span> Oldenburg
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Our restaurant “Tajmahal” food offers food of Indian cuisine.<br />
              We welcome our guests warmly!
            </p>
            <h3 style={{ color: 'var(--gold-400)', letterSpacing: '0.1em', marginBottom: '2rem' }}>
              Your Tajmahal Oldenburg
            </h3>
            <Link to="/order" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Order Online Now
            </Link>
          </div>
        </div>
      </section>

      {/* --- FEATURED CERTIFICATE & BADGES --- */}
      <section className="about-featured-section">
        <div className="container">
          <div className="featured-layout">
            
            {/* Left: Huge Certificate */}
            <div className="featured-certificate">
              <div className="certificate-frame">
                <img 
                  src="/RestaurantGuru_Certificate.png" 
                  alt="Restaurant Guru Certificate 2022" 
                  className="certificate-img"
                />
              </div>
              <div className="certificate-label">
                <span className="gold-text" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>Empfohlen</span>
                <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Restaurant Guru 2022</p>
              </div>
            </div>

            {/* Right: Features Stacked */}
            <div className="featured-right">
              <div className="feature-glass-card">
                <div className="feature-icon">⚗️</div>
                <div>
                  <h3>Original Recipes</h3>
                  <p>We use traditional Nepalese and Indian species and recipes for cooking our food. You will experience originality in our food.</p>
                </div>
              </div>

              <div className="feature-glass-card">
                <div className="feature-icon">🚗</div>
                <div>
                  <h3>Fast Delivery</h3>
                  <p>Our team will ensure that you receive your food on time and are ready for pickup.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4 PILLARS SECTION --- */}
      <section className="about-pillars">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Philosophy</h2>
          </div>
          
          <div className="pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon">😋</div>
              <h3>SUPER TASTE</h3>
              <p>A meal with mild, medium-sharp or pungent taste. Often used to also refer to sour or sour foods. A fresh, vibrant, invigorating taste.</p>
            </div>
            
            <div className="pillar-item">
              <div className="pillar-icon">🏃</div>
              <h3>FAST WAITERS</h3>
              <p>The Taj Mahal Restaurant serves traditional cuisine. You don't have to wait when you arrive at the restaurant. Our waiters are always there for you.</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">📊</div>
              <h3>QUALITY GUARANTEE</h3>
              <p>We want to say that we guarantee the best quality at the lowest prices. We assure you that you will always get healthy food at the Taj Mahal Restaurant.</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">📍</div>
              <h3>WE'RE IN</h3>
              <p>In the heart of Oldenburg we have created a small piece of India for you. We invite you to get to know the traditional Indian cuisine. The food at the Taj Mahal is a fun, casual and cozy experience with family and friends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OPENING HOURS SECTION --- */}
      <section className="about-hours">
        <div className="container">
          <div className="hours-card">
            <h2>Our Opening Hours</h2>
            <div className="hours-grid">
              <div className="hours-block">
                <span className="hours-label">Lunchtime</span>
                <span className="hours-time">12:00 to 15:00</span>
              </div>
              <div className="hours-divider"></div>
              <div className="hours-block">
                <span className="hours-label">Evening</span>
                <span className="hours-time">17:30 to 23:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}