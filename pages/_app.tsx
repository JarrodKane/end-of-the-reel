import "../styles/globals.css";
import type { AppProps } from "next/app";

import PlayerProvider from "../context/PlayerProvider";

import Layout from "../components/templates/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  // Added a layout component since I wanted the Player to be persistent throughout pages
  return (
    <PlayerProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlayerProvider>
  );
}
export default MyApp;
