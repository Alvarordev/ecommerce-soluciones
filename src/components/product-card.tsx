/* eslint-disable @next/next/no-img-element */
import { ShoppingBag } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div className="h-80 w-full bg-secondary rounded-lg">
        <img
          className="h-full w-full object-contain object-center"
          src={product.imgUrl}
          alt=""
        />
      </div>

      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-1 text-sm">
          <span className="font-medium">{product.name}</span>
          <span>S/. {product.price}</span>
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
