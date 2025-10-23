import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ProductSection from "./components/ProductsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import BrandsRibbon from "./components/BrandsRibbon"; 


export default function Home() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <BrandsRibbon />
      <FeaturesSection />
      <ProductSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
