import React from 'react';
import { FireIcon, BuildingOfficeIcon, WrenchScrewdriverIcon, CheckCircleIcon } from '../components/Icons';

// NEW: Updated data structure for products, grouped by category
const productsByCategory = [
  {
    category: 'Fire Alarm & Detection Systems',
    description: 'State-of-the-art systems to ensure early warnings and rapid response.',
    items: [
      { name: 'Smoke Detector', imageUrl: 'https://picsum.photos/id/1015/200/200' },
      { name: 'Heat Detector', imageUrl: 'https://picsum.photos/id/1016/200/200' },
      { name: 'Control Panel', imageUrl: 'https://picsum.photos/id/1018/200/200' },
      { name: 'Manual Call Point', imageUrl: 'https://picsum.photos/id/1019/200/200' }
    ]
  },
  {
    category: 'Firefighting Equipment',
    description: 'A complete range of active fire suppression tools and systems.',
    items: [
      { name: 'Fire Extinguisher', imageUrl: 'https://picsum.photos/id/21/200/200' },
      { name: 'Fire Hose Reel', imageUrl: 'https://picsum.photos/id/111/200/200' },
      { name: 'Sprinkler System', imageUrl: 'https://picsum.photos/id/112/200/200' },
      { name: 'Fire Hydrant', imageUrl: 'https://picsum.photos/id/113/200/200' }
    ]
  },
  {
    category: 'Personal Protective Equipment (PPE)',
    description: 'High-quality gear to ensure workforce safety on any job site.',
    items: [
      { name: 'Safety Helmet', imageUrl: 'https://picsum.photos/id/183/200/200' },
      { name: 'Safety Gloves', imageUrl: 'https://picsum.photos/id/184/200/200' },
      { name: 'Safety Harness', imageUrl: 'https://picsum.photos/id/185/200/200' },
      { name: 'Protective Boots', imageUrl: 'https://picsum.photos/id/186/200/200' }
    ]
  },
  {
    category: 'Piping & Industrial Valves',
    description: 'Durable pipes, fittings, and valves for various industrial applications.',
    items: [
      { name: 'Gate Valve', imageUrl: 'https://picsum.photos/id/1078/200/200' },
      { name: 'Ball Valve', imageUrl: 'https://picsum.photos/id/1077/200/200' },
      { name: 'Steel Pipes', imageUrl: 'https://picsum.photos/id/1076/200/200' },
      { name: 'Pipe Fittings', imageUrl: 'https://picsum.photos/id/1074/200/200' }
    ]
  },
    {
    category: 'Fire Suppression Systems',
    description: 'Automated systems for high-risk areas like server rooms and kitchens.',
    items: [
      { name: 'FM-200 System', imageUrl: 'https://picsum.photos/id/431/200/200' },
      { name: 'CO2 System', imageUrl: 'https://picsum.photos/id/432/200/200' },
      { name: 'Kitchen Hood System', imageUrl: 'https://picsum.photos/id/433/200/200' },
      { name: 'Foam System', imageUrl: 'https://picsum.photos/id/434/200/200' }
    ]
  },
  {
    category: 'Building Materials & Tools',
    description: 'Essential construction materials and professional-grade power tools.',
    items: [
        { name: 'Structural Steel', imageUrl: 'https://picsum.photos/id/1080/200/200' },
        { name: 'Power Drills', imageUrl: 'https://picsum.photos/id/25/200/200' },
        { name: 'Fasteners & Bolts', imageUrl: 'https://picsum.photos/id/56/200/200' },
        { name: 'Welding Equipment', imageUrl: 'https://picsum.photos/id/57/200/200' }
    ]
  }
];


// Mock Data for Projects
const projectsData = [
  {
    title: 'Doha Commercial Tower - Fire Safety Overhaul',
    description: 'Supplied and installed a comprehensive, addressable fire alarm and sprinkler system for a 45-story commercial high-rise.',
    imageUrl: 'https://picsum.photos/id/1075/400/300'
  },
  {
    title: 'Al Wakrah Logistics Park - Industrial Supply',
    description: 'Acted as the primary supplier for structural steel, MEP components, and safety equipment for a 500,000 sq. ft. logistics facility.',
    imageUrl: 'https://picsum.photos/id/119/400/300'
  },
  {
    title: 'Lusail Marina Residential Complex - MEP Contracting',
    description: 'Executed the complete mechanical, electrical, and plumbing works for a luxury residential development, ensuring compliance with all local codes.',
    imageUrl: 'https://picsum.photos/id/1079/400/300'
  },
];

// NEW: Component for displaying a product category with its items
const ProductCategoryCard: React.FC<{ category: string; description: string; items: { name: string; imageUrl: string }[] }> = ({ category, description, items }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{category}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div className="p-6 pt-0 mt-auto">
             <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-4">
                {items.map((item, index) => (
                    <div key={index} className="text-center group">
                        <div className="overflow-hidden rounded-md">
                            <img src={item.imageUrl} alt={item.name} className="w-full h-24 object-cover rounded-md shadow-sm mb-2 transform group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <p className="text-xs font-semibold text-gray-700 mt-2">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const ProjectCard: React.FC<{ title: string, description: string, imageUrl: string }> = ({ title, description, imageUrl }) => (
     <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const ServiceCategory: React.FC<{ icon: React.ReactNode, title: string, items: string[] }> = ({ icon, title, items }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
            <div className="bg-firetech-red text-white p-3 rounded-full mr-4">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-firetech-red mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);


const ServicesPage: React.FC = () => {
    return (
        <div className="pt-20 bg-gray-50">
            {/* Page Header */}
            <section className="bg-firetech-red text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Products & Services</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Delivering integrated, world-class solutions across fire safety, construction, and industrial supply to safeguard your assets and ensure project success.
                    </p>
                </div>
            </section>
            
            {/* Core Services Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Service Areas</h2>
                    </div>
                     <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                        <ServiceCategory 
                            icon={<FireIcon className="w-8 h-8"/>}
                            title="Fire & Safety Solutions"
                            items={[
                                'Advanced Firefighting & Fire Alarm Systems', 
                                'Personal Protective Equipment (PPE)',
                                'Safety & Emergency Lighting'
                            ]}
                        />
                        <ServiceCategory 
                            icon={<BuildingOfficeIcon className="w-8 h-8"/>}
                            title="Construction & Industrial"
                            items={[
                                'Building Materials, Tools & Equipment', 
                                'Piping Products & Accessories', 
                                'Fasteners & Industrial Hardware'
                            ]}
                        />
                        <ServiceCategory 
                            icon={<WrenchScrewdriverIcon className="w-8 h-8"/>}
                            title="Contracting Services"
                            items={[
                                'General Contracting & Construction', 
                                'MEP (Mechanical, Electrical & Plumbing)', 
                                'Civil, Structural & Maintenance Works'
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Product Showcase</h2>
                        <p className="text-lg text-gray-600 mt-2">A selection of high-quality products we supply from trusted global partners.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {productsByCategory.map((category, index) => (
                            <ProductCategoryCard key={index} {...category} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Showcase */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Projects</h2>
                        <p className="text-lg text-gray-600 mt-2">Demonstrating our capability and commitment to excellence across various sectors.</p>
                    </div>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                        {projectsData.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;