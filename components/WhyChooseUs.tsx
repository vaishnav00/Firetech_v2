
import React from 'react';

interface FeatureProps {
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
    <div>
        <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
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
        <section id="why-us" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-2/5">
                        <h2 className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">Our Advantage</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Choose Firetech?</h3>
                        <p className="text-lg text-gray-600 mb-8">We provide a combination of superior products, expert service, and proven reliability to ensure your project's success.</p>
                         <img src="https://picsum.photos/id/1078/500/350" alt="Industrial pipes" className="rounded-lg shadow-xl w-full" />
                    </div>
                    <div className="lg:w-3/5">
                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <Feature key={index} title={feature.title} description={feature.description} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
