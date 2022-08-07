import type { NextPage } from "next";
import Link from "next/link";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Blog: NextPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center">
        <h1>Blog</h1>
      </div>

      <Link href="/blog/PostOne">PostOne</Link>
      <Footer></Footer>
    </>
  );
};

export default Blog;
