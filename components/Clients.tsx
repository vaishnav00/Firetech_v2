import React from 'react';

const Clients: React.FC = () => {
    return (
        <section id="clients" className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">Our Reach</h2>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Clients & Markets</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Firetech serves construction companies, government agencies, industrial facilities, and commercial establishments throughout Qatar. Our products are trusted in projects ranging from residential developments and infrastructure to large-scale industrial installations.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                         <div className="relative max-w-md mx-auto md:max-w-none">
                            <div className="absolute -top-4 -right-4 w-full h-full bg-firetech-red transform skew-y-3 z-0"></div>
                            <img src="https://www.dropbox.com/scl/fi/rg863yiujm8en6stt2xj4/qatar.jpeg?rlkey=gm8cwbkzdppzi72o7bvlu9eov&raw=1" alt="Doha, Qatar skyline" className="relative z-10 rounded-lg shadow-2xl w-full h-auto object-cover max-h-96 md:max-h-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;