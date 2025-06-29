
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface Solution {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string;
  color: string;
}

interface SolutionDetailsProps {
  solution: Solution;
}

const SolutionDetails = ({ solution }: SolutionDetailsProps) => {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center mb-6">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${solution.color} bg-opacity-10 mr-4`}>
              {React.createElement(solution.icon, {
                className: `h-8 w-8 ${solution.color.replace('bg-', 'text-')}`
              })}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                {solution.title}
              </h3>
              <p className="text-lg text-slate-600">
                {solution.subtitle}
              </p>
            </div>
          </div>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            {solution.description}
          </p>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-green-800 mb-2">Key Benefit</h4>
            <p className="text-green-700">{solution.benefits}</p>
          </div>

          <button className="btn-primary">
            Learn More About This Solution
          </button>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-slate-900 mb-6">Key Features</h4>
          <div className="space-y-4">
            {solution.features.map((feature, index) => (
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
  );
};

export default SolutionDetails;
