import React from 'react';

const brandLogos = [
    { name: '3M', logoUrl: 'https://www.dropbox.com/scl/fi/i5r8xbrrg6jlgo9rqjv01/3m-logo.png?rlkey=51j4qqugnx0oqh4l422tqzvqj&raw=1' },
    { name: 'Honeywell', logoUrl: 'https://www.dropbox.com/scl/fi/2bbhfw7wlti1b4g78bixo/honeywell-logo.png?rlkey=t9s68af2h6qc0jphx496whf0y&raw=1' },
    { name: 'Bosch', logoUrl: 'https://www.dropbox.com/scl/fi/7q3i166j5v2c42z0sjz05/bosch-logo.png?rlkey=5z0s76rfp61kcs8o4k30p34gp&raw=1' },
    { name: 'Siemens', logoUrl: 'https://www.dropbox.com/scl/fi/k9q84t5q582o27z045c48/siemens-logo.png?rlkey=v6l670q8f43g5q11v1b8l5y6k&raw=1' },
    { name: 'Tyco', logoUrl: 'https://www.dropbox.com/scl/fi/nfwf96au2o8h6j4581i9t/tyco-logo.png?rlkey=76h7z6x5j46k8l64g2h2h0f0q&raw=1' },
    { name: 'Ansul', logoUrl: 'https://www.dropbox.com/scl/fi/84f93dq5a133l39k4m6f6/ansul-logo.png?rlkey=61l0c9h92i8m5c52c6f6g6f6x&raw=1' },
    { name: 'Viking', logoUrl: 'https://www.dropbox.com/scl/fi/q7s3v7b8w0f7a0v4x7x7e/viking-logo.png?rlkey=c3y9e4k4v4x8n8k8j8h8h8v8v&raw=1' },
    { name: 'Kidde', logoUrl: 'https://www.dropbox.com/scl/fi/b3n1k1m1g1f1h1j1k1l1l/kidde-logo.png?rlkey=a2s2d2f2g2h2j2k2l2m2n&raw=1' },
    { name: 'NAFFCO', logoUrl: 'https://www.dropbox.com/scl/fi/y5r5t5u5i5o5p5a5s5d5f/naffco-logo.png?rlkey=z1x1c1v1b1n1m1q1w1e1r&raw=1' },
    { name: 'HD Fire', logoUrl: 'https://www.dropbox.com/scl/fi/c3v3b3n3m3q3w3e3r3t3y/hd-fire-logo.png?rlkey=a1s1d1f1g1h1j1k1l1z1x&raw=1' },
    { name: 'Weflo', logoUrl: 'https://www.dropbox.com/scl/fi/p9o9i9u9y9t9r9e9w9q9a/weflo-logo.png?rlkey=m1n1b1v1c1x1z1l1k1j1h&raw=1' },
    { name: 'CNG', logoUrl: 'https://www.dropbox.com/scl/fi/l8k8j8h8g8f8d8s8a8p8o/cng-logo.png?rlkey=q1w1e1r1t1y1u1i1o1p1a&raw=1' },
    { name: 'Synergy Industries', logoUrl: 'https://www.dropbox.com/scl/fi/z7x7c7v7b7n7m7q7w7e7r/synergy-logo.png?rlkey=p1o1i1u1y1t1r1e1w1q1a&raw=1' },
    { name: 'Valmatic', logoUrl: 'https://www.dropbox.com/scl/fi/f4g4h4j4k4l4z4x4c4v4b/valmatic-logo.png?rlkey=s1d1f1g1h1j1k1l1z1x1c&raw=1' }
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