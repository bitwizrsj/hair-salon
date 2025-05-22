import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3993407/pexels-photo-3993407.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-[#14213D] opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 relative z-10 mt-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 animate-fadeInUp">
            <span className="block">Discover Your</span>
            <span className="text-[#D4AF37]">Perfect Style</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fadeInUp animation-delay-300 max-w-2xl">
            Experience top-quality hair and beauty services in a luxurious and relaxing environment at Style N Beauty Studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-500">
            <Link to="/booking">
              <Button variant="primary" size="lg">
                Book Appointment
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                Explore Services
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 inline-block animate-fadeInUp animation-delay-700 bg-white bg-opacity-10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white border-opacity-20">
            <p className="text-[#D4AF37] font-medium mb-1">Special Offer</p>
            <p className="text-white text-xl font-semibold">Get 30% Off on All Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;