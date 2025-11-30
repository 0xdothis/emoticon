import { BrowserProvider, Eip1193Provider } from "ethers";
import { ethers } from "ethers";

//Declare a global Window interface to help clear window.ethereum error in the IDE
declare global {
  interface Window {
    ethereum: Eip1193Provider;
  }
}

let provider: BrowserProvider;

const isWindowEthereum =
  typeof window !== "undefined" && typeof window.ethereum !== "undefined";

if (isWindowEthereum) {
  provider = new BrowserProvider(window.ethereum);
} else {
  console.log("Please make sure you have a compatible wallet installed");
}

export { provider };
