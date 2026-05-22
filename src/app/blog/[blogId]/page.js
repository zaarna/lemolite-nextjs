import { blogs } from "@/data/blog";
import BlogDynamicPage from "@/components/ReusableComponent/blog/BlogDynamicPage";
import JsonLd from "@/components/JsonLd";
import { getBlogPostSchemas } from "@/lib/schema";

export const generateStaticParams = () => {
  return blogs.map((blog) => ({
    blogId: blog.id,
  }));
};

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
  };
}

export default async function BlogPostPage({ params }) {
  const { blogId } = await params;
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="min-h-screen">
        <BlogDynamicPage blogId={blogId} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <JsonLd schemas={getBlogPostSchemas(blog)} />
      <BlogDynamicPage blogId={blogId} />
    </div>
  );
}
