import React from "react";
import Card from "../Card/Card";
import Image from "next/image";
import NumbersPopImage from "../../public/project-images/rmg-1.png";
import LaptopImage from "../../public/project-images/laptop-clipart.png";
import GamesVideo from "../../public/project-images/games-video.gif";
const ProjectCard = () => {
  return (
    <Card dimensions={{ width: 24, height: 96 }}>
      <h1
        className="text-2xl font-extrabold text-transparent text-center
           bg-clip-text bg-gradient-to-br
           from-pink to-red"
      >
        Projects
      </h1>

      <div className="inline-grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="inline-grid grid-cols-1 lg:grid-cols-1 gap-4 border-8 rounded-apple-radius">
          <Image
            src={GamesVideo}
            alt="Gameplay from games I made."
            height="720"
            style={{
              border: "10px solid black",
              borderRadius: "15px",
            }}
          />
        </div>

        <div>
          <a href="">
            <Image
              src={LaptopImage}
              alt="Robot on the ground and a phone taking photos of it."
            />
          </a>
          <a href="">
            <Image
              src={NumbersPopImage}
              alt="KaiOS supported phone with calculator game on display"
            />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
