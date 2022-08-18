import type { NextPage } from "next";
import Head from "next/head";
import Nav2 from "../components/Nav2";
import Footer from "../components/Footer";
import CartComponent from "../components/CartComponent";
import Development from "../components/Development";
import Basket from "../components/Basket";

const Cart: NextPage = () => {
  return (
    <div style={{ background: "#EAEAEA" }}>
      <Head>
        <title>Шашландия - корзина</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav2 />
       <CartComponent />
      {/*<Development />*/}
      <Footer />
    </div>
  );
};

export default Cart;
