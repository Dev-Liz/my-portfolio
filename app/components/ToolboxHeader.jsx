import React from "react";

const ToolboxHeader = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center space-y-4 
    lg:flex-row lg:justify-between"
    >
      <h2 className="text-heading4 md:text-heading3 font-kanit font-medium">
        My Tool Box
      </h2>
      <select className="w-[50%] lg:w-[20%] px-4 py-2 font-kumbhsans text-body-18 bg-cneutral-300 border-cneutral-200 rounded-lg">
        <option value="all">All</option>
        <option value="frontend">Frontend</option>
        <option value="design">Design</option>
        <option value="productivity">Productivity</option>
      </select>
    </div>
  );
};

export default ToolboxHeader;
