import PatternBayLogo from "../../public/PatternBayLogo";
import NoPaddingCard from "../CardPrototypes/NoPaddingCard";
import Image from "next/image";
import patternbayImage from "../../public/patternbay.png";
import Link from "next/link";
const ShowcaseProjectCard = () => {
  return (
    <NoPaddingCard borderStyle={"bg-card-secondary"}>
      <Link
        href="https://patternbay.vercel.app/"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <Image
          src={patternbayImage}
          alt="The showcase project, patternbay."
          width={1280}
          height={800}
          style={{
            border: "10px solid black",
            cursor: "pointer",
          }}
          placeholder="blur"
          priority
          quality={"95"}
          objectFit={"fill"}
        ></Image>
      </Link>
    </NoPaddingCard>
  );
};

export default ShowcaseProjectCard;
