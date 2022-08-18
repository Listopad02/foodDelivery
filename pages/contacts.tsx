import type { NextPage } from "next";
import Head from "next/head";
import Nav2 from "../components/Nav2";
import Footer from "../components/Footer";
import ContactsComponent from "../components/ContactsComponent";
import Development from "../components/Development";
import {Box} from "@mui/material";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Шашландия - контакты</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav2 />
      <ContactsComponent />
      <Box sx={{ marginTop: { xs: '400px', sm: '100px' } }}>
        <Footer />
      </Box>
    </>
  );
};

export default Contacts;
