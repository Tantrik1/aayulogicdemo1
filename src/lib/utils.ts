import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

export const easingCurve = {
  industrial: [0.16, 1, 0.3, 1] as [number, number, number, number],
  easeOut: "easeOut" as const,
};

export const motionConfig = {
  default: {
    duration: 0.5,
    ease: easingCurve.industrial,
  },
};
