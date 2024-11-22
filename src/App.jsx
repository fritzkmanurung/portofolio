import React, { useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gradient-radial min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-gradient-moving bg-[length:200%_200%] text-white py-4 sticky top-0 z-50 shadow-md animate-gradientMove">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">My Portfolio</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-accent">About Me</a>
            <a href="#skills" className="hover:text-accent">Skills</a>
            <a href="#projects" className="hover:text-accent">Projects</a>
            <a href="#achievements" className="hover:text-accent">Achievements</a>
            <a href="#experience" className="hover:text-accent">Experience</a>
            <a href="#blog" className="hover:text-accent">Blog</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              className="text-white text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-secondary text-white transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out z-40`}
        >
          <div className="container mx-auto flex flex-col items-center justify-center h-full space-y-8">
            <a
              href="#about"
              className="text-2xl hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </a>
            <a
              href="#skills"
              className="text-2xl hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-2xl hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#achievements"
              className="text-2xl hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Achievements
            </a>
            <a
              href="#experience"
              className="text-2xl hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#blog"
              className="text-2xl hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-2xl hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-32">
        <section id="about" className="py-16"><About /></section>
        <section id="skills" className="py-16"><Skills /></section>
        <section id="projects" className="py-16"><Projects /></section>
        <section id="achievements" className="py-16"><Achievements /></section>
        <section id="experience" className="py-16"><Experience /></section>
        <section id="blog" className="py-16"><Blog /></section>
        <section id="contact" className="py-16"><Contact /></section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-moving bg-[length:200%_200%] text-white py-6 text-center animate-gradientMove">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;