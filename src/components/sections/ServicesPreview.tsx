import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ui/ServiceCard';
import Button from '../ui/Button';
import { servicePreviewData } from '../../utils/constants';

const ServicesPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#14213D] mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer a comprehensive range of premium beauty and styling services tailored to your individual needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicePreviewData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              category={service.category}
              linkTo={service.linkTo}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="primary">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;