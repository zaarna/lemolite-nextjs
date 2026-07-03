import AllPortfolio from "@/components/AllPortfolio";
import PortfolioHero from "@/components/PortfolioHero";
import React from "react";
import { pagesMeta } from "@/data/pagesMeta";
import { portfolioData } from "@/data/portfolio";
import JsonLd from "@/components/JsonLd";
import { getPageSchemas } from "@/lib/schema";

export const metadata = {
  title: pagesMeta.portfolio.title,
  description: pagesMeta.portfolio.description,
  keywords: pagesMeta.portfolio.keywords,
  alternates: {
    canonical: pagesMeta.portfolio.canonical,
  },
};

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <JsonLd schemas={getPageSchemas("/portfolio")} />
      <PortfolioHero />
      <AllPortfolio projects={portfolioData} />
    </div>
  );
};

export default PortfolioPage;
