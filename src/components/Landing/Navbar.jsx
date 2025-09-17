import React, { useState } from 'react';
import {
  Code,
  LogIn,
  Menu,
  X,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import LoginPage from '../LoginPage';

// Register the GSAP ScrollToPlugin once
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Function to close the mobile menu on item click
  const handleItemClick = () => {
    setIsOpen(false);
  };

  // Generic scroll function for other sections
  // Generic scroll function for other sections
// Generic scroll function for other sections
const handleScrollTo = (targetId) => {
  const element = document.getElementById(targetId);
  const navbar = document.querySelector("nav"); // 👈 get navbar element

  if (element && navbar) {
    const navbarHeight = navbar.offsetHeight; // 👈 dynamically get height
    const yOffset = -navbarHeight - 10; // small extra padding
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    gsap.to(window, {
      duration: 0.6,
      scrollTo: y,
      ease: "power2.out",
    });
  }
  handleItemClick();
};



  // New function specifically for scrolling to the top
  const handleScrollToTop = () => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: 0, // Scrolls to the top (y: 0)
      ease: 'power2.out',
    });
    handleItemClick();
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    handleItemClick(); // Close mobile menu if open
  };

  const closeLoginPopup = () => {
    setShowLogin(false);
  };

  return (
    <>
      <nav className="bg-black text-white p-4 sticky top-0 z-50 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo/Brand */}
          <div className='lg:ml-26'>
            <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-green-400" />
            <span className="text-xl font-bold">JavaDev</span>
          </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={handleScrollToTop}
              className="cursor-pointer hover:text-gray-300 transform transition-transform duration-300 hover:scale-105"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollTo('about')}
              className="cursor-pointer hover:text-gray-300 transform transition-transform duration-300 hover:scale-105"
            >
              About
            </button>
            <button
              onClick={() => handleScrollTo('skills')}
              className="cursor-pointer hover:text-gray-300 transform transition-transform duration-300 hover:scale-105"
            >
              Skills
            </button>
            <button
              onClick={() => handleScrollTo('projects')}
              className="cursor-pointer hover:text-gray-300 transform transition-transform duration-300 hover:scale-105"
            >
              Projects
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="cursor-pointer hover:text-gray-300 transform transition-transform duration-300 hover:scale-105"
            >
              Contact
            </button>

            {/* Login Button for Desktop */}
            <div className="flex space-x-4 ml-8 border-l border-gray-700 pl-8">
              <button
                onClick={handleLoginClick}
                className="flex items-center space-x-2 py-2 px-4 rounded transition-all duration-300 hover:bg-white hover:text-black transform hover:scale-105 border border-white"
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6 transform transition-transform duration-300 rotate-90" /> : <Menu className="h-6 w-6 transform transition-transform duration-300 rotate-0" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-black p-4 space-y-3 rounded-md shadow-lg transform transition-all duration-300 ease-in-out">
            <button
              onClick={handleScrollToTop}
              className="block w-full text-left py-3 px-4 rounded-md transition-colors duration-200 hover:bg-gray-700 focus:outline-none cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollTo('about')}
              className="block w-full text-left py-3 px-4 rounded-md transition-colors duration-200 hover:bg-gray-700 focus:outline-none cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleScrollTo('skills')}
              className="block w-full text-left py-3 px-4 rounded-md transition-colors duration-200 hover:bg-gray-700 focus:outline-none cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => handleScrollTo('projects')}
              className="block w-full text-left py-3 px-4 rounded-md transition-colors duration-200 hover:bg-gray-700 focus:outline-none cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="block w-full text-left py-3 px-4 rounded-md transition-colors duration-200 hover:bg-gray-700 focus:outline-none cursor-pointer"
            >
              Contact
            </button>

            {/* Login Button for Mobile */}
            <div className="pt-4 border-t border-gray-700 mt-2">
              <button
                onClick={handleLoginClick}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-white text-black rounded-md transition-colors duration-200 hover:bg-gray-200 focus:outline-none"
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Conditionally render the Login Pop-up */}
      {showLogin && <LoginPage onClose={closeLoginPopup} />}
    </>
  );
};

export default Navbar;