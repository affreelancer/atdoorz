import React from "react";

const GrowthSection = () => {
  return (
    <div className="py-10 text-center">
      <h2 className="text-3xl font-bold">We Boost Our Clients’ Bottom Line by Optimizing Their Growth Potential</h2>
      <p className="text-gray-600 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venis.
      </p>
      <button className="mt-8 bg-fyporange text-white py-2 px-6 rounded">
        Download Documentation
      </button>
      <img
        src="/path/to/growth-image.jpg" // Replace with the actual image path
        alt="Team discussion"
        className="mt-8 mx-auto w-full max-w-4xl"
      />
    </div>
  );
};

export default GrowthSection;
