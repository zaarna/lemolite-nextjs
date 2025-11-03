"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blog";
import Breadcrumb from "@/components/ReusableComponent/Breadcrumb/Breadcrumb";
import { Calendar } from "lucide-react";


export default function BlogPageSection() {
  const [visibleBlogs, setVisibleBlogs] = useState(4);

  // Sort newest first
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const featuredBlog = sortedBlogs[0];
  const trendingBlog = sortedBlogs[1];
  const otherBlogs = sortedBlogs.slice(1, visibleBlogs + 1);

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => Math.min(prev + 4, sortedBlogs.length - 1));
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <section className="w-full pt-5 min-h-screen bg-[#fafafa]">
      <div className="container mx-auto px-4">
        <Breadcrumb breadcrumbs={breadcrumbs} />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3 lg:overflow-y-auto lg:max-h-screen lg:pr-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Latest Blogs</h1>

            {/* Featured Blog */}
            {featuredBlog && (
              <div className="mb-8 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={
                    featuredBlog.sections.find((s) => s.type === "image")?.src ||
                    "/default-blog.jpg"
                  }
                  alt={featuredBlog.title}
                  width={800}
                  height={450}
                  className="w-full object-cover"
                />
                <div className="p-6">
                  <span className="text-[#BFD633] text-sm font-medium mb-2 block">
                    {featuredBlog.tags[0]}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {featuredBlog.sections
                      .find((s) => s.type === "paragraph")
                      ?.content?.slice(0, 200)}
                    ...
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{featuredBlog.author}</span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-[#BFD633]" />
                      {featuredBlog.date}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${featuredBlog.id}`}
                    className="inline-block mt-4 text-black underline font-semibold hover:text-gray-700"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            )}

            {/* Other Blogs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherBlogs.map((blog) => {
                const firstImage = blog.sections.find((s) => s.type === "image")?.src;
                const firstParagraph = blog.sections.find(
                  (s) => s.type === "paragraph"
                )?.content;

                return (
                  <div
                    key={blog.id}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={firstImage || "/default-blog.jpg"}
                      alt={blog.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-4">
                      <span className="text-[#BFD633] text-xs font-medium mb-2 block">
                        {blog.tags[0]}
                      </span>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                        {blog.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {firstParagraph?.slice(0, 100)}...
                      </p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{blog.author}</span>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-[#BFD633]" />
                          {blog.date}
                        </div>
                      </div>
                      <Link
                        href={`/blog/${blog.id}`}
                        className="inline-block mt-2 text-black underline font-semibold text-sm hover:text-gray-700"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More */}
            {visibleBlogs < sortedBlogs.length - 1 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="bg-gradient-to-r from-[#BFD633] to-[#8BC34A] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Load More
                </button>
              </div>
            )}
          </div>

          {/* Right Column - Trending */}
          <div className="lg:w-1/3 lg:sticky lg:top-20 lg:h-fit">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Trending Blog</h2>

            {trendingBlog && (
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={
                    trendingBlog.sections.find((s) => s.type === "image")?.src ||
                    "/default-blog.jpg"
                  }
                  alt={trendingBlog.title}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <span className="text-[#BFD633] text-sm font-medium mb-2 block">
                    {trendingBlog.tags[0]}
                  </span>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {trendingBlog.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {trendingBlog.sections
                      .find((s) => s.type === "paragraph")
                      ?.content?.slice(0, 120)}
                    ...
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{trendingBlog.author}</span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-[#BFD633]" />
                      {trendingBlog.date}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${trendingBlog.id}`}
                    className="inline-block mt-2 text-black underline font-semibold text-sm hover:text-gray-700"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
