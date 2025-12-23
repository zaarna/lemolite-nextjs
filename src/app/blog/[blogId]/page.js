// app/blog/[blogId]/page.tsx

import { blogs } from "@/data/blog";
import BlogDynamicPage from "@/components/ReusableComponent/blog/BlogDynamicPage";
import { Metadata } from "next";

// THIS IS THE HOLY GRAIL — KEEP THIS
export const generateStaticParams = () => {
  return blogs.map((blog) => ({
    blogId: blog.id,
  }));
};

// export const dynamic = "force-static";
// export const revalidate = false;

// KEEP THIS — your perfect metadata
export async function generateMetadata({ params }) {
  const { blogId } = await params;
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return {
      title: "Blog Not Found | Lemolite Technologies",
    };
  }

  return {
    title: `${blog.seo.title} | Lemolite Technologies`,
    description: blog.seo.description || "",
    keywords: blog.seo.keywords,
    alternates: {
      canonical: `https://lemolite.com/blog/${blogId}`,
    },
    // Optional: add OG if you want
  };
}

// REMOVE THE async/await HERE — make it normal sync component
export default function BlogPostPage({ params }) {
  const { blogId } = params;

  return (
    <div className="min-h-screen">
      <BlogDynamicPage blogId={blogId} />
    </div>
  );
}
