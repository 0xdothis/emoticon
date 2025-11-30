"use client";
import { ethers } from "ethers";
import { provider } from "./provider";
import { EMOTICON_CONTRACT_ABI } from "../constant/EMOTICON_CONTRACT_ABI";

export const contract = new ethers.Contract(
  process.env.NEXT_PUBLIC_EMOTICON_CONTRACT_ADDRESS as `0x${string}`,
  EMOTICON_CONTRACT_ABI,
  provider,
);
