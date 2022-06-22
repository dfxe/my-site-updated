import React from "react";
import Card from "../Card/Card";
const BlogCard = () => {
  return (
    <Card dimensions={{ width: 1, height: 1 }}>
      <h1
        className="text-2xl font-extrabold text-transparent text-center
           bg-clip-text bg-gradient-to-br
           from-pink to-red"
      >
        Posts
      </h1>
      <br></br>
      <ul>
        <li>
          <a href="/blog/p1" className="text-xl">
            Post One Coming
          </a>
        </li>
      </ul>
    </Card>
  );
};

export default BlogCard;