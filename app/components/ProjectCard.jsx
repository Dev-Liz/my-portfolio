import Image from "next/image";
import React from "react";

const ProjectCard = ({ image, title, description, tools, style }) => {
  return (
    <div
      className={`bg-cneutral-200 p-10 rounded-2xl ${style} hover:opacity-70`}
    >
      <Image
        src={image}
        alt={`project ${title}`}
        width={`auto`}
        height={`auto`}
      />
      <div className="py-4">
        <h3 className="text-heading4 font-kanit font-bold">{title}</h3>
        <p className="text-neutral-300 text-body-18 font-kumbhsans">
          {description}
        </p>
        <p>{tools}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
