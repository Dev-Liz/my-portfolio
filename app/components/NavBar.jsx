"use client";
import { useState } from "react";
import Image from "next/image";
import { LuX, LuMenu } from "react-icons/lu";
import NavItem from "./NavItem";
import { navItems, socialLinks } from "../data/data.js";
import NavIcons from "./NavIcons.jsx";
import Link from "next/link";

export function NavBar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className="w-full sticky backdrop-blur-lg top-0 z-50 py-1 ">
      <div className="container mx-auto p-4 relative">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="portfolio-logo.svg"
              alt="logo"
              width={150}
              height={120}
              className="cursor-pointer w-[8em] md:w-[10em]"
            />
          </Link>

          <nav
            className="bg-cneutral-300 lg:flex space-x-4 justify-between 
            items-center px-8 py-4 rounded-full border border-cneutral-200
            w-[40%] hidden"
          >
            {navItems.map((item) => (
              <NavItem item={item.text} link={item.link} key={item.text} />
            ))}
          </nav>
          <div className="lg:flex items-center justify-between w-[10%] hidden">
            {socialLinks.map((link) => (
              <NavIcons icon={<link.icon alt={link.name} />} key={link.name} />
            ))}
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileNavOpen ? <LuX /> : <LuMenu />}
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <div
            className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex 
                flex-col justify-center items-center space-y-4 lg:hidden "
          >
            <nav
              className="bg-cneutral-300 flex flex-col space-y-4 justify-between 
                items-center px-4 py-4 rounded-lg border border-cneutral-200
                w-full"
            >
              {navItems.map((item) => (
                <NavItem item={item.text} link={item.link} key={item.text} />
              ))}
            </nav>
            <div className="flex items-center justify-center w-[50%] space-x-2 pt-4">
              {socialLinks.map((link) => (
                <NavIcons
                  icon={<link.icon alt={link.name} />}
                  key={link.name}
                  link={link.link}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
