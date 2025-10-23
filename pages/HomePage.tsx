import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Brands from '../components/Brands';
import Clients from '../components/Clients';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Certificates />
      <Services />
      <WhyChooseUs />
      <Brands />
      <Clients />
      <Contact />
    </>
  );
};

export default HomePage;
