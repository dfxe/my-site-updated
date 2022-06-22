import React from "react";
import AvailableCard from "./AvailableCard/AvailableCard";
import Card from "./Card/Card";
import ProjectCard from "./ProjectCard/ProjectCard";
import ContactCard from "./ContactCard/ContactCard";
import BlogCard from "./BlogCard/BlogCard";
import Footer from "./Footer/Footer";
import BrandLogo from "../public/BrandLogo";

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
      <div className="inline-grid grid-rows-2 grid-cols-1 gap-2">
        <Card dimensions={{ width: 72, height: 12 }} rowSpan={"row-span-3"}>
          <div className="text-6xl font-extrabold text-transparent text-center flex row">
            <a
              href="https://patternbay.vercel.app"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-clip-text bg-gradient-to-br 
           from-pink to-red"
            >
              <BrandLogo></BrandLogo>
            </a>
          </div>
        </Card>
        <Card dimensions={{ width: 72, height: 72 }}>
          <div>
            <h1 className="text-title">
              I&apos;m{" "}
              <span
                className="text-title font-extrabold text-transparent
           bg-clip-text bg-gradient-to-br
           from-pink to-red"
              >
                Dragos
              </span>{" "}
            </h1>
            <p>
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
