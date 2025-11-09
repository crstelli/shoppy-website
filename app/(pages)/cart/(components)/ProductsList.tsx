"use client";

import Link from "next/link";
import { Product } from "./Product";

import { useCart } from "@/app/(contexts)/useCart";
import { Button } from "@/app/(components)/Button";

function ProductsList() {
  const { cart } = useCart();

  return (
    <div className="row-span-full flex flex-col gap-12">
      {cart.length === 0 ? (
        <div className="text-center mt-10 flex flex-col items-center gap-2">
          <h1 className="text-lg">Your cart is empty!</h1>{" "}
          <Link href="/shop">
            <Button className="mt-4 text-lg">Go Shopping Now</Button>
          </Link>
        </div>
      ) : (
        cart.map((p) => <Product product={p} key={p.id} />)
      )}
    </div>
  );
}

export { ProductsList };
