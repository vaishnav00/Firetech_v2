import React, { useState } from 'react';
import { PhoneIcon, MailIcon, LocationIcon } from './Icons';
import AnimatedSection from './AnimatedSection';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start group">
    <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-firetech-red to-red-600 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
      {icon}
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <div className="text-gray-300">{children}</div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    alert('Thank you for your message! We will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-800 text-white relative overflow-hidden" aria-labelledby="contact-heading">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://www.dropbox.com/scl/fi/h11o44k1a7yjwbhj5o3zt/contact-bg.jpg?rlkey=y4t3jdxuevgtqch4lq2p1j5y5&raw=1')"}} aria-hidden="true"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <AnimatedSection animation="fade-in-up" className="text-center mb-12">
                <h2 className="text-sm font-bold uppercase text-gray-300 tracking-widest mb-2">Get In Touch</h2>
                <h3 id="contact-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Contact Us</h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">We're ready to discuss your project needs and provide the right solutions. Contact us today to speak with our team.</p>
            </AnimatedSection>
            <div className="max-w-6xl mx-auto bg-gray-900 bg-opacity-50 p-6 md:p-12 rounded-xl shadow-2xl backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    
                    <AnimatedSection animation="slide-in-left" delay={200}>
                        <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left">Contact Information</h3>
                        <div className="space-y-8">
                            <ContactInfoItem icon={<PhoneIcon className="h-5 w-5" />} title="Phone Numbers">
                                <a href="tel:+97440054812" className="block hover:text-firetech-red transition" aria-label="Call +974 4005 4812">+974 4005 4812</a>
                                <a href="tel:+97455221465" className="block hover:text-firetech-red transition" aria-label="Call +974 5522 1465">+974 5522 1465</a>
                                <a href="tel:+97470111355" className="block hover:text-firetech-red transition" aria-label="Call +974 7011 1355">+974 7011 1355</a>
                                <a href="tel:+97460069787" className="block hover:text-firetech-red transition" aria-label="Call +974 6006 9787">+974 6006 9787</a>
                            </ContactInfoItem>
                            <ContactInfoItem icon={<MailIcon className="h-5 w-5" />} title="Email Addresses">
                                <a href="mailto:info@firetechqa.com" className="block hover:text-firetech-red transition" aria-label="Email info@firetechqa.com">info@firetechqa.com</a>
                                <a href="mailto:suresh@firetechqa.com" className="block hover:text-firetech-red transition" aria-label="Email suresh@firetechqa.com">suresh@firetechqa.com</a>
                            </ContactInfoItem>
                            <ContactInfoItem icon={<LocationIcon className="h-5 w-5" />} title="Office Address">
                                <address className="not-italic">Office #10, 2nd Floor, Block 54 & 55, Sayer Building, Barwa Commercial Avenue, P.O. Box 22432, Doha, Qatar</address>
                            </ContactInfoItem>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-in-right" delay={400}>
                        <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Full Name</label>
                                <input 
                                  type="text" 
                                  id="name" 
                                  name="name" 
                                  required 
                                  className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-firetech-red transition-all duration-300 hover:bg-gray-600" 
                                  placeholder="Your Name"
                                  aria-required="true"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">Email Address</label>
                                <input 
                                  type="email" 
                                  id="email" 
                                  name="email" 
                                  required 
                                  className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-firetech-red transition-all duration-300 hover:bg-gray-600" 
                                  placeholder="your.email@example.com"
                                  aria-required="true"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-300 font-semibold mb-2">Subject</label>
                                <input 
                                  type="text" 
                                  id="subject" 
                                  name="subject" 
                                  required 
                                  className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-firetech-red transition-all duration-300 hover:bg-gray-600" 
                                  placeholder="Regarding..."
                                  aria-required="true"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">Message</label>
                                <textarea 
                                  id="message" 
                                  name="message" 
                                  rows={5} 
                                  required 
                                  className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-firetech-red transition-all duration-300 hover:bg-gray-600" 
                                  placeholder="Your message here..."
                                  aria-required="true"
                                ></textarea>
                            </div>
                            <div>
                                <button 
                                  type="submit" 
                                  className="w-full bg-gradient-to-r from-firetech-red to-red-600 text-white font-bold py-3 px-6 rounded-md hover:from-red-600 hover:to-firetech-red transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;
