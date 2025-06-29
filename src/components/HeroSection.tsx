
import React from 'react';
import { ArrowDown, Shield, Database, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative gradient-hero min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-amber-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-teal-400 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mb-8 opacity-80">
            <div className="flex items-center space-x-2 text-white/90">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Database className="h-5 w-5" />
              <span className="text-sm font-medium">RBI Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">50+ Financial Institutions</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Intelligent Automation for
            <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Banks & FinTech
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
            Elevate Customer Experience, Drive Efficiency with AI-Powered Solutions 
            Built for the Indian Financial Sector
          </p>

          <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
            Secure, compliant, and intelligent automation platform designed specifically for banks, 
            credit unions, and FinTech companies. Scale your operations while ensuring regulatory compliance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="btn-accent text-lg px-8 py-4 w-full sm:w-auto">
              See Our Solutions
            </button>
            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 border border-white/20 w-full sm:w-auto">
              Request a Personalized Demo
            </button>
            <button className="text-white/90 hover:text-white font-medium underline underline-offset-4 w-full sm:w-auto">
              Download FinTech AI Whitepaper
            </button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">85%</div>
              <div className="text-blue-200">Average Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-blue-200">Automated Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">99.9%</div>
              <div className="text-blue-200">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
