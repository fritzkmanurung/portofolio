import React from "react";

const blogs = [
  {
    title: "Introduction to React for Beginners",
    description: "A complete beginner's guide to React and component-based architecture.",
    image: "https://via.placeholder.com/300x200",
    link: "https://medium.com/@yourusername/introduction-to-react",
    date: "March 2023",
  },
  {
    title: "Why You Should Learn Docker in 2023",
    description: "Explaining the importance of Docker and containerization for developers.",
    image: "https://via.placeholder.com/300x200",
    link: "https://medium.com/@yourusername/docker-2023",
    date: "July 2023",
  },
];

function Blog() {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-80"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-secondary">{blog.title}</h3>
            <p className="text-gray-700 mt-2">{blog.description}</p>
            <p className="text-gray-500 mt-4 italic">{blog.date}</p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary mt-4 flex items-center"
            >
              Read More <i className="fas fa-external-link-alt ml-2"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
