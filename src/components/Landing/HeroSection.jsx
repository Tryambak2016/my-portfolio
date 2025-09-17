import React from 'react';
import { Download, Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import profile from '../../assets/profile2.jpg'; 
import cv from '../../assets/cv.pdf'; 
import { Button } from 'react-scroll';

gsap.registerPlugin(ScrollToPlugin);

const HeroSection = () => {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1, 
      ease: "power3.out", 
      scrollTo: {
        y: '#projects',
        offsetY: 50
      },
    });
  };

  // The function to handle the download
  const handalDownload = () => {
    // Create a new anchor element
    const link = document.createElement('a');
    // Set its href to the imported CV file
    link.href = cv;
    // Set the download attribute with the desired file name
    link.download = 'tryambak-panchal-cv.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Clean up by removing the link from the body
    document.body.removeChild(link);
  };

  return (
    <section className="bg-black text-white py-16 lg:py-32 px-4 sm:px-8 font-sans relative overflow-hidden">
      <div className="container mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Section: Text and Buttons */}
        <div className="flex-1 text-center lg:text-left pr-0 lg:pr-16 mt-12 lg:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-400 font-medium mb-2 tracking-wide"
          >
            Hi, I'm a
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tighter"
          >
            Java Developer <br className="hidden sm:inline" /> & Problem Solver.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0"
          >
            Passionate about building robust, scalable applications with Java. Ready to contribute fresh perspectives and innovative solutions to your development team.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12"
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300 font-medium border border-gray-300"
            >
              View My Work
            </a>
            <Button onClick={handalDownload} className="flex items-center justify-center cursor-pointer px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-colors duration-300 font-medium" >
              <Download className="mr-2 h-5 w-5" /> Download CV
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex justify-center lg:justify-start gap-6"
          >
            <a
              href="https://www.linkedin.com/in/tryambak-panchal-998182299/"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Tryambak2016"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://mail.google.com/"
              aria-label="Email Address"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>

        {/* Right Section: Image with Rotator */}
        <div className="flex-shrink-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* The Rotator */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-gray-500"
            />
            {/* Profile Image Container */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl relative z-10">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;