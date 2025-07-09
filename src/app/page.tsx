import BackgroundSVG from "./components/BackgroundSVG";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <BackgroundSVG />
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
