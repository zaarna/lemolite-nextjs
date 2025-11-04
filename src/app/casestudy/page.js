import AllCaseStudy from '@/components/AllCaseStudy';
import CaseStudyHead from '@/components/CaseStudyHead';
import GradientScrollSection from '@/components/GradientScrollSection';
import React from 'react';

const CaseStudyPage = () => {
  return (
    <div className="min-h-screen">
      <CaseStudyHead />
      <AllCaseStudy />
      <GradientScrollSection />
    </div>
  );
};

export default CaseStudyPage;


