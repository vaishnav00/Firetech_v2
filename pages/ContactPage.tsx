import React from 'react';
import Contact from '../components/Contact';
import Seo from '../components/Seo';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28">
      <Seo
        title="Contact"
        description="Get in touch with Firetech Trading & Contracting W.L.L for quotes, partnerships, and inquiries."
        urlPath="/contact"
      />
      <Contact />
    </div>
  );
};

export default ContactPage;