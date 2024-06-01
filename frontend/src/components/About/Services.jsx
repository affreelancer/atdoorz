import React from "react";

const Services = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl text-center font-bold">We Provide Continuous & Kind Service for Customers</h2>
      <div className="flex flex-col md:flex-row items-center justify-around mt-8">
        <div className="w-full md:w-1/3 p-4">
          <h3 className="text-xl font-semibold">Customer Service</h3>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h3 className="text-xl font-semibold">Online Consultation</h3>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h3 className="text-xl font-semibold">Sales Management</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
