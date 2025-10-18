import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://www.dropbox.com/scl/fi/jgm7lrwakzy7u2hs25tpe/hero-3.jpg?rlkey=nepf43cvc61cfrula3w4twpsa&raw=1',
  'https://www.dropbox.com/scl/fi/1numodrll1fkq017ucpl6/hero-2.jpg?rlkey=9kiye59sow8lj351yu1dn1p5u&raw=1',
  'https://www.dropbox.com/scl/fi/kqzg5hp2skj61qhlzy3vi/hero-1.png?rlkey=hztclbdhxpv41m0srainp5u9s&raw=1',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Images Slider */}
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
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center pt-24 sm:pt-28">
        <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-2xl mb-6 shadow-lg">
            <img 
              src="https://www.dropbox.com/scl/fi/i9ydu1nycxa8poq4001ad/logo-wit-name.png?rlkey=caadna0kix8f0kebozdxg80yf&raw=1" 
              alt="Firetech Logo" 
              className="h-20 sm:h-24 md:h-28" 
            />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider text-shadow-lg mb-4">
          Firetech Trading & Contracting W.L.L
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto text-shadow">
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