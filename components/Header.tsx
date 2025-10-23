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
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-firetech-white/95 backdrop-blur-md ${scrolled ? 'shadow-lg py-2' : 'shadow-md py-3'}`}>
            <div className="w-full flex justify-between items-center px-2 sm:px-4 lg:px-6">
                <Link to="/" className="flex-shrink-0 flex items-center group">
                    <img 
                        src="/Images/logo with nameee.png" 
                        alt="Firetech Logo" 
                        className={`transition-all duration-500 ease-out object-contain group-hover:scale-105 ${scrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'}`} 
                    />
                </Link>
                <nav className="hidden md:flex space-x-1 lg:space-x-2 items-center">
                    {navLinks.map((link, index) => (
                        <Link 
                            key={link.name} 
                            to={link.href} 
                            className="font-semibold px-3 lg:px-4 py-2 rounded-md transition-colors duration-300 text-firetech-gray hover:bg-firetech-red hover:text-firetech-white whitespace-nowrap"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className="md:hidden flex items-center justify-end">
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                        className="focus:outline-none transition-colors duration-300 text-firetech-gray hover:text-firetech-red p-2 rounded-md hover:bg-firetech-light-red"
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="h-7 w-7 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden bg-firetech-white shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="flex flex-col items-center py-2 space-y-1">
                    {navLinks.map((link, index) => (
                        <Link 
                            key={link.name} 
                            to={link.href} 
                            onClick={() => setMobileMenuOpen(false)} 
                            className="text-firetech-gray hover:bg-firetech-red hover:text-firetech-white transition-colors duration-300 font-semibold w-full text-center px-3 py-3"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;