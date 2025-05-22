import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scissors, 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#14213D] text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scissors className="h-8 w-8 text-[#D4AF37]" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-white">
                  STYLE N BEAUTY
                </span>
                <span className="text-xs tracking-widest text-gray-300">
                  STUDIO
                </span>
              </div>
            </div>
            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              Your premier destination for all beauty and styling needs. 
              We provide top-quality services in a relaxing environment.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-[#D4AF37] pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-[#D4AF37] pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#haircut" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Cut & Style
                </Link>
              </li>
              <li>
                <Link to="/services#color" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Color Services
                </Link>
              </li>
              <li>
                <Link to="/services#treatments" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Hair Treatments
                </Link>
              </li>
              <li>
                <Link to="/services#beauty" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Beauty Services
                </Link>
              </li>
              <li>
                <Link to="/services#makeup" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Makeup
                </Link>
              </li>
              <li>
                <Link to="/services#spa" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Spa Treatments
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-[#D4AF37] pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  1st Floor Opposite Gems Garden, Prem Nagar Puliya Agra Road, Jaipur
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#D4AF37] mr-2 flex-shrink-0" />
                <span className="text-gray-300">+91 96729 53316</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-[#D4AF37] mr-2 flex-shrink-0" />
                <span className="text-gray-300">Mon - Sun: 9am - 9pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Style N Beauty Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;