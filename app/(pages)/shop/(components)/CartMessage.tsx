"use client";

import { useCart } from "@/app/(contexts)/useCart";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CartMessage() {
  const { cart } = useCart();
  const pathname = usePathname();

  if (cart.length > 0 && !pathname.startsWith("/cart"))
    return (
      <>
        <Link
          href="/cart"
          className="fixed border border-emerald-500/50 bottom-6 left-1/2 -translate-x-1/2 text-center bg-gray-800 rounded-md text-lg flex flex-col gap-4 px-6 py-4 text-gray-300"
        >
          <p>Don&apos;t lose your order, you have something in your cart!</p>
          <span className="bg-emerald-500 hover:bg-emerald-600 transition-150 cursor-pointer px-4 text-gray-900 rounded-full py-1 self-center">
            Go to checkout &rarr;
          </span>
        </Link>
      </>
    );
}

export { CartMessage };
