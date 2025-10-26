import React, { useState } from 'react';

const ContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Widget Button */}
      <button
        onClick={toggleWidget}
        className="bg-gradient-to-r from-firetech-red to-red-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </button>

      {/* Backdrop for click outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={handleBackdropClick}
        />
      )}

      {/* Contact Widget Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 overflow-hidden animate-slideUp z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-firetech-red to-red-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Contact Us</h3>
                <p className="text-red-100 text-sm">Get in touch anytime</p>
              </div>
              <button
                onClick={toggleWidget}
                className="text-white/80 hover:text-white text-xl font-bold transition-colors duration-300 hover:scale-110"
              >
                ×
              </button>
            </div>
          </div>

          {/* Contact Options */}
          <div className="p-4 space-y-4">
            {/* Phone Contact */}
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 rounded-xl border border-emerald-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="bg-emerald-500 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone</h4>
                  <p className="text-sm text-gray-600">Call us directly</p>
                </div>
              </div>
              <p className="text-xl font-bold text-emerald-600 mb-3">+974 5522 1465</p>
              <button
                onClick={() => window.open('tel:+97455221465')}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-2 px-4 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Call Now
              </button>
            </div>

            {/* Email Contact */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="bg-blue-500 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-sm text-gray-600">Send us a message</p>
                </div>
              </div>
              <p className="text-lg font-bold text-blue-600 mb-3 break-all">suresh@firetechqa.com</p>
              <button
                onClick={() => window.open('mailto:suresh@firetechqa.com')}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Email
              </button>
            </div>

            {/* WhatsApp Contact */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">WhatsApp</h4>
                  <p className="text-sm text-gray-600">Quick chat</p>
                </div>
              </div>
              <p className="text-lg font-bold text-green-600 mb-3">+974 5522 1465</p>
              <button
                onClick={() => window.open('https://wa.me/97455221465')}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Chat on WhatsApp
              </button>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-bold text-gray-900">Office Hours</h4>
              </div>
              <p className="text-sm text-gray-600">Saturday - Thursday : 7:30 AM - 5:30 PM</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactWidget;
