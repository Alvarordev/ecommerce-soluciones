import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (price: number) => {
  let penSol = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  });

  const formattedPrice = penSol.format(price);

  return formattedPrice;
};
