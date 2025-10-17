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

    const NavLinksContent = () => (
        <>
            {navLinks.map((link) => (
                <Link key={link.name} to={link.href} onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-firetech-red transition duration-300 font-semibold px-3 py-2 rounded-md">
                    {link.name}
                </Link>
            ))}
        </>
    );

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link to="/">
                    <img src="https://drive.google.com/file/d/1M6M_LNFO0pCBkcvrBJgU3YzUByptX0vy/preview" alt="Firetech Logo" className="h-12" />
                </Link>
                <nav className="hidden md:flex space-x-4">
                    <NavLinksContent />
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800 hover:text-firetech-red focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col items-center py-4 space-y-2">
                        <NavLinksContent />
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;