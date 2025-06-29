
import React, { useState, useEffect } from 'react';
import { ArrowDown, Shield, Database, Users, Bot, Zap, Globe } from 'lucide-react';

const HeroSection = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    costReduction: 0,
    support: 0,
    uptime: 0
  });

  // Animate numbers on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedNumbers(prev => ({
          costReduction: Math.min(85, prev.costReduction + 2),
          support: Math.min(24, prev.support + 1),
          uptime: Math.min(99.9, prev.uptime + 2.5)
        }));
      }, 50);

      setTimeout(() => clearInterval(interval), 2000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSeeSolutions = () => {
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestDemo = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadWhitepaper = () => {
    // In a real app, this would trigger a download
    console.log('Downloading whitepaper...');
    alert('Whitepaper download will be available soon!');
  };

  return (
    <section className="relative gradient-hero min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-200 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white rounded-full animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust Indicators with Animation */}
          <div className="flex justify-center items-center space-x-8 mb-8 opacity-90 animate-slide-up">
            <div className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
              <Shield className="h-5 w-5 animate-pulse-slow" />
              <span className="text-sm font-medium">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
              <Database className="h-5 w-5 animate-pulse-slow" />
              <span className="text-sm font-medium">RBI Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
              <Users className="h-5 w-5 animate-pulse-slow" />
              <span className="text-sm font-medium">50+ Financial Institutions</span>
            </div>
          </div>

          {/* Main Headline with Animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Intelligent Automation for
            <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Banks & FinTech
            </span>
          </h1>

          {/* Dynamic Sub-headline */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed animate-slide-up">
            Elevate Customer Experience, Drive Efficiency with AI-Powered Solutions 
            Built for the Indian Financial Sector
          </p>

          <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto animate-fade-in">
            Secure, compliant, and intelligent automation platform designed specifically for banks, 
            credit unions, and FinTech companies. Scale your operations while ensuring regulatory compliance.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up">
            <button 
              onClick={handleSeeSolutions}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto group"
            >
              <span className="flex items-center justify-center">
                <Bot className="h-5 w-5 mr-2 group-hover:animate-spin" />
                See Our Solutions
              </span>
            </button>
            <button 
              onClick={handleRequestDemo}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 border border-white/20 w-full sm:w-auto group"
            >
              <span className="flex items-center justify-center">
                <Zap className="h-5 w-5 mr-2 group-hover:text-yellow-300 transition-colors" />
                Request a Demo
              </span>
            </button>
            <button 
              onClick={handleDownloadWhitepaper}
              className="text-white/90 hover:text-white font-medium underline underline-offset-4 w-full sm:w-auto group"
            >
              <span className="flex items-center justify-center">
                <Globe className="h-4 w-4 mr-2 group-hover:animate-bounce-slow" />
                Download Whitepaper
              </span>
            </button>
          </div>

          {/* Animated Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-white mb-2">
                {animatedNumbers.costReduction}%
              </div>
              <div className="text-blue-200">Average Cost Reduction</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-white mb-2">
                {animatedNumbers.support}/7
              </div>
              <div className="text-blue-200">Automated Support</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-white mb-2">
                {animatedNumbers.uptime}%
              </div>
              <div className="text-blue-200">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <ArrowDown className="h-6 w-6 text-white/70 mb-2" />
            <span className="text-xs text-white/60">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
