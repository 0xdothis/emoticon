"use client";
import { contract } from "@/config/contract";

//Iterate to get all Kitties minted and their owners
export async function getAllEmoticons() {
  const nfts = [];

  const supply = await contract.totalSupply();

  const totalSupply = parseInt(supply);

  for (let i = 1; i <= totalSupply; i++) {
    const owner = await contract.ownerOf(i);
    nfts.push({ tokenId: i, owner: owner });
  }
  return nfts;
}

//List all Kitties and their owners
getAllEmoticons().then((nfts) => {
  nfts.forEach(({ tokenId }) => {
    console.log(`Token ID: ${tokenId}`);
  });
});
