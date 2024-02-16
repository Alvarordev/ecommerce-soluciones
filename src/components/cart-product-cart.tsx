/* eslint-disable @next/next/no-img-element */
import { formatCurrency } from "@/lib/utils";
import { Product } from "./product-card";


const CartProductCard = ({product}: {product: Product}) => {
  return (
    <div className="flex gap-6 bg-muted rounded-lg p-6 shadow-md">
      <div className="bg-slate-200 rounded-lg h-48 max-w-48 w-full">
        <img className="object-cover object-center" src={product.imgUrl} alt="product-image" />
      </div>

      <div className="flex flex-col gap-4 min-h-full w-full">
        <div className="flex flex-col">
          <span className="text-muted-foreground text-sm">Smartphones</span>
          <span className="text-2xl font-semibold">{product.name}</span>
        </div>

        <div className="flex flex-col flex-grow text-sm text-muted-foreground h-full">
            <span>Cantidad: 1</span>
            <span>Color: Midnight Black</span>
            <div className="flex justify-end items-end h-full">
                <span className="text-2xl text-foreground font-semibold mt-12">{formatCurrency(product.price)}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
