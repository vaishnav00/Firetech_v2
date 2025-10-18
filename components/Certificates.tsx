import React from 'react';

const certificates = [
    { name: 'ISO ', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3R_cu3acU338nQWWOFvtCIo6Y8XIYvPt3QtffUD8An5zf9B53iKqLeSBQfNHwHJQJNQY&usqp=CAU' },
    { name: 'Qatar Civil Defence Approved', logoUrl: 'https://lda-audiotech.com/wp-content/uploads/2023/09/civil-defense-qatar-300px.jpg' },
    { name: 'UL', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7JN0EjChT6JSQbStbFgzaZGmZt_hVE9DAA&s' },
    { name: 'NFPA Member', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8I6tX8MaQY1d2otpFy0o6WL6sjjxhi_dQSQ&s' },
    { name: 'FM', logoUrl: 'https://storage.tameson.com/asset/Articles/general/fm-approved-certification.jpg' },
    { name: 'BSI', logoUrl: 'https://winningthebusiness.com/wp-content/uploads/2022/05/bsi.png' }
];


const Certificates: React.FC = () => {
    return (
        <section id="certificates" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">Commitment to Quality</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Our Certifications & Licenses</h3>
                <div
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
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