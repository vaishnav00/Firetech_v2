import React from 'react';
import AnimatedSection from './AnimatedSection';

const Clients: React.FC = () => {
    return (
        <section id="clients" className="py-16 sm:py-20 bg-white" aria-labelledby="clients-heading">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
                    <AnimatedSection animation="fade-in-left" className="w-full md:w-1/2 text-center md:text-left">
                        <h2 id="clients-heading" className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">Our Reach</h2>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Clients & Markets</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Firetech serves construction companies, government agencies, industrial facilities, and commercial establishments throughout Qatar. Our products are trusted in projects ranging from residential developments and infrastructure to large-scale industrial installations.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection animation="slide-in-right" delay={200} className="w-full md:w-1/2">
                         <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-full md:h-auto mx-auto md:max-w-none group">
                            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-firetech-red to-red-600 transform skew-y-3 z-0 transition-all duration-300 group-hover:scale-105 group-hover:skew-y-6"></div>
                            <img 
                              src="https://www.dropbox.com/scl/fi/rg863yiujm8en6stt2xj4/qatar.jpeg?rlkey=gm8cwbkzdppzi72o7bvlu9eov&raw=1" 
                              alt="Doha Qatar skyline representing Firetech's market reach in Qatar" 
                              className="relative z-10 rounded-lg shadow-2xl w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
                              loading="lazy"
                              width="400"
                              height="400"
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default Clients;
