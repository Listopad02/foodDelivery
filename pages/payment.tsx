import type { NextPage } from "next";
import Head from "next/head";
import Nav2 from "../components/Nav2";
import Footer from "../components/Footer";
import PaymentComponent from "../components/PaymentComponent";
import Development from "../components/Development";

const Payment: NextPage = () => {
  return (
    <>
      <Head>
        <title>Шашландия - доставка и оплата</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav2 />
      <PaymentComponent />
      {/* <Development /> */}
      <Footer />
    </>
  );
};

export default Payment;
