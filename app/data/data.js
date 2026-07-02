import { FiGithub, FiLinkedin, FiDribbble, FiMail } from "react-icons/fi";
import {} from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import project1 from "../assets/project-1.png";
import tailwind from "../assets/portfolio-tools/tailwind.png";
import js from "../assets/portfolio-tools/javascript.png";
import react from "../assets/portfolio-tools/react.png";
import nextjs from "../assets/portfolio-tools/next-js.png";
import astro from "../assets/portfolio-tools/astro.png";
import figma from "../assets/portfolio-tools/figma.png";
import disc from "../assets/disc.svg";
import csspost from "../assets/Portfolio-blog-images/css-variables.png";
import reacthook from "../assets/Portfolio-blog-images/react-hooks.png";
import postman from "../assets/Portfolio-blog-images/postman.png";
import framerpost from "../assets/Portfolio-blog-images/framer.png";

export const navItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Works",
    link: "#works",
  },
  {
    text: "Tools",
    link: "#tools",
  },
  {
    text: "Articles",
    link: "#articles",
  },
  {
    text: "Contact",
    link: "#contact",
  },
];

export const socialLinks = [
  {
    name: "x",
    icon: RiTwitterXLine,
    link: "https://x.com/dev_lizz",
  },
  {
    name: "linkedin",
    icon: FiLinkedin,
    link: "https://www.linkedin.com/in/devliz/",
  },
  {
    name: "github",
    icon: FiGithub,
    link: "https://github.com/dev-liz",
  },
];

export const profile = {
  greeting: "Hi There! I'm Liz👋",
  title: "Frontend Engineer",
  subtitle:
    " I’m a UX-driven Frontend Engineer who helps SaaS and AI companies build intuitive, high-performing digital products.",
};

export const worksFilter = ["All", "React", "Astro", "Javascript"];

export const projects = [
  {
    image: project1,
    title: "News Homepage",
    description:
      "This is a landing page for a news blog This is a landing page for a news blog",
    tools: ["React", " ", "Tailwind"],
  },
  {
    image: project1,
    title: "Sunnyside Agency",
    description:
      "This is a landing page for a creative design studio This is a landing page for a creative design studio",
    tools: ["React", " ", "Tailwind"],
  },
  {
    image: project1,
    title: "Manage Studio Landing page",
    description:
      "This is a landing page for a studio This is a landing page for a studio",
    tools: ["React", " ", "Tailwind"],
  },
  {
    image: project1,
    title: "Room furnitures",
    description:
      "This is a landing page for a furniture business This is a landing page for a furniture business",
    tools: ["React", " ", "Tailwind"],
  },
];

export const tools = [
  {
    image: tailwind,
    name: "Tailwind",
    category: "Frontend",
  },
  {
    image: js,
    name: "Javascript",
    category: "Frontend",
  },
  {
    image: react,
    name: "React",
    category: "Frontend",
  },
  {
    image: nextjs,
    name: "Next.js",
    category: "Frontend",
  },
  {
    image: astro,
    name: "Astro",
    category: "Frontend",
  },
  {
    image: figma,
    name: "Figma",
    category: "Design",
  },
];

export const socials = [
  {
    icon: FiGithub,
    name: "Github",
    handle: "@Dev-Liz",
    link: "https://github.com/dev-liz",
  },
  {
    icon: RiTwitterXLine,
    name: "X",
    handle: "@dev_lizz",
    link: "https://x.com/dev_lizz",
  },
  {
    icon: FiLinkedin,
    name: "Linkedin",
    handle: "@devliz",
    link: "https://www.linkedin.com/in/devliz/",
  },
  {
    icon: FiDribbble,
    name: "Dribbble",
    handle: "@Liz-B",
    link: "https://dribbble.com/Liz-B",
  },
  {
    icon: FiMail,
    name: "Gmail",
    handle: "basseyelizabeth569@gmail.com",
    link: "basseyelizabeth569@gmail.com",
  },
];

export const experiences = [
  {
    company: "Okto Finance",
    role: "Documentation Engineer",
    year: "2025",
    image: disc,
  },
  {
    company: "Smart Builders",
    role: "Frontend Developer Intern",
    year: "2024",
    image: disc,
  },
  {
    company: "Buff Technologies",
    role: "Product Designer",
    year: "2023",
    image: disc,
  },
  {
    company: "Bigstack Technologies",
    role: "Product Designer",
    year: "2021",
    image: disc,
  },
];

export const blogs = [
  {
    image: csspost,
    title: "Introduction to css variables",
    description: "An in-depth article on css variables",
    category: "Frontend",
  },
  {
    image: reacthook,
    title: "Introduction to css variables",
    description: "An in-depth article on react hooks",
    category: "Frontend",
  },
  {
    image: postman,
    title: "Introduction to css variables",
    description: "An in-depth article on postman",
    category: "Documentation",
  },
  {
    image: framerpost,
    title: "Introduction to css variables",
    description: "The best no-code developer tool there is.",
    category: "No-code",
  },
];
