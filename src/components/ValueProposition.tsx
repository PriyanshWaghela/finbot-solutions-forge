
import React from 'react';
import { Shield, CheckCircle, Database, Zap, Users, BarChart } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: Shield,
      title: 'Financial-Grade Security',
      description: 'Bank-level encryption, secure API integrations, and comprehensive audit trails ensure your data remains protected at all times.',
      color: 'text-blue-600'
    },
    {
      icon: CheckCircle,
      title: 'Regulatory Compliance',
      description: 'Built-in compliance with RBI, SEBI, and DPDP Act requirements. Automated documentation and reporting for seamless audits.',
      color: 'text-teal-600'
    },
    {
      icon: Database,
      title: 'Deep Financial Domain Expertise',
      description: 'Our AI models are specifically trained on financial terminology, regulations, and industry best practices by domain veterans.',
      color: 'text-purple-600'
    },
    {
      icon: Zap,
      title: 'Seamless Enterprise Integration',
      description: 'Native integrations with core banking systems (Finacle, TCS BaNCS), CRMs (Salesforce), and payment gateways.',
      color: 'text-amber-600'
    },
    {
      icon: Users,
      title: 'Enhanced Customer Experience',
      description: '24/7 intelligent support, instant query resolution, and personalized financial guidance that delights your customers.',
      color: 'text-green-600'
    },
    {
      icon: BarChart,
      title: 'Actionable Intelligence',
      description: 'Comprehensive analytics, trend analysis, and automated reporting provide insights that drive strategic decisions.',
      color: 'text-red-600'
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Choose FinBot Solutions?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built specifically for the financial sector with uncompromising focus on security, 
            compliance, and exceptional customer experience.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg ${value.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-7 w-7 ${value.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Financial Operations?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join leading financial institutions who trust FinBot Solutions for their AI automation needs. 
              Experience the difference of purpose-built financial AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent">
                Schedule a Consultation
              </button>
              <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 border border-white/20">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
