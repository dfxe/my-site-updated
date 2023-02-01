import type { NextPage } from "next";
import Link from "next/link";
import Footer from "../../components/Footer/Footer";
import LeftPushNavbar from "../../components/Navbar/LeftPushNavbar";
import { blogPosts } from "../../lib/blog-posts";
const Blog: NextPage = () => {
  return (
    <>
      <title>Dragos&apos;s blog</title>
      <LeftPushNavbar></LeftPushNavbar>
      <br></br>
      <br></br>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl">Blog</h1>
      </div>
      <br></br>
      <br></br>

      <div className="flex flex-col items-start justify-center mx-[2vw] lg:mx-[30vw]">
        {blogPosts.map((item, i) => (
          <div key={i} className="mb-6">
            <div className="flex justify-between text-xl row">
              <span className="text-secondary">{i + 1}</span>
              <span className="text-xl text-secondary">{item.date}</span>
            </div>
            <Link href={item.path}>
              <p className="text-2xl underline transition duration-300 ease-in cursor-pointer hover:bg-card-primary-hover decoration-2 hover:no-underline">
                {item.title}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Blog;
