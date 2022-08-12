import { useEffect } from "react";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";

const PostOne = () => {
  useEffect(() => {
    if (typeof window != "undefined")
      document.documentElement.style.left = "0px";
  }, []);

  return (
    <>
      <BackLinkButton linkToPage={"/blog"} />

      <div className="flex flex-col mx-4 xl:mx-96">
        <h1 className="text-4xl xl:text-8xl my-5">Rows & Columns</h1>

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
        <br></br>
        <br></br>
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
