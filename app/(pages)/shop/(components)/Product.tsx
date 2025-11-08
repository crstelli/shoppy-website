import Image from "next/image";

import type { ShopProduct } from "@/app/(interfaces)/ShopProduct";
import { getTagStyle } from "@/app/(lib)/getTagStyle";
import { useCart } from "@/app/(contexts)/useCart";

import { Button } from "@/app/(components)/Button";
import { Tag } from "@/app/(components)/Tag";

interface Props {
  product: ShopProduct;
}

function Product({ product }: Props) {
  const { addToCart } = useCart();

  const tagClasses = getTagStyle(product.status);

  return (
    <div className="rounded-md mx-auto relative bg-gray-800 border border-gray-700 flex flex-col items-center w-82">
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
      <div className="py-4 text-center px-3 flex flex-col h-full gap-2">
        <h2 className="text-2xl">{product.name}</h2>
        <p className="text-gray-400 grow">{product.description}</p>
        {product.status === "sold out" ? (
          <Tag classes="bg-gray-400">Currently not avaible</Tag>
        ) : (
          <div className="grid grid-cols-[2fr_5fr_2fr] items-center mt-4 self-center gap-4">
            <span className="text-xl">${product.price}</span>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            <span className="bg-gray-700 rounded-full text-gray-400 py-1 px-2 text-xs">
              {product.quantity} left
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export { Product };
