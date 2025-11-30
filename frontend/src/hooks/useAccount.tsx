"use client"
import React from 'react'
import { provider } from '@/config/provider';

function useAccount() {
const [account, setAccount] = React.useState(null);
  const [isConnected, setIsConnected] = React.useState(true)

  const signer = React.useCallback(async () => {
    if(account && isConnected) return;
     
  const wallets = await provider.send("eth_requestAccounts", [])

   setAccount(wallets[0])
  },[account,isConnected]); 

  React.useEffect(() => {
    //if(isConnected) return;
    signer();

    setIsConnected(false)
  },[])

  
  return {signer, account}

}

export default useAccount
