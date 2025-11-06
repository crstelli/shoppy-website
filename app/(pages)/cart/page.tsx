import { ProductsList } from "./(components)/ProductsList";

export default function page() {
  return (
    <div className="grid grid-cols-[1fr_300px] grid-rows-3 h-full grow mt-10">
      <ProductsList />
      <div className="bg-gray-800 row-span-2 rounded-md"></div>
    </div>
  );
}
