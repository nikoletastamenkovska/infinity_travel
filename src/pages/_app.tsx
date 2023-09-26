import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Modal from "react-modal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Footer } from "src/components/footer/Footer";
import { Header } from "src/components/header/Header";
import "src/styles/globals.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);
  return (
    <main>
      <Header allCountries={pageProps.allCountries} />
      <Component {...pageProps} />
      <Footer allCountries={pageProps.allCountries} />
    </main>
  );
}
