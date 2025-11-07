"use client";

import { Button } from "@/app/(components)/Button";
import { useCart } from "@/app/(contexts)/useCart";

import { createOrder } from "@/app/(lib)/actions";
import { useState } from "react";

function Checkout({ defaultAddress }: { defaultAddress: string }) {
  const { cart, clearCart } = useCart();
  const [address, setAddress] = useState(defaultAddress);
  const total = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  return (
    <div className="bg-gray-800 p-4 row-span-2 rounded-md flex flex-col">
      <h4 className="text-center text-2xl mb-4 border-b-2 px-3 self-center border-emerald-500">
        Your Cart
      </h4>
      {cart.map((p) => (
        <div
          key={p.id}
          className="grid items-center gap-4 grid-cols-[auto_1fr_auto]"
        >
          <span className="bg-emerald-500 text-gray-800 font-bold size-7 text-lg text-center rounded-full">
            {p.quantity}
          </span>
          <h3 className="text-xl">{p.name}</h3>
          <span className="text-xl font-light">
            ${(p.price * p.quantity).toLocaleString()}
          </span>
        </div>
      ))}

      <p className="text-center text-xl mt-auto">
        Total: ${total.toLocaleString()}
      </p>
      {cart.length > 0 && (
        <>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="bg-gray-900 px-2 py-1 text-center placeholder:text-gray-400 text-gray-300 rounded-md mt-4"
            placeholder="Delivery address"
          />
          <Button
            onClick={() => {
              if (address.length > 3) {
                createOrder(cart, address);
                clearCart();
                setAddress("");
              }
            }}
            classes="mt-4"
          >
            Checkout
          </Button>
        </>
      )}
    </div>
  );
}

export { Checkout };
