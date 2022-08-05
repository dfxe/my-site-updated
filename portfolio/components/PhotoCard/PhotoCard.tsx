import React from "react";
import NoPaddingCard from "../CardPrototypes/NoPaddingCard";
import Image from "next/image";
import comingSoonPhoto from "./../../public/photo-coming-soon.png";

const PhotoCard = ({ borderStyle = "" }) => {
  return (
    <NoPaddingCard borderStyle={borderStyle}>
      <Image
        src={comingSoonPhoto}
        alt="A picture placeholder for a picture of me."
        width={720}
        height={640}
        style={{
          border: "10px solid black",
          borderRadius: "15px",
        }}
        placeholder="blur"
        priority
        quality={"70"}
      />
    </NoPaddingCard>
  );
};

export default PhotoCard;
