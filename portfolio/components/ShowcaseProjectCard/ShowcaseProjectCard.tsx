import NoPaddingCard from "../CardPrototypes/NoPaddingCard";
import Image from "next/image";
import patternbayImage from "../../public/patternbay.png";
import Link from "next/link";
import { useParallax } from "react-scroll-parallax";

const ShowcaseProjectCard = () => {
  const { ref: parallaxRef } = useParallax({ speed: 10 });
  return (
    <NoPaddingCard additionalStyles={"bg-card-secondary"}>
      <Link
        href="https://patternbay.vercel.app/"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <div ref={parallaxRef}>
          <Image
            src={patternbayImage}
            alt="The showcase project, patternbay."
            style={{
              cursor: "pointer",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              zIndex: -1,
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
