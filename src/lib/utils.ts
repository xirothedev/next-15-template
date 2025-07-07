import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { withFluid } from "@fluid-tailwind/tailwind-merge";

export const twMerge = extendTailwindMerge(withFluid);

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
