
import LifeAtLemoliteWrapper from "@/components/ReusableComponent/Life/LifeAtLemoliteWrapper.client";
import { pagesMeta } from "@/data/pagesMeta";


export const metadata = {
  title: pagesMeta.lifeatlemolite.title,
  description: pagesMeta.lifeatlemolite.description,
  keywords: pagesMeta.lifeatlemolite.keywords,
  alternates: {
    canonical: pagesMeta.lifeatlemolite.canonical,
  },
};

export default function LifeAtLemolite() {

  return (
    <div className="min-h-screen">
      <LifeAtLemoliteWrapper />
    </div>
  );
}
