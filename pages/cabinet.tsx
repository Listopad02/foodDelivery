import React from 'react'
import CabinetCompanent from "../components/CabinetCompanent";
import Head from "next/head";
import Nav2 from "../components/Nav2";
import Footer from "../components/Footer";

const Cabinet = () => {
    return (
       <>
           <Head>
               <title>Шашландия - Личный кабинет</title>
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
           </Head>
           <Nav2 />
        <CabinetCompanent />
        <Footer />
       </>
    )
}

export default Cabinet