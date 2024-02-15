"use client";

import { payProduct } from "@/app/server/actions/pay-product";
import { Product } from "../product-card";
import { Button } from "../ui/button";

interface Props {
  product: Product;
}

const ActionButtons = ({ product }: Props) => {
  return (
    <div className="flex flex-wrap justify-center md:justify-normal w-full gap-3 pt-3">
      <Button
        variant="outline"
        className="rounded-full px-6 sm:px-8 lg:px-10 h-9"
      >
        <span className="text-xs">Agregar al carro</span>
      </Button>
      <Button
        onClick={async () => {
          await payProduct(product);
        }}
        className="rounded-full px-6 sm:px-8 lg:px-10 h-9"
      >
        <span className="text-xs">Comprar ahora</span>
      </Button>
    </div>
  );
};

export default ActionButtons;
