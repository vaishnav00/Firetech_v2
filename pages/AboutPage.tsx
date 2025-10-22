import React from 'react';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import CoreValues from '../components/CoreValues';
import Seo from '../components/Seo';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28">
      <Seo
        title="About"
        description="Learn about Firetech Trading & Contracting W.L.L — our mission, vision, and commitment to safety and quality across Qatar."
        urlPath="/about"
      />
      <About />
      <VisionMission />
      <CoreValues />
    </div>
  );
};

export default AboutPage;