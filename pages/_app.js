import { useEffect } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/codemirror.css";
import "../styles/index.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "../src/components/Navbar";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.min.js")
      : null;
    typeof document !== undefined
      ? require("@popperjs/core/dist/umd/popper.min.js")
      : null;
  }, []);
  return (
    <>
      <Head>
        <title>eduardo.wtf</title>
        <link rel="icon" href="/edlogoFinal_circle_clipped_thick_icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
