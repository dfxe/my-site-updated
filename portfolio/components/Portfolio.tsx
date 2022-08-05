import React from "react";
import AvailableCard from "./AvailableCard/AvailableCard";
import Card from "./CardPrototypes/Card";
import ProjectCard from "./ProjectCard/ProjectCard";
import ContactCard from "./ContactCard/ContactCard";
import BlogCard from "./BlogCard/BlogCard";
import Footer from "./Footer/Footer";
import PatternBayLogo from "../public/PatternBayLogo";
import Navbar from "./Navbar/Navbar";
import ShowcaseProjectCard from "./ShowcaseProjectCard/ShowcaseProjectCard";
import AboutCard from "./AboutCard/AboutCard";
import PhotoCard from "./PhotoCard/PhotoCard";

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
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <PhotoCard borderStyle={""} />
        <AboutCard />

        <AvailableCard />
      </div>

      <div className="flex flex-col xl:flex-row">
        <BlogCard />
        {/* <ProjectCard /> */}
        <ShowcaseProjectCard />
        <ContactCard />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
