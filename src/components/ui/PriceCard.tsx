import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

interface PriceItem {
  service: string;
  price: string;
  description?: string;
}

interface PriceCardProps {
  category: string;
  items: PriceItem[];
  icon: React.ReactNode;
}

const PriceCard: React.FC<PriceCardProps> = ({ category, items, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl overflow-hidden">
      <div className="bg-[#14213D] text-white p-6 text-center">
        <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-[#D4AF37] text-white mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-serif font-semibold">{category}</h3>
      </div>
      
      <div className="p-6">
        <ul className="space-y-4 mb-6">
          {items.map((item, index) => (
            <li key={index} className="pb-4 border-b border-gray-100 last:border-0">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-medium text-[#14213D]">{item.service}</span>
                  {item.description && (
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  )}
                </div>
                <span className="font-serif font-semibold text-[#D4AF37]">{item.price}</span>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="text-center">
          <Link to="/booking">
            <Button variant="outline">Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;