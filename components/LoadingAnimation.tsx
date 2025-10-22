import React from 'react';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-firetech-red via-red-700 to-red-800 flex items-center justify-center z-50">
      {/* Clean Professional Background */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Subtle Professional Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Clean floating dots */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className="mb-8 animate-bounce-in">
          <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center animate-pulse-glow">
              <span className="text-firetech-red font-bold text-xl">F</span>
            </div>
          </div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in-up">
          <span className="text-white">
            Firetech Trading & Contracting
          </span>
        </h2>
        
        {/* Loading Spinner */}
        <div className="flex justify-center mb-6">
          <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
        
        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
