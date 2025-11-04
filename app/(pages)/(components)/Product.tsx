import { Button } from "@/app/(components)/Button";
import type { Product } from "@/app/(interfaces)/Product";

interface Props {
  product: Product;
}

function Product({ product }: Props) {
  return (
    <div className="rounded-md mx-auto overflow-hidden bg-gray-800 border border-gray-700 flex flex-col items-center w-80">
      <div className="w-full aspect-3/2 bg-emerald-500"></div>
      <div className="py-4 text-center px-7 flex flex-col gap-2">
        <h2 className="text-2xl">{product.name}</h2>
        <p className="text-gray-400">{product.description}</p>
        <div className="flex items-center mt-4 self-center gap-4">
          <span className="text-xl">${product.price}</span>
          <Button>Add to Cart</Button>
        </div>
        <span className="text-gray-500">{product.quantity} left</span>
      </div>
    </div>
  );
}

export { Product };
