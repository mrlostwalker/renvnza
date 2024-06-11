import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import About from "@/components/About";
import Marque2 from "@/components/Marque2";
import Footer from "@/components/Footer";
import Clock from "@/components/Clock";
import Map from "@/components/Map";
import gsap from "gsap";
import fsPromises from "fs/promises";
import path from "path";
import RitModel from "@/components/RitModel";
import EventSlider from "@/components/EventSlider";
import Partical from "@/components/Partical";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    gsap.fromTo(
      stagger.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5 }
    );
  }, []);

  const stagger = useRef(null);

  return (
    <div className="bg-black h-fit">
      <Head>
        <title>Renvnza</title>
      </Head>

      <Header id="navbar" />

      <section id="hero">
        <div
          ref={stagger}
          className="hidden xl:block italic relative w-full text-center top-[7rem] z-[10]"
        >
          <p className="text-white pl-[1.5rem] top-[6rem] uppercase font-clash font-bold text-[2.5rem] tracking-wide">
            UNIVERSITY COLLEGE OF ENGINEERING KARIAVATTOM
          </p>
          <p className="text-white font-clash text-xl">PRESENTS</p>
        </div>

        <div>
          <Hero />
          <div className="w-full justify-center pb-10 hidden xl:flex">
            <video src="/bg.mp4" autoPlay muted className="w-[26rem] mt-36"></video>
          </div>
          <Video />
        </div>
      </section>

      {isLoaded && <Clock />}

      <EventSlider  />

      <Partical />

      <div className="bg-gradient-to-b from-[#0c162e] to-transparent">
        <RitModel />
        <section id="about">
          <About />
        </section>
      </div>

      <Marque2 />

      <Map />
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
