import React from "react";

const HeaderAbout = () => {
  return (
    <div className="text-center py-10 bg-gray-100">
      <h1 className="text-4xl font-bold">We’re Devoted Marketing Consultants Helping Your Business Grow</h1>
      <p className="text-gray-600 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis tellus metus.
      </p>
      <img
        src="/path/to/header-image.jpg" // Replace with the actual image path
        alt="Team working"
        className="mt-8 mx-auto w-full max-w-4xl"
      />
    </div>
  );
};

export default HeaderAbout;
