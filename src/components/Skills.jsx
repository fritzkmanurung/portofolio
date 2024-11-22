import React from "react";

const skills = [
  { name: "Python", icon: "fab fa-python" },
  { name: "JavaScript", icon: "fab fa-js-square" },
  { name: "React", icon: "fab fa-react" },
  { name: "Cloud Computing", icon: "fas fa-cloud" },
];

function Skills() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-primary mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md text-center font-bold text-gray-700 flex items-center justify-center flex-col hover:scale-105 transition-transform duration-300"
          >
            <i className={`${skill.icon} text-secondary text-3xl mb-2`}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
