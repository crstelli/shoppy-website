"use client";

import { Checkout } from "./(components)/Checkout";
import { ProductsList } from "./(components)/ProductsList";

export default function page() {
  return (
    <div className="grid grid-cols-[1fr_300px] grid-rows-3 h-full grow mt-10">
      <ProductsList />
      <Checkout />
    </div>
  );
}
