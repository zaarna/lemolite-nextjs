import CareersScrollWrapper from "@/components/ReusableComponent/Careers/ScrollClient";
import { pagesMeta } from "@/data/pagesMeta";


export const metadata = {
  title: pagesMeta.careers.title,
  description: pagesMeta.careers.description,
  keywords: pagesMeta.careers.keywords,
  alternates: {
    canonical: pagesMeta.careers.canonical,
  },
};

export default function CareersPage() {

  return (
    <div className="min-h-screen">
      <CareersScrollWrapper
      />
    </div>
  );
}
