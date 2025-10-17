import React from 'react';

const certificates = [
    { name: 'ISO 9001:2015 Certified', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ISO_9001-2015_Logo.svg/1200px-ISO_9001-2015_Logo.svg.png' },
    { name: 'Qatar Civil Defence Approved', logoUrl: 'https://www.qfa.qa/wp-content/uploads/2020/09/civil-defence.png' },
    { name: 'ISO 45001 Certified (OHSAS)', logoUrl: 'https://cdn.worldvectorlogo.com/logos/iso-45001.svg' },
    { name: 'ISO 14001:2015 Certified', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/ISO_14001-2015_Logo.svg/1200px-ISO_14001-2015_Logo.svg.png' },
    { name: 'NFPA Member', logoUrl: 'https://www.nfpa.org/-/media/Images/Logos/NFPA-Logo-PNG.png' },
    { name: 'Government Approved Contractor', logoUrl: 'https://cdn-icons-png.flaticon.com/512/7518/7518739.png' },
    { name: 'Certified Installers', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2921/2921918.png' },
    { name: 'Safety Excellence Award', logoUrl: 'https://cdn-icons-png.flaticon.com/512/3112/3112946.png' }
];


const Certificates: React.FC = () => {
    return (
        <section id="certificates" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">Commitment to Quality</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Our Certifications & Licenses</h3>
                <div
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {certificates.map((cert, index) => (
                            <li key={index} className="flex flex-col items-center justify-center w-40">
                                <img 
                                    src={cert.logoUrl} 
                                    alt={cert.name} 
                                    className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                                />
                                <p className="text-xs text-gray-600 mt-2 font-semibold">{cert.name}</p>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                         {certificates.map((cert, index) => (
                            <li key={index} className="flex flex-col items-center justify-center w-40">
                                <img 
                                    src={cert.logoUrl} 
                                    alt={cert.name} 
                                    className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                                />
                                <p className="text-xs text-gray-600 mt-2 font-semibold">{cert.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Certificates;