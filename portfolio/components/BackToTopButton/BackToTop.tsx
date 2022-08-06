import { useEffect, useState } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined")
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300 && window.screen.width < 1024) {
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
          onClick={scrollToTop}
          className="w-24 h-24 bottom-24 right-0 fixed z-[1000] bg-peach"
          aria-label="scroll-to-top-button"
        >
          &#8593;
        </button>
      )}
    </>
  );
};

export default BackToTop;
