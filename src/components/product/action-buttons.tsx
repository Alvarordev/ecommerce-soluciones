"use client";

import { payProduct } from "@/app/api/actions/pay-product";
import { Product } from "../product-card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
}

const ActionButtons = ({ product }: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-wrap justify-center md:justify-normal w-full gap-3 pt-3">
      <Button
        variant="outline"
        className="rounded-full px-6 sm:px-8 lg:px-10 h-9"
      >
        <span className="text-xs">Agregar al carro</span>
      </Button>
      <Button
        onClick={() => router.push('/checkout')}
        className="rounded-full px-6 sm:px-8 lg:px-10 h-9"
      >
        <span className="text-xs">Comprar ahora</span>
      </Button>
    </div>
  );
};

export default ActionButtons;
