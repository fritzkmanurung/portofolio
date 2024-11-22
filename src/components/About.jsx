import React from "react";

function About() {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      {/* Header */}
      <h2 className="text-4xl font-bold text-primary mb-6 animate-fadeIn">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10">
        {/* Profile Picture */}
        <img
          src="https://via.placeholder.com/300"
          alt="Your Profile"
          className="rounded-full border-8 border-primary shadow-lg w-100 h-100 mb-6 md:mb-0 transform hover:scale-180 transition-transform duration-300"
        />
        {/* Description */}
        <div className="">
          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
            Hi there! I'm{" "}
            <span className="font-bold text-secondary">[Your Name]</span>, an
            enthusiastic IT student with a passion for creating impactful
            solutions using technologies like{" "}
            <span className="font-bold">React</span>,{" "}
            <span className="font-bold">Python</span>, and{" "}
            <span className="font-bold">Cloud Computing</span>. I enjoy solving
            real-world problems through code and collaborating with others to
            deliver high-quality results.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            In my spare time, I contribute to open-source projects, write
            technical blogs, and explore emerging technologies to keep my
            skills sharp. Let's connect and build something amazing together!
          </p>
          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <a
              href="https://github.com/yourusername"
              className="bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-secondary transition duration-300 flex items-center justify-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="bg-secondary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary transition duration-300 flex items-center justify-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:yourname@email.com"
              className="bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 transition duration-300 flex items-center justify-center space-x-2"
            >
              <i className="fas fa-envelope"></i>
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
