import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://www.dropbox.com/scl/fi/jgm7lrwakzy7u2hs25tpe/hero-3.jpg?rlkey=nepf43cvc61cfrula3w4twpsa&raw=1',
  'https://www.dropbox.com/scl/fi/j0o43w6r3torgnj0y3lp4/Hero-image-2.jpg?rlkey=7js5x4r5bcz86o4be12ailjid&raw=1',
  'https://www.dropbox.com/scl/fi/mkrsjp2ubhajsis4jtw1o/Hero-image-3.jpeg?rlkey=7a0yvr8p00fplwg7ejad4fux4&raw=1',

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
      {/* UAE-Inspired Background with Geometric Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-firetech-red via-red-700 to-red-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
      
      {/* Geometric UAE-Inspired Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white/20 rotate-12 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-white/20 rotate-45 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 border-2 border-white/20 rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Background Images with Parallax Effect */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-fixed transition-all duration-1000 ease-in-out transform"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: index === currentImageIndex ? 1 : 0,
            transform: index === currentImageIndex ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      ))}
      
      {/* Animated Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      {/* Subtle Professional Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        <div className="animate-flip-in mb-8">
          <img 
            src="https://www.dropbox.com/scl/fi/gom5bwstmzus2rvbg06yd/firetech-logo-white.png?rlkey=qk3ffqe49620grjdmb3t2oa7w&raw=1" 
            alt="Firetech Logo" 
            className="h-28 sm:h-40 md:h-56 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider mb-4 animate-pan-left">
          <span className="text-white bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
            Firetech Trading & Contracting W.L.L
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-10 max-w-3xl mx-auto animate-pan-right">
          <span className="text-white/90">
            Building trust through quality, safety, and excellence
          </span>
        </p>
        <div className="animate-bounce-in-delayed">
          <Link 
            to="/contact" 
            className="group relative bg-gradient-to-r from-firetech-red to-red-600 text-white font-bold py-4 px-10 rounded-full hover:from-red-600 hover:to-firetech-red transition-all duration-500 text-base md:text-lg shadow-2xl transform hover:scale-110 hover:shadow-red-500/50 overflow-hidden"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;