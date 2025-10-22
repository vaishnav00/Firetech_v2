import React from 'react';
import Hero from '../components/Hero';
import Seo from '../components/Seo';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Brands from '../components/Brands';
import Clients from '../components/Clients';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Seo
        title="Home"
        description="Firetech Trading & Contracting in Qatar delivers fire protection, safety systems, and building material solutions with uncompromising quality and reliability."
      />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Brands />
      <Clients />
      <Contact />
    </>
  );
};

export default HomePage;
