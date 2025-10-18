import React from 'react';

const brandLogos = [
    { name: '3M', logoUrl: 'https://img.favpng.com/25/22/12/3m-singapore-adhesive-tape-logo-brand-png-favpng-Am9s22LMss7Egr1vBTnWBpzDP.jpg' },
    { name: 'Honeywell', logoUrl: 'https://w7.pngwing.com/pngs/111/806/png-transparent-honeywell-logo-honeywell-company-manufacturing-sensor-industry-honeywell-logo-text-service-banner.png' },
    { name: 'Bosch', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBwI1vUatZDBnpeNCWLmjmJYF_kadlJTlqw&s' },
    { name: 'Siemens', logoUrl: 'https://i.pinimg.com/736x/ea/7a/aa/ea7aaaf8ddfeabc8ce8e223a58139fa6.jpg' },
    { name: 'Tyco', logoUrl: 'https://w7.pngwing.com/pngs/755/200/png-transparent-tyco-hd-logo.png' },
    { name: 'Ansul', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/AnsulLogo.gif' },
    { name: 'Viking', logoUrl: 'https://www.agnindo.co.id/wp-content/uploads/2019/11/Viking_Group_Inc_-01.png' },
    { name: 'Kidde', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmlPJqr8Tsv4VtaYdI0zfCxxgKzpNhpRECKQ&s' },
    { name: 'NAFFCO', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/NAFFCO_Logo_%28Transparent%29.png' },
    { name: 'HD fire', logoUrl: 'https://apfmag.com/wp-content/uploads/2016/06/APF_58_Jul16_SHOWCASE_HD_Fire.png' },
    { name: 'Weflo', logoUrl: 'https://deltaflow.com.mx/wp-content/uploads/2020/09/Weflo-Logo-768x186.png' },
    { name: 'CNG', logoUrl: 'https://cdn.globalso.com/cngroove/CNG-LOGO.png' },
    { name: 'Synergy Industries', logoUrl: 'https://images.squarespace-cdn.com/content/v1/5ccb612a9d75ab0001bda184/2516dc10-fba6-4dec-a53c-fbcce77e908d/SynergyLogo-Black.png' },
    { name: 'Val matic', logoUrl: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0avXZE_PWpLkbhsNWwxMUkvZBUEyhf5s8zw&s' }
    
   
];

const Brands: React.FC = () => {
    return (
        <section id="brands" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
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