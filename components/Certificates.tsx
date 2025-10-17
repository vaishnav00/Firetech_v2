import React from 'react';

const certificateLogos = [
    'ISO 9001:2015', 
    'Qatar Civil Defence', 
    'OHSAS 18001', 
    'ISO 14001:2015', 
    'NFPA Member', 
    'Certified Installers',
    'Govt. Approved',
    'Safety Excellence Award'
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
                        {certificateLogos.map((cert, index) => (
                            <li key={index}>
                                <img 
                                    src={`https://via.placeholder.com/200x100/E0E0E0/333333?text=${cert.replace(/ /g, '+').replace(/:/g, '%3A')}`} 
                                    alt={`${cert} certificate`} 
                                    className="h-20 object-contain hover:opacity-75 transition-opacity duration-300 cursor-pointer" 
                                />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                         {certificateLogos.map((cert, index) => (
                            <li key={index}>
                                <img 
                                    src={`https://via.placeholder.com/200x100/E0E0E0/333333?text=${cert.replace(/ /g, '+').replace(/:/g, '%3A')}`} 
                                    alt={`${cert} certificate`} 
                                    className="h-20 object-contain hover:opacity-75 transition-opacity duration-300 cursor-pointer" 
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Certificates;