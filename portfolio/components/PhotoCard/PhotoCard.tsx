import NoPaddingCard from "../CardPrototypes/NoPaddingCard";
import Image from "next/image";
import comingSoonPhoto from "./../../public/h2.png";

const PhotoCard = ({ borderStyle = "" }) => {
  return (
    <NoPaddingCard borderStyle={borderStyle}>
      <Image
        src={comingSoonPhoto}
        alt="A picture placeholder for a picture of me."
        width={1080}
        height={720}
        style={{
          border: "10px solid black",
        }}
        placeholder="blur"
        priority
        quality={"95"}
      />
    </NoPaddingCard>
  );
};

export default PhotoCard;
