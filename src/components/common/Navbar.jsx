import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#', label: 'Home' },
    { href: '#order', label: 'Online Order' },
    { href: '#story', label: 'Our Story' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo */}
          <a href="#" className="brand-logo">
            <div className="brand-crest-img">
              <img src="/tajlogo.png" alt="Taj Mahal logo" />
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="desktop-nav">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            {/* Cart */}
            <button onClick={() => setIsCartOpen(true)} className="cart-btn">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {/* Reserve Button (Desktop) */}
            <a href="#reserve" className="btn btn-primary desktop-reserve-btn" style={{ padding: '0.8rem 1.8rem', fontSize: '0.75rem' }}>
              Reserve
            </a>
            
            {/* Mobile Menu Toggle */}
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
           <img src="/tajlogo.jpeg" alt="Logo" style={{ width: '100px' }} />
        </div>
        <nav className="mobile-nav-links">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        {/* Reserve Button (Mobile Drawer) */}
        <div style={{ marginTop: 'auto' }}>
          <a href="#reserve" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setMobileOpen(false)}>
            Reserve a Table
          </a>
        </div>
      </aside>
    </>
  );
}