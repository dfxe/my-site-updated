import type { NextPage } from "next";
import Link from "next/link";
import Footer from "../../components/Footer/Footer";
import LeftPushNavbar from "../../components/Navbar/LeftPushNavbar";

const Blog: NextPage = () => {
  return (
    <>
      <title>Dragos&apos; blog</title>
      <LeftPushNavbar></LeftPushNavbar>
      <br></br>
      <br></br>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl">Blog</h1>
      </div>
      <br></br>
      <br></br>

      <div className="flex flex-col justify-center items-center">
        <div className="flex row justify-around text-xl">
          <span>1</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-xl">22.06.22</span>
        </div>

        <Link href="/blog/post-one">
          <p className="hover:bg-card-primary-hover underline decoration-2 hover:no-underline transition ease-in duration-300 text-4xl cursor-pointer">
            Labradors
          </p>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
