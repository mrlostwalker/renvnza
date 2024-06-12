import React from "react";
import { Chakra_Petch } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import LocalFont from "next/font/local";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import "../styles/global.css";
import "../styles/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import InitialLoader from "@/components/InitialLoader";
import Head from "next/head";

const font_chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-chakra",
});

const font_ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm",
});

const font_bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const font_clash_display = LocalFont({
  src: "../fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
});

export const metadata = {
  title: "RENVNZA",
  description: "Get ready to immerse yourself in the electrifying beats and vibrant energy of South India's largest techno cultural extravaganza, Renvnza '24",
  image: "/logo.png",
  url: "https://renvnza.in", 
  manifest: "/manifest.json",
  metadataBase: new URL('https://renvnza.in'),
  icons: "/logo_black.svg",
}


export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [initialLoading, setInitialLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setInitialLoading(false);
    }, 2700);

    const handleStart = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2700);
    };

    router.events.on(
      "routeChangeStart",
      (url) => url != router.asPath && handleStart()
    );

    return () => {
      router.events.off(
        "routeChangeStart",
        (url) => url != router.asPath && handleStart()
      );
    };
  }, [router.asPath, router.events]);

  if (initialLoading) {
    return <InitialLoader />;
  }

 
  return (
    <>
      <Head>
        <title>Renvnza'24</title>
        <meta name="title" property="og:title" content="Renvnza'24"/>
        <meta name="type" property="og:type" content="website"/>
        <meta name="image" property="og:image" content="/logo.png"/>
        <meta name="url" property="og:title" content="Renvnza'24"/>
        <meta name="description" property="og:description" content="Get ready to immerse yourself in the electrifying beats and vibrant energy of South India's largest techno cultural extravaganza, Renvnza '24"/>
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <main
            className={`${font_chakra.variable} ${font_clash_display.variable} ${font_ibm.variable} ${font_bebas.variable}`}
          >
            <Component {...pageProps} />
            <Analytics />

            
          </main>
        </motion.div>
      )}
    </>
  );
}
