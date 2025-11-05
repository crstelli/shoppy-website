import { fetchProducts } from "@/app/(services)/apiProducts";
import { Product } from "./Product";

async function ProductsList() {
  const products = await fetchProducts();

  return (
    <div className="grid grid-cols-2 gap-y-20 mt-12">
      {products?.map(
        (p) => p.status !== "hidden" && <Product product={p} key={p.id} />
      )}
    </div>
  );
}

export { ProductsList };
