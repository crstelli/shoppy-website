import { Product } from "./Product";

function ProductsList() {
  return (
    <div className="grid grid-cols-2 gap-y-20 mt-12">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export { ProductsList };
