import React from "react";
import useScrollAnimation from "../config/useScrollAnimation";
import { TfiArrowTopRight } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import projectInfo from "./ProjectInfo";

const Project = () => {
  useScrollAnimation("hidden-project", "show-project");

  return (
    <div id="projects" className="w-full p-5 bg-slate-900">
      <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold mb-3 text-orange-400">
        Projects
      </h1>
      <p className="text-white text-sm md:text-xl mb-6">
        Showcasing recent projects I've worked on
      </p>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {projectInfo.map((project, index) => (
          <div
            key={index}
            className="hidden-project bg-slate-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between space-y-4 transition-all duration-300 hover:shadow-orange-400"
          >
            {/* Project Title */}
            <p className="text-white text-2xl md:text-3xl font-bold">
              {project.name}
            </p>

            {/* Description */}
            <p className="text-gray-300 text-sm md:text-base">
              {project.description}
            </p>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.languages.map((language, index) => (
                <span
                  key={index}
                  className="text-xs md:text-sm text-white bg-slate-600 px-3 py-1 rounded-full"
                >
                  {language}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex justify-between items-center pt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center gap-1 hover:text-orange-400 transition"
              >
                View Project
                <TfiArrowTopRight className="text-lg" />
              </a>

              {/* GitHub Icon if exists */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 transition"
                >
                  <FaGithub className="text-2xl" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
