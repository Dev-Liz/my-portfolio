import Image from "next/image";
import React from "react";
import Badge from "./Badge";

export const BlogCard = ({ image, title, category, excerpt }) => {
  return (
    <div className="w-full py-6 h-auto hover:shadow-md hover:scale-102 transition-all duration-300 ease-in-out">
      <Image
        src={image}
        width={600}
        height={400}
        alt={`${title} blog banner`}
        className="w-auto h-auto rounded-2xl"
      />
      <div className="flex flex-col space-y-4 py-4">
        <div className="flex justify-between items-center">
          <h5 className="text-heading5 font-kanit font-bold w-4/5">{title}</h5>
          <Badge variant="smallPrimary" className="w-1/5">
            {category}
          </Badge>
        </div>
        <p className="font-kumbhsans text-body-18">{excerpt}</p>
      </div>
    </div>
  );
};
