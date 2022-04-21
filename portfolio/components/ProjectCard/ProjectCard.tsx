import React from "react";
import Card from "../Card/Card";
import Image from "next/image";
import NumbersPopImage from "../../public/project-images/rmg-1.png";
const ProjectCard = () => {
  return (
    <Card dimensions={{ width: 24, height: 72 }}>
      Project
      <div className="inline-grid grid-cols-1 lg:grid-cols-2 gap-1">
        <Image
          src={NumbersPopImage}
          alt="KaiOS supported phone with calculator game on display"
        />
        <Image
          src={NumbersPopImage}
          alt="KaiOS supported phone with calculator game on display"
        />
        <Image
          src={NumbersPopImage}
          alt="KaiOS supported phone with calculator game on display"
        />
        <Image
          src={NumbersPopImage}
          alt="KaiOS supported phone with calculator game on display"
        />
      </div>
    </Card>
  );
};

export default ProjectCard;
