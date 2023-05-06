import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
// COMPONENTS
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: GmarketSans;
    font-style: normal;
    font-weight: normal;
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Header setMenu={setMenu} />
      {menu && <Component {...pageProps} />}
      {!menu && <Modal />}
      <Footer />
    </>
  );
}

export default MyApp;
