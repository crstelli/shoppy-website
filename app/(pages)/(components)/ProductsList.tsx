"use client";

import { Product } from "./Product";
import { Filter } from "./Filter";

import { Slider } from "./Slider";
import type { Product as ProductType } from "@/app/(interfaces)/Product";
import { useState } from "react";
import { PAGE_SIZE } from "@/app/(lib)/constants";

export interface FilterProps {
  filter: string;
}

interface ProductsProps {
  filter: string;
  page: number;
  products: ProductType[];
}

function ProductsList({ filter, products, page }: ProductsProps) {
  const [values, setValues] = useState([10, 100]);

  const filteredProducts = products.filter(
    (prod) => prod.price > values[0] && prod.price < values[1]
  );

  const paginatedProducts = filteredProducts?.slice(
    0 + (page - 1) * PAGE_SIZE,
    PAGE_SIZE + PAGE_SIZE * (page - 1)
  );
  return (
    <div className="flex flex-col">
      <div className="flex items-center mt-10">
        <Slider values={values} setValues={setValues} />
        <Filter filter={filter} />
      </div>
      <div className="grid grid-cols-3 gap-y-20 mt-12">
        {paginatedProducts?.map(
          (p) => p.status !== "hidden" && <Product product={p} key={p.id} />
        )}
      </div>
    </div>
  );
}

export { ProductsList };
