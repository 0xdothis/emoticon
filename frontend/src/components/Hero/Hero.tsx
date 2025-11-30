import React from "react";
import Image from "next/image";
import heroImg from "../../../public/hero-img.gif";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="max-w-[678px] space-y-8">
        <h1 className="font-barr md:text-[4rem] text-[2.5rem] mt-8 md:mt-0">
          Express the Future, <br />
          One Emoticon at a Time.
        </h1>
        <p className="font-dyna text-[1.25rem] tracking-wider leading-10">
          Emoticon is an exclusive NFT collection capturing the full spectrum of
          human emotion, joy, rage, love, fear, and everything in between. Each
          piece is a digital heartbeat designed to connect us beyond screens and
          blockchains.
        </p>
        <div className="font-dyna text-2xl space-x-4">
          <Link
            href="/mint"
            className="bg-[hsl(256deg,27%,59%)] text-[hsl(0,0%,97%)] px-4 md:px-[71px] py-[.75rem] rounded-lg"
          >
            Mint
          </Link>
          <Link
            href="/about"
            className=" px-4 md:px-[71px] py-[.75rem] rounded-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="md:w-[428px] md:h-[428px] p-8 md:p-0 bg-[hsla(7,80%,60%,100)] rounded-tl-[50px] rounded-br-[50px] flex justify-center items-center ">
        <Image
          src={heroImg.src}
          alt="collections of ntf's"
          height={320}
          width={320}
        />
      </div>
    </div>
  );
}

export default Hero;
