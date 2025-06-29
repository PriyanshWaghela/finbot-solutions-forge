
import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold text-gradient mb-4">
                FinBot Solutions
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Intelligent automation platform designed specifically for banks and FinTech companies. 
                Secure, compliant, and built for the Indian financial sector.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-slate-300">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                  <span>Ahmedabad, Gujarat, India</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span>contact@finbotsolutions.com</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span>+91 98765 43210</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors mr-3"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold text-white mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Customer Service AI</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Fraud Detection</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">KYC Automation</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Compliance Management</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Lead Generation</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Investment Intelligence</a></li>
              </ul>
            </div>

            {/* Platform & Resources */}
            <div>
              <h3 className="font-semibold text-white mb-4">Platform & Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">FinBot Forge</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Whitepapers</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Support Center</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Webinars</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 FinBot Solutions. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Data Security
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Compliance
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="flex justify-center items-center mt-6 pt-6 border-t border-slate-800">
            <div className="flex items-center space-x-8 text-slate-500 text-sm">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-slate-700 rounded mr-2"></div>
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-slate-700 rounded mr-2"></div>
                <span>RBI Compliant</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-slate-700 rounded mr-2"></div>
                <span>GDPR Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
