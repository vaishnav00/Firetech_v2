import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  animation = 'fade-in-up',
  delay = 0,
  className = ''
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`${className} ${
        isVisible ? `animate-${animation}` : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
