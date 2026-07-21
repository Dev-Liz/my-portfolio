# Elizabeth Bassey's Frontend Portfolio

_This portfolio is currently a work in progress_

A personal portfolio site designed to illustrate my frontend skills and projects. It features a personalized hero section, a work section that displays my projects, a tools section for the tools I use, an experience section, a blog section for my articles and a contact section to connect with me.

![Portfolio hero](/public/portfolio-hero.jpg)

## Overview

This is my first actual project with Next.js and javascript, with a markdown blog integrated. The interface is a minimalist ui designed (by me) to reflect a modern look and feel.

## Features

- Responsive layouts for all screen sizes.
- Subtle animation for all interactive components.
- MDX Blog

## Stack used

- Next.js 16
- React 19
- Tailwind css4
- Javascript
- Framer motion
- MDX

## Project Structure

This project follows the next.js app route structure.

- app
  - assets/ - page assets and images.
  - components/ - reusable components for all sections.
  - data/ - constant data for the website.
  - posts[slug]/ - unique pages for all blog posts
    - page.jsx
  - sections/ - components for all page sections
  - global.css - general page styles
  - layout.js - Root layout
  - page.js - Main layout
  - posts/ - All blog posts in mdx files
  - public/ - public files and images

## View

To view the project locally on your computer, please fork this repository to your own account then clone into your computer.

To view the live page, please follow the link below.

[Liz portfolio](https://lizbassey.vercel.app/)
