import React from "react";
import AvailableCard from "./AvailableCard/AvailableCard";
import Card from "./Card/Card";
import ProjectCard from "./ProjectCard/ProjectCard";
import ContactCard from "./ContactCard/ContactCard";
import BlogCard from "./BlogCard/BlogCard";
import Footer from "./Footer/Footer";

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
    <div className="inline-grid grid-cols-1 lg:grid-cols-3 gap-2">
      <AvailableCard />
      <div className="inline-grid grid-rows-2 grid-cols-1 gap-2">
        <Card dimensions={{ width: 72, height: 12 }} rowSpan={"row-span-3"}>
          <div className="text-6xl font-extrabold text-transparent text-center">
            👋🏻
            <h2
              className="bg-clip-text bg-gradient-to-br 
           from-pink to-red"
            >
              Hello
            </h2>
          </div>
        </Card>
        <Card dimensions={{ width: 72, height: 72 }}>
          <h1 className="text-2xl">
            I&apos;m{" "}
            <span
              className="text-2xl font-extrabold text-transparent
           bg-clip-text bg-gradient-to-br
           from-pink to-red"
            >
              Dragos
            </span>{" "}
          </h1>
          Reword this: Front End developer based in London. Customers have
          relied on me for design and implementation.
        </Card>
      </div>
      <BlogCard />
      <ProjectCard />
      <ContactCard />
      <Footer />
    </div>
  );
};

export default Portfolio;
