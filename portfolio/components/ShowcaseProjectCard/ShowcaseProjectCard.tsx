import NoPaddingCard from "../CardPrototypes/NoPaddingCard";
import Image from "next/image";
import patternbayImage from "../../public/patternbay.png";
import Link from "next/link";

const ShowcaseProjectCard = () => {
  return (
    <NoPaddingCard additionalStyles={"bg-[#f8fafb]"}>
      <Link
        href="https://patternbay.vercel.app/"
        target={"_blank"}
        rel="noopener noreferrer"
        style={{ zIndex: 9999, cursor: "pointer" }}
      >
        {/** TODO check this ignore Ref issue */}
        {/*@ts-ignore*/}

        <Image
          src={patternbayImage}
          alt="The showcase project, patternbay."
          style={{
            zIndex: 9999,
            cursor: "pointer",
          }}
          placeholder="blur"
          priority
          quality={"95"}
        />
      </Link>
    </NoPaddingCard>
  );
};

export default ShowcaseProjectCard;
