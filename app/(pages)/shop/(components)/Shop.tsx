"use client";

import { useState } from "react";

import type { ShopProduct } from "@/app/(interfaces)/ShopProduct";
import { PAGE_SIZE } from "@/app/(lib)/constants";

import { Filter } from "@/app/(components)/(filter)/Filter";
import { Slider } from "@/app/(components)/Slider";

import { Product } from "./Product";
import { Pagination } from "../../../(components)/Pagination";

interface Props {
  products: ShopProduct[];
  status: string;
  page: number;
}

function Shop({ products, status, page }: Props) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  /* prettier-ignore */
  const statusFilteredProducts = status === "all" ? products : products.filter((prod) => prod.status.replaceAll(" ", "") === status);
  /* prettier-ignore */
  const priceFilteredProducts = statusFilteredProducts.filter(prod => prod.price >= priceRange[0] && prod.price <= priceRange[1]);
  /* prettier-ignore */
  const paginatedProducts = priceFilteredProducts?.slice(0 + (page - 1) * PAGE_SIZE, PAGE_SIZE + PAGE_SIZE * (page - 1) );

  return (
    <div className="flex flex-col grow">
      <div className="flex flex-col sm:flex-row gap-6 justify-between items-center mt-10">
        <Slider values={priceRange} setValues={setPriceRange} />
        <Filter value="status" filter={status} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-20 mt-12">
        {paginatedProducts?.map(
          (p) => p.status !== "hidden" && <Product product={p} key={p.id} />
        )}
      </div>
      <Pagination elementsSize={priceFilteredProducts?.length} />
    </div>
  );
}

export { Shop };
