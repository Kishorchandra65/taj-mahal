import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-main)' }}>
      
      {/* --- HERO SECTION --- */}
      <section className="contact-hero">
        <div className="container">
          <span className="section-subtitle">Kontakt</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Get in <span className="gold-text italic">Touch</span>
          </h1>
          <p className="hero-subtitle">
            Wir freuen uns darauf, von Ihnen zu hören. Ob für eine Reservierung, eine Bestellung oder eine besondere Veranstaltung – unser Team ist für Sie da.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTACT SECTION --- */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout">
            
            {/* Left Side: Contact Info */}
            <div className="contact-info-panel">
              <h2 className="contact-panel-title">Besuchen Sie uns</h2>
              
              <div className="contact-info-item">
                <div className="contact-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4>Adresse</h4>
                  <p>Bloherfelder Str. 66<br/>26129 Oldenburg</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4>Telefon</h4>
                  <p>+49 441 18005527</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@tajmahal-oldenburg.de</p>
                </div>
              </div>

              <div className="contact-hours-box">
                <h4>Öffnungszeiten</h4>
                <div className="hours-row"><span>Mittag:</span> <span>12:00 – 15:00</span></div>
                <div className="hours-row"><span>Abend:</span> <span>17:30 – 23:00</span></div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="contact-form-panel">
              {submitted ? (
                <div className="contact-success">
                  <div className="success-icon">✓</div>
                  <h2>Nachricht Gesendet!</h2>
                  <p>Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2 className="contact-panel-title">Senden Sie uns eine Nachricht</h2>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Ihr Name</label>
                      <input type="text" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label>Ihre E-Mail</label>
                      <input type="email" className="form-input" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Betreff</label>
                    <input type="text" className="form-input" required />
                  </div>

                  <div className="form-group">
                    <label>Ihre Nachricht</label>
                    <textarea className="form-input form-textarea" rows="6" required></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Nachricht Senden
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="contact-map-section">
        <div className="container">
          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2386.079864258931!2d8.19306631578657!3d53.14497997992891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b6e4de5a167e03%3A0x6b2a9e5c8e7f5a9b!2sBloherfelder%20Str.%2066%2C%2026129%20Oldenburg%2C%20Germany!5e0!3m2!1sen!2sde!4v1620000000000!5m2!1sen!2sde" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Taj Mahal Oldenburg Location"
            ></iframe>
          </div>
        </div>
      </section>

    </main>
  );
}