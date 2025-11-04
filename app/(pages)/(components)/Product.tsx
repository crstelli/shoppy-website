import { Button } from "@/app/(components)/Button";

function Product() {
  return (
    <div className="rounded-md mx-auto overflow-hidden bg-gray-800 border border-gray-700 flex flex-col items-center w-80">
      <div className="w-full aspect-3/2 bg-emerald-500"></div>
      <div className="py-4 text-center px-7 flex flex-col gap-2">
        <h2 className="text-2xl">Product #21</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptate
          vero magnam quisquam et? Quo,
        </p>
        <div className="flex items-center mt-4 self-center gap-4">
          <span className="text-xl">$21</span>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

export { Product };
