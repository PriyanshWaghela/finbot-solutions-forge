
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const solutions = [
    'Customer Service Chatbots',
    'Lead Generation & Sales',
    'Fraud Detection & Security',
    'Regulatory Compliance',
    'KYC Automation',
    'Appointment Booking',
    'Financial Investments',
    'Employee Productivity',
    'Collection & Reminders',
    'Voice AI for IVR'
  ];

  const platform = [
    'FinBot Forge Platform',
    'No-Code Builder',
    'Advanced NLU',
    'Custom LLM Fine-Tuning',
    'API Integrations',
    'Analytics Dashboard'
  ];

  const resources = [
    'Case Studies',
    'Whitepapers',
    'Blog',
    'Documentation',
    'Webinars',
    'Support Center'
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gradient">
              FinBot Solutions
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-slate-200 py-4 z-50">
                  <div className="grid grid-cols-1 gap-2 px-4">
                    {solutions.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('platform')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Platform <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'platform' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-4 z-50">
                  <div className="grid grid-cols-1 gap-2 px-4">
                    {platform.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#services" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </a>

            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 py-4 z-50">
                  <div className="grid grid-cols-1 gap-2 px-4">
                    {resources.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              About Us
            </a>

            <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Contact Us
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <button className="btn-accent">
              Request a Personalized Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-2">
              <p className="font-semibold text-slate-900">Solutions</p>
              {solutions.slice(0, 5).map((item, index) => (
                <a key={index} href="#" className="block text-slate-600 hover:text-blue-600 pl-4">
                  {item}
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-900">Platform</p>
              {platform.slice(0, 3).map((item, index) => (
                <a key={index} href="#" className="block text-slate-600 hover:text-blue-600 pl-4">
                  {item}
                </a>
              ))}
            </div>
            <a href="#services" className="block text-slate-700 hover:text-blue-600 font-medium">
              Services
            </a>
            <a href="#about" className="block text-slate-700 hover:text-blue-600 font-medium">
              About Us
            </a>
            <a href="#contact" className="block text-slate-700 hover:text-blue-600 font-medium">
              Contact Us
            </a>
            <button className="btn-accent w-full mt-4">
              Request a Personalized Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
