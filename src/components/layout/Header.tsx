import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Scissors
              className={`h-8 w-8 ${
                isScrolled ? 'text-[#D4AF37]' : 'text-[#D4AF37]'
              }`}
            />
            <div className="flex flex-col">
              <span
                className={`font-serif text-xl font-bold tracking-wider ${
                  isScrolled ? 'text-[#14213D]' : 'text-white'
                }`}
              >
                STYLE N BEAUTY
              </span>
              <span
                className={`text-xs tracking-widest ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}
              >
                STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium tracking-wide transition-colors duration-200 ${
                  isScrolled
                    ? location.pathname === link.path
                      ? 'text-[#D4AF37]'
                      : 'text-[#14213D] hover:text-[#D4AF37]'
                    : location.pathname === link.path
                    ? 'text-[#D4AF37]'
                    : 'text-white hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/booking"
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                isScrolled
                  ? 'bg-[#D4AF37] text-white hover:bg-opacity-90'
                  : 'bg-white text-[#14213D] hover:bg-opacity-90'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#D4AF37]"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fadeIn">
            <div className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-2 px-4 font-medium ${
                    location.pathname === link.path
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-[#14213D]'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="mt-3 py-2 px-4 bg-[#D4AF37] text-white rounded-full text-center font-medium"
                onClick={closeMenu}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;