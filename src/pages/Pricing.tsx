import React from 'react';
import { Scissors, Paintbrush, Droplet, Sparkles } from 'lucide-react';
import PriceCard from '../components/ui/PriceCard';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Pricing: React.FC = () => {
  const haircutPrices = [
    { service: 'Women\'s Haircut', price: '₹800', description: 'Includes consultation, shampoo, and style' },
    { service: 'Men\'s Haircut', price: '₹500', description: 'Includes consultation and styling' },
    { service: 'Children\'s Haircut', price: '₹350', description: 'For children under 12' },
    { service: 'Beard Trim', price: '₹250', description: 'Shape and style' },
    { service: 'Blowout & Styling', price: '₹650', description: 'Includes shampoo and blowdry' },
  ];
  
  const colorPrices = [
    { service: 'Root Touch-up', price: '₹1,200', description: 'Single color for roots only' },
    { service: 'Full Color', price: '₹2,500', description: 'Single color application' },
    { service: 'Highlights', price: '₹3,000+', description: 'Partial or full highlights' },
    { service: 'Balayage', price: '₹4,500+', description: 'Hand-painted highlights' },
    { service: 'Ombre', price: '₹4,000+', description: 'Graduated color effect' },
  ];
  
  const treatmentPrices = [
    { service: 'Deep Conditioning', price: '₹800', description: 'Intense moisture treatment' },
    { service: 'Keratin Treatment', price: '₹5,000+', description: 'Smoothing and frizz control' },
    { service: 'Hair Spa', price: '₹1,200', description: 'Relaxing scalp and hair treatment' },
    { service: 'Dandruff Treatment', price: '₹1,500', description: 'Anti-dandruff therapy' },
    { service: 'Scalp Treatment', price: '₹1,800', description: 'For healthy scalp and hair growth' },
  ];
  
  const beautyPrices = [
    { service: 'Facial', price: '₹1,500+', description: 'Customized for your skin type' },
    { service: 'Manicure', price: '₹500', description: 'Classic nail care' },
    { service: 'Pedicure', price: '₹700', description: 'Foot and nail care' },
    { service: 'Makeup Application', price: '₹2,000+', description: 'For special occasions' },
    { service: 'Waxing Services', price: '₹300+', description: 'Various body areas' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-[#14213D]">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Pricing</h1>
            <p className="text-xl text-gray-300">
              Explore our service prices and find the perfect package for your needs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Pricing Content */}
      <div className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#14213D] mb-4">
              Transparent Pricing
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              We believe in transparent pricing with no hidden costs. Our prices are based on 
              the experience level of our stylists and the complexity of the service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PriceCard
              category="Haircut & Styling"
              items={haircutPrices}
              icon={<Scissors size={28} />}
            />
            
            <PriceCard
              category="Color Services"
              items={colorPrices}
              icon={<Paintbrush size={28} />}
            />
            
            <PriceCard
              category="Hair Treatments"
              items={treatmentPrices}
              icon={<Droplet size={28} />}
            />
            
            <PriceCard
              category="Beauty Services"
              items={beautyPrices}
              icon={<Sparkles size={28} />}
            />
          </div>
        </div>
      </div>
      
      {/* Special Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#14213D] mb-4">
              Special Packages
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Take advantage of our special package deals for complete beauty transformations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#14213D] text-white p-6 text-center">
                <h3 className="text-xl font-serif font-semibold">Bridal Package</h3>
                <div className="mt-4 text-3xl font-bold">₹15,000</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Bridal Makeup</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Hair Styling</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Facial & Clean-up</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Manicure & Pedicure</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Full Body Waxing</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/booking">
                    <Button variant="primary">Book Now</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform scale-105 relative z-10">
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-white text-xs px-3 py-1">
                MOST POPULAR
              </div>
              <div className="bg-[#14213D] text-white p-6 text-center">
                <h3 className="text-xl font-serif font-semibold">Complete Makeover</h3>
                <div className="mt-4 text-3xl font-bold">₹8,000</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Haircut & Styling</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Hair Color</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Facial</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Manicure & Pedicure</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Makeup Application</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/booking">
                    <Button variant="primary">Book Now</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#14213D] text-white p-6 text-center">
                <h3 className="text-xl font-serif font-semibold">Men's Grooming</h3>
                <div className="mt-4 text-3xl font-bold">₹3,500</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Haircut & Styling</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Beard Trim & Shape</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Facial</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Head Massage</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span>Manicure</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/booking">
                    <Button variant="primary">Book Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Offer */}
      <section className="py-16 bg-[#14213D]">
        <div className="container max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-[#D4AF37] px-6 py-2 rounded-full text-sm font-medium mb-4">
            SPECIAL PROMOTION
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Get 30% Off on All Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            For a limited time, enjoy 30% off on all our services. 
            Book your appointment today to take advantage of this special offer.
          </p>
          <Link to="/booking">
            <Button variant="primary" size="lg">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;