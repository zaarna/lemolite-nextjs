import AllCaseStudy from '@/components/AllCaseStudy';
import CaseStudyHead from '@/components/CaseStudyHead';
import GradientScrollSection from '@/components/GradientScrollSection';
import React from 'react';
import { pagesMeta } from "@/data/pagesMeta";

export const metadata = {
  title: pagesMeta.casestudy.title,
  description: pagesMeta.casestudy.description,
  keywords: pagesMeta.casestudy.keywords,
  alternates: {
    canonical: pagesMeta.casestudy.canonical,
  },
};

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


