
import React, { useState } from 'react';
import { solutions } from './solutions/solutionsData';
import SolutionCard from './solutions/SolutionCard';
import SolutionDetails from './solutions/SolutionDetails';

const SolutionsOverview = () => {
  const [selectedSolution, setSelectedSolution] = useState(0);

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
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              solution={solution}
              index={index}
              isSelected={selectedSolution === index}
              onClick={setSelectedSolution}
            />
          ))}
        </div>

        {/* Selected Solution Details */}
        <SolutionDetails solution={solutions[selectedSolution]} />
      </div>
    </section>
  );
};

export default SolutionsOverview;
