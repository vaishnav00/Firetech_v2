import React from 'react';

const brandLogos = [
    { name: 'BIS', logoUrl: '/Images/BIS.png' },
    { name: 'Croker', logoUrl: '/Images/croker.png' },
    { name: 'Fireguard', logoUrl: '/Images/Fireguard.png' },
    { name: 'FX Fire', logoUrl: '/Images/fxfire.png' },
    { name: 'Gerand', logoUrl: '/Images/Gerand.png' },
    { name: 'Giacomini', logoUrl: '/Images/Giacomini.png' },
    { name: 'GVI', logoUrl: '/Images/GVI.png' },
    { name: 'HD Fire', logoUrl: '/Images/HD fire.png' },
    { name: 'Industrial', logoUrl: '/Images/Industrial.jpg' },
    { name: 'Kidde', logoUrl: '/Images/kidde.jpg' },
    { name: 'LEDE', logoUrl: '/Images/LEDE.png' },
    { name: 'LLT', logoUrl: '/Images/LLT.png' },
    { name: 'Lxine', logoUrl: '/Images/Lxine.jpg' },
    { name: 'NewAge', logoUrl: '/Images/newage.png' },
    { name: 'Potter', logoUrl: '/Images/potter.png' },
    { name: 'Tyco', logoUrl: '/Images/Tyco.png' },
    { name: 'Valmatic', logoUrl: '/Images/val-matic.png' },
    { name: 'Viking Group', logoUrl: '/Images/Viking_Group.png' },
    { name: 'Weflo', logoUrl: '/Images/Weflo.png' },
    { name: 'Winters', logoUrl: '/Images/Winters.jpg' },
];

const Brands: React.FC = () => {
    return (
        <section id="brands" className="py-16 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">Our Partners</h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-12">Trusted Brands We Supply</h3>
                <div
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {brandLogos.map((brand, index) => (
                            <li key={index}>
                                <img src={brand.logoUrl} alt={`${brand.name} logo`} className="h-10 md:h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {brandLogos.map((brand, index) => (
                            <li key={index}>
                                 <img src={brand.logoUrl} alt={`${brand.name} logo`} className="h-10 md:h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Brands;