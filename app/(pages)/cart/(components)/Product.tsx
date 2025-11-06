"use client";
import Image from "next/image";

import { Counter } from "./Counter";
import { Button } from "@/app/(components)/Button";
import { useCart } from "@/app/(contexts)/useCart";

import type { CartProduct } from "@/app/(interfaces)/CartProduct";

interface Props {
  product: CartProduct;
}

function Product({ product }: Props) {
  const { removeFromCart } = useCart();

  return (
    <div className="grid grid-cols-[auto_2fr_1fr] gap-x-6 grid-rows-3">
      <div className="w-full row-span-3 border border-gray-700 rounded-md aspect-3/2 relative">
        <Image
          src={product.image_path}
          alt="Product image"
          fill
          className="object-cover object-center rounded-md"
        />
      </div>
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <Counter id={product.id} quantity={product.quantity} />
      <h3 className="text-gray-400 text-lg">${product.price}</h3>
      <div></div>
      <Button onClick={() => removeFromCart(product.id)}>Remove</Button>
    </div>
  );
}

export { Product };
