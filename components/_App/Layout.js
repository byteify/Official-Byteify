import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Digital Marketing and Web Development Services | Byteify Technologies</title>
        <meta name="description" content="Byteify Technologies is your go-to stop for efficient digital marketing and development services. From Shopify development to effective web design, we have it all." />
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      </Head>

      {children}

      <Toaster position="top-right" />

      <GoTop scrollStepInPx="100" delayInMs="10.50" />

      <Sidebar />
    </>
  );
};

export default Layout;
