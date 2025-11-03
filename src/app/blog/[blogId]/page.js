import BlogDynamicPage from '@/components/ReusableComponent/blog/BlogDynamicPage';
import React from 'react';

// Dynamic blog page - [blogId] is a dynamic route parameter
const DynamicBlogPage = ({ params }) => {
  const { blogId } = params;

  return (
    <div className="min-h-screen">
      <BlogDynamicPage />
    </div>
  );
};

export default DynamicBlogPage;


