import React from "react";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "TechCorp",
    description:
      "Worked on building scalable web applications using React and Node.js. Improved app performance by 30%.",
    duration: "June 2023 - August 2023",
    image: "https://via.placeholder.com/150",
  },
  {
    role: "Part-Time IT Support",
    company: "University IT Services",
    description:
      "Provided technical support to students and staff, resolved over 200 tickets related to hardware and software issues.",
    duration: "September 2022 - May 2023",
    image: "https://via.placeholder.com/150",
  },
];

function Experience() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-primary mb-6 text-center">Experience</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center"
          >
            <img
              src={experience.image}
              alt={experience.role}
              className="w-20 h-20 rounded-full mr-6 border-2 border-primary"
            />
            <div>
              <h3 className="text-xl font-bold text-secondary">{experience.role}</h3>
              <p className="text-gray-700 font-bold">{experience.company}</p>
              <p className="text-gray-700 mt-2">{experience.description}</p>
              <p className="text-gray-500 mt-4 italic">{experience.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
