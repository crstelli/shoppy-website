import { Product } from "./(components)/Product";

export default function page() {
  return (
    <div className="grid grid-cols-[1fr_300px] grid-rows-3 h-full grow mt-10">
      <div className="row-span-full flex flex-col gap-10">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="bg-gray-800 row-span-2"></div>
    </div>
  );
}
