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
        <p className="text-4xl">
          <Link href="/blog/post-one">
            <div className="hover:bg-card-primary-hover cursor-pointer">
              Labradors
            </div>
          </Link>
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Blog;
