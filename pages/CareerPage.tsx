import React from 'react';
import { PhoneIcon, MailIcon, LocationIcon } from '../components/Icons';

const CareerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-firetech-red to-red-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our growing team. Send us your resume/CV and let's discuss opportunities.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">Send Your Resume</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Contact Us</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interested in joining our team? Send your resume/CV to any of the email addresses below. We'll review your application and get back to you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-firetech-red text-white rounded-full flex items-center justify-center">
                    <MailIcon className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Send Your Resume/CV To:</h4>
                    <div className="space-y-2">
                      <a href="mailto:suresh@firetechqa.com" className="block text-firetech-red hover:text-red-700 transition-colors duration-300 font-medium">
                        suresh@firetechqa.com
                      </a>
                      <a href="mailto:info@firetechqa.com" className="block text-firetech-red hover:text-red-700 transition-colors duration-300 font-medium">
                        info@firetechqa.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-firetech-red text-white rounded-full flex items-center justify-center">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Phone Numbers</h4>
                    <div className="space-y-1">
                      <a href="tel:+97440054812" className="block text-gray-600 hover:text-firetech-red transition-colors duration-300">+974 4005 4812</a>
                      <a href="tel:+97455221465" className="block text-gray-600 hover:text-firetech-red transition-colors duration-300">+974 5522 1465</a>
                      <a href="tel:+97470111355" className="block text-gray-600 hover:text-firetech-red transition-colors duration-300">+974 7011 1355</a>
                      <a href="tel:+97460069787" className="block text-gray-600 hover:text-firetech-red transition-colors duration-300">+974 6006 9787</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-firetech-red text-white rounded-full flex items-center justify-center">
                    <LocationIcon className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Office Address</h4>
                    <p className="text-gray-600">
                      Office #10, 2nd Floor, Block 54 & 55, Sayer Building, Barwa Commercial Avenue, P.O. Box 22432, Doha, Qatar
                    </p>
                  </div>
                </div>
              </div>

              {/* Simple Message */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h4 className="text-xl font-bold text-gray-800 mb-6">How to Apply</h4>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start">
                    <span className="bg-firetech-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <p>Prepare your updated resume/CV</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-firetech-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <p>Send it to any of the email addresses listed</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-firetech-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <p>We'll review your application and contact you</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Please mention your area of interest or relevant experience in your email. We're always looking for skilled professionals in fire safety, sales, technical support, and administration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
