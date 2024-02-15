/* eslint-disable @next/next/no-img-element */
"use client";

import { formatCurrency } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  imgUrl: string;
}

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 items-center w-full ">
      <div
        onClick={() => {
          router.push(
            `${pathname.includes("product") ? "" : "product/"}${product.slug}?${
              product.id
            }`
          );
        }}
        className="w-full aspect-[8/9] bg-secondary rounded-lg shadow hover:scale-105 transition-all cursor-pointer"
      >
        <img
          className="h-full w-full object-contain object-center"
          src={product.imgUrl}
          alt="product image"
        />
      </div>

      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-1 text-sm">
          <span className="font-medium">{product.name}</span>
          <span>{formatCurrency(product.price)}</span>
        </div>

        <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center border-2 border-foreground h-9 w-9 rounded-full hover:bg-foreground hover:text-card cursor-pointer transition-all antialised">
            <ShoppingBag className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
