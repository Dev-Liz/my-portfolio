import React from "react";
import { tools } from "../data/data";
import ToolboxCard from "./ToolboxCard";

const ToolboxCards = () => {
  return (
    <div className="bg-cneutral-300 w-full py-10 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20">
      {tools.map((tool) => (
        <ToolboxCard
          image={tool.image}
          name={tool.name}
          category={tool.category}
          key={tool.name}
        />
      ))}
    </div>
  );
};

export default ToolboxCards;
