import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Why Us', href: '/why-us' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md py-3' : 'shadow-sm py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
                <Link to="/">
                    <img 
                        src="https://www.dropbox.com/scl/fi/g5esh24ikp2wfmwtkd2gn/logo-wit-name_ma.png?rlkey=e1dq12gdhdvmttybzqbd78rjm&raw=1" 
                        alt="Firetech Logo" 
                        className={`transition-all duration-300 h-14 ${scrolled ? 'sm:h-16' : 'sm:h-24'}`} 
                    />
                </Link>
                <nav className="hidden md:flex space-x-2">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.href} 
                            className="font-semibold px-4 py-2 rounded-md transition-all duration-300 text-gray-600 hover:bg-firetech-red hover:text-white"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                        className="focus:outline-none transition-colors duration-300 text-gray-600 hover:text-firetech-red p-2"
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col items-center py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.href} 
                                onClick={() => setMobileMenuOpen(false)} 
                                className="text-gray-600 hover:text-firetech-red transition duration-300 font-semibold w-full text-center px-3 py-2 rounded-md"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;