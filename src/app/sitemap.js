import { blogs } from "@/data/blog";
import { techroutes } from "@/data/techstack";
import { servicesroutes } from "@/data/services";
export default function sitemap() {
  // 1. Static pages of your website
  const staticPages = [
    "",
    "about-us",
    "contact-us",
    "careers",
    "life-at-lemolite",
    "casestudy",
    "startup",
    "services",
    "techstack",
    "blog", // blog listing page
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `https://lemolite.com/${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1.0 : 0.8,
  }));

  const blogUrls = blogs.map((blog) => ({
    url: `https://lemolite.com/blog/${blog.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const techUrls = techroutes.map((page) => ({
    url: `https://lemolite.com/techstack/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const servicesUrls = servicesroutes.map((page) => ({
    url: `https://lemolite.com/services/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // 3. Return final sitemap
  return [...staticUrls, ...blogUrls, ...techUrls, ...servicesUrls];
}
