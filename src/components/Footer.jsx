import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {

  return (
    <footer className=" h-fit flex flex-col border-gray/40 bg-[#070707] text-white px-0 flex-wrap overflow-hidden">
      <div className="flex flex-wrap">
        <div className="min-w-[4rem] grow-[1] text-white/70">
          <div>
            <div className="flex justify-center">
              <Link
                href="https://x.com/renvnza_ucek?t=hN1UVfi3AIA27BFJv6i7-w&s=09"
                className="social-links flex items-center justify-center  min-w-[5rem] min-h-[7rem] hover:text-[#3656a9]"
              >
                <FaTwitter size="2rem" />
              </Link>
              <Link
                href="https://www.instagram.com/renvnza_ucek"
                className="social-links flex items-center justify-center  min-w-[5rem] min-h-[7rem] hover:text-[#3656a9]"
              >
                <FaInstagram size="2rem" />
              </Link>
              <Link
                href="https://www.youtube.com/@renvnza_ucek"
                className="social-links flex items-center justify-center  min-w-[5rem] min-h-[7rem] hover:text-[#3656a9]"
              >
                <FaYoutube size="2rem" />
              </Link>
              <Link
                href="https://www.facebook.com/RenVnza?mibextid=qi2Omg&rdid=5P5WzEDhay1hSQJj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FH23Q48Pj9GPgfJKL%2F%3Fmibextid%3Dqi2Omg"
                className="social-links flex items-center justify-center min-w-[5rem] min-h-[7rem] hover:text-[#3656a9]"
              >
                <FaFacebookF size="2rem" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="font-clash flex justify-center py-2 text-[10px] md:text-xs px-4  border-gray/40">
        <p>©2024 - RENVNZA UCEK </p>
      </div>
    </footer>
  );
}
