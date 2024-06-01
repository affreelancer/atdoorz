import React from "react";

const Breadcrumb = () => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <nav className="text-sm">
          <a href="/" className="text-gray-600">Home</a> 
          <span className="mx-2 text-gray-400">/</span> 
          <span className="text-gray-600">About Us</span>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
