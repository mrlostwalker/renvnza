import React, { useEffect } from "react";
import Image from "next/image";

export default function EventSlider() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="proshow" className="flex flex-col items-center justify-center h-fit pb-[80px] bg-gradient-to-b from-transparent to-[#0c162e] mt-20">
      <h1 className="text-[2.7rem] leading-10 text-center md:text-[4rem] text-white font-clash font-bold tracking-wider">
        Shades of Renvnza
      </h1>
      <div className="flex flex-wrap gap-8 md:gap-16 lg:gap-20 pt-10 items-center justify-center px-10 mt-10">
        <div data-tilt className="w-fit relative scale-105">
          <div className="updown">
            <div className="flex items-center justify-center w-full h-[22rem] xl:h-[30rem] rounded-sm bg-[#3656a9] backdrop:blur-xl hover:-skew-x-6 skew-y-3 transition-all duration-300 ease-in-out">
              <div className="w-full h-[22rem] xl:h-[30rem] rounded-sm  bg-gray hover:skew-x-6 hover:scale-105 transition-all duration-300 ease-in-out">
                <span className="text-3xl font-clash font-semibold px-4 py-2 absolute left-[-2rem] top-4 bg-[#3656a9] text-white">
                  DAY - 1
                </span>
                <Image
                  src="/day_1.jpg"
                  alt="talk show"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div data-tilt className="w-fit relative scale-105">
          <div className="updown">
            <div className="flex items-center justify-center w-full h-[22rem] xl:h-[30rem] rounded-sm bg-[#3656a9] backdrop:blur-xl hover:-skew-x-6 skew-y-3 transition-all duration-300 ease-in-out">
              <div className="w-full h-[22rem] xl:h-[30rem] rounded-sm  bg-gray hover:skew-x-6 hover:scale-105 transition-all duration-300 ease-in-out">
                <span className="text-3xl font-clash font-semibold px-4 py-2 absolute left-[-2rem] top-4 bg-[#3656a9] text-white">
                  DAY - 2
                </span>
                <Image
                  src="/day_2.jpg"
                  alt="dj"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div data-tilt className="w-fit relative scale-105">
          <div className="updown">
            <div className="flex items-center justify-center w-full h-[22rem] xl:h-[30rem] rounded-sm bg-[#3656a9] backdrop:blur-xl hover:-skew-x-6 skew-y-3 transition-all duration-300 ease-in-out">
              <div className="w-full h-[22rem] xl:h-[30rem] rounded-sm  bg-gray hover:skew-x-6 hover:scale-105 transition-all duration-300 ease-in-out">
                <span className="text-3xl font-clash font-semibold px-4 py-2 absolute left-[-2rem] top-4 bg-[#3656a9] text-white">
                DAY - 3
                </span>
                <Image
                  src="/day_3.jpg"
                  alt="talk show"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
