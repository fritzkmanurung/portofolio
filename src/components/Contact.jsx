import React from "react";

function Contact() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">Contact Me</h2>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;