import React from "react";
import Card from "../Card/Card";
import { nanoid } from "nanoid";
const BlogCard = () => {
  const blogMeta = [
    {
      id: nanoid(),
      date: "22.06.22",
      title: "Post One Coming",
      shortDescription: "Homebuilding part two",
    },
    {
      id: nanoid(),
      date: "22.06.22",
      title: "Post One Coming",
      shortDescription: "Distro avs?",
    },
  ];
  return (
    <Card dimensions={{ width: 1, height: 1 }} borderStyle="border-b-2">
      <h1
        className="text-6xl font-extrabold text-transparent text-center
           bg-clip-text bg-gradient-to-br
           from-pink to-red mb-20"
      >
        Blog Posts
      </h1>

      <ul>
        {blogMeta.map((item, i) => (
          <li key={nanoid()}>
            <div className="flex justify-between">
              <span>{i}&nbsp;</span>
              <span>{item.date}</span>
            </div>
            <a href="/blog/p1">
              <h3 className="text-3xl">{item.title}</h3>
              <h4 className="text-xl">{item.shortDescription}</h4>
            </a>
            <br />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default BlogCard;
