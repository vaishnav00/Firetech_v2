import React, { useState, useEffect, useRef } from 'react';
import { PhoneIcon, MailIcon, LocationIcon } from './Icons';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; index: number; isVisible: boolean }> = ({ icon, title, children, index, isVisible }) => (
  <div className={`flex items-start transition-all duration-600 ease-out cursor-pointer group ${
    isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-12'
  }`} style={{
    transitionDelay: `${index * 100}ms`
  }}>
    <div className="flex-shrink-0 h-10 w-10 bg-firetech-white text-firetech-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-firetech-white group-hover:text-firetech-light-red transition-colors duration-300">{title}</h4>
      <div className="text-firetech-light-red group-hover:text-firetech-white transition-colors duration-300">{children}</div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here (e.g., send data to a server)
    setFormSubmitted(true);
    alert('Thank you for your message! We will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section ref={contactRef} id="contact" className="py-16 sm:py-20 bg-firetech-red text-firetech-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://www.dropbox.com/scl/fi/h11o44k1a7yjwbhj5o3zt/contact-bg.jpg?rlkey=y4t3jdxuevgtqch4lq2p1j5y5&raw=1')"}}></div>
        <div className="absolute inset-0 bg-firetech-red/95"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className={`text-center mb-12 transition-all duration-800 ease-out ${
                isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
            }`}>
                <h2 className="text-sm font-bold uppercase text-firetech-light-red tracking-widest mb-2">Get In Touch</h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-firetech-white mb-4">Contact Us</h3>
                <p className="text-lg text-firetech-light-red max-w-2xl mx-auto">We're ready to discuss your project needs and provide the right solutions. Contact us today to speak with our team.</p>
            </div>
            <div className={`max-w-6xl mx-auto bg-firetech-white/10 backdrop-blur-md p-6 md:p-12 rounded-xl shadow-2xl transition-all duration-800 ease-out delay-300 ${
                isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
            }`}>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    
                    {/* Contact Information Column */}
                    <div className={`transition-all duration-800 ease-out delay-500 ${
                        isVisible 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 -translate-x-12'
                    }`}>
                        <h3 className="text-2xl font-bold text-firetech-white mb-8 text-center md:text-left">Contact Information</h3>
                        <div className="space-y-8">
                            <ContactInfoItem icon={<PhoneIcon className="h-5 w-5" />} title="Phone Numbers" index={0} isVisible={isVisible}>
                                <a href="tel:+97440054812" className="block hover:text-firetech-light-red transition-colors duration-300 text-firetech-light-red">+974 4005 4812</a>
                                <a href="tel:+97455221465" className="block hover:text-firetech-light-red transition-colors duration-300 text-firetech-light-red">+974 5522 1465</a>
                                <a href="tel:+97470111355" className="block hover:text-firetech-light-red transition-colors duration-300 text-firetech-light-red">+974 7011 1355</a>
                                <a href="tel:+97460069787" className="block hover:text-firetech-light-red transition-colors duration-300 text-firetech-light-red">+974 6006 9787</a>
                            </ContactInfoItem>
                            <ContactInfoItem icon={<MailIcon className="h-5 w-5" />} title="Email Addresses" index={1} isVisible={isVisible}>
                                <a href="mailto:info@firetechqa.com" className="block hover:text-firetech-light-red transition-colors duration-300 text-firetech-light-red">info@firetechqa.com</a>
                            </ContactInfoItem>
                            <ContactInfoItem icon={<LocationIcon className="h-5 w-5" />} title="Office Address" index={2} isVisible={isVisible}>
                                <p className="text-firetech-light-red">Office #10, 2nd Floor, Block 54 & 55, Sayer Building, Barwa Commercial Avenue, P.O. Box 22432, Doha, Qatar</p>
                            </ContactInfoItem>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className={`transition-all duration-800 ease-out delay-700 ${
                        isVisible 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-12'
                    }`}>
                        <h3 className="text-2xl font-bold text-firetech-white mb-8 text-center md:text-left">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-firetech-light-red font-semibold mb-2">Full Name</label>
                                <input type="text" id="name" name="name" required className="w-full bg-firetech-white/20 text-firetech-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-firetech-light-red transition-all duration-300 hover:bg-firetech-white/30 placeholder-firetech-light-red" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-firetech-light-red font-semibold mb-2">Email Address</label>
                                <input type="email" id="email" name="email" required className="w-full bg-firetech-white/20 text-firetech-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-firetech-light-red transition-all duration-300 hover:bg-firetech-white/30 placeholder-firetech-light-red" placeholder="your.email@example.com" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-firetech-light-red font-semibold mb-2">Subject</label>
                                <input type="text" id="subject" name="subject" required className="w-full bg-firetech-white/20 text-firetech-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-firetech-light-red transition-all duration-300 hover:bg-firetech-white/30 placeholder-firetech-light-red" placeholder="Regarding..." />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-firetech-light-red font-semibold mb-2">Message</label>
                                <textarea id="message" name="message" rows={5} required className="w-full bg-firetech-white/20 text-firetech-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-firetech-light-red transition-all duration-300 hover:bg-firetech-white/30 placeholder-firetech-light-red" placeholder="Your message here..."></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-firetech-white text-firetech-red font-bold py-3 px-6 rounded-md hover:bg-firetech-light-red hover:text-firetech-red transition-colors duration-300">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;