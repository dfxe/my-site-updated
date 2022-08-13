import AvailableCard from "./AvailableCard/AvailableCard";
import ContactCard from "./ContactCard/ContactCard";
import BlogCard from "./BlogCard/BlogCard";
import Footer from "./Footer/Footer";

import ShowcaseProjectCard from "./ShowcaseProjectCard/ShowcaseProjectCard";
import AboutCard from "./AboutCard/AboutCard";
import HeroImage from "./HeroImage/HeroImage";
import SkillsCard from "./SkillsCard/SkillsCard";
import BackToTop from "./BackToTopButton/BackToTop";
import { ParallaxProvider } from "react-scroll-parallax";
import LeftPushNavbar from "./Navbar/LeftPushNavbar";

const Portfolio = () => {
  const setEasterEgg = setInterval(() => {
    try {
      document.body.addEventListener("keydown", (e) => {
        if (e.key === "F12") {
          // prettier-ignore
          console.log(
            '%cHi there!%cThis site is made and maintained by @dfxe',
            `
            background-color: #f7ebe1;
            color: black;
            font-size: 12px;
            border-radius: 10px 10px 0 0;
            padding: 1em 1em 1em 1em;
            `,
            `
            background-color: #f7ebe1;
            color: black;
            font-size: 12px;
            border-radius: 0 10px 10px 10px;
            padding: 1em 1em 1em 1em;
            `,
          );
        }
      });
      clearInterval(setEasterEgg);
    } catch (e) {
      //TODO, find better amortised solution
    }
  }, 1000);
  return (
    <div>
      <BackToTop yLimit={300} mobileSizeMax={1024} />
      <div id="the-rest-of-the-page">
        <LeftPushNavbar />

        <div className="flex flex-col lg:flex-row">
          <HeroImage />
          <AboutCard />

          {/**TODO this has an time zone issue */}
          <AvailableCard />
        </div>

        <div className="flex flex-col xl:flex-row">
          <BlogCard />
          {/* <ProjectCard /> */}
          <ParallaxProvider>
            <ShowcaseProjectCard />
          </ParallaxProvider>
          <SkillsCard />
        </div>

        <ContactCard />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Portfolio;
