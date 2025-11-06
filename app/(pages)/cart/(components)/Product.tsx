"use client";

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
      <div className="size-30 row-span-full bg-emerald-400 rounded-md"></div>
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <Counter id={product.id} quantity={product.quantity} />
      <h3 className="text-gray-400 text-lg">${product.price}</h3>
      <Button onClick={() => removeFromCart(product.id)}>Remove</Button>
    </div>
  );
}

export { Product };
