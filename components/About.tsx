import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative max-w-md mx-auto md:max-w-none">
              <div className="absolute -top-4 -left-4 w-full h-full bg-firetech-red transform -skew-y-3 z-0"></div>
              <img src="https://www.dropbox.com/scl/fi/vppr76tny98fzupw16ite/about-image.png?rlkey=2rtuwc2373yh4eq73yhthh7cl&raw=1" alt="About Firetech" className="relative z-10 rounded-lg shadow-2xl w-full h-auto object-contain max-h-96 md:max-h-none" />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">About Company</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Your Trusted Partner in Safety and Construction</h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Firetech Trading & Contracting is a leading supplier of fire protection, safety, and building material solutions in Qatar. We specialize in delivering high-quality products and reliable services that safeguard lives, protect assets, and support infrastructure development across the region. With a strong reputation for trust, quality, and timely delivery, Firetech is a preferred partner for contractors, developers, and industrial clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;