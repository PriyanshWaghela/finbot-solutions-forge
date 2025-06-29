
import React from 'react';

interface Solution {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  color: string;
}

interface SolutionCardProps {
  solution: Solution;
  index: number;
  isSelected: boolean;
  onClick: (index: number) => void;
}

const SolutionCard = ({ solution, index, isSelected, onClick }: SolutionCardProps) => {
  const IconComponent = solution.icon;

  return (
    <button
      onClick={() => onClick(index)}
      className={`p-6 rounded-xl border-2 transition-all duration-300 text-left group ${
        isSelected 
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
};

export default SolutionCard;
