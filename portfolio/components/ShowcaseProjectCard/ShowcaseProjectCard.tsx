import React from "react";
import PatternBayLogo from "../../public/PatternBayLogo";
import Card from "../CardPrototypes/Card";

const ShowcaseProjectCard = () => {
  return (
    <Card borderStyle={"bg-card-secondary"}>
      <div className="text-6xl font-extrabold text-transparent text-center flex row">
        <span className="absolute flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-peach opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-nextred"></span>
        </span>

        <a
          href="https://patternbay.vercel.app"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-clip-text bg-gradient-to-br
           from-pink to-red"
        >
          <div className="flex flex-col items-center">
            Showcase
            <PatternBayLogo />
            Pattern Bay
          </div>
        </a>
      </div>
    </Card>
  );
};

export default ShowcaseProjectCard;
