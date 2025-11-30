import { contract } from "@/config/contract";

export const totalSupply = async () => {
  const value = await contract.totalSupply();

  console.log(value);
};
