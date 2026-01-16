import React from 'react';
import BrainCircuitIcon from '../assets/brain-circuit.svg';

const AIAndData = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 xl:py-16">
      <div className="max-w-4xl">
        {/* Icon */}
        <div className="mb-6 sm:mb-8">
          <div 
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#F1F5F9' }}
          >
            <img src={BrainCircuitIcon} alt="AI & Data" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-4 sm:mb-6 tracking-[-0.02em]">
          AI & Data
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed" style={{ color: '#64748B', fontWeight: 400 }}>
          Predictive modeling and intelligent automation. Transforming raw data into actionable insights for strategic advantage.
        </p>
      </div>
    </main>
  );
};

export default AIAndData;
