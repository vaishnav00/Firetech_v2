import React from 'react';

const VisionMission: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b-4 border-firetech-red pb-2 inline-block">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be universally recognized as Qatar's most trusted and sought-after leader for fire safety, building materials, and contracting solutions. We aspire to set the industry benchmark for excellence, where the Firetech name is synonymous with unwavering reliability, uncompromising quality, and exceptional service. We aim to build enduring partnerships, becoming the first choice for projects of any scale and complexity.
            </p>
          </div>
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b-4 border-firetech-red pb-2 inline-block">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To be an indispensable partner in Qatar's development by delivering integrated, world-class solutions across fire safety, construction, and industrial supply. We are dedicated to safeguarding lives and protecting critical assets. By upholding the highest standards of safety and quality, we empower our clients to achieve their project goals with confidence, ensuring every structure is safe, resilient, and built to last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;