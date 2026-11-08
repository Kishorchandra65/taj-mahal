import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleReserveClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('reserve');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('reserve');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { path: '/', label: 'Home' },
    { path: '/order', label: 'Online Bestellen' },
    { path: '/about', label: 'Über Uns' },
    { path: '/contact', label: 'Kontakt' },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="brand-logo">
            <div className="brand-crest-img">
              {/* FIXED: Changed .jpeg to .png */}
              <img src="/tajlogo.png" alt="Taj Mahal logo" />
            </div>
          </Link>

          <nav className="desktop-nav">
            {links.map((l) => (
              <Link 
                key={l.label} 
                to={l.path} 
                className={`nav-link ${location.pathname === l.path ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <button onClick={() => setIsCartOpen(true)} className="cart-btn">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            <button 
              onClick={handleReserveClick} 
              className="btn btn-primary desktop-reserve-btn" 
              style={{ padding: '0.8rem 1.8rem', fontSize: '0.75rem' }}
            >
              Reservieren
            </button>
            
            <button className="menu-toggle-btn" onClick={() => setMobileOpen(!mobileOpen)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-backdrop ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />
      <aside className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
           {/* FIXED: Changed .jpeg to .png */}
           <img src="/tajlogo.png" alt="Logo" style={{ width: '100px' }} />
        </div>
        <nav className="mobile-nav-links">
          {links.map((l) => (
            <Link key={l.label} to={l.path} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: 'auto' }}>
          <button 
            onClick={handleReserveClick} 
            className="btn btn-primary" 
            style={{ width: '100%' }}
          >
            Tisch Reservieren
          </button>
        </div>
      </aside>
    </>
  );
}