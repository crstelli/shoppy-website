"use client";

import { useCart } from "../../(contexts)/useCart";
import { getTagStyle } from "@/app/(lib)/getTagStyle";

import type { Product } from "@/app/(interfaces)/Product";

import { Button } from "@/app/(components)/Button";
import { Tag } from "@/app/(components)/Tag";
import Image from "next/image";

interface Props {
  product: Product;
}

function Product({ product }: Props) {
  const tagClasses = getTagStyle(product.status);

  const { addToCart } = useCart();

  return (
    <div className="rounded-md mx-auto relative bg-gray-800 border border-gray-700 flex flex-col items-center w-80">
      <Tag classes={`absolute -left-5 -top-2 ${tagClasses}`}>
        {product.status}
      </Tag>
      <div className="w-full aspect-3/2 relative">
        <Image
          src={product.image_path}
          alt="Product image"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="py-4 text-center px-7 flex flex-col h-full gap-2">
        <h2 className="text-2xl">{product.name}</h2>
        <p className="text-gray-400 grow">{product.description}</p>
        {product.status !== "sold out" && (
          <div className="grid grid-cols-[1fr_3fr_1fr] items-center mt-4 self-center gap-4">
            <span className="text-xl">${product.price}</span>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            <span className="text-gray-500">{product.quantity} left</span>
          </div>
        )}
      </div>
    </div>
  );
}

export { Product };
