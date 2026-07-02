import React from "react";
import WorksFilter from "../components/WorksFilter";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/data";

const WorkSection = () => {
  const getItemStyle = (index) => {
    switch (index) {
      case 0:
        return "lg:col-span-2 lg:row-span-1"; // Spans 2 columns, 2 rows
      case 1:
        return "lg:col-span-2 lg:row-span-2"; // Standard 1x1
      case 2:
        return "lg:col-span-2 lg:row-span-2"; // Standard 1x1
      case 3:
        return "lg:col-span-2 lg:row-span-1"; // Spans 2 columns, 1 row
      default:
        return "lg:col-span-1 lg:row-span-1";
    }
  };

  return (
    <section
      id="works"
      className="bg-cneutral-400 w-full h-auto py-20 md:px-10"
    >
      <div className="container mx-auto px-10">
        <header
          className="w-full flex flex-col justify-center space-y-4 lg:flex-row items-center 
        lg:justify-between lg:space-y-0"
        >
          <h2 className="text-heading4 md:text-heading3 text-center lg:text-left font-kanit font-medium">
            View my works
          </h2>
          <WorksFilter />
        </header>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
          {projects.map((project, index) => (
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              tools={project.tools}
              key={index}
              style={getItemStyle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
