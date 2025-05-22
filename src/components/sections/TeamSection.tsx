import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { teamData } from '../../utils/constants';

const TeamSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#14213D] mb-4">
            Meet Our Expert Team
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our talented stylists and beauty experts are passionate about bringing out your best look.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14213D] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center space-x-4">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#14213D] hover:bg-[#D4AF37] hover:text-white transition-colors"
                    >
                      <Facebook size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#14213D] hover:bg-[#D4AF37] hover:text-white transition-colors"
                    >
                      <Instagram size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#14213D] hover:bg-[#D4AF37] hover:text-white transition-colors"
                    >
                      <Twitter size={16} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-medium text-[#14213D]">{member.name}</h3>
                <p className="text-[#D4AF37] font-medium">{member.position}</p>
                <p className="text-gray-600 mt-2">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;