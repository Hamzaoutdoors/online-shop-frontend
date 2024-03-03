import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Header from "../header";
import store, { AppDispatch, RootState } from "../../store/index";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import Footer from "../footer";
import { useSelector } from "react-redux";
import Preloader from "../UI/preLoader/Preloader";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      {/*       <ThemeProvider enableSystem={true} attribute="class">
       */}{" "}
      <Head>
        <title>eShop</title>
      </Head>
      <div className="flex flex-col min-h-[100vh]">
        <NextNProgress height={7} />
        <Header />
        <main className="flex-grow md:mt-40 md:mx-10">{children}</main>
        <Footer />
      </div>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        position={"top-right"}
      />
    </Provider>
  );
};

export default Layout;
