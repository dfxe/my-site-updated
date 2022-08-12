import type { NextPage } from "next";
import Link from "next/link";
import Footer from "../../components/Footer/Footer";
import LeftPushNavbar from "../../components/Navbar/LeftPushNavbar";

const Blog: NextPage = () => {
  return (
    <>
      <title>Dragos&apos; blog</title>
      <LeftPushNavbar></LeftPushNavbar>
      <div className="flex flex-col justify-center items-center">
        <h1>Blog</h1>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Link href="/blog/post-one">Post one</Link>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Blog;
