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
          className="text-[3.2rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[12.5rem] md:mt-4 lg:mt-12"
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
          className="text-base font-medium  text-white xl:text-xl"
        >
          <strong>RenvnzA '24</strong>, the <strong>Techno-Cultural Odyssey </strong>of the University College of
          Engineering, Kariavattom (UCEK), brings together kindred spirits to
          explore the uncharted realms of a technological and cultural utopia.
          This spectacular event features tech-manic workshops, intense
          competitions, exciting recreational activities, and mesmerizing
          cultural programs by renowned artists. <br /> <strong> It's more than just a fest; 
          it's an incredible journey into the heart of innovation and
          creativity.</strong> As we weave technology with a hint of cultural activities,
          stay witness to this synergy connecting with visionary minds, and turn
          into one of UCEK’s legacy, redefining the boundaries of possibility.
          This year, RenvnzA will be conducted on the <strong>3rd </strong>, <strong>4th</strong>, and <strong>5th of July</strong>.
          Join us for three days of unparalleled innovation and excitement.
        </span>
      </div>
      <div className="absolute font-clash font-bold text-white">
        <span className="flex gap-6 text-[2.3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem]">
          About <Navlink name={"UCEK"} link={"/#about"} />{" "}
        </span>
      </div>
      <div
        ref={aboutaec}
        className="flex flex-col mt-20 lg:flex-row items-center gap-8 py-8"
      >
        <p className="text-white text-base xl:text-xl font-chakra font-medium">
          University College of Engineering Kariavattom (UCEK), the pride of the
          Kariavattom campus spread across  <strong>400 acres</strong>, boasting <strong>32 departments </strong>,
          is a breeding ground for future engineers, that nurture intellect.
          UCEK, the center of innovation, neighbors the IT hub <strong>Technopark</strong>, and
          <strong>UST Global</strong>, and features the <strong>Greenfield International Stadium </strong>just a
          peek away, state-of-the-art labs, and seasoned faculty. <br />
          <strong> UCEK stands as
          a symbol of academic heritage and eminence. </strong> What sets us apart is our
          success in holistic development, demonstrated by our alumni network
          and notable <strong> National </strong>and <strong>International Communities</strong> such as <strong>IEEE, NSS,</strong>
          and <strong>FOSS CELL. </strong> Other communities such as <strong> IEDC, GDSC, Mulearn </strong>and
         <strong> TinkerHub </strong>have made significant contributions to what makes UCEK
          proud. Graduates excel in prestigious companies, reflecting the
          immaculate knowledge earned from here, and encouraging international
          exposure that shines on the global stage.
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
