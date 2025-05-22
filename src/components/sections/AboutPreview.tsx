import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Salon interior" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden md:block">
              <div className="bg-[#D4AF37] text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="font-serif italic">
                  "We believe that beauty is about feeling good in your own skin and expressing your unique style."
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#14213D] mb-6">
              Welcome to Style N Beauty Studio
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mb-8"></div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Style N Beauty Studio, we are dedicated to providing exceptional beauty and styling services in a luxurious and welcoming environment. Founded with a passion for transforming looks and boosting confidence, our salon has become a premier destination for those seeking top-quality beauty treatments.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of highly skilled professionals stays up-to-date with the latest trends and techniques, ensuring that you receive the most innovative and effective treatments available. We believe in using only premium products that deliver exceptional results while maintaining the health and integrity of your hair and skin.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-[#14213D] flex items-center justify-center text-white text-2xl font-bold">
                  12+
                </div>
                <span className="ml-3 text-gray-700">Years of Experience</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-[#14213D] flex items-center justify-center text-white text-2xl font-bold">
                  15+
                </div>
                <span className="ml-3 text-gray-700">Expert Stylists</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-[#14213D] flex items-center justify-center text-white text-2xl font-bold">
                  30+
                </div>
                <span className="ml-3 text-gray-700">Beauty Services</span>
              </div>
            </div>
            
            <Link to="/about">
              <Button variant="outline">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;