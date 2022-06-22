import React from "react";
import AvailableCard from "./AvailableCard/AvailableCard";
import Card from "./Card/Card";
import ProjectCard from "./ProjectCard/ProjectCard";
import ContactCard from "./ContactCard/ContactCard";
import BlogCard from "./BlogCard/BlogCard";
import Footer from "./Footer/Footer";
import PatternBayLogo from "../public/PatternBayLogo";
const Portfolio = () => {
  const setEasterEgg = setInterval(() => {
    try {
      document.body.addEventListener("keydown", (e) => {
        if (e.key === "F12") {
          // prettier-ignore
          console.log(
            '%cHi there!%cThis site is made and maintained by @ukruel', 
            `
            background-color: #f7ebe1; 
            color: #eb5985;
            font-size: 12px;
            border-radius: 10px 10px 0 0;
            padding: 1em 1em 1em 1em;
            `,
            `
            background-color: #f7ebe1; 
            color: #eb5985;
            font-size: 12px;
            border-radius: 0 10px 10px 10px;
            padding: 1em 1em 1em 1em;
            `,
          );
        }
      });
      clearInterval(setEasterEgg);
    } catch (e) {
      //TODO, find better amortised solution
    }
  }, 1000);
  return (
    <div className="inline-grid grid-cols-1 xl:grid-cols-3 gap-16">
      <div className="inline-grid gap-2">
        <Card
          dimensions={{ width: 86, height: 12 }}
          rowSpan={"row-span-3"}
          borderStyle={"border-b-2"}
        >
          <div className="text-6xl font-extrabold text-transparent text-center flex flex-col justify-center items-center">
            <span className="absolute flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-peach opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red"></span>
            </span>
            <a
              href="https://patternbay.vercel.app"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-clip-text bg-gradient-to-br 
           from-pink to-red"
            >
              <PatternBayLogo />
            </a>
          </div>
        </Card>
        <Card dimensions={{ width: 86, height: 72 }} borderStyle={"border-b-2"}>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl whitespace-nowrap mb-10">
              I&apos;m{" "}
              <span
                className="text-5xl whitespace-nowrap font-extrabold text-transparent
           bg-clip-text bg-gradient-to-br
           from-pink to-red pb-2"
              >
                Dragos
              </span>{" "}
            </h1>
            <p className="text-xl text-center">
              Front End developer based in London. Customers have relied on me
              for design and implementation.
            </p>
          </div>
        </Card>
      </div>
      <AvailableCard />
      <BlogCard />
      <ProjectCard />
      <ContactCard />
      <Footer />
    </div>
  );
};

export default Portfolio;
