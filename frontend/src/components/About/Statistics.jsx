import React from "react";

const Statistics = () => {
  return (
    <div className="bg-gray-100 py-10 text-center">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="p-4">
          <h3 className="text-3xl font-bold">15M+</h3>
          <p className="text-gray-600">Products For Sale</p>
        </div>
        <div className="p-4">
          <h3 className="text-3xl font-bold">$25B+</h3>
          <p className="text-gray-600">Community Earnings</p>
        </div>
        <div className="p-4">
          <h3 className="text-3xl font-bold">100M+</h3>
          <p className="text-gray-600">Growing Buyers</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
