import React from 'react';

const certificates = [
    { name: 'UL Certified', logoUrl: '/Images/UL.png' },
    { name: 'Qatar Civil Defence', logoUrl: '/Images/Qatar civil.png' },
    { name: 'NFPA Member', logoUrl: '/Images/NFPA.png' },
    { name: 'FM Approved', logoUrl: '/Images/FM.jpg' },
    { name: 'BSI Member', logoUrl: '/Images/BSI.png' },
];


const Certificates: React.FC = () => {
    return (
        <section id="certificates" className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">Commitment to Quality</h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-12">Our Certifications & Licenses</h3>
                <div
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
                        {certificates.map((cert, index) => (
                            <li key={index} className="flex flex-col items-center justify-center w-28 md:w-40">
                                <img 
                                    src={cert.logoUrl} 
                                    alt={cert.name} 
                                    className="h-16 md:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                                />
                                <p className="text-xs text-gray-600 mt-2 font-semibold text-center">{cert.name}</p>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                         {certificates.map((cert, index) => (
                            <li key={index} className="flex flex-col items-center justify-center w-28 md:w-40">
                                <img 
                                    src={cert.logoUrl} 
                                    alt={cert.name} 
                                    className="h-16 md:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                                />
                                <p className="text-xs text-gray-600 mt-2 font-semibold text-center">{cert.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Certificates;