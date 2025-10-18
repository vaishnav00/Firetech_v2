import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import Certificates from '../components/Certificates';
import Clients from '../components/Clients';

const WhyUsPage: React.FC = () => {
  return (
    <div className="pt-40">
      <WhyChooseUs />
      <Certificates />
      <Clients />
    </div>
  );
};

export default WhyUsPage;