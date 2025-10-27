import React from 'react';

// Dynamic blog page - [blogId] is a dynamic route parameter
const DynamicBlogPage = ({ params }) => {
  const { blogId } = params;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Blog Post: {blogId}
        </h1>
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            Dynamic blog post content
          </p>
          <p className="text-gray-500">
            This is a placeholder for your BlogDynamicPage component.
            <br />
            Migrate your BlogDynamicPage component from React.js to replace this.
            <br />
            <br />
            Blog ID: <strong>{blogId}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DynamicBlogPage;


