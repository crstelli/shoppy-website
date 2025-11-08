"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/(contexts)/useCart";

function Cart() {
  const { cart } = useCart();
  const cartLength = cart.length;

  return (
    <span className="relative">
      <ShoppingCart
        size={35}
        className="ml-4 hover:text-gray-400 duration-150"
      />
      {cartLength > 0 && (
        <span className="absolute -top-1 -right-2 bg-emerald-500 text-gray-900 rounded-full size-5 flex items-center justify-center text-sm">
          {cartLength}
        </span>
      )}
    </span>
  );
}

export { Cart };
