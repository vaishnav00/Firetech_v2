import React from 'react';

const certificates = [
    { name: 'UL Certified', logoUrl: 'https://www.dropbox.com/scl/fi/y8n4t0gvcn1qirk4n4ltq/UL.png?rlkey=66qf0sbltbydycxbhf4nxu68a&raw=1' },
    { name: 'Qatar Civil Defence', logoUrl: 'https://www.dropbox.com/scl/fi/jaopyh3m1vtpyluaxrxxl/Qatar-civil.png?rlkey=5nvwo4tl2cvs7fpcf5nrvoa2d&raw=1' },
    { name: 'NFPA Member', logoUrl: 'https://www.dropbox.com/scl/fi/msbv1vjmslfz2d2uztepk/NFPA.png?rlkey=w6ox38k7xmyd5hncwc6bdmclz&raw=1' },
    { name: 'FM Approved', logoUrl: 'https://www.dropbox.com/scl/fi/zkcii6yq29hs27au7tbhb/FM.jpg?rlkey=sd3ka6oshrgq8n1fv0adevuk6&raw=1' },
    { name: 'BSI Member', logoUrl: 'https://www.dropbox.com/scl/fi/rb54prvdajozaujfos081/BSI.png?rlkey=zfulncvcq2vma1q4s54l5zwnx&raw=1' },
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