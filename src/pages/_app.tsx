import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
// COMPONENTS
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

function MyApp({ Component, pageProps }: AppProps) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Header setMenu={setMenu} />
      {menu && <Component {...pageProps} />}
      {!menu && <Modal />}
      <Footer />
    </>
  );
}

export default MyApp;
