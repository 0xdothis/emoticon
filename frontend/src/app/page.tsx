import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import MaxWithWrapper from "@/components/MaxWidthWrapper";
import NavBar from "@/components/Navbar";
import WhatWhy from "@/components/WhatWhy";

export default function Home() {
  return (
      <main className="h-dvh bg-[hsla(0,0%,97%,100)] bg-[url('../../public/bg-img.png')]  bg-cover ">
      <NavBar />
      <MaxWithWrapper>
        <Hero />
        <WhatWhy />
        <Banner />
      </MaxWithWrapper>
    
     </main>
    
  );
}
