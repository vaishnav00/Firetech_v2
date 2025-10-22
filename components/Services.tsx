import React, { useState, useEffect, useRef } from 'react';
import { CheckCircleIcon, FireIcon, BuildingOfficeIcon, WrenchScrewdriverIcon } from './Icons';
import { Link } from 'react-router-dom';

interface ServiceCategoryProps {
    icon: React.ReactNode;
    title: string;
    items: string[];
    index: number;
    isVisible: boolean;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ icon, title, items, index, isVisible }) => (
    <div className={`bg-firetech-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-600 ease-out h-full flex flex-col cursor-pointer group ${
        isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
    }`} style={{
        transitionDelay: `${index * 150}ms`
    }}>
        <div className="flex items-center mb-4">
            <div className="bg-firetech-red text-firetech-white p-3 rounded-full mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-firetech-gray text-left group-hover:text-firetech-red transition-colors duration-300">{title}</h3>
        </div>
        <ul className="space-y-3 mt-2 flex-grow">
            {items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start text-left group-hover:translate-x-1 transition-transform duration-300">
                    <CheckCircleIcon className="w-5 h-5 text-firetech-red mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-firetech-gray group-hover:text-firetech-gray/80 transition-colors duration-300">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Services: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const servicesRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const servicesData = {
        fireSafety: {
            title: 'Fire & Safety Solutions',
            items: ['Advanced Firefighting & Fire Alarm Systems', 'Personal Protective Equipment (PPE) & Safety Gear']
        },
        construction: {
            title: 'Construction & Industrial Supplies',
            items: ['Building Materials, Tools & Equipment', 'Piping Products & Accessories', 'Fasteners & Industrial Hardware']
        },
        contracting: {
            title: 'Contracting Services',
            items: ['General Contracting & Construction', 'MEP (Mechanical, Electrical & Plumbing)', 'Civil & Structural Works', 'Facility Maintenance']
        }
    };

    return (
        <section ref={servicesRef} id="services" className="py-16 sm:py-20 bg-firetech-light-gray">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <div className={`transition-all duration-800 ease-out ${
                    isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-12'
                }`}>
                    <h2 className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">What We Offer</h2>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-firetech-gray mb-12">Products & Services</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCategory 
                        icon={<FireIcon className="w-7 h-7" />}
                        title={servicesData.fireSafety.title} 
                        items={servicesData.fireSafety.items}
                        index={0}
                        isVisible={isVisible}
                    />
                    <ServiceCategory 
                        icon={<BuildingOfficeIcon className="w-7 h-7" />}
                        title={servicesData.construction.title} 
                        items={servicesData.construction.items}
                        index={1}
                        isVisible={isVisible}
                    />
                    <ServiceCategory 
                        icon={<WrenchScrewdriverIcon className="w-7 h-7" />}
                        title={servicesData.contracting.title} 
                        items={servicesData.contracting.items}
                        index={2}
                        isVisible={isVisible}
                    />
                </div>
                
                {/* Products Button */}
                <div className={`mt-12 transition-all duration-800 ease-out delay-500 ${
                    isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-12'
                }`}>
                    <Link 
                        to="/services#professional-products"
                        className="inline-flex items-center bg-gradient-to-r from-firetech-red to-red-600 text-white px-8 py-4 rounded-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                    >
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        View Our Products
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;