import { Footer } from "../components/Footer";
import Layout from "../components/Layout";
import { Nav } from "../components/Nav";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      {/* <Nav /> */}
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
