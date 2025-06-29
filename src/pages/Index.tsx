
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ValueProposition from '../components/ValueProposition';
import SolutionsOverview from '../components/SolutionsOverview';
import DashboardPreview from '../components/DashboardPreview';
import CaseStudies from '../components/CaseStudies';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <SolutionsOverview />
        <DashboardPreview />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
