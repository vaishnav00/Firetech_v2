import React from 'react';

const certificates = [
    { name: 'ISO 9001:2015', logoUrl: 'https://www.dropbox.com/scl/fi/y70m8n87e685f0q11j5c6/iso-logo.png?rlkey=p5n0m68g0j7b70j0q7w7k&raw=1' },
    { name: 'Qatar Civil Defence', logoUrl: 'https://www.dropbox.com/scl/fi/s8c6c5j6v6d5g6h6j6k6l/qcd-logo.png?rlkey=a1b2c3d4e5f6g7h8i9j0k&raw=1' },
    { name: 'UL Certified', logoUrl: 'https://www.dropbox.com/scl/fi/x4y4z4a4b4c4d4e4f4g4h/ul-logo.png?rlkey=q9w8e7r6t5y4u3i2o1p0a&raw=1' },
    { name: 'NFPA Member', logoUrl: 'https://www.dropbox.com/scl/fi/m1n2b3v4c5x6z7l8k9j8h/nfpa-logo.png?rlkey=p0o9i8u7y6t5r4e3w2q1a&raw=1' },
    { name: 'FM Approved', logoUrl: 'https://www.dropbox.com/scl/fi/d5f6g7h8j9k0l0z0x0c0v/fm-logo.png?rlkey=a1s2d3f4g5h6j7k8l9z0x&raw=1' },
    { name: 'BSI Member', logoUrl: 'https://www.dropbox.com/scl/fi/v9c8x7z6l5k4j3h2g1f1d/bsi-logo.png?rlkey=z1x2c3v4b5n6m7q8w9e8r&raw=1' }
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