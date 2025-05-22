import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  image: string;
  rating: number;
  testimonial: string;
  service: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  rating,
  testimonial,
  service,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 object-cover rounded-full border-2 border-[#D4AF37]"
        />
        <div className="ml-4">
          <h4 className="font-medium text-[#14213D]">{name}</h4>
          <p className="text-sm text-gray-500">{service}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-300"}
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;