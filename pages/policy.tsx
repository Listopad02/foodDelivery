import type { NextPage } from "next";
import Head from "next/head";
import Nav2 from "../components/Nav2";
import Footer from "../components/Footer";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Development from "../components/Development";

const Menu: NextPage = () => {
  return (
    <>
      <Head>
        <title>Шашландия - меню</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav2 />
      <PrivacyPolicy />
      {/* <Development /> */}
      <Footer />
    </>
  );
};

export default Menu;
