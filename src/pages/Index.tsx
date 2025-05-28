
import React from 'react';
// import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import NewArrivalsSection from '../components/NewArrivalsSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GuideSection from '../components/GuideSection';
import OffersSection from '../components/OffersSection';
import NewsletterSection from '../components/NewsletterSection';
import ContactSection from '../components/ContactSection';
// import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <HeroSection />
        <CategoriesSection />
        {/* <NewArrivalsSection /> */}
        <FeatureSection />
        <TestimonialsSection />
        {/* <GuideSection /> */}
        <OffersSection />
        {/* <NewsletterSection /> */}
        <ContactSection />
      </main>
      {/* <Footer /> */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
