import { useEffect, useState } from 'react';
import { CartProvider } from './context/CartContext';
import Loader from './components/common/Loader';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/home/Hero';
import Marquee from './components/home/Marquee';
import Stats from './components/home/Stats';
import Featured from './components/home/Featured';
import StoryTeaser from './components/home/StoryTeaser';
import Testimonials from './components/home/Testimonials';
import OnlineOrder from './components/home/OnlineOrder';
import CartDrawer from './components/common/CartDrawer';
import Newsletter from './components/home/Newsletter'; // Restored

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <CartProvider>
      {loading && <Loader />}
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Featured />
        <OnlineOrder />
        <StoryTeaser />
        <Testimonials />
        <Newsletter /> {/* Restored Reservation Section */}
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}