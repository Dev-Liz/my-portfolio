import React from "react";
import ToolboxHeader from "../components/ToolboxHeader";
import ToolboxCards from "../components/ToolboxCards";

const Toolbox = () => {
  return (
    <section id="tools" className="bg-cneutral-500 w-full h-auto py-10">
      <div className="container mx-auto px-10">
        <div className="flex flex-col space-y-16">
          <ToolboxHeader />
          <ToolboxCards />
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
