import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://www.dropbox.com/scl/fi/kqzg5hp2skj61qhlzy3vi/hero-1.png?rlkey=hztclbdhxpv41m0srainp5u9s&raw=1',
  'https://www.dropbox.com/scl/fi/jgm7lrwakzy7u2hs25tpe/hero-3.jpg?rlkey=nepf43cvc61cfrula3w4twpsa&raw=1',
  'https://www.dropbox.com/scl/fi/1numodrll1fkq017ucpl6/hero-2.jpg?rlkey=9kiye59sow8lj351yu1dn1p5u&raw=1',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        <img 
          src="https://www.dropbox.com/scl/fi/gom5bwstmzus2rvbg06yd/firetech-logo-white.png?rlkey=qk3ffqe49620grjdmb3t2oa7w&raw=1" 
          alt="Firetech Logo" 
          className="h-28 sm:h-40 md:h-56 mb-2" 
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider mb-4">
          Firetech Trading & Contracting W.L.L
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-10 max-w-3xl mx-auto">
          Building trust through quality, safety, and excellence
        </p>
        <Link 
          to="/contact" 
          className="bg-firetech-red text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full hover:bg-firetech-dark-red transition duration-300 text-base md:text-lg shadow-lg transform hover:scale-105"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
};

export default Hero;