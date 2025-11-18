import Link from "next/link";

function Banner() {
  return (
    <div className="flex justify-between items center py-8">
      <div className="space-y-4">
        <h3 className="font-barr text-5xl">Join the Movement</h3>
        <p className="font-dyna">
          Own a piece of emotion.
          <br/>Be part of the story that turns human feeling into digital legacy.</p>
      </div>
      <Link href="/mint" className="font-dyna text-[1.25rem] bg-[hsl(256deg,27%,59%)] self-center text-white px-8 py-4 rounded-md">Mint Your Emoticon</Link>
    </div>
  )
}


export default Banner
