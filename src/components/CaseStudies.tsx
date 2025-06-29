
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Shield, ArrowUp } from 'lucide-react';

const CaseStudies = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      client: 'Regional Bank of Gujarat',
      logo: '/api/placeholder/120/60',
      industry: 'Regional Banking',
      challenge: 'High call center costs and customer wait times during peak hours, with 70% of inquiries being routine account queries.',
      solution: 'Deployed FinBot\'s Customer Service AI with integration to core banking system and WhatsApp Business API.',
      results: [
        { metric: 'Call Center Load Reduction', value: '68%', icon: TrendingUp },
        { metric: 'Customer Satisfaction Score', value: '4.8/5', icon: Users },
        { metric: 'Cost Savings (Monthly)', value: '₹2.3L', icon: ArrowUp }
      ],
      testimonial: '"FinBot Solutions transformed our customer service operations. Our customers now get instant responses 24/7, and our staff can focus on complex financial advisory services."',
      author: 'Rajesh Patel, Head of Digital Banking',
      timeframe: '3 months implementation',
      size: '50+ branches, 2M+ customers'
    },
    {
      id: 2,
      client: 'Gujarat FinTech Co.',
      logo: '/api/placeholder/120/60',
      industry: 'Digital Lending',
      challenge: 'Manual loan application processing taking 5-7 days, high dropout rates during KYC verification, and compliance documentation delays.',
      solution: 'Implemented automated KYC processing, regulatory compliance checks, and fraud detection systems with real-time API integrations.',
      results: [
        { metric: 'Loan Processing Time', value: '85%', icon: TrendingUp },
        { metric: 'KYC Completion Rate', value: '94%', icon: Shield },
        { metric: 'Application Dropouts', value: '60%', icon: ArrowUp }
      ],
      testimonial: '"The automation of our KYC and compliance processes has been a game-changer. We\'ve significantly reduced processing times while maintaining strict regulatory compliance."',
      author: 'Priya Sharma, Chief Technology Officer',
      timeframe: '4 months implementation',
      size: '100K+ applications processed'
    },
    {
      id: 3,
      client: 'Ahmedabad Credit Union',
      logo: '/api/placeholder/120/60',
      industry: 'Credit Union',
      challenge: 'Members struggling to access investment information, low engagement with financial products, and manual appointment scheduling inefficiencies.',
      solution: 'Deployed Financial Investment bot with portfolio tracking, market updates, and intelligent appointment booking system.',
      results: [
        { metric: 'Investment Engagement', value: '156%', icon: TrendingUp },
        { metric: 'Appointment Efficiency', value: '78%', icon: Users },
        { metric: 'Member Satisfaction', value: '92%', icon: Shield }
      ],
      testimonial: '"Our members love the instant access to their investment information and the smart appointment booking. It\'s made our services much more accessible and user-friendly."',
      author: 'Amit Shah, General Manager',
      timeframe: '2 months implementation',
      size: '25K+ active members'
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[currentCase];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Success Stories from Leading Financial Institutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how banks and FinTech companies across India are transforming their operations 
            with FinBot Solutions' intelligent automation platform.
          </p>
        </div>

        {/* Case Study Carousel */}
        <div className="relative">
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
            {/* Navigation */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-4">
                <img 
                  src={currentStudy.logo} 
                  alt={`${currentStudy.client} logo`}
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{currentStudy.client}</h3>
                  <p className="text-slate-600">{currentStudy.industry}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevCase}
                  className="p-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-slate-600" />
                </button>
                <span className="text-sm text-slate-500 px-3">
                  {currentCase + 1} of {caseStudies.length}
                </span>
                <button
                  onClick={nextCase}
                  className="p-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-slate-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Challenge & Solution */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">The Challenge</h4>
                  <p className="text-slate-700 leading-relaxed">{currentStudy.challenge}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Our Solution</h4>
                  <p className="text-slate-700 leading-relaxed">{currentStudy.solution}</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <blockquote className="text-slate-700 italic mb-4">
                        {currentStudy.testimonial}
                      </blockquote>
                      <cite className="text-sm font-medium text-slate-900 not-italic">
                        {currentStudy.author}
                      </cite>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Results */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-6">Results Achieved</h4>
                
                <div className="space-y-6 mb-8">
                  {currentStudy.results.map((result, index) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-slate-600 mb-1">{result.metric}</p>
                            <p className="text-3xl font-bold text-slate-900">{result.value}</p>
                          </div>
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-green-600" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h5 className="font-semibold text-blue-900 mb-3">Project Details</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700">Implementation Time:</span>
                      <span className="font-medium text-blue-900">{currentStudy.timeframe}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Scale:</span>
                      <span className="font-medium text-blue-900">{currentStudy.size}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCase(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentCase ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="btn-primary">
              Read All Case Studies
            </button>
            <button className="btn-accent">
              Schedule Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
