
import React from "react";
import BlogDynamicPage from "@/components/ReusableComponent/blog/BlogDynamicPage";
import { blogs } from "@/data/blog"; // ✅ import your blog data

// ✅ Dynamic metadata generator for each blog
export async function generateMetadata({ params }) {
  const { blogId } = params;

  // Find blog by ID (convert to string for safety)
  const blog = blogs.find((b) => b.id.toString() === blogId);

  if (!blog) {
    return {
      title: "Blog Not Found | Lemolite Technologies",
      description: "Sorry, this blog post could not be found.",
    };
  }

  return {
    title: `${blog.seo.title} | Lemolite Technologies`,
    description:
      blog.seo.description ||
      "Explore the latest insights and updates from Lemolite Technologies.",
      keywords: blog.seo.keywords || [
      "software development",
      "web development",
      "mobile app development",
      "Lemolite Technologies",
    ],
       alternates: {
      canonical: `https://www.lemolite.com/blog/${blogId}`,
    },
  };
}

// ✅ Main Blog Page Component
const DynamicBlogPage = ({ params }) => {
  const { blogId } = params;

  return (
    <div className="min-h-screen">
      {/* Pass blogId to your BlogDynamicPage component */}
      <BlogDynamicPage blogId={blogId} />
    </div>
  );
};

export default DynamicBlogPage;
