import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/id/1078/1920/1080?blur=2')" }}></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <img 
          src="https://drive.google.com/uc?export=download&id=1NRc5FA7l_D4iJfoSGi58ceiuN5aQQdlS" 
          alt="Firetech Logo" 
          className="h-24 md:h-28 mx-auto mb-6" 
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider mb-4">
          Firetech Trading & Contracting W.L.L
        </h1>
        <p className="text-xl md:text-2xl font-semibold mb-10 max-w-3xl mx-auto">
          Building trust through quality, safety, and excellence
        </p>
        <Link 
          to="/contact" 
          className="bg-firetech-red text-white font-bold py-4 px-10 rounded-full hover:bg-firetech-dark-red transition duration-300 text-lg shadow-lg transform hover:scale-105"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
};

export default Hero;