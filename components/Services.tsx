
import React from 'react';
import { CheckCircleIcon } from './Icons';

interface ServiceCategoryProps {
    title: string;
    items: string[];
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, items }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg">
        <h4 className="text-2xl font-bold text-gray-800 mb-6">{title}</h4>
        <ul className="space-y-4">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-firetech-red mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                </li>
            ))}
        </ul>
    </div>
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
        <section id="services" className="py-20 bg-firetech-red text-white relative">
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/1200/800?blur=1')"}}></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-sm font-bold uppercase tracking-widest mb-2 text-gray-200">What We Offer</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-12">Products & Services</h3>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <ServiceCategory title={servicesData.fireSafety.title} items={servicesData.fireSafety.items} />
                    <ServiceCategory title={servicesData.construction.title} items={servicesData.construction.items} />
                    <ServiceCategory title={servicesData.contracting.title} items={servicesData.contracting.items} />
                </div>
            </div>
        </section>
    );
};

export default Services;
