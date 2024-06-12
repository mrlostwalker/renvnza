
import React, { useRef } from "react";

export default function Partical() {
  const confetiRef = useRef(null);

  return (
    <div
      className="bg-[#0c162e] flex flex-col gap-4 items-center justify-center relative p-6"
      ref={confetiRef}
    >
      <h1 className="text-center text-[1rem] lg:text-[3rem] text-white font-clash font-semibold">
        {" "}
        Welcome to South India’s largest Techno-Cultural Fest
      </h1>
      <video
        src="/dance.mp4"
        autoPlay
        loop
        muted
        className="rounded-3xl  w-[20rem] h-[14rem] md:w-[24rem] xl:w-[68rem] xl:h-[31rem] object-cover"
      ></video>
    </div>
  );
}
