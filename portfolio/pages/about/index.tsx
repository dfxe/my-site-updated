import type { NextPage } from "next";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const About: NextPage = () => {
  return (
    <>
      <title>About me</title>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center">
        <h1>About</h1>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
