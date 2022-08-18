import type { NextPage } from "next";
import Head from "next/head";
import Nav2 from "../components/Nav2";
import Footer from "../components/Footer";
import { AboutComponent } from "../components/AboutComponent";
import Development from "../components/Development";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Шашландия - о нас</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav2 />
      <AboutComponent />
      {/* <Development /> */}
      <Footer />
    </>
  );
};

export default About;
