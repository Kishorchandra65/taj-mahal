import { useState } from 'react';
import API from '../../api/axios';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '12:00', guests: 2, subject: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post('/reservations', formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      // Reset form
      setFormData({ name: '', email: '', phone: '', date: '', time: '12:00', guests: 2, subject: '', message: '' });
    } catch (error) {
      console.error("Error saving reservation:", error);
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
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
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
              </div>
              <div className="form-group">
                <label>Your email address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" required />
              </div>
              <div className="form-group">
                <label>Number of guests</label>
                <input type="number" name="guests" value={formData.guests} onChange={handleChange} className="form-input" min="1" max="20" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-input" required />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input type="time" name="time" value={formData.time} onChange={handleChange} className="form-input" required />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="form-input" required />
            </div>

            <div className="form-group">
              <label>Your message (optional)</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="form-input form-textarea" rows="4"></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }} disabled={loading}>
              {loading ? 'Sending...' : 'Senden'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}