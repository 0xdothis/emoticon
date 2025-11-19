import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import MaxWithWrapper from "@/components/MaxWidthWrapper";
import WhatWhy from "@/components/WhatWhy";
import CountDown from "@/components/CountDown";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto">
      <MaxWithWrapper>
        <Hero />
        <WhatWhy />
        <Banner />
      </MaxWithWrapper>
      {/**<CountDown /> */}
    </main>
  );
}
