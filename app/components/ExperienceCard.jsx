import Image from "next/image";
import React from "react";

const ExperienceCard = ({ company, role, year, image }) => {
  return (
    <div className="flex justify-start items-center space-x-4 h-full">
      <Image src={image} alt="disc" />
      <div>
        <h6 className="text-heading6 font-kanit font-bold">{company}</h6>
        <p>
          {role} - {year}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
