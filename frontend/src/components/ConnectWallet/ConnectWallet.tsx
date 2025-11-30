"use client"

import useAccount from "@/hooks/useAccount"
import { displayWallet } from "@/lib/utils"
import Link from "next/link";

export default function ConnectWallet() {

  const {signer, account} = useAccount();
  return (
    <>
    {account ? 
        <div className="flex gap-8 flex-col md:flex-row">
          <p className="bg-slate-300 text-slate-500 px-8 py-[.75rem] rounded-lg w-fit"> {account ? displayWallet(account) : ""}
</p>
    <Link href="/mint" className="bg-[hsl(256deg,27%,59%)] text-[hsl(0,0%,97%)] md:px-[71px] w-fit px-8 py-[.75rem] rounded-lg">Mint</Link>

    </div >
: <button onClick={signer} className="bg-[hsl(256deg,27%,59%)] text-[hsl(0,0%,97%)] px-[71px] py-[.75rem] rounded-lg">
                    Connect Wallet </button> 
      }
    </>)
   }

