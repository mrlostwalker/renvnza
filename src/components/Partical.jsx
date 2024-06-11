import Confetti from "react-confetti";
import React, { useRef } from "react";
import Image from "next/image";

export default function Partical() {
    const confetiRef = useRef(null);

    return (
        <div className="bg-[#0c162e] flex flex-col gap-4 items-center justify-center relative p-6" ref={confetiRef}>
            <h1 className="text-center text-[1rem] lg:text-[2rem] text-white font-clash font-semibold">Yes, the rumours are true!  <br /> Welcome to South India’s largest Techno-Cultural Fest🎉<br />
July 3, 4 & 5 🗓️
DON'T miss it—you'll regret it! 🚀</h1>
            <Image
                src="/renvnza.png"
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-xl hover:shadow-xl hover:shadow-main_primary transition duration-500 ease-in-out"
            />
            <Confetti numberOfPieces={150} width={2000} height={1000} className="w-full h-full" />
        </div>
    );
}