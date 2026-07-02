"use client";

import { BiArrowToBottom } from "react-icons/bi";
import { profile } from "../data/data";
import Image from "next/image";
import avatar from "../assets/avatar.jpg";
import { motion } from "motion/react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-cneutral-500 w-full h-auto py-10 relative flex justify-center items-center"
    >
      <div
        className="w-[10em] h-[10em] absolute bottom-[50%] left-[30%] md:bottom-30 md:left-[40%] bg-radial from-gprimary-100 via-gprimary-200 to-gprimary-300
      blur-3xl rounded-full md:w-70 md:h-70"
      ></div>
      <main className="w-80% md:w-full">
        <div className="container mx-auto flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="top flex flex-col justify-center items-center space-y-4 p-10 z-10
          w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%]"
          >
            <Image
              src={avatar}
              width={120}
              height={120}
              alt="profile-avatar"
              className="w-[8em] rounded-full bg-white-100/70"
            />
            <p className="font-kumbhsans text-heading5 md:text-heading3 text-white-100/70 font-semibold">
              {profile.greeting}
            </p>
            <h1
              className="w-full text-heading2 leading-14 lg:text-heading1 font-bold font-kanit text-white-100/80
            text-center z-10 md:leading-20"
            >
              {profile.title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.15 }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <p
              className="text-center text-body-16 md:text-body-20 text-white-100/70 font-kumbhsans 
            z-10 lg:px-10 font-medium"
            >
              {profile.subtitle}
            </p>
            <div className="w-full flex flex-col sm:flex-row space-y-4 justify-center items-center sm:items-baseline sm:space-x-6 mt-6">
              <a
                href="#works"
                className="w-full sm:w-[50%] lg:w-[40%] bg-primary text-neutral-950 
                font-kanit text-body-18 font-bold rounded-full p-4 flex items-center justify-center"
              >
                View my works
              </a>
              <a
                href="/Elizabeth-Bassey-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="w-full sm:w-[50%] lg:w-[40%] text-white-100 font-kanit text-body-18 font-bold
                bg-cneutral-200 p-4 rounded-full flex items-center justify-center space-x-3"
              >
                Download resume <BiArrowToBottom strokeWidth={2} />
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
};
