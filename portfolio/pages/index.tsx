import type { NextPage } from "next";
import Portfolio from "../components/Portfolio";
import Head from "next/head";
import PageViewProvider from "../components/Contexts/PageViewProvider";
import WorkInProgress from "../components/WorkInProgress";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dragos&apos; Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <PageViewProvider>
        {/* {process.env.NODE_ENV === "production" ? (
          <WorkInProgress />
        ) : (

        )} */}
          <Portfolio />
      </PageViewProvider>
    </>
  );
};

export default Home;
