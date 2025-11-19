import About from "@/components/About";
import MaxWithWrapper from "@/components/MaxWidthWrapper";

export default function AboutPage() {
  return (
    <main className="h-screen overflow-y-auto">
      <MaxWithWrapper>
      <About />
      </MaxWithWrapper>
    </main>
     )
}

