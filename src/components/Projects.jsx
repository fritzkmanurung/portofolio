import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    image: "https://via.placeholder.com/300x200",
    link: "https://github.com/yourusername/portfolio-website",
  },
  {
    title: "E-Commerce Platform",
    description: "An online store built with Django and React.",
    image: "https://via.placeholder.com/300x200",
    link: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "Weather App",
    description: "A weather forecast app using OpenWeatherMap API.",
    image: "https://via.placeholder.com/300x200",
    link: "https://github.com/yourusername/weather-app",
  },
];

function Projects() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-primary mb-6 text-center animate-slideIn">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-secondary">{project.title}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary mt-4 inline-block"
            >
              View Project &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;