import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Loader from './components/common/Loader';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CartDrawer from './components/common/CartDrawer';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import RevocationPage from './pages/RevocationPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  // Always start with loading = true
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep the loader visible for 2 seconds (2000ms)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        {/* Show Loader overlay */}
        {loading && <Loader />}
        
        {/* Hide main content while loading to prevent scrolling */}
        <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease-in-out' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/revocation" element={<RevocationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}