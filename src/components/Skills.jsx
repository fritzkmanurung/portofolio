import React from "react";

const skills = [
  { name: "Python", icon: "fab fa-python text-yellow-500" },
  { name: "JavaScript", icon: "fab fa-js-square text-yellow-400" },
  { name: "React", icon: "fab fa-react text-blue-500" },
  { name: "HTML", icon: "fab fa-html5 text-orange-500" },
  { name: "CSS", icon: "fab fa-css3-alt text-blue-400" },
  { name: "PHP", icon: "fab fa-php text-indigo-600" },
  { name: "Java", icon: "fab fa-java text-red-500" },
  { name: "C", icon: "fas fa-code text-green-500" },
];

function Skills() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center font-semibold text-gray-700 flex flex-col items-center hover:scale-110 transition-transform duration-300"
          >
            {/* Icon */}
            <i className={`${skill.icon} text-4xl mb-4`}></i>
            {/* Skill Name */}
            <span className="text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;