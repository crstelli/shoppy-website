import { fetchProducts } from "@/app/(services)/apiProducts";
import { Product } from "./Product";
import { Filter } from "./Filter";

import { PAGE_SIZE } from "@/app/(lib)/constants";

export interface FilterProps {
  filter: string;
}

interface ProductsProps {
  filter: string;
  page: number;
}

async function ProductsList({ filter, page }: ProductsProps) {
  const products = await fetchProducts();
  const displayedProducts =
    filter === "all"
      ? products
      : products?.filter((prod) => prod.status.replaceAll(" ", "") === filter);

  const paginatedProducts = displayedProducts?.slice(
    0 + (page - 1) * PAGE_SIZE,
    PAGE_SIZE + PAGE_SIZE * (page - 1)
  );

  return (
    <div className="flex flex-col">
      <Filter filter={filter} />
      <div className="grid grid-cols-3 gap-y-20 mt-12">
        {paginatedProducts?.map(
          (p) => p.status !== "hidden" && <Product product={p} key={p.id} />
        )}
      </div>
    </div>
  );
}

export { ProductsList };
