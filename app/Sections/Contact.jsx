import Image from "next/image";
import React from "react";
import GetInTouch from "../assets/Get-in-touch.png";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="bg-cneutral-400 w-full h-auto py-20">
      <div className="container mx-auto px-10">
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 justify-between items-center">
          <Image
            src={GetInTouch}
            alt="Get in touch image"
            width={600}
            height={`auto`}
          />
          <div className="flex flex-col space-y-4 items-start">
            <h3 className="text-heading3 font-kanit font-bold">
              Want to get in touch?
            </h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:basseyelizabeth569@gmail.com"
              className="bg-primary text-neutral-950 
              font-kanit text-body-18 font-bold rounded-full py-4 px-6"
            >
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
