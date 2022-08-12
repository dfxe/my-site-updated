import Link from "next/link";
import { useEffect, useState } from "react";
import anime from "animejs";

const LeftPushNavbar = () => {
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      if (showMobileNavMenu) {
        // push left
        if (window.screen.width < 1280) {
          anime({
            targets: "body",
            translateX: [0, -window.screen.width],
            translateY: [0, 0],
            duration: 500,
            easing: "easeInOutQuad",
          });
          anime({
            targets: "nav",
            //from-to
            width: "120%",

            duration: 500,
            easing: "easeInOutQuad",
          });
          anime({
            targets: "#the-nav-children-els",
            //from-to
            left: "100%",
            width: "100%",
            duration: 500,
            easing: "easeInOutQuad",
          });
        } else {
          anime({
            targets: "body",
            translateX: [0, "-33vw"],
            translateY: [0, 0],
            duration: 500,
            easing: "easeInOutQuad",
          });
        }
        //moving the nav children
      } else {
        // idle

        if (window.screen.width < 1280) {
          anime({
            targets: "body",
            //from-to
            translateX: [-window.screen.width, 0],
            translateY: [0, 0],
            duration: 500,
            easing: "easeInOutQuad",
          });
          anime({
            targets: "nav",
            //from-to
            width: "100%",

            duration: 500,
            easing: "easeInOutQuad",
          });
        } else {
          anime({
            targets: "body",
            //from-to
            translateX: ["-33vw", 0],
            translateY: [0, 0],
            duration: 500,
            easing: "easeInOutQuad",
          });
        }
        //moving the nav children
        anime({
          targets: "#the-nav-children-els",
          //from-to
          left: "100%",
          width: "33vw",
          duration: 500,
          easing: "easeInOutQuad",
        });
      }
    }
  }, [showMobileNavMenu]);

  return (
    <header>
      <nav>
        <div className="flex row justify-between">
          <div className=" bg-card-primary w-72 text-6xl">
            <Link href="/">@dfxe</Link>
          </div>
          <button
            className="mr-4"
            onClick={() => setShowMobileNavMenu(!showMobileNavMenu)}
          >
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
          style={{
            display: showMobileNavMenu ? "flex" : "none",
            flexDirection: "column",
            zIndex: -10,
            width: "auto",
            position: "fixed",
          }}
        >
          <Link href="/">
            <p
              className="cursor-pointer py-10 text-center
              bg-card-primary text-4xl hover:bg-card-primary-hover transition duration-[200] ease-in-out"
              onClick={() => setShowMobileNavMenu(false)}
            >
              Home
            </p>
          </Link>

          <Link href="/blog">
            <p
              className="cursor-pointer py-10 text-center bg-card-primary text-4xl hover:bg-card-primary-hover "
              onClick={() => setShowMobileNavMenu(false)}
            >
              Blog
            </p>
          </Link>

          <Link href="/about">
            <p
              className="cursor-pointer py-10 text-center bg-card-primary text-4xl hover:bg-card-primary-hover "
              onClick={() => setShowMobileNavMenu(false)}
            >
              About
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default LeftPushNavbar;
