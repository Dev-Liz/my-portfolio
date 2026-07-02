import React from "react";
import Socials from "../components/Socials";
import Experience from "../components/Experience";

const SocialsExperience = () => {
  return (
    <section className="bg-cneutral-300 w-full h-auto py-20">
      <div className="container mx-auto px-10">
        <div
          className="w-full flex flex-col space-y-4 md:flex-row justify-center 
        md:space-x-10 md:space-y-0"
        >
          <Socials />
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default SocialsExperience;
