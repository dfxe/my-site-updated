import type { NextPage } from "next";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Blog: NextPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center">
        <h1>Blog</h1>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Blog;
