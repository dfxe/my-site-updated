import type { NextPage } from "next";
import Footer from "../../components/Footer/Footer";
import LeftPushNavbar from "../../components/Navbar/LeftPushNavbar";

const About: NextPage = () => {
  return (
    <>
      <title>About me</title>
      <LeftPushNavbar></LeftPushNavbar>
      <div className="flex flex-col justify-center items-center">
        <h1>About</h1>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
