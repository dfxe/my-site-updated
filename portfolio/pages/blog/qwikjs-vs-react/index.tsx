import { useEffect } from "react";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";
import anime from "animejs";
import { blogPosts } from "../../../lib/blog-posts";
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
      <div className="flex flex-col mx-4 xl:mx-96">
        <h1 className="my-5 text-2xl xl:text-6xl">{blogPosts[1].title}</h1>
        <div className="flex justify-between mb-4">
          <p style={{ flex: "50%", textAlign: "justify" }}>
            They had always called it the green river. It made sense. The river
            was green. The river likely had a different official name, but to
            everyone in town, it was and had always been the green river. So it
            was with great surprise that on this day the green river was a
            fluorescent pink.
          </p>
          <div className="mx-4 xl:mx-6"></div>
          <p style={{ flex: "50%", textAlign: "justify" }}>
            Do you really listen when you are talking with someone? I have a
            friend who listens in an unforgiving way. She actually takes every
            word you say as being something important and when you have a friend
            that listens like that, words take on a whole new meaning.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ flex: "50%", textAlign: "justify" }}>
            They had always called it the green river. It made sense. The river
            was green. The river likely had a different official name, but to
            everyone in town, it was and had always been the green river. So it
            was with great surprise that on this day the green river was a
            fluorescent pink.
          </p>
          <div className="mx-4 xl:mx-6"></div>
          <p style={{ flex: "50%", textAlign: "justify" }}>
            Do you really listen when you are talking with someone? I have a
            friend who listens in an unforgiving way. She actually takes every
            word you say as being something important and when you have a friend
            that listens like that, words take on a whole new meaning.
          </p>
        </div>
      </div>
    </>
  );
};
export default PostOne;
