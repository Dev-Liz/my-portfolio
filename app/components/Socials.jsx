import React from "react";
import { socials } from "../data/data";
import SocialLinks from "./SocialLinks";

const Socials = () => {
  return (
    <div className="bg-cneutral-200 w-full md:w-1/2 rounded-2xl p-4 flex flex-col space-y-8">
      <h2 className="font-kanit text-heading4">Socials</h2>
      <div className="bg-cneutral-300 p-4 rounded-2xl flex flex-col space-y-4">
        {socials.map((social) => (
          <SocialLinks
            name={social.name}
            icon={<social.icon />}
            link={social.link}
            handle={social.handle}
            key={social.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Socials;
