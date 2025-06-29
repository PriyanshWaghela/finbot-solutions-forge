
import React, { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRequestDemo = () => {
    // Scroll to contact section or open demo modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">FinBot Solutions</span>
          </Link>

          {/* Desktop Navigation - Simplified */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#solutions" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Solutions
            </a>
            <Link to="/dashboard" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Dashboard
            </Link>
            <a href="#services" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button 
              onClick={handleRequestDemo}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu - Simplified */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-blue-100 bg-white/95 backdrop-blur-md">
            <div className="space-y-4">
              <a 
                href="#solutions" 
                className="block text-slate-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </a>
              <Link 
                to="/dashboard" 
                className="block text-slate-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <a 
                href="#services" 
                className="block text-slate-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="block text-slate-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="block text-slate-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button 
                onClick={() => {
                  handleRequestDemo();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl mt-4"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
