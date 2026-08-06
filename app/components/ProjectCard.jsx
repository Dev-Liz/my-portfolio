import Image from "next/image";
import React from "react";
import Badge from "./Badge";

const ProjectCard = ({ image, title, description, tools, link, github }) => {
  return (
    <div className={`w-full bg-cneutral-200 p-10 rounded-2xl`}>
      <Image
        src={image}
        alt={`project ${title}`}
        width={`auto`}
        height={`auto`}
      />
      <div className="py-4 flex flex-col flex-1 space-y-3 items-baseline">
        <h3 className="text-heading4 font-kanit font-bold">{title}</h3>
        <p className="text-neutral-300 text-body-18 font-kumbhsans">
          {description}
        </p>
        <div className="flex justify-start items-center space-x-2">
          {tools.map((tool) => (
            <Badge variant="smallSecondary">{tool}</Badge>
          ))}
        </div>
      </div>
      <div className="flex justify-start items-center space-x-3">
        {github && (
          <a href={github}>
            <Badge variant="secondary">Github</Badge>
          </a>
        )}
        <a href={link}>
          <Badge variant="primary">Live link</Badge>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
