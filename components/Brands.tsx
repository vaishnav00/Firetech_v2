import React from 'react';

const brandLogos = [
    { name: '3M', logoUrl: 'https://img.favpng.com/25/22/12/3m-singapore-adhesive-tape-logo-brand-png-favpng-Am9s22LMss7Egr1vBTnWBpzDP.jpg' },
    { name: 'Honeywell', logoUrl: 'https://companieslogo.com/img/orig/HON-78a74509.png?t=1683353272' },
    { name: 'Bosch', logoUrl: 'https://companieslogo.com/img/orig/BOSCHLTD.NS-02298717.png?t=1653457997' },
    { name: 'Siemens', logoUrl: 'https://companieslogo.com/img/orig/SIE.DE-ca917028.png?t=1683354425' },
    { name: 'Tyco', logoUrl: 'https://www.johnsoncontrols.com/-/media/jci/tyco/images/tyco-logo-social.png' },
    { name: 'Ansul', logoUrl: 'https://www.tycofpp.com/images/librariesprovider7/ansul/ansul-logo.png' },
    { name: 'Viking', logoUrl: 'https://www.vikinggroupinc.com/sites/all/themes/viking/logo.png' },
    { name: 'Kidde', logoUrl: 'https://1000logos.net/wp-content/uploads/2023/04/Kidde-Logo.png' },
    { name: 'NAFFCO', logoUrl: 'https://www.naffco.com/media/logo/stores/1/NAFFCO_logo.png' },
    { name: 'Jotun', logoUrl: 'https://companieslogo.com/img/orig/JOT.OL-33562657.png?t=1646802119' },
    { name: 'Hilti', logoUrl: 'https://companieslogo.com/img/orig/HILTI.SW-d3e92e2a.png?t=1648359218' },
    { name: 'Caterpillar', logoUrl: 'https://companieslogo.com/img/orig/CAT-42c21626.png?t=1683352726' }
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
                                <img src={brand.logoUrl} alt={`${brand.name} logo`} className="h-12 w-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {brandLogos.map((brand, index) => (
                            <li key={index}>
                                 <img src={brand.logoUrl} alt={`${brand.name} logo`} className="h-12 w-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Brands;