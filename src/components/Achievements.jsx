import React from "react";

const achievements = [
  {
    title: "Google IT Support Certificate",
    description: "Earned a certificate in IT Support from Google Coursera.",
    date: "March 2023",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Hackathon Winner",
    description: "Won 1st place in XYZ Hackathon for developing an innovative app.",
    date: "December 2022",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    description: "Achieved Azure certification to validate cloud computing skills.",
    date: "July 2023",
    image: "https://via.placeholder.com/150",
  },
];

function Achievements() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-primary mb-6 text-center">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={achievement.image}
              alt={achievement.title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-secondary">{achievement.title}</h3>
            <p className="text-gray-700">{achievement.description}</p>
            <p className="text-gray-500 mt-2 italic">{achievement.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
