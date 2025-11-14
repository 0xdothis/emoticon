import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-row gap-[32px] items-center justify-center">
        <h1 className="text-3xl font-bold">
          A Nextjs + Tailwind + Shadcn Starter Kit
        </h1>
        <Button className="px-8 py-8 text-lg">Shadcn Button</Button>
      </main>
    </div>
  );
}
