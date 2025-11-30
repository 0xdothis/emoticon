import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function displayWallet(value: string): string {
  const start = value.slice(0, 5);
  const end = value.slice(-4);

  return `${start}...${end}`;
}
