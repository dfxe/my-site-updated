import NoPaddingCard from "../CardPrototypes/NoPaddingCard";
import Image from "next/image";
import showcaseImage from "../../public/web-agency-calculateur.png";

import { useParallax } from "react-scroll-parallax";

const ShowcaseProjectCard = () => {
  const { ref: parallaxRef } = useParallax({ speed: 4 });
  return (
    <NoPaddingCard additionalStyles={"bg-[white]"}>
      <div className="bg-[white] p-12 text-title text-center font-bold">
        Showcase Project
      </div>
      <a
        href="https://siteify.io/"
        target={"_blank"}
        rel="noopener noreferrer"
        style={{ zIndex: 9999 }}
      >
        {/** TODO check this ignore Ref issue */}
        {/*@ts-ignore*/}
        <div ref={parallaxRef}>
          <Image
            src={showcaseImage}
            alt="The showcase project, patternbay."
            style={{
              zIndex: -1,
              cursor: "pointer",
            }}
            placeholder="blur"
            priority
            quality={"95"}
          />
        </div>
      </a>
    </NoPaddingCard>
  );
};

export default ShowcaseProjectCard;
