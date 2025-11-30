import Image from "next/image";
import heroImg from "../../../public/hero-img.gif";
import ConnectWallet from "../ConnectWallet";

function Mint() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-[428px] md:h-[428px] p-8 md:p-0  bg-[hsla(219,72%,55%,100)] rounded-tl-[50px] rounded-br-[50px] flex justify-center items-center ">
        <Image
          src={heroImg.src}
          alt="collections of ntf's"
          height={320}
          width={320}
        />
      </div>

      <div className="max-w-[678px] space-y-8">
        <h1 className="font-barr md:text-[4rem] text-[2.5rem] mt-8 md:mt-0">
          Mint Your Emoticon.
        </h1>
        <p className="font-dyna text-[1.25rem] tracking-wider leading-8 md:leading-10">
          Your Emoticon is waiting unique, expressive, and forever yours on the
          blockchain.
        </p>
        <p className="font-dyna text-[1.25rem] tracking-wider leading-8 md:leading-10">
          Join the wave of emoticon spreading through the metaverse.  Minting an
          Emoticon means owning a piece of digital feeling, no duplicates, no
          copies. Just pure expression, recorded forever.
        </p>
        <div className="font-dyna text-2xl">
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
}

export default Mint;
