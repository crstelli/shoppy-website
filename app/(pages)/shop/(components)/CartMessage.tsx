"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useCart } from "@/app/(contexts)/useCart";
import { X } from "lucide-react";

function CartMessage() {
  const { cart } = useCart();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(true);

  if (cart.length > 0 && !pathname.startsWith("/cart") && isOpen)
    return (
      <div className="fixed w-[90%] max-w-[450px] border border-gray-700 z-1 shadow-2xl bottom-6 left-1/2 -translate-x-1/2 text-center bg-gray-800 rounded-md text-lg flex flex-col gap-4 px-10 py-4 text-gray-300">
        <X
          onClick={() => setIsOpen(false)}
          className="absolute top-1 right-1 cursor-pointer"
        />
        <p>Don&apos;t lose your order, you have something in your cart!</p>
        <Link
          className="bg-emerald-500 duration-150 hover:bg-emerald-600 transition-150 cursor-pointer px-4 text-gray-900 rounded-full py-1 self-center"
          href="/cart"
        >
          Go to checkout &rarr;
        </Link>
      </div>
    );
}

export { CartMessage };
