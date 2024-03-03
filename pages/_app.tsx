import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

import Layout from "../components/layout/Layout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-toastify/dist/ReactToastify.css";
import "node_modules/video-react/dist/video-react.css";

import "../styles/globals.css";

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
