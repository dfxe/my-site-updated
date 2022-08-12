import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import anime from "animejs";

const LeftPushNavbar = () => {
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);
  const firstUpdate = useRef(false);
  useEffect(() => {
    if (typeof window != "undefined") {
      if (showMobileNavMenu) {
        // push left
        if (window.screen.width < 1280) {
          anime({
            targets: "#the-rest-of-the-page",
            translateX: [0, -window.screen.width],
            translateY: [0, 0],
            duration: 600,
            easing: "easeInOutQuad",
          });
          anime({
            targets: "nav",
            //from-to
            width: "120%",

            duration: 600,
            easing: "easeInOutQuad",
          });
        } else {
          anime({
            targets: "#the-rest-of-the-page",
            translateX: [0, -500],
            translateY: [0, 0],
            duration: 600,
            easing: "easeInOutQuad",
          });
        }
        //moving the nav children
        anime({
          targets: "#the-nav-children-els",
          //from-to
          left: "100%",
          duration: 600,
          easing: "easeInOutQuad",
        });
        anime({
          targets: "#the-nav-children-els",
          //from-to
          delay: 600,
          display: "flex",
          duration: 600,
          easing: "easeInOutQuad",
        });
      } else {
        // idle
        if (!firstUpdate.current) {
          firstUpdate.current = true;
        } else {
          if (window.screen.width < 1280) {
            anime({
              targets: "#the-rest-of-the-page",
              //from-to
              translateX: [-window.screen.width, 0],
              translateY: [0, 0],
              duration: 600,
              easing: "easeInOutQuad",
            });
            anime({
              targets: "nav",
              //from-to
              width: "100%",

              duration: 600,
              easing: "easeInOutQuad",
            });
          } else {
            anime({
              targets: "#the-rest-of-the-page",
              //from-to
              translateX: [-500, 0],
              translateY: [0, 0],
              duration: 600,
              easing: "easeInOutQuad",
            });
          }
          //moving the nav children
          anime({
            targets: "#the-nav-children-els",
            //from-to

            left: "100%",
            duration: 600,
            easing: "easeInOutQuad",
          });
          anime({
            targets: "#the-nav-children-els",
            //from-to
            delay: 400,
            display: "none",
            duration: 600,
            easing: "easeInOutQuad",
          });
        }
      }
    }
  }, [showMobileNavMenu]);

  return (
    <header>
      <nav>
        <div className="flex row justify-between mx-4">
          <div className=" bg-card-primary w-72 text-6xl">
            <Link href="/">@dfxe</Link>
          </div>
          <button onClick={() => setShowMobileNavMenu(!showMobileNavMenu)}>
            <svg
              data-name="Layer 3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="3rem"
              height="3rem"
            >
              <path d="M97.092 36.078H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zm0 25.811H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zm0 25.811H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222z" />
            </svg>
          </button>
        </div>

        <div
          id="the-nav-children-els"
          className="
            fixed
            -z-10
            w-full
            flex flex-col children:px-10 children:py-2 children:border-b-1
             children:bg-card-primary
            children:text-4xl"
        >
          <Link href="/" onClick={() => setShowMobileNavMenu(false)}>
            Home
          </Link>

          <Link href="/blog" onClick={() => setShowMobileNavMenu(false)}>
            Blog
          </Link>

          <Link href="/about" onClick={() => setShowMobileNavMenu(false)}>
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default LeftPushNavbar;
