import React from 'react';
import AnimatedSection from './AnimatedSection';

interface FeatureProps {
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
    <div className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-firetech-red/30 hover:transform hover:-translate-y-2 hover:rotate-1 relative overflow-hidden">
        <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-firetech-red transition-colors duration-300">
            {title}
        </h4>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{description}</p>
        
        <div className="absolute inset-0 bg-gradient-to-br from-firetech-red/5 via-red-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" aria-hidden="true"></div>
        <div className="absolute top-3 right-3 w-6 h-6 border border-firetech-red/30 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-90" aria-hidden="true"></div>
    </div>
);

const WhyChooseUs: React.FC = () => {
    const features = [
        { title: 'Comprehensive Product Range', description: 'Gain access to a complete portfolio of certified safety and construction products, all meeting the highest international quality and safety standards.' },
        { title: 'Trusted Global Partnerships', description: 'Strong partnerships with trusted international manufacturers ensure product quality and reliability.' },
        { title: 'Experienced & Dedicated Team', description: 'Our skilled workforce and experienced management team are fully dedicated to providing exceptional support and ensuring total client satisfaction.' },
        { title: 'Proven Track Record', description: 'With a history of successful projects across the region, we have the proven expertise and reliability to deliver results you can depend on.' },
        { title: 'Reliable Supply Chain', description: 'Benefit from our competitive pricing and a robust supply chain network designed for timely and efficient delivery.' },
    ];

    return (
        <section id="why-us" className="py-16 sm:py-20 bg-gray-50" aria-labelledby="why-us-heading">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
                    <AnimatedSection animation="slide-in-left" className="w-full lg:w-2/5">
                        <h2 id="why-us-heading" className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">Our Advantage</h2>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Why Choose Firetech?</h3>
                        <p className="text-lg text-gray-600 mb-8">We provide a combination of superior products, expert service, and proven reliability to ensure your project's success.</p>
                         <div className="w-64 h-56 sm:w-80 sm:h-64 lg:w-full lg:h-auto mx-auto group">
                            <img 
                              src="https://www.dropbox.com/scl/fi/ta6mxeq6k7idesava79ai/fire-eqp-image.jpg?rlkey=ajqzhkkyib3wo98ftsdxgssqd&raw=1" 
                              alt="Firetech fire safety equipment and tools for professional fire protection in Qatar" 
                              className="rounded-lg shadow-xl w-full h-full object-cover transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"
                              loading="lazy"
                              width="400"
                              height="350"
                            />
                        </div>
                    </AnimatedSection>
                    <div className="w-full lg:w-3/5">
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <AnimatedSection key={index} animation="fade-in-right" delay={index * 100}>
                                    <Feature title={feature.title} description={feature.description} />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
