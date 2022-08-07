import type { NextPage } from "next";
import Link from "next/link";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Blog: NextPage = () => {
  return (
    <>
      <title>Dragos&apos; blog</title>
      <Navbar></Navbar>
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
