import BlogPageSection from "@/components/ReusableComponent/blog/MainBlogCard";
import React from "react";
import { pagesMeta } from "@/data/pagesMeta";

export const metadata = {
  title: pagesMeta.blog.title,
  description: pagesMeta.blog.description,
  keywords: pagesMeta.blog.keywords,
  alternates: {
    canonical: pagesMeta.blog.canonical,
  },
};

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <BlogPageSection />
    </div>
  );
};

export default BlogPage;
