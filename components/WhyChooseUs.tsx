import React, { useState, useEffect, useRef } from 'react';

interface FeatureProps {
    title: string;
    description: string;
    index: number;
    isVisible: boolean;
}

const Feature: React.FC<FeatureProps> = ({ title, description, index, isVisible }) => (
    <div className={`bg-firetech-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-600 ease-out cursor-pointer group ${
        isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
    }`} style={{
        transitionDelay: `${index * 150}ms`
    }}>
        <div className="flex items-start mb-4">
            <div className="bg-firetech-red text-firetech-white p-3 rounded-full mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h4 className="text-xl font-bold text-firetech-gray group-hover:text-firetech-red transition-colors duration-300">{title}</h4>
        </div>
        <p className="text-firetech-gray leading-relaxed group-hover:text-firetech-gray/80 transition-colors duration-300">{description}</p>
    </div>
);

const WhyChooseUs: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const whyUsRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (whyUsRef.current) {
            observer.observe(whyUsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Auto-rotate images every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const features = [
        { title: 'Comprehensive Product Range', description: 'Gain access to a complete portfolio of certified safety and construction products, all meeting the highest international quality and safety standards.' },
        { title: 'Trusted Global Partnerships', description: 'Strong partnerships with trusted international manufacturers ensure product quality and reliability.' },
        { title: 'Experienced & Dedicated Team', description: 'Our skilled workforce and experienced management team are fully dedicated to providing exceptional support and ensuring total client satisfaction.' },
        { title: 'Proven Track Record', description: 'With a history of successful projects across the region, we have the proven expertise and reliability to deliver results you can depend on.' },
        { title: 'Reliable Supply Chain', description: 'Benefit from our competitive pricing and a robust supply chain network designed for timely and efficient delivery.' },
    ];

    const images = [
        {
            src: "/Images/why choose.png",
            alt: "Fire safety equipment"
        },
        {
            src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
            alt: "Construction safety equipment"
        },
        {
            src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
            alt: "Safety training and equipment"
        },
        {
            src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
            alt: "Industrial safety solutions"
        },
        {
            src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
            alt: "Professional safety consultation"
        }
    ];

    return (
        <section ref={whyUsRef} id="why-us" className="py-16 sm:py-20 bg-firetech-light-gray">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-800 ease-out ${
                    isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-12'
                }`}>
                    <h2 className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">Our Advantage</h2>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-firetech-gray mb-6">Why Choose Firetech?</h3>
                    <p className="text-lg text-firetech-gray max-w-3xl mx-auto">We provide a combination of superior products, expert service, and proven reliability to ensure your project's success.</p>
                </div>

                {/* Main Content with Side Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <Feature 
                                key={index} 
                                title={feature.title} 
                                description={feature.description}
                                index={index}
                                isVisible={isVisible}
                            />
                        ))}
                    </div>

                    {/* Image Slideshow Section */}
                    <div className={`transition-all duration-800 ease-out delay-500 ${
                        isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-12'
                    }`}>
                        <div className="relative overflow-hidden rounded-lg shadow-xl">
                            <img 
                                src={images[currentImageIndex].src}
                                alt={images[currentImageIndex].alt}
                                className="w-full h-96 object-cover transition-all duration-500 ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;