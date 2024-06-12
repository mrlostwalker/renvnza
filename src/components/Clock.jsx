import Countdown from "react-countdown";

function Clock() {
  return (
    <div className="w-screen flex justify-center my-2 lg:mb-8 ">
      <div className="md:border border-gray/50  pb-5 xl:pb-10 xl w-[100] xl:w-[35rem] flex flex-col justify-center items-center z-[10] text-white text-[3rem] md:text-[4rem] tracking-[1rem] font-clash">
        <Countdown
          date={new Date("2024-07-03T00:00:00").getTime()}
          className="text-[1.5rem] xl:text-[4rem]"
        />
        <div className="text-[.8rem] flex gap-[26px] xl:gap-[70px] md:text-lg bottom-0 relative -tracking-tight">
          <span className=" ">
            DAY
          </span>
          <span className="">
            HOURS
          </span>
          <span className="">MINUTES</span>
          <span className="">SECONDS</span>
        </div>
      </div>
      {/* <Image
        src="/QR.png"
        alt="barcode"
        width={150}
        height={150}
        className="hidden xl:block object-contain px-4 mt-[8rem] border border-gray/50"
      /> */}

      <div className="hidden xl:block pl-4 border  min-w-min-[3rem] border-gray/50 p-3 text-white">
        <div className="flex flex-col gap-2 justify-center items-center h-[100%]">
          <span className="font-chakra text-[1.8rem]">
            2024 <span className="font-clash">July</span>
          </span>
          <span className="flex gap-2 text-[2rem] font-chakra font-bold">
            3<b className="text-[12px]">TH</b>4<b className="text-[12px]">TH</b>
            5<b className="text-[12px]">TH</b>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Clock;
