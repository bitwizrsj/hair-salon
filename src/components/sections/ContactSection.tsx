import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Button from '../ui/Button';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#14213D] mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions or want to schedule an appointment? 
            Contact us today and we'll be happy to assist you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-serif font-semibold text-[#14213D] mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#D4AF37] bg-opacity-10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#14213D] mb-1">Location</h4>
                    <p className="text-gray-600">
                      1st Floor Opposite Gems Garden, Prem Nagar Puliya Agra Road, Jaipur
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#D4AF37] bg-opacity-10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#14213D] mb-1">Phone</h4>
                    <p className="text-gray-600">+91 96729 53316</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#D4AF37] bg-opacity-10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#14213D] mb-1">Email</h4>
                    <p className="text-gray-600">info@stylenbeauty.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#D4AF37] bg-opacity-10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#14213D] mb-1">Working Hours</h4>
                    <p className="text-gray-600">Monday to Sunday: 9am - 9pm</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-[#14213D] mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#D4AF37] bg-opacity-10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#D4AF37] bg-opacity-10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#D4AF37] bg-opacity-10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif font-semibold text-[#14213D] mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16">
          <div className="rounded-lg overflow-hidden shadow-md h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.2962324244893!2d75.7672!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4a4b7a292e9%3A0x5c0bbed2b80f12c9!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1623932456789!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              title="Salon location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;