import Image from "next/image";
import React from "react";

export const BlogCard = ({ image, title, category, excerpt }) => {
  return (
    <div className="w-full py-6 h-auto hover:scale-102">
      <Image
        src={image}
        width={600}
        height={400}
        alt={`${title} blog banner`}
        className="w-auto h-auto rounded-2xl"
      />
      <div className="flex flex-col space-y-4 py-4">
        <div className="flex justify-between items-center">
          <h5 className="text-heading5 font-kanit font-bold">{title}</h5>
          <p className="flex items-center justify-center rounded-full py-1 px-2 bg-primary/20 font-kumbhsans">
            {category}
          </p>
        </div>
        <p className="font-kumbhsans text-body-18">{excerpt}</p>
      </div>
    </div>
  );
};
