import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navlink from "./Navlink";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const trigger = useRef(null);
  const aboutdarpan = useRef(null);
  const aboutaec = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      trigger.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: trigger.current,
          start: window.innerWidth > 768 ? "top 80%" : "top 20%",
          end: "bottom 80%",

          ease: "power4.eae-InOut",
        },
      }
    );
    // gsap.fromTo(
    //   aboutdarpan.current,
    //   { opacity: 0, y: 100 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     scrollTrigger: {
    //       trigger: aboutdarpan.current,
    //       start: "top 70%",
    //       scrub: true,
    //       ease: "expo.eae-InOut",
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   aboutaec.current,
    //   { opacity: 0, y: 100 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     scrollTrigger: {
    //       trigger: aboutaec.current,
    //       start: "top 80%",
    //       end: "bottom 80%",
    //       scrub: true,
    //       ease: "expo.eae-InOut",
    //     },
    // //   }
    // );
  }, []);

  return (
    <div className="h-fit relative pt-4 px-2 xl:px-20  ">
      <div className="about flex flex-wrap text-white tracking-wide xl:tracking-[.5rem]  text-[2.7rem] sm:text-[4.3rem] md:text-[6rem] lg:text-[5.5rem] xl:text-[6.7rem]  leading-[3rem] md:leading-[5rem] font-clash font-bold mt-16">
        <span>You might be</span>
        <span>Thinking what is</span>
        <span
          ref={trigger}
          className="text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[12.5rem] md:mt-4 lg:mt-12"
        >
          <span className="text-[#3656a9]">RENVNZA</span>
        </span>
        <span className="text-[3.7rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[12rem] md:mt-4 lg:mt-8">
          ?
        </span>
      </div>
      <div className="font-chakra text-base py-8 leading-[5px] xl:mt-4">
        <span
          ref={aboutdarpan}
          className="text-base font-medium text-white xl:text-xl"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using
        </span>
      </div>
      <div className="absolute font-clash font-bold text-white">
        <span className="flex gap-6 text-[3.3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem]">
          About <Navlink name={"UCEK"} link={"/#about"} />{" "}
        </span>
      </div>
      <div
        ref={aboutaec}
        className="flex flex-col mt-8 lg:flex-row items-center gap-8 py-8"
      >
        <p className="text-white text-base xl:text-xl font-chakra font-medium">
        Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using
        </p>

        <video
          src="/overlay.mp4"
          autoPlay
          loop
          muted
          className="abvideo w-[22rem] h-[20rem] md:w-[24rem] xl:w-[28rem] xl:h-[18rem] object-cover rounded-2xl border border-gray/50"
        ></video>
      </div>
    </div>
  );
}
