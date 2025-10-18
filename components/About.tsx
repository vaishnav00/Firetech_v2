import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="md:w-full">
            <img src="https://www.dropbox.com/scl/fi/vppr76tny98fzupw16ite/about-image.png?rlkey=2rtuwc2373yh4eq73yhthh7cl&raw=1" alt="About Firetech" className="rounded-xl shadow-2xl w-full" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">About Company</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Your Trusted Partner in Safety and Construction</h3>
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