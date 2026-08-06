"use client";

import React from "react";
import { useState } from "react";
import { projects } from "../data/data.js";
import WorksFilter from "../components/WorksFilter";
import ProjectCard from "../components/ProjectCard";

const WorkSection = () => {
  const [cards, setCards] = useState(projects);
  const [filter, setFilter] = useState("All");

  const filteredCards = cards.filter((card) => {
    if (filter === "Frontend") return card.isFrontend;
    if (filter === "Documentation") return !card.isFrontend;
    return true;
  });

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
          <WorksFilter filter={filter} setFilter={setFilter} />
        </header>
        <div className="w-full grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <ProjectCard
                image={card.image}
                title={card.title}
                description={card.description}
                tools={card.tools}
                key={index}
                link={card.link}
                github={card.github}
                isFrontend={card.isFrontend}
              />
            ))
          ) : (
            <p>No cards match the selected filter</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
