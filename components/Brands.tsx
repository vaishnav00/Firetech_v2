import React from 'react';

const brandLogos = [
    '3M', 'Honeywell', 'Bosch', 'Siemens', 'Tyco', 'Ansul', 'Viking', 'Kidde', 'NAFFCO', 'Jotun', 'Hilti', 'Caterpillar'
];

const Brands: React.FC = () => {
    return (
        <section id="brands" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">Our Partners</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Trusted Brands We Supply</h3>
                <div
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {brandLogos.map((brand, index) => (
                            <li key={index}>
                                <img src={`https://via.placeholder.com/150x60/E0E0E0/333333?text=${brand.replace(' ', '+')}`} alt={`${brand} logo`} className="h-12 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {brandLogos.map((brand, index) => (
                            <li key={index}>
                                 <img src={`https://via.placeholder.com/150x60/E0E0E0/333333?text=${brand.replace(' ', '+')}`} alt={`${brand} logo`} className="h-12 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Brands;
