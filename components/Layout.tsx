import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show loading for a brief moment on initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Reset loading state on route change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-firetech-red border-t-transparent mx-auto mb-4"></div>
          <p className="text-firetech-red font-semibold text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-firetech-white text-firetech-gray font-sans min-h-screen">
      <Header />
      <main className="page-transition">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;