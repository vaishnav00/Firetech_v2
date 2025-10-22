import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://www.dropbox.com/scl/fi/jgm7lrwakzy7u2hs25tpe/hero-3.jpg?rlkey=nepf43cvc61cfrula3w4twpsa&raw=1',
  'https://www.dropbox.com/scl/fi/6fxp61d3xehy8xske5sll/hero-image-2.png?rlkey=bggiw77uphq9hdui18a40z9xy&raw=1',
  'https://www.dropbox.com/scl/fi/mkrsjp2ubhajsis4jtw1o/Hero-image-3.jpeg?rlkey=7a0yvr8p00fplwg7ejad4fux4&raw=1',

];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
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
      
      {/* Content */}
      <div className={`relative z-10 container mx-auto px-6 flex flex-col items-center transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}>
        <div className={`transition-all duration-800 ease-out delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          <img 
            src="https://www.dropbox.com/scl/fi/gom5bwstmzus2rvbg06yd/firetech-logo-white.png?rlkey=qk3ffqe49620grjdmb3t2oa7w&raw=1" 
            alt="Firetech Logo" 
            className="h-28 sm:h-40 md:h-56 mb-2" 
          />
        </div>
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider mb-4 transition-all duration-800 ease-out delay-400 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          Firetech Trading & Contracting W.L.L
        </h1>
        <p className={`text-lg sm:text-xl md:text-2xl font-semibold mb-10 max-w-3xl mx-auto transition-all duration-800 ease-out delay-600 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          Building trust through quality, safety, and excellence
        </p>
        <div className={`transition-all duration-800 ease-out delay-800 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          <Link 
            to="/contact" 
            className="bg-white text-firetech-red font-bold py-3 px-8 md:py-4 md:px-10 rounded-full hover:bg-firetech-light-red hover:text-firetech-red transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;