import Hero from '../components/home/Hero';
import Marquee from '../components/home/Marquee';
import Stats from '../components/home/Stats';
import BestOffers from '../components/home/BestOffers';
import BestSellers from '../components/home/BestSellers';
import OnlineOrder from '../components/home/OnlineOrder'; // <-- IMPORT ADDED
import StoryTeaser from '../components/home/StoryTeaser';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Stats />
      <BestOffers />
      <BestSellers />
      <OnlineOrder /> {/* <-- FOOD SECTION ADDED BACK */}
      <StoryTeaser />
      <Testimonials />
      <Newsletter />
    </main>
  );
}