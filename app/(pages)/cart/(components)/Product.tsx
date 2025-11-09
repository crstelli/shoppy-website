import Image from "next/image";

import type { CartProduct } from "@/app/(interfaces)/CartProduct";
import { useCart } from "@/app/(contexts)/useCart";
import { Button } from "@/app/(components)/Button";

import { Counter } from "../../../(components)/(counter)/Counter";

interface Props {
  product: CartProduct;
}

function Product({ product }: Props) {
  const { removeFromCart } = useCart();

  return (
    <div className="grid grid-cols-[auto_1fr_1fr] lg:grid-cols-[auto_2fr_1fr] gap-4 lg:grid-rows-3 lg:text-left">
      <div className="w-[90%] max-w-[150px] lg:w-full row-span-3 border border-gray-700 rounded-lg aspect-3/2 relative">
        <Image
          src={product.image_path}
          alt="Product image"
          fill
          className="object-cover object-center rounded-lg"
        />
      </div>
      <h2 className="text-xl col-span-2 font-bold">{product.name}</h2>
      <h3 className="text-gray-400 lg:col-start-2 text-xl">${product.price}</h3>
      <Counter
        max={product.max_quantity}
        id={product.id}
        quantity={product.quantity}
      />
      <div></div>
      <Button
        variant="danger"
        className="justify-self-center"
        onClick={() => removeFromCart(product.id)}
      >
        Remove
      </Button>
    </div>
  );
}

export { Product };
