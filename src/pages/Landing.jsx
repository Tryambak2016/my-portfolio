import React from 'react';
import Navbar from "../components/Landing/Navbar";
import About from "../components/Landing/About";
import Footer from "../components/Landing/Footer";
import Contact from "../components/Landing/Contact";
import Skills from "../components/Landing/Skills";
import Projects from "../components/Landing/Projects";
import HeroSection from "../components/Landing/HeroSection";

const Landing = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with id="home" */}
      <div id="home">
        <HeroSection/>
      </div>

      {/* About Section with id="about" */}
      <div id="about">
        <About/>
      </div>

      {/* Skills Section with id="skills" */}
      <div id="skills">
        <Skills/>
      </div>

      {/* Projects Section with id="projects" */}
      <div id="projects">
        <Projects/>
      </div>

      {/* Contact Section with id="contact" */}
      <div id="contact">
        <Contact/>
      </div>

      {/* Footer Section (no need for an id) */}
      <Footer/>

    </div>
  );
}

export default Landing;