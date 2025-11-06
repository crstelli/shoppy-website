"use client";

import { useCart } from "../../../(contexts)/useCart";
import { Product } from "./Product";

function ProductsList() {
  const { cart } = useCart();

  return (
    <div className="row-span-full flex flex-col gap-10">
      {cart.length === 0 ? (
        <p className="text-center mt-10 text-xl">Your cart is empty!</p>
      ) : (
        cart.map((p) => <Product product={p} key={p.id} />)
      )}
    </div>
  );
}

export { ProductsList };
