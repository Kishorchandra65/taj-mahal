import { useState } from 'react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Guest Experiences</span>
          <h2 className="section-title">Words from Our Patrons</h2>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">"{t.quote}"</p>
          <div className="testimonial-author">
            {t.name} <br/> <span style={{ color: 'var(--ivory-dim)', letterSpacing: 'normal', textTransform: 'none' }}>{t.role}</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
             <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }} onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}>←</button>
             <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }} onClick={() => setIdx((idx + 1) % testimonials.length)}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}