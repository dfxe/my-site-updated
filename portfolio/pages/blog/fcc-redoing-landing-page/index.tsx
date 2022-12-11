import { useEffect } from "react";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";
import anime from "animejs";
import { blogPosts } from "../../../lib/blog-posts";
import Image from "next/image";
import Link from "next/link";
const PostOne = () => {
  useEffect(() => {
    if (typeof window != "undefined") {
      document.documentElement.style.left = "0px";
    }
    anime({
      targets: "body",
      translateX: [0, 0],
      translateY: [0, 0],

      duration: 500,
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <>
      <BackLinkButton linkToPage={"/blog"} />
      <div className="flex flex-col mx-4 mb-24 xl:mx-96">
        <h1 className="my-5 text-2xl xl:text-6xl">{blogPosts[0].title}</h1>
        <p className="text-secondary">by dfxe</p>
        <Link href="https://codepen.io/dfxe/full/rNMoRZb" target={"_blank"}>
          See the webapp here.
        </Link>
        <div className="mt-4">
          <div className="flex justify-between mb-4">
            <p style={{ flex: "50%", textAlign: "justify" }}>
              I recently re-did my product landing page as part of the
              freecodecamp curriculum. I wanted to make it more user-friendly
              and visually appealing, so I spent some time redesigning the
              layout and adding some new images and graphics. I also made sure
              to optimize the page for mobile devices, as more and more people
              are using their phones to browse the web. Starting with SPAMD{" "}
              <br /> 1. validation is off, prettier does not work with unclosed
              tags <br />
              2. after fixing the unclosed tags issues and more, let&apos;s see
              the site
            </p>
            <div className="mx-4 xl:mx-6"></div>
            <Image
              src="/spamd.png"
              alt="image of the previous spamd site"
              width={500}
              height={700}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ flex: "50%", textAlign: "justify" }}>
              Overall, I&apos;m really happy however there is room for
              improvement. CSS is all good, however, a good styling framework
              could save a lot of time. with the end result and I think
              it&apos;s a huge improvement over the previous version of the
              page.s day the green river was a fluorescent pink.
            </p>
            <div className="mx-4 xl:mx-6"></div>
            <Link href="https://codepen.io/dfxe/full/rNMoRZb" target={"_blank"}>
              <Image
                src="/spamd-2.png"
                alt="image of the current spamd site"
                width={500}
                height={1000}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostOne;
