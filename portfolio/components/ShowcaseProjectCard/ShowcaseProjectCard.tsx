import NoPaddingCard from "../CardPrototypes/NoPaddingCard";
import Image from "next/image";
import patternbayImage from "../../public/patternbay.png";
import Link from "next/link";
import { useParallax } from "react-scroll-parallax";

const ShowcaseProjectCard = () => {
  const { ref: parallaxRef } = useParallax({ speed: 30 });
  return (
    <NoPaddingCard additionalStyles={"bg-[#f8fafb] -z-[1000]"}>
      <Link
        href="https://patternbay.vercel.app/"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        {/** TODO check this ignore Ref issue */}
        {/*@ts-ignore*/}
        <div ref={parallaxRef}>
          <Image
            src={patternbayImage}
            alt="The showcase project, patternbay."
            style={{
              cursor: "pointer",
            }}
            placeholder="blur"
            priority
            quality={"95"}
          />
        </div>
      </Link>
    </NoPaddingCard>
  );
};

export default ShowcaseProjectCard;
