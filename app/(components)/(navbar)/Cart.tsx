"use client";

import { useCart } from "@/app/(contexts)/useCart";
import { ShoppingCart } from "lucide-react";

function Cart() {
  const { cart } = useCart();
  const cartLength = cart.length;

  return (
    <span className="relative">
      <ShoppingCart size={35} className="ml-4" />
      {cartLength > 0 && (
        <span className="absolute -top-1 -right-2 bg-emerald-500 text-gray-900 rounded-full size-5 flex items-center justify-center text-sm">
          {cartLength}
        </span>
      )}
    </span>
  );
}

export { Cart };
