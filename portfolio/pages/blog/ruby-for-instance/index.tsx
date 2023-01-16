import { useEffect } from "react";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";
import anime from "animejs";
import { blogPosts } from "../../../lib/blog-posts";
import Link from "next/link";
import Image from "next/image";
const PostThree = () => {
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
        <h1 className="my-5 text-2xl xl:text-6xl">{blogPosts[2].title}</h1>
        <p className="text-secondary">by dfxe</p>
        <Link href="https://ruby-mid.pages.dev/" target={"_blank"}>
          Check Ruby for Instance here.
        </Link>
        <div className="mt-4">
          <div className="flex justify-between mb-4">
            <p style={{ flex: "50%", textAlign: "justify" }}>
              <b>What is this?</b>
              <br />
              <p className="text-secondary">
                We&apos;ve all been there. We look for ways to quickly learn a
                new language and start browsing the web for answers. Question
                after question, request after request, each time. And there you
                are, wanting to learn Ruby because developer time is paramount,
                you want to build a website with a back-end quickly, with a
                smoother learning curve than other frameworks.
              </p>
            </p>
            <div className="mx-4 xl:mx-6"></div>
            <Link href="https://ruby-mid.pages.dev/" target={"_blank"}>
              <Image
                src="/ruby-fi.webp"
                alt="image of the previous spamd site"
                width={500}
                height={700}
              />
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ flex: "50%", textAlign: "justify" }}>
              <b>Why</b>
              <br />
              <p className="text-secondary">
                {" "}
                A quick guide connecting most features would be very helpful,
                especially if you&apos;re coming from another language or have
                forgotten some arcane feature that sounds good (I&apos;m looking
                at you useful Python function from library no. 4460).
              </p>
            </p>
            <div className="mx-4 xl:mx-6"></div>
            <p style={{ flex: "50%", textAlign: "justify" }}>
              <b>Conclusion</b>
              <br />{" "}
              <p className="text-secondary">
                Enter Ruby for Instance, a great short lexicon containing some
                of the most commonly used features of the Ruby language,
                directly in code.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostThree;
