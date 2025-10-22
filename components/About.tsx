import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <AnimatedSection animation="slide-in-left" className="w-full md:w-1/2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-full md:h-auto mx-auto md:max-w-none group">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-firetech-red to-red-600 transform -skew-y-3 z-0 transition-all duration-300 group-hover:scale-105 group-hover:-skew-y-6"></div>
              <img
                src="https://www.dropbox.com/scl/fi/jmchxil739vdwvxiytw88/about-us-image.png?rlkey=1l8nh7sb2aeuxdd62l2o12ra2&raw=1"
                alt="Firetech fire extinguisher and safety equipment showcasing professional fire protection services in Qatar"
                className="relative z-10 rounded-lg shadow-2xl w-full h-full object-contain md:object-cover transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"
                loading="lazy"
                width="400"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-firetech-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg z-20"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={200} className="w-full md:w-1/2 text-center md:text-left">
            <h2 id="about-heading" className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">
              About Company
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Your Trusted Partner in Safety and Construction
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Firetech Trading & Contracting is a leading supplier of fire protection, safety, and building material solutions in Qatar. We specialize in delivering high-quality products and reliable services that safeguard lives, protect assets, and support infrastructure development across the region. With a strong reputation for trust, quality, and timely delivery, Firetech is a preferred partner for contractors, developers, and industrial clients.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
