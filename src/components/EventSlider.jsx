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
      Hues of Renvnza
      </h1>
      <div className="flex flex-wrap gap-8 md:gap-16 lg:gap-20 pt-10 items-center justify-center px-10 mt-10">
        <div data-tilt className="w-fit relative scale-105">
          <div className="updown">
            <div className='w-full h-[22rem] xl:h-[30rem]'>

            
              <div className="w-full h-[22rem] xl:h-[30rem] rounded-sm  bg-gray  hover:scale-105 transition-all duration-300 ease-in-out">
              <span className="text-lg xl:text-3xl font-clash font-semibold absolute w-full bottom-0 flex justify-center  text-white">
                  <div className='bg-[#2e2d2d62] px-4 py-2 w-[45%] text-center rounded-t-3xl backdrop-blur-sm'>
                  DAY - 1
                  </div>
                </span>
                <Image
                  src="/coming_soon.png"
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
              <div className="w-full h-[22rem] xl:h-[30rem] rounded-sm  bg-gray  hover:scale-105 transition-all duration-300 ease-in-out">
              <span className="text-lg xl:text-3xl font-clash font-semibold absolute w-full bottom-0 flex justify-center  text-white">
                  <div className='bg-[#2e2d2d62] px-4 py-2 w-[45%] text-center rounded-t-3xl backdrop-blur-sm'>
                  DAY - 2
                  </div>
                </span>
                <Image
                  src="/coming_soon.png"
                  alt="dj"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                
              </div>

          </div>
        </div>

        <div data-tilt className="w-fit relative scale-105">
          <div className="updown">
              <div className="w-full h-[22rem] xl:h-[30rem] rounded-sm  bg-gray hover:scale-105 transition-all duration-300 ease-in-out">
              <span className="text-lg xl:text-3xl font-clash font-semibold absolute w-full bottom-0 flex justify-center  text-white">
                  <div className='bg-[#2e2d2d62] px-4 py-2 w-[45%] text-center rounded-t-3xl backdrop-blur-sm'>
                  DAY - 3
                  </div>
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
  );
}
