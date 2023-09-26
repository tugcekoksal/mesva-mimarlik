import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head key={"head"}>
        <title>Mesva</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        />
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
