import Link from "next/link";
import React from "react";

const SocialLinks = ({ name, icon, link, handle }) => {
  return (
    <div className="flex items-center justify-start space-x-4 border-b border-cneutral-200 py-2">
      <div className="font-bold text-primary">{icon}</div>
      <div className="flex flex-col space-y-2">
        <h4 className="font-bold font-kanit text-heading6">
          <Link href={link}>{name}</Link>
        </h4>
        <p className="font-kumbhsans text-body-16">{handle}</p>
      </div>
    </div>
  );
};

export default SocialLinks;
