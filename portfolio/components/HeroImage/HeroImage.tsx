import NoPaddingCard from "../CardPrototypes/NoPaddingCard";
import Image from "next/image";
import comingSoonPhoto from "./../../public/h3w.webp";

const HeroImage = () => {
  return (
    //TODO fix blank space background issue
    <NoPaddingCard additionalStyles="relative flex justify-center items-center">
      <Image
        src={comingSoonPhoto}
        alt="A picture placeholder for a picture of me."
        style={{ objectFit: "cover" }}
        fill
        placeholder="blur"
        priority
        quality={"90"}
      />
    </NoPaddingCard>
  );
};

export default HeroImage;
