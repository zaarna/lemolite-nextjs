import ListingSection from "@/components/ListingSection";
import { pagesMeta } from "@/data/pagesMeta";

export const metadata = {
  title: pagesMeta.sitemap.title,
  description: pagesMeta.sitemap.description,
  alternates: {
    canonical: pagesMeta.sitemap.canonical,
  },
};

function SiteMap() {
  return (
    <>
      <h1 className="text-center [font-size:_clamp(22px,52px,52px)] font-semibold">
        Sitemap
      </h1>
      <ListingSection />
    </>
  );
}

export default SiteMap;
