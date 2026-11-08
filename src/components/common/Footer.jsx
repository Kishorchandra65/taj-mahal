import { Link } from 'react-router-dom'; // <-- IMPORT LINK

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ marginBottom: '1.5rem' }}>
              <img src="/tajlogo.png" alt="Taj Mahal logo" style={{ width: '140px' }} />
            </div>
            <p className="footer-tagline">
              A royal Indian dining legacy since 1978. Clay-oven tandoor, hand-ground masalas,
              and recipes carried through generations — served with regal warmth.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/order">Order Online</Link></li>
              <li><Link to="/about">Our Heritage</Link></li>
              <li><Link to="/#menu">Signature Menu</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/privacy">Datenschutzerklärung</Link></li>
              <li><Link to="/revocation">Widerrufsbelehrung</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Visit Us</h4>
            <p className="footer-links">Bloherfelder Str. 66,<br/>26129 Oldenburg</p>
            <p className="footer-links">+49 441 18005527</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Taj Mahal Tandoori Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}