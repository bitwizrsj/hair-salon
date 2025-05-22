import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import TeamSection from '../components/sections/TeamSection';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-[#14213D]">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300">
              Learn more about Style N Beauty Studio and our commitment to excellence.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#14213D] mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mb-8"></div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Style N Beauty Studio was founded in 2010 with a simple vision: to create a 
                luxurious yet welcoming space where clients could receive exceptional beauty and 
                styling services from highly skilled professionals. What began as a small salon 
                with just three stylists has grown into one of the most prestigious beauty 
                destinations in Jaipur.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our founder, Priya Sharma, started her career as a hairstylist and quickly 
                gained recognition for her innovative techniques and keen eye for style. 
                Driven by her passion for the beauty industry and her desire to provide 
                clients with a truly exceptional experience, she established Style N Beauty 
                Studio with the goal of setting new standards in the beauty industry.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Over the years, we have expanded our services and our team, but our commitment 
                to excellence has remained unchanged. We take pride in our ability to understand 
                our clients' needs and deliver results that exceed their expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Salon interior" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Stylist working" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="https://images.pexels.com/photos/3993445/pexels-photo-3993445.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Beauty treatment" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="https://images.pexels.com/photos/3993435/pexels-photo-3993435.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Hair coloring" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#14213D] mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              At Style N Beauty Studio, our values guide everything we do and help us deliver 
              exceptional experiences to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37] bg-opacity-10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-[#D4AF37]">✨</span>
              </div>
              <h3 className="text-xl font-medium text-[#14213D] mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest standard of service and results in everything we do.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37] bg-opacity-10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-[#D4AF37]">🔍</span>
              </div>
              <h3 className="text-xl font-medium text-[#14213D] mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek new techniques, products, and approaches to enhance our services.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37] bg-opacity-10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-[#D4AF37]">🤝</span>
              </div>
              <h3 className="text-xl font-medium text-[#14213D] mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and respect in all our interactions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37] bg-opacity-10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-[#D4AF37]">❤️</span>
              </div>
              <h3 className="text-xl font-medium text-[#14213D] mb-3">Client-Centered</h3>
              <p className="text-gray-600">
                Our clients' satisfaction and well-being are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <TeamSection />
      
      {/* Call to Action */}
      <div className="bg-[#14213D] py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Experience Our Services
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book an appointment today and let our expert team take care of all your beauty needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button variant="primary">
                View Services
              </Button>
            </Link>
            <Link to="/booking">
              <Button variant="outline">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;