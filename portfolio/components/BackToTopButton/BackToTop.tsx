import { ReactElement, useEffect, useState } from "react";

type Props = {
  yLimit: number;
  mobileSizeMax: number;
};
const BackToTop = ({ yLimit, mobileSizeMax }: Props): ReactElement => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined")
      window.addEventListener("scroll", () => {
        if (
          window.pageYOffset > yLimit &&
          window.screen.width < mobileSizeMax
        ) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    if (typeof window != "undefined")
      window.scrollTo({
        top: 0,
        behavior: "smooth", // for smoothly scrolling
      });
  };
  return (
    <>
      {showButton && (
        <button
          role="button"
          onClick={scrollToTop}
          className="fixed w-24 h-24 bottom-24 right-0 z-[1001] bg-[#ccc] opacity-70"
          aria-label="Back to top"
        >
          &#8593;
        </button>
      )}
    </>
  );
};

export default BackToTop;
