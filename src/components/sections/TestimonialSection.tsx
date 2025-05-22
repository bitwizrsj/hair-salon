import React, { useState } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonialData } from '../../utils/constants';

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(testimonialData.length / 3) - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.ceil(testimonialData.length / 3) - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Get current testimonials based on page size and current index
  const pageSize = 3;
  const currentTestimonials = testimonialData.slice(
    currentIndex * pageSize,
    (currentIndex + 1) * pageSize
  );
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#14213D] mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Hear from our satisfied clients about their experiences at Style N Beauty Studio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              image={testimonial.image}
              rating={testimonial.rating}
              testimonial={testimonial.testimonial}
              service={testimonial.service}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-white"
            >
              &lt;
            </button>
            {[...Array(Math.ceil(testimonialData.length / pageSize))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  currentIndex === index
                    ? 'bg-[#D4AF37] text-white'
                    : 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white'
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-white"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;