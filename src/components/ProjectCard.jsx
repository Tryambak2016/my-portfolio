// src/components/ProjectCard.jsx
import React, { useState } from 'react';
import { Code, Eye } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxChars = 100;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const isDescriptionLong = project.description.length > maxChars;
  const descriptionText = isExpanded
    ? project.description
    : project.description.slice(0, maxChars) + '...';

  return (
    <div className="bg-[#1e1e1e] rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto my-4 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] font-sans text-gray-200">
      <div className="relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover sm:object-cover"
        />
        <span className="absolute top-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {project.year}
        </span>
        {/* Only show 'Featured' on desktop for cleaner mobile UI */}
        <span className="absolute top-4 right-4 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full items-center hidden sm:flex">
          <span className="mr-1">⭐</span>Featured
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-2">
          {descriptionText}
        </p>
        {isDescriptionLong && (
          <button
            onClick={toggleExpanded}
            className="text-blue-400 text-sm font-medium hover:text-blue-300 mb-4"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
        <div className="flex flex-wrap gap-2 mb-6 mt-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-[#333333] text-gray-200 text-xs font-medium px-3 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.additionalTech > 0 && (
            <span className="bg-[#333333] text-gray-200 text-xs font-medium px-3 py-1 rounded-md">
              +{project.additionalTech}
            </span>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          {project.previewUrl && (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-6 py-3 bg-white border border-gray-300 rounded-lg text-black hover:bg-gray-100 transition-colors duration-300"
            >
              <Eye className="mr-2 h-5 w-5" /> Preview
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-6 py-3 bg-[#333333] border border-[#555555] rounded-lg text-gray-200 hover:bg-[#444444] transition-colors duration-300"
            >
              <Code className="mr-2 h-5 w-5" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;