import { useState } from 'react';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="cta-section" id="reserve">
      <div className="container">
        
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <span className="section-subtitle">Table Reservation</span>
          <h2 className="section-title" style={{ color: 'var(--ivory)' }}>Reserve your table</h2>
        </div>

        {submitted ? (
          <div className="success-content" style={{ margin: '0 auto', maxWidth: '600px' }}>
            <div className="success-icon">✓</div>
            <h2>Anfrage Gesendet!</h2>
            <p>Vielen Dank für Ihre Reservierungsanfrage. Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
          </div>
        ) : (
          <form className="reservation-form" onSubmit={handleSubmit}>
            
            <div className="form-row">
              <div className="form-group">
                <label>Your name</label>
                <input type="text" className="form-input" required />
              </div>
              <div className="form-group">
                <label>Your email address</label>
                <input type="email" className="form-input" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone number</label>
                <input type="tel" className="form-input" required />
              </div>
              <div className="form-group">
                <label>Number of guests</label>
                <input type="number" className="form-input" min="1" max="20" placeholder="e.g. 4" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input type="date" className="form-input" required />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input type="time" className="form-input" defaultValue="12:00" required />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" className="form-input" required />
            </div>

            <div className="form-group">
              <label>Your message (optional)</label>
              <textarea className="form-input form-textarea" rows="4"></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
              Senden
            </button>
          </form>
        )}
      </div>
    </section>
  );
}