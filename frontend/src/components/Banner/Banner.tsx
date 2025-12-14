import Link from "next/link";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center py-8">
      <div className="space-y-4">
        <h3 className="font-barr md:text-5xl text-[2.5rem]">Join the Movement</h3>
        <p className="font-dyna leading-8">

          Own a piece of emotion.
          <br />Be part of the story that turns human feeling into digital legacy.</p>
      </div>
      <Link href="/mint" className="font-dyna text-center text-[1.25rem] mt-8 md:mt-0 bg-[hsl(256deg,27%,59%)] md:self-center text-white px-8 py-4 rounded-md">Mint Your Emoticon</Link>
    </div>
  )
}


export default Banner
