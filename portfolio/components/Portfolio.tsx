import React from "react";
import AvailableCard from "./AvailableCard/AvailableCard";
import Card from "./Card/Card";

const Portfolio = () => {
  return (
    <div className="inline-grid grid-cols-2 gap-4 ">
      <AvailableCard />
      <div className="inline-grid grid-rows-2 grid-cols-1 gap-4">
        <Card dimensions={{ width: 72, height: 24 }}>
          <div className="text-4xl">Hello</div>
        </Card>
        <Card dimensions={{ width: 72, height: 72 }}>
          Dragos here, web dev from London
        </Card>
      </div>
      <Card dimensions={{ width: 72, height: 96 }}>elementuj</Card>
      <Card dimensions={{ width: 72, height: 96 }}>elementuj</Card>
      <Card dimensions={{ width: 72, height: 96 }}>elementuj</Card>
    </div>
  );
};

export default Portfolio;
