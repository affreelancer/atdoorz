import React from "react";

const leaders = [
  { id: 1, name: "John Doe", role: "Founder & CEO", image: "/path/to/leader1.jpg" },
  { id: 2, name: "Jessica Doe", role: "Marketing", image: "/path/to/leader2.jpg" },
  { id: 3, name: "Rick Edward Doe", role: "Developer", image: "/path/to/leader3.jpg" },
  { id: 4, name: "Melinda Wolosky", role: "Design", image: "/path/to/leader4.jpg" },
];

const Leaders = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl text-center font-bold">Meet Our Leaders</h2>
      <div className="flex flex-wrap justify-center mt-8">
        {leaders.map((leader) => (
          <div key={leader.id} className="m-4 p-4 text-center">
            <img src={leader.image} alt={leader.name} className="mx-auto rounded-full" />
            <h3 className="text-xl font-semibold mt-4">{leader.name}</h3>
            <p className="text-gray-600">{leader.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaders;
