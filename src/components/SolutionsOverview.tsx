
import React, { useState } from 'react';
import { 
  MessageSquare, 
  Users, 
  Shield, 
  CheckCircle, 
  User, 
  Phone, 
  BarChart, 
  Headphones, 
  Clock, 
  Mic 
} from 'lucide-react';

const SolutionsOverview = () => {
  const [selectedSolution, setSelectedSolution] = useState(0);

  const solutions = [
    {
      icon: MessageSquare,
      title: 'Customer Service & Support',
      subtitle: 'AI-Powered Customer Excellence',
      description: 'Intelligent chatbots handle account inquiries, transaction assistance, FAQs, and sentiment analysis with human-like understanding.',
      features: ['Real-time account inquiries', 'Transaction assistance', 'Automated FAQ responses', 'Sentiment analysis', 'Multi-language support'],
      benefits: 'Reduce response time by 90% while improving customer satisfaction scores',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Lead Generation & Sales',
      subtitle: 'Smart Sales Automation',
      description: 'Convert prospects into customers with AI-driven product recommendations, application assistance, and intelligent lead qualification.',
      features: ['Product recommendations', 'Investment guidance', 'Application assistance', 'Lead pre-qualification', 'Conversion tracking'],
      benefits: 'Increase conversion rates by 65% with personalized engagement',
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: 'Fraud Detection & Security',
      subtitle: 'Advanced Security Intelligence',
      description: 'Real-time fraud detection with suspicious activity alerts, card management, and internal compliance monitoring.',
      features: ['Suspicious activity alerts', 'Card management', 'Compliance checks', 'Risk scoring', 'Automated reporting'],
      benefits: 'Prevent fraud losses and ensure regulatory compliance',
      color: 'bg-red-500'
    },
    {
      icon: CheckCircle,
      title: 'Regulatory Compliance',
      subtitle: 'Automated Compliance Management',
      description: 'Ensure adherence to RBI, SEBI, and DPDP Act requirements with automated checks, audit trails, and policy compliance.',
      features: ['Automated compliance checks', 'Audit trail generation', 'Policy adherence monitoring', 'Regulatory reporting', 'Documentation management'],
      benefits: 'Achieve 100% compliance with automated monitoring and reporting',
      color: 'bg-purple-500'
    },
    {
      icon: User,
      title: 'KYC Automation',
      subtitle: 'Streamlined Identity Verification',
      description: 'Automated identity verification, document processing, and seamless customer onboarding with AI-powered validation.',
      features: ['Identity verification', 'Document processing', 'Automated onboarding', 'Data validation', 'Compliance checks'],
      benefits: 'Reduce KYC processing time from days to minutes',
      color: 'bg-teal-500'
    },
    {
      icon: Phone,
      title: 'Appointment Booking',
      subtitle: 'Intelligent Scheduling',
      description: 'Smart appointment scheduling with advisors and branches, automated reminders, and calendar management.',
      features: ['Smart scheduling', 'Advisor matching', 'Automated reminders', 'Calendar integration', 'Rescheduling assistance'],
      benefits: 'Improve appointment efficiency and reduce no-shows by 80%',
      color: 'bg-amber-500'
    },
    {
      icon: BarChart,
      title: 'Financial Investments',
      subtitle: 'Investment Intelligence',
      description: 'Portfolio inquiries, market updates, SIP reminders, and personalized investment product recommendations.',
      features: ['Portfolio tracking', 'Market updates', 'SIP reminders', 'Investment recommendations', 'Performance analysis'],
      benefits: 'Increase investment engagement and portfolio performance',
      color: 'bg-indigo-500'
    },
    {
      icon: Headphones,
      title: 'Employee Productivity',
      subtitle: 'Internal Support Automation',
      description: 'HR and IT support automation, internal knowledge access, and employee self-service capabilities.',
      features: ['HR support', 'IT helpdesk', 'Knowledge base access', 'Employee self-service', 'Process automation'],
      benefits: 'Boost employee productivity and reduce internal support costs',
      color: 'bg-pink-500'
    },
    {
      icon: Clock,
      title: 'Collection & Reminders',
      subtitle: 'Ethical Payment Management',
      description: 'Automated payment reminders, collection assistance, and customer communication with ethical practices.',
      features: ['Payment reminders', 'Collection assistance', 'Customer communication', 'Payment plan options', 'Escalation management'],
      benefits: 'Improve collection rates while maintaining customer relationships',
      color: 'bg-cyan-500'
    },
    {
      icon: Mic,
      title: 'Voice AI for IVR',
      subtitle: 'Natural Language Voice Assistants',
      description: 'Advanced voice AI for interactive voice response systems with natural language understanding.',
      features: ['Natural language processing', 'Voice recognition', 'Call routing', 'Self-service options', 'Integration with existing systems'],
      benefits: 'Reduce call center costs and improve customer experience',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive AI Solutions for Financial Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From customer service to compliance, our specialized AI chatbots cover every aspect 
            of your financial operations with intelligence and precision.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <button
                key={index}
                onClick={() => setSelectedSolution(index)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left group ${
                  selectedSolution === index 
                    ? 'border-blue-500 bg-blue-50 shadow-lg' 
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${solution.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-6 w-6 ${solution.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-sm leading-tight">
                  {solution.title}
                </h3>
                <p className="text-xs text-slate-600">
                  {solution.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Solution Details */}
        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${solutions[selectedSolution].color} bg-opacity-10 mr-4`}>
                  {React.createElement(solutions[selectedSolution].icon, {
                    className: `h-8 w-8 ${solutions[selectedSolution].color.replace('bg-', 'text-')}`
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {solutions[selectedSolution].title}
                  </h3>
                  <p className="text-lg text-slate-600">
                    {solutions[selectedSolution].subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                {solutions[selectedSolution].description}
              </p>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-green-800 mb-2">Key Benefit</h4>
                <p className="text-green-700">{solutions[selectedSolution].benefits}</p>
              </div>

              <button className="btn-primary">
                Learn More About This Solution
              </button>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-slate-900 mb-6">Key Features</h4>
              <div className="space-y-4">
                {solutions[selectedSolution].features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
