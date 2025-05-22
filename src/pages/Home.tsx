import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesPreview from '../components/sections/ServicesPreview';
import AboutPreview from '../components/sections/AboutPreview';
import TestimonialSection from '../components/sections/TestimonialSection';
import PromotionSection from '../components/sections/PromotionSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <TestimonialSection />
      <PromotionSection />
      <ContactSection />
    </div>
  );
};

export default Home;