import type { NextPage } from "next";
import Portfolio from "../components/Portfolio";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dragos Dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
      </Head>

      <Portfolio />
    </>
  );
};

export default Home;
