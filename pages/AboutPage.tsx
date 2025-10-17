import React from 'react';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import CoreValues from '../components/CoreValues';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <About />
      <VisionMission />
      <CoreValues />
    </div>
  );
};

export default AboutPage;