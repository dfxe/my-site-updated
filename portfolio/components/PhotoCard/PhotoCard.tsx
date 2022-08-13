import NoPaddingCard from "../CardPrototypes/NoPaddingCard";
import Image from "next/image";
import comingSoonPhoto from "./../../public/h3.png";

const PhotoCard = () => {
  return (
    //TODO fix blank space background issue
    <NoPaddingCard additionalStyles="">
      <Image
        src={comingSoonPhoto}
        alt="A picture placeholder for a picture of me."
        width={1080}
        height={720}
        placeholder="blur"
        priority
        quality={"95"}
      />
    </NoPaddingCard>
  );
};

export default PhotoCard;
