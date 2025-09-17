import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
  const scrollToTop = () => {
    gsap.to(window, { duration: 1, scrollTo: 0, ease: "power2.inOut" });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-neutral-700 pb-8">
        {/* JavaDev Portfolio Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="mr-2 text-sky-400">&lt;&gt;</span> JavaDev Portfolio
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Passionate Java developer creating robust, scalable applications with clean code and modern best practices. Ready to contribute to innovative projects and grow with forward-thinking teams.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/Tryambak2016" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-sky-400 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tryambak-panchal-998182299/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-sky-400 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://mail.google.com/" className="text-neutral-300 hover:text-sky-400 transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-sky-400 transition-colors duration-300 text-sm">Home</a></li>
            <li><a href="#about" className="hover:text-sky-400 transition-colors duration-300 text-sm">About</a></li>
            <li><a href="#skills" className="hover:text-sky-400 transition-colors duration-300 text-sm">Skills</a></li>
            <li><a href="#projects" className="hover:text-sky-400 transition-colors duration-300 text-sm">Projects</a></li>
            <li><a href="#contact" className="hover:text-sky-400 transition-colors duration-300 text-sm">Contact</a></li>
          </ul>
        </div>

        {/* Technologies Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Technologies</h3>
          <ul className="space-y-2">
            <li className="text-sm">Java & Spring Boot</li>
            <li className="text-sm">REST APIs & Microservices</li>
            <li className="text-sm">MySQL & PostgreSQL</li>
            <li className="text-sm">Maven & Git</li>
            <li className="text-sm">JUnit & Clean Code</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mt-8 text-xs">
        <p className="mb-2 sm:mb-0">
          &copy; 2025 Java Developer Portfolio. Made with <span className="text-red-500">&hearts;</span> and Java
        </p>
        <p className="flex items-center space-x-4">
          <span>Built with React & TypeScript</span>
          <button onClick={scrollToTop} className="text-sky-400 hover:underline focus:outline-none">
            Back To Top
          </button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;