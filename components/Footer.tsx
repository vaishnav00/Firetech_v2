import React from 'react';
import { LinkedInIcon, TwitterIcon, FacebookIcon, InstagramIcon } from './Icons';


const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { 
            name: 'LinkedIn', 
            href: 'https://www.linkedin.com/company/firetech-trading-contracting', 
            icon: <LinkedInIcon className="h-6 w-6" /> 
        },
        { 
            name: 'Twitter', 
            href: '#', 
            icon: <TwitterIcon className="h-6 w-6" /> 
        },
        { 
            name: 'Facebook', 
            href: '#', 
            icon: <FacebookIcon className="h-6 w-6" /> 
        },
        { 
            name: 'Instagram', 
            href: 'https://www.instagram.com/firetech.qa/', 
            icon: <InstagramIcon className="h-6 w-6" /> 
        },
    ];


    return (
        <footer className="bg-gray-900 text-gray-400 py-8">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-6 flex justify-center">
                    <div className="bg-white p-3 rounded-lg shadow-md">
                        <img src="/Images/logo with nameee.png" alt="Firetech Logo" className="h-12" />
                    </div>
                </div>
                <div className="flex justify-center space-x-6 mb-6">
                    {socialLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                            aria-label={`Follow us on ${link.name}`}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <p>&copy; {currentYear} Firetech Trading Contracting W.L.L. All Rights Reserved.</p>
            </div>
        </footer>
    );
};


export default Footer;
