import React from "react";

const awards = [
  { id: 1, title: "Winner Seo Master MAGT Smart Start Award 2018", icon: "/path/to/icon1.png" },
  { id: 2, title: "Top Social Media Agencies Next Partner 2019", icon: "/path/to/icon2.png" },
  { id: 3, title: "5 Fastest Growing Abstract Solution Providers 2020", icon: "/path/to/icon3.png" },
  { id: 4, title: "National Excellence Agencie Award Winner 2021", icon: "/path/to/icon4.png" },
];

const Awards = () => {
  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl text-center font-bold">Awards</h2>
      <div className="flex flex-wrap justify-center mt-8">
        {awards.map((award) => (
          <div key={award.id} className="m-4 p-4 text-center">
            <img src={award.icon} alt={award.title} className="mx-auto" />
            <p className="text-gray-600 mt-2">{award.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
