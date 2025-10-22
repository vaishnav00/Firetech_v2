import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import Certificates from '../components/Certificates';
import Clients from '../components/Clients';
import Seo from '../components/Seo';

const WhyUsPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28">
      <Seo
        title="Why Us"
        description="Discover why leading organizations in Qatar choose Firetech for reliability, compliance, and excellence."
        urlPath="/why-us"
      />
      <WhyChooseUs />
      <Certificates />
      <Clients />
    </div>
  );
};

export default WhyUsPage;