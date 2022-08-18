import type { NextPage } from "next";
import Head from "next/head";
import Nav2 from "../components/Nav2";
import Cart from "../components/Cart";
import Face from "../components/Face";
import Categories from "../components/Categories";
import Services from "../components/Services";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Шашландия - главная</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav2 />
      <Face />
      <Categories />
      <Products />
      <Cart />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
