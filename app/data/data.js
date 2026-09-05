import { FiGithub, FiLinkedin, FiDribbble, FiMail } from "react-icons/fi";
import { FaDev } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Hashnode } from "../components/Hashnode";
import project1 from "../assets/portfolio-projects/project-1.png";
import project2 from "../assets/portfolio-projects/project-2.jpg";
import project3 from "../assets/portfolio-projects/project-3.jpg";
import project4 from "../assets/portfolio-projects/project-4.jpg";
import project5 from "../assets/portfolio-projects/project-5.jpg";
import project6 from "../assets/portfolio-projects/project-6.jpg";
import project7 from "../assets/portfolio-projects/project-7.jpg";
import project8 from "../assets/portfolio-projects/project-8.jpg";
import openapi from "../assets/portfolio-tools/openapi.png";
import postman from "../assets/portfolio-tools/postman.png";
import redocly from "../assets/portfolio-tools/redocly.png";
import readme from "../assets/portfolio-tools/readme.png";
import swagger from "../assets/portfolio-tools/swagger.png";
import mintlify from "../assets/portfolio-tools/mintlify.png";
import disc from "../assets/disc.svg";
import csspost from "../assets/Portfolio-blog-images/css-variables.png";
import reacthook from "../assets/Portfolio-blog-images/react-hooks.png";
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
    name: "dev",
    icon: FaDev,
    link: "https://dev.to/devliz",
  },
  {
    name: "hashnode",
    icon: Hashnode,
    link: "https://devliz.hashnode.dev/",
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
  {
    name: "x",
    icon: RiTwitterXLine,
    link: "https://x.com/dev_lizz",
  },
];

export const profile = {
  greeting: "Hi There! I'm Liz👋",
  title: "API & DevTools Documentation Writer",
  subtitle:
    "I'm a Technical Writer specialized in API and developer tools documentation. With a background in software engineering and user experience, I write accurate, clear and concise documentation Agents and Developers love.",
};

export const worksFilter = ["All", "React", "Astro", "Javascript"];

export const projects = [
  {
    image: project2,
    title: "Kyverno website and documentation with Astro.js",
    description:
      "A redesign of the kyverno website and documentation using Astro.js. featuring dark mode, blog, filters, responsive table, etc.",
    isFrontend: true,
    tools: ["Astro.js", " JavaScript", "Tailwind"],
    link: "https://kyverno.io/",
    github: "https://github.com/Dev-Liz/test-kyverno-docs",
  },
  {
    image: project3,
    title: "TMDB API Documentation with Mintlify",
    description:
      "A revamp of The movie database (TMDB) open-source documentation, using mintlify and OpenAPI spec.",
    isFrontend: false,
    tools: ["Mintlify", "React", "OpenAPI spec"],
    link: "https://devliz.mintlify.app/introduction",
  },
  {
    image: project4,
    title: "Neubird AI Documentation with Astro",
    description:
      "An AI product documentation built with Astro, astro components, storylane for interactive content.",
    isFrontend: false,
    tools: ["Astro.js", "Storylane", "Annotely"],
    link: "https://docs.neubird.ai/",
  },
  {
    image: project5,
    title: "OpenmindAI Documentation with Mintlify",
    description: "An AI product documentation built with Mintlify.",
    isFrontend: false,
    tools: ["Mintlify", "Postman"],
    link: "https://docs.openmind.com/",
  },
  {
    image: project6,
    title: "Openmadness Documentation with Vuepress",
    description: "A Mathemical tool documentation built with Vuepress",
    isFrontend: false,
    tools: ["Vuepress"],
    link: "https://openmadness-docs.vercel.app/",
  },
  {
    image: project7,
    title: "Twilio Documentation with Readme.io",
    description: "A revamp of the Twilio documentation using Readme.io",
    isFrontend: false,
    tools: ["Astro.js", " JavaScript", "Tailwind"],
    link: "https://twilio-api-docs-xnfl.readme.io/reference/getting-started-with-your-api",
  },
  {
    image: project8,
    title: "Plaid Documentation with Postman",
    description: "A revamp of the plaid documentation using Readme.io",
    isFrontend: false,
    tools: ["Postman"],
    link: "https://documenter.getpostman.com/view/37667361/2sAYBUCs2C",
  },
  {
    image: project1,
    title: "Browser Extentions Manager ui with React",
    description:
      "A responsive browser extensions manager app built with React, Javascript and Tailwind. Featuring filters, toggle-switch, darkmode and modal dialog.",
    isFrontend: true,
    tools: ["React", " JavaScript", "Tailwind"],
    link: "https://browser-extentions-managerr.vercel.app/",
    github: "https://github.com/Dev-Liz/Browser-extentions-manager-ui",
  },
];

export const tools = [
  {
    image: openapi,
    name: "OpenApi",
    category: "API Documentation",
  },
  {
    image: postman,
    name: "Postman",
    category: "API Testing",
  },
  {
    image: swagger,
    name: "Swagger",
    category: "API Testing",
  },
  {
    image: redocly,
    name: "Redocly",
    category: "API Management",
  },
  {
    image: mintlify,
    name: "Mintlify",
    category: "API Documentation",
  },
  {
    image: readme,
    name: "Readme.io",
    category: "API Documentation",
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
    icon: FiLinkedin,
    name: "Linkedin",
    handle: "@devliz",
    link: "https://www.linkedin.com/in/devliz/",
  },
  {
    icon: RiTwitterXLine,
    name: "X",
    handle: "@dev_lizz",
    link: "https://x.com/dev_lizz",
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
    company: "Kyverno.io",
    role: "Website/Documentation Engineer",
    year: "2025",
    image: disc,
  },
  {
    company: "Neubird AI",
    role: "Documentation Engineer",
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
