import React from "react";
import Card from "../CardPrototypes/Card";

const SkillsCard = () => {
  return (
    <Card borderStyle={"border-b-2 bg-card-important"}>
      <h1 className="text-4xl whitespace-normal lg:whitespace-nowrap font-extrabold text-background text-center">
        Skills
      </h1>
      <ul className=" children:text-background children:text-4xl">
        <li>React</li>

        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>.NET</li>
      </ul>
    </Card>
  );
};

export default SkillsCard;
