import React from 'react';
import { CheckCircleIcon, FireIcon, BuildingOfficeIcon, WrenchScrewdriverIcon } from './Icons';
import AnimatedSection from './AnimatedSection';

interface ServiceCategoryProps {
    icon: React.ReactNode;
    title: string;
    items: string[];
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ icon, title, items }) => (
    <article className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-gray-200 hover:border-firetech-red/30 hover:transform hover:-translate-y-2 hover:rotate-1 relative overflow-hidden">
        <header className="flex items-center mb-4">
            <div className="bg-gradient-to-br from-firetech-red to-red-600 text-white p-3 rounded-full mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg" aria-hidden="true">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-left group-hover:text-firetech-red transition-colors duration-300">
                <span className="bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent group-hover:from-firetech-red group-hover:to-red-600">
                    {title}
                </span>
            </h3>
        </header>
        <ul className="space-y-3 mt-2 flex-grow">
            {items.map((item, index) => (
                <li key={index} className="flex items-start text-left group/item">
                    <CheckCircleIcon className="w-5 h-5 text-firetech-red mr-3 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" aria-hidden="true" />
                    <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">{item}</span>
                </li>
            ))}
        </ul>
        
        <div className="absolute inset-0 bg-gradient-to-br from-firetech-red/5 via-red-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" aria-hidden="true"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border border-firetech-red/20 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-90" aria-hidden="true"></div>
    </article>
);

const Services: React.FC = () => {
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
        <section id="services" className="py-16 sm:py-20 bg-gray-100" aria-labelledby="services-heading">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <AnimatedSection animation="fade-in-up">
                    <h2 id="services-heading" className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">
                        What We Offer
                    </h2>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-12">
                        Products & Services
                    </h3>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatedSection animation="fade-in-up" delay={100}>
                        <ServiceCategory 
                            icon={<FireIcon className="w-7 h-7" />}
                            title={servicesData.fireSafety.title} 
                            items={servicesData.fireSafety.items} 
                        />
                    </AnimatedSection>
                    <AnimatedSection animation="fade-in-up" delay={300}>
                        <ServiceCategory 
                            icon={<BuildingOfficeIcon className="w-7 h-7" />}
                            title={servicesData.construction.title} 
                            items={servicesData.construction.items} 
                        />
                    </AnimatedSection>
                    <AnimatedSection animation="fade-in-up" delay={500}>
                        <ServiceCategory 
                            icon={<WrenchScrewdriverIcon className="w-7 h-7" />}
                            title={servicesData.contracting.title} 
                            items={servicesData.contracting.items} 
                        />
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default Services;
