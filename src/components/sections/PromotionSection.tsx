import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const PromotionSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-[#14213D] opacity-80"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Special Offer for New Clients
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          
          <div className="bg-[#D4AF37] text-white text-5xl md:text-7xl font-bold inline-block px-8 py-4 mb-8 transform -rotate-2">
            30% OFF
          </div>
          
          <p className="text-xl mb-8 text-gray-200">
            Book your first appointment today and enjoy 30% off on all our premium services. 
            Offer valid for a limited time only.
          </p>
          
          <Link to="/booking">
            <Button variant="primary" size="lg">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;