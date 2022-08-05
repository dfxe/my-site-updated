import React from "react";
import Card from "../CardPrototypes/Card";

const AboutCard = () => {
  return (
    <Card borderStyle={"border-b-2 bg-card-secondary"}>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl whitespace-nowrap mb-10">
          Hi, I&apos;m{" "}
          <span
            className="text-5xl whitespace-nowrap font-extrabold text-transparent
           bg-clip-text bg-gradient-to-br
           from-pink to-red pb-2"
          >
            Dragos
          </span>{" "}
        </h1>
        <p className="text-xl text-center">
          Frontend developer based in London. Customers have relied on me for
          design and implementation.
        </p>
      </div>
    </Card>
  );
};

export default AboutCard;
