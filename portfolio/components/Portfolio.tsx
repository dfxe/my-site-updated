import React from "react";
import AvailableCard from "./AvailableCard/AvailableCard";
import Card from "./Card/Card";
import ProjectCard from "./ProjectCard/ProjectCard";
import ContactCard from "./ContactCard/ContactCard";
import BlogCard from "./BlogCard/BlogCard";

const Portfolio = () => {
  return (
    <div className="inline-grid grid-cols-1 lg:grid-cols-2 gap-1">
      <AvailableCard />
      <div className="inline-grid grid-rows-2 grid-cols-1 gap-1">
        <Card dimensions={{ width: 72, height: 24 }}>
          <h1
            className="text-6xl font-extrabold text-transparent
           bg-clip-text bg-gradient-to-br
           from-pink to-red"
          >
            👋🏻 Hello
          </h1>
        </Card>
        <Card dimensions={{ width: 72, height: 72 }}>
          Reword this: Front End developer based in London. Customers have
          relied on me for design and implementation.
        </Card>
      </div>
      <BlogCard />
      <ProjectCard />
      <ContactCard />
      <div className="flex flex-col justify-center items-center text-base">
        <div className="flex row">
          Copyright © 2022 &nbsp;
          <a
            href="https://www.github.com/ukruel"
            className="text-base font-extrabold text-transparent
           bg-clip-text bg-gradient-to-br
           from-pink to-red"
          >
            @ukruel
          </a>
        </div>
        <a
          href="https://www.github.com"
          className="text-base font-extrabold text-transparent
           bg-clip-text bg-gradient-to-br
           from-pink to-red"
        >
          Site source code.
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
