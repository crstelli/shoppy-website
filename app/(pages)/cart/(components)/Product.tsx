import { Counter } from "./Counter";
import { Button } from "@/app/(components)/Button";

function Product() {
  return (
    <div className="grid grid-cols-[auto_2fr_1fr] gap-x-6 grid-rows-3">
      <div className="size-30 row-span-full bg-emerald-400 rounded-md"></div>
      <h2 className="text-2xl font-bold">Shoes</h2>
      <Counter />
      <h3 className="text-gray-400 text-lg">100$</h3>
      <Button>Remove</Button>
    </div>
  );
}

export { Product };
