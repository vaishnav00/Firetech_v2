import React from 'react';
import { FireIcon, BuildingOfficeIcon, WrenchScrewdriverIcon, CheckCircleIcon } from '../components/Icons';

// NEW: Updated data structure for products, grouped by category
const productsByCategory = [
    {
      category: 'Fire Alarm & Detection Systems',
      description: 'State-of-the-art systems to ensure early warnings and rapid response.',
      items: [
        { name: 'Smoke Detector', imageUrl: 'https://www.dropbox.com/scl/fi/gog9z50lrckq8m8o3pyq9/Smoke_detector.jpeg?rlkey=s03nb1z886lgbuwo4fcep4wpg&raw=1' },
        { name: 'Heat Detector', imageUrl: 'https://www.dropbox.com/scl/fi/a457e72qzt8kp7noumogz/Heat-Detector.jpeg?rlkey=2qxl6iilrcqhpu1fv8h4i9fgg&raw=1' },
        { name: 'Control Panel', imageUrl: 'https://www.dropbox.com/scl/fi/w2zxaxeunxydx6xvizqu9/fire-alarm-control-panel.jpg?rlkey=mpxwfpikvvoucgqff0x33iwad&raw=1' },
        { name: 'Manual Call Point', imageUrl: 'https://www.dropbox.com/scl/fi/9c1tcr0vckdwnas1uwop9/Manual-Call-Point.jpg?rlkey=0zu3huatg3htuy44psgpzevvn&raw=1' }
      ]
    },
    {
      category: 'Firefighting Equipment',
      description: 'A complete range of active fire suppression tools and systems.',
      items: [
        { name: 'Fire Extinguisher', imageUrl: 'https://www.dropbox.com/scl/fi/h084xtibrae79c6muwkq7/Fire-Extinguisher.jpeg?rlkey=il2qdhib5o5dicx8vr5prlm27&raw=1' },
        { name: 'Fire Hose Reel', imageUrl: 'https://www.dropbox.com/scl/fi/x2v13bxqwhw48lww71kxd/Fire-Hose-Reel.png?rlkey=92pukzjd192alqzc2bsffta71&raw=1' },
        { name: 'Sprinkler System', imageUrl: 'https://www.dropbox.com/scl/fi/n424fd175ljryxjcib7q1/Sprinkler-System.jpg?rlkey=rzntjptuqutwdpynyejq0srst&raw=1' },
        { name: 'Fire Hydrant', imageUrl: 'https://www.dropbox.com/scl/fi/nu2w1f1hzngb6947tf7ev/Fire-Hydrant.png?rlkey=83itdqfpz100d9r8zerjbhyxj&raw=1' }
      ]
    },
    {
      category: 'Personal Protective Equipment (PPE)',
      description: 'High-quality gear to ensure workforce safety on any job site.',
      items: [
        { name: 'Safety Helmet', imageUrl: 'https://www.dropbox.com/scl/fi/75eszm57j20v29acxk1wz/Safety-Helmet.jpg?rlkey=jlqzahfn5f8lh9sydhw13ftb0&raw=1' },
        { name: 'Safety Gloves', imageUrl: 'https://www.dropbox.com/scl/fi/eapxxe18vhby1qlstwpl5/Safety-Gloves.jpg?rlkey=h8xq320viej4agx6dvxewjem6&raw=1' },
        { name: 'Safety Harness', imageUrl: 'https://www.dropbox.com/scl/fi/kicdv52u588y0bh8rsps6/Safety-Harness.jpg?rlkey=66s6ayfcq8sxls3uzkeu8fhfm&raw=1' },
        { name: 'Protective Boots', imageUrl: 'https://www.dropbox.com/scl/fi/b5c5d5e5f5g5h5j5k5l5m/safety-boots.jpg?rlkey=z1x1c1v1b1n1m1q1w1e1r&raw=1' }
      ]
    },
    {
      category: 'Piping & Industrial Valves',
      description: 'Durable pipes, fittings, and valves for various industrial applications.',
      items: [
        { name: 'Gate Valve', imageUrl: 'https://www.dropbox.com/scl/fi/8wvee4d6nxf6jcjzw3op3/Gate-Valve.jpg?rlkey=900mbvd36ww221hbtwunri07a&raw=1' },
        { name: 'Ball Valve', imageUrl: 'https://www.dropbox.com/scl/fi/u6j87a28p8250o3kvbp2j/Ball-Valve.jpg?rlkey=r49a0ea3gejw9fxmf5rstiw3l&raw=1' },
        { name: 'Steel Pipes', imageUrl: 'https://www.dropbox.com/scl/fi/1uc4dasuyja1kjgi4ip2z/Steel-Pipes.jpg?rlkey=2we6quqhszeopwu5wuzyde9re&raw=1' },
        { name: 'Pipe Fittings', imageUrl: 'https://www.dropbox.com/scl/fi/r4ke2ymh0jbglsf3iwgm4/Pipe-Fittings.jpeg?rlkey=7gb3cj0jcbvrhkdutxc9hxidt&raw=1' }
      ]
    },
    {
      category: 'Fire Suppression Systems',
      description: 'Automated systems for high-risk areas like server rooms and kitchens.',
      items: [
        { name: 'FM-200 System', imageUrl: 'https://www.dropbox.com/scl/fi/5u5fa82roamrzl4ennsns/FM-200-System.jpeg?rlkey=rl7gl1nfa9qlvqlr7o6xbnbqq&raw=1' },
        { name: 'CO2 System', imageUrl: 'https://www.dropbox.com/scl/fi/a6yb0wcwrtrhqlwjyr0qh/CO2-System.jpeg?rlkey=eh9k7eaz0t1yjlxppy66wmprm&raw=1' },
        { name: 'Kitchen Hood System', imageUrl: 'https://www.dropbox.com/scl/fi/ywtcuizs364phd1mzdtv8/Kitchen-Hood-System.jpg?rlkey=s767r68wdc1pyhsaw9qz9azc2&raw=1' },
        { name: 'Foam System', imageUrl: 'https://www.dropbox.com/scl/fi/kfzjajd2q8b0jgghh2aec/Foam-System.png?rlkey=0ecoi351vzpwwrxq2kyfsu867&raw=1' }
      ]
    }
  ];


// Mock Data for Projects
const projectsData = [
  {
    title: 'Doha Commercial Tower - Fire Safety Overhaul',
    description: 'Supplied and installed a comprehensive, addressable fire alarm and sprinkler system for a 45-story commercial high-rise.',
    imageUrl: 'https://www.dropbox.com/scl/fi/d4f4g4h4j4k4l4z4x4c4v/project-tower.jpg?rlkey=p1o1i1u1y1t1r1e1w1q1a&raw=1'
  },
  {
    title: 'Al Wakrah Logistics Park - Industrial Supply',
    description: 'Acted as the primary supplier for structural steel, MEP components, and safety equipment for a 500,000 sq. ft. logistics facility.',
    imageUrl: 'https://www.dropbox.com/scl/fi/v5b5n5m5q5w5e5r5t5y5u/project-logistics.jpg?rlkey=z1x1c1v1b1n1m1q1w1e1r&raw=1'
  },
  {
    title: 'Lusail Marina Residential Complex - MEP Contracting',
    description: 'Executed the complete mechanical, electrical, and plumbing works for a luxury residential development, ensuring compliance with all local codes.',
    imageUrl: 'https://www.dropbox.com/scl/fi/c6x6z6l6k6j6h6g6f6d6s/project-residential.jpg?rlkey=f1g1h1j1k1l1z1x1c1v1b&raw=1'
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
        <img src={imageUrl} alt={title} className="w-full h-48 md:h-56 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const ServiceCategory: React.FC<{ icon: React.ReactNode, title: string, items: string[] }> = ({ icon, title, items }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
            <div className="bg-firetech-red text-white p-3 rounded-full mr-4 flex-shrink-0">
                {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h3>
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
        <div className="pt-24 sm:pt-28 bg-gray-50">
            {/* Page Header */}
            <section className="bg-firetech-red text-white py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Our Products & Services</h1>
                    <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
                        Delivering integrated, world-class solutions across fire safety, construction, and industrial supply to safeguard your assets and ensure project success.
                    </p>
                </div>
            </section>
            
            {/* Core Services Section */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Our Core Service Areas</h2>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <section className="py-16 sm:py-20 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Product Showcase</h2>
                        <p className="text-lg text-gray-600 mt-2">A selection of high-quality products we supply from trusted global partners.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {productsByCategory.map((category, index) => (
                            <ProductCategoryCard key={index} {...category} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Showcase */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Featured Projects</h2>
                        <p className="text-lg text-gray-600 mt-2">Demonstrating our capability and commitment to excellence across various sectors.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;