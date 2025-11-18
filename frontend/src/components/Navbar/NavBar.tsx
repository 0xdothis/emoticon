import Link from "next/link";

 const NavBar = (props : {}) => {
  return (
    <header className="font-barr h-[100px] fixed top-0 right-0 left-0 bg-[hsla(0,0%,97%,100)] z-10">
       <nav className="flex h-full justify-center items-center ">
          <ul className="flex gap-[32px] md:gap-[76px] text-[1.5rem] md:text-[2rem]">
           <li><Link href="/home">Home</Link></li>
           <li><Link href="/about">About</Link></li>
           <li><Link href="/mint">Mint</Link></li>

         </ul>
       </nav>  
    </header>
  )
}

 export default NavBar;
