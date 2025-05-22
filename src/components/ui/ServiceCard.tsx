import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  linkTo: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
  category,
  linkTo,
}) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14213D] to-transparent opacity-50"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-[#D4AF37] text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2 text-[#14213D]">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link to={linkTo}>
          <Button variant="outline" size="sm">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;