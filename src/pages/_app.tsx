import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";
// COMPONENTS
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import Content from "@/components/Content";
import styled from "styled-components";

const Bg = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  min-width: 360px;
  min-height: 100vh;
  background-color: #0f0f11;
`;
const GlobalStyle = createGlobalStyle`


  * {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    box-sizing: border-box;
    text-decoration: none; 
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
   ::-webkit-scrollbar {
  display: none; 
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Bg>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Content />
          <Footer />
        </Bg>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
