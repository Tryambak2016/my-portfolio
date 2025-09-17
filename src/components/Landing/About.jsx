import React from 'react';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-indigo-400" />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient Java code following best practices and design patterns.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: 'Problem Solving',
      description: 'Analytical thinking to break down complex problems into manageable solutions.',
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Team Player',
      description: 'Collaborative approach with strong communication skills and eagerness to learn.',
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and frameworks in the Java ecosystem.',
    },
  ];

  const stats = [
    { number: '5+', label: 'Projects Completed' },
    { number: '15+', label: 'Technologies Mastered' },
    { number: '1000+', label: 'Hours of Coding' },
    { number: '100%', label: 'Passion for Java' },
  ];

  return (
    <div className="bg-black text-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Me Title and Intro */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">About Me</h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-400 px-2">
            I'm a dedicated Java developer with a passion for creating efficient, scalable solutions. While I'm early in my professional journey, I bring fresh perspectives, strong fundamentals, and an unwavering commitment to excellence.
          </p>
        </div>

        {/* Main Content: My Journey & Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
          {/* My Journey Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">My Journey</h2>
            <div className="space-y-5 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                My journey into Java development began with a fascination for logical problem-solving and the elegance of well-structured code. Through intensive self-study and hands-on projects, I've built a solid foundation in Java fundamentals, object-oriented programming, and modern development practices.
              </p>
              <p>
                I've dedicated countless hours to mastering frameworks like Spring Boot, understanding database design principles, and exploring cloud technologies. Each project I build strengthens my skills and deepens my appreciation for robust software architecture.
              </p>
              <p>
                What sets me apart is my genuine enthusiasm for learning and my commitment to writing clean, maintainable code. I'm eager to bring this passion and fresh perspective to a collaborative development team.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-5 sm:p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:border-indigo-500"
              >
                <div className="bg-gray-800 p-3 rounded-full mb-3 sm:mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">{skill.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl sm:text-5xl font-bold text-indigo-400">{stat.number}</p>
              <p className="mt-1 sm:mt-2 text-sm sm:text-md text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
