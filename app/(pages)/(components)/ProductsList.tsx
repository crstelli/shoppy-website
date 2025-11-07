import { fetchProducts } from "@/app/(services)/apiProducts";
import { Product } from "./Product";
import { Filter } from "./Filter";

export interface FilterProps {
  filter: string;
}

async function ProductsList({ filter }: FilterProps) {
  const products = await fetchProducts();
  const displayedProducts =
    filter === "all"
      ? products
      : products?.filter((prod) => prod.status.replaceAll(" ", "") === filter);

  return (
    <div className="flex flex-col">
      <Filter filter={filter} />
      <div className="grid grid-cols-3 gap-y-20 mt-12">
        {displayedProducts?.map(
          (p) => p.status !== "hidden" && <Product product={p} key={p.id} />
        )}
      </div>
    </div>
  );
}

export { ProductsList };
