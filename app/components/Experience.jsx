import React from "react";
import { experiences } from "../data/data";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="bg-cneutral-200 w-full md:w-1/2 rounded-2xl p-4 flex flex-col space-y-8">
      <h2 className="font-kanit text-heading4">Experience</h2>
      <div className="bg-cneutral-300 p-4 rounded-2xl flex flex-col space-y-4">
        {experiences.map((experience) => (
          <ExperienceCard
            company={experience.company}
            role={experience.role}
            year={experience.year}
            image={experience.image}
            key={experience.company}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
