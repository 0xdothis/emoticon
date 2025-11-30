import { BrowserProvider } from "ethers";
import { ethers } from "ethers";

//Declare a global Window interface to help clear window.ethereum error in the IDE
declare global {
  interface Window {
    ethereum?: ethers.Eip1193Provider;
  }
}

let provider: BrowserProvider;

if (window.ethereum) {
  provider = new BrowserProvider(window.ethereum);
} else {
  alert("Please make sure you have a compatible wallet installed");
}

export { provider };
