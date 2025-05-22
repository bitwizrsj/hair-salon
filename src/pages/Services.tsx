import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { serviceData } from '../utils/constants';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Get all unique categories
  const categories = [...new Set(serviceData.map(service => service.category))];
  
  // Filter services by active category or show all if no category is selected
  const filteredServices = activeCategory
    ? serviceData.filter(service => service.category === activeCategory)
    : serviceData;
  
  return (
    <div>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-[#14213D]">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover our comprehensive range of premium beauty and styling services
              tailored to your individual needs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Content */}
      <div className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === null
                  ? 'bg-[#D4AF37] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(null)}
            >
              All Services
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-[#D4AF37] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                id={service.id}
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D4AF37] text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-[#14213D]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[#D4AF37] font-serif font-bold text-xl">
                      {service.price}
                    </span>
                    <Link to="/booking">
                      <Button variant="outline" size="sm">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-[#14213D] py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book an appointment today and experience our premium services.
            New clients get 30% off on all services!
          </p>
          <Link to="/booking">
            <Button variant="primary" size="lg">
              Book Appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;