import Head from "next/head";
import React from "react";
import Header from "./header/Header";

import Footer from './Footer'

const Layout: React.FC<{title: string, isResume?: boolean}> = ({ children, title, isResume = false }) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isResume={isResume} />

      <div className="h-[80px]" />

      {children}

      <div className="h-[40px]" />
      
      <Footer/>
    </div>
  );
};

export default Layout;
