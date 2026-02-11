import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Features from '../sections/Features';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f5f0]">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
