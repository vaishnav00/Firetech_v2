import React, { useState, useEffect } from 'react';

const Clients: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            src: "/Images/qatar.jpeg",
            alt: "Doha, Qatar skyline"
        },
        {
            src: "/Images/Pearl qatar.jpg",
            alt: "Industrial facilities in Qatar"
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 600);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const slideTimer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(slideTimer);
    }, [slides.length]);

    return (
        <section id="clients" className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">Our Reach</h2>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Clients & Markets</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Firetech serves construction companies, government agencies, industrial facilities, and commercial establishments throughout Qatar. Our products are trusted in projects ranging from residential developments and infrastructure to large-scale industrial installations.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative max-w-md mx-auto md:max-w-none">
                            <div className="absolute -top-4 -right-4 w-full h-full bg-firetech-red transform skew-y-3 z-0"></div>
                            <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden">
                                <div className="relative w-full h-96 md:h-[400px]">
                                    {slides.map((slide, index) => (
                                        <img
                                            key={index}
                                            src={slide.src}
                                            alt={slide.alt}
                                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                                                index === currentSlide 
                                                    ? 'opacity-100 scale-100' 
                                                    : 'opacity-0 scale-105'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div className={`mt-16 md:mt-20 bg-gradient-to-r from-firetech-red to-red-600 rounded-3xl p-8 md:p-12 text-white transition-all duration-800 ease-out delay-600 ${
                    isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-12'
                }`}>
                    <div className="text-center mb-8">
                        <h4 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Qatar's Leading Organizations</h4>
                        <p className="text-red-100 text-lg">From government infrastructure to private developments, we deliver excellence</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
                                <h5 className="text-xl font-bold mb-2">Government Sector</h5>
                                <p className="text-red-100">Infrastructure & Public Projects</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
                                <h5 className="text-xl font-bold mb-2">Industrial Sector</h5>
                                <p className="text-red-100">Manufacturing & Energy Facilities</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
                                <h5 className="text-xl font-bold mb-2">Commercial Sector</h5>
                                <p className="text-red-100">Office Buildings & Retail</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;