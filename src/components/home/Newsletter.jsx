import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="cta-section" id="reserve">
      <div className="container">
        <h2>Reserve Your Experience</h2>
        <p>Join our mailing list for seasonal menu launches, exclusive dinners, and private events.</p>
        <form className="cta-form" onSubmit={submit}>
          <input
            type="email"
            className="cta-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            {sent ? '✓ Subscribed' : 'Join the List'}
          </button>
        </form>
      </div>
    </section>
  );
}