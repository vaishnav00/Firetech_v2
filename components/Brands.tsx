import React from 'react';

const brandLogos = [
    { name: 'BIS', logoUrl: 'https://www.dropbox.com/scl/fi/md1i66abxrc62uzu9dqzy/BIS.png?rlkey=anq8ml8nvnm0fhesgoimbzu90&raw=1' },
    { name: 'Croker', logoUrl: 'https://www.dropbox.com/scl/fi/varyuojvkeey92j25c0u8/croker.png?rlkey=eghmfj5qc9m2rd140nwxhshkf&raw=1' },
    { name: 'Fireguard', logoUrl: 'https://www.dropbox.com/scl/fi/jj2gq3d9pdy3sb6o4qkxw/Fireguard.png?rlkey=cfgoyx03jpwyjku51tqwc5tye&raw=1' },
    { name: 'FX Fire', logoUrl: 'https://www.dropbox.com/scl/fi/fljsiwzcbhz1tztcevvmv/fxfire.png?rlkey=bdpxu6ui7qn984kp2g1glt8ye&raw=1' },
    { name: 'Gerand', logoUrl: 'https://www.dropbox.com/scl/fi/lnnt6bj3y5et9zazlik2r/Gerand.png?rlkey=t2u5rmhp9hzyd7wwq9z0ld26b&raw=1' },
    { name: 'Giacomini', logoUrl: 'https://www.dropbox.com/scl/fi/nynpw0uuo0qlehzlrctjb/Giacomini.png?rlkey=u006ov8crvzkuzsmrf6u6c2ec&raw=1' },
    { name: 'GVI', logoUrl: 'https://www.dropbox.com/scl/fi/39swl67c1x9xiwuokthkt/GVI.png?rlkey=ubawkwrmfpu4bx4998mkrpvlh&raw=1' },
    { name: 'HD Fire', logoUrl: 'https://www.dropbox.com/scl/fi/1bjnwyp2lz3nt9zkpckkl/HD-fire.png?rlkey=fksnoa6fdhy6ks75qzhxk7nz8&raw=1' },
    { name: 'Industrial', logoUrl: 'https://www.dropbox.com/scl/fi/d7ixmwitnpip0cu2kxrz6/Industrial.jpg?rlkey=2f8wxk28o2dtjnatrvvque1hj&raw=1' },
    { name: 'Kidde', logoUrl: 'https://www.dropbox.com/scl/fi/jqua6qqts9r389ceuwunc/kidde.jpg?rlkey=zu7xd30ul9rlhy22jhcc2g3q5&raw=1' },
    { name: 'LEDE', logoUrl: 'https://www.dropbox.com/scl/fi/mkvzm8s8ansofd3y4jhy5/LEDE.png?rlkey=bgg2kz0yuany16k6hsk08bodd&raw=1' },
    { name: 'LLT', logoUrl: 'https://www.dropbox.com/scl/fi/zwcdegckldt1bs45hwj6d/LLT.png?rlkey=8znvyhn889c6fnue8yzkxzyuk&raw=1' },
    { name: 'Lxine', logoUrl: 'https://www.dropbox.com/scl/fi/8fx8gp45m7re60sha3efw/Lxine.jpg?rlkey=jyv1em4rq2umw171x87jw83n0&raw=1' },
    { name: 'NewAge', logoUrl: 'https://www.dropbox.com/scl/fi/jrj8arkcu5h1ydtjeh0tg/newage.png?rlkey=euua1gvrkbuu28lbm8ypoz51v&raw=1' },
    { name: 'Potter', logoUrl: 'https://www.dropbox.com/scl/fi/yj2hc8z6k1ghmp0o9a3k9/potter.png?rlkey=qbidunmahmjv07i1llf60l0by&raw=1' },
    { name: 'Tyco', logoUrl: 'https://www.dropbox.com/scl/fi/f9uunioxaeagwke10lomg/Tyco.png?rlkey=id7phw5q5iaq6dpelw8kxqpq6&raw=1' },
    { name: 'Valmatic', logoUrl: 'https://www.dropbox.com/scl/fi/0g147eiswz7wjb6d5yyel/val-matic.png?rlkey=myh04k99gix71uevcty51glw2&raw=1' },
    { name: 'Viking Group', logoUrl: 'https://www.dropbox.com/scl/fi/mrazsjpf1cqtoaqi7hzsa/Viking_Group.png?rlkey=mdzrv8dpluqvjir2a1c1dp9gu&raw=1' },
    { name: 'Weflo', logoUrl: 'https://www.dropbox.com/scl/fi/vqedr8o1dy1t2soffsvu0/Weflo.png?rlkey=s6hs2npuwh4u0893t5kain12l&raw=1' },
    { name: 'Winters', logoUrl: 'https://www.dropbox.com/scl/fi/km8zafxsobotloawcljjp/Winters.jpg?rlkey=qtuhgqqf2e7a9ldqhst7pah9c&raw=1' },
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