"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { createOrder } from "@/app/(lib)/actions";
import { useCart } from "@/app/(contexts)/useCart";
import { Button } from "@/app/(components)/Button";
import { CheckoutItem } from "./CheckoutItem";

interface Props {
  info: { defaultAddress: string; deliveryPrice: number };
}

function Checkout({ info }: Props) {
  const [address, setAddress] = useState(info.defaultAddress);
  const { cart, clearCart } = useCart();

  const total =
    info.deliveryPrice +
    cart.reduce((acc, product) => acc + product.quantity * product.price, 0);

  return (
    <div className="bg-gray-800 max-w-[500px] min-w-[300px] min-h-[500px] mx-auto py-3 px-5 row-span-2 rounded-md flex flex-col">
      <h4 className="text-center text-2xl mb-4 border-b-2 px-3 self-center border-emerald-500">
        Your Cart
      </h4>
      <div className="flex flex-col gap-4">
        {cart.map((p) => (
          <CheckoutItem key={p.id} product={p} />
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-auto flex flex-col">
          <div className="grid grid-cols-[1fr_auto] text-center gap-x-4">
            <span className={address ? "opacity-100" : "opacity-0"}>
              Delivery Address
            </span>
            <span className="row-span-2 mt-auto mb-1 whitespace-nowrap">
              Delivery: ${info.deliveryPrice}
            </span>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="bg-gray-900 w-full px-2 py-1 text-center placeholder:text-gray-400 text-gray-300 rounded-md"
              placeholder="Delivery address"
            />
          </div>
          <p className="text-center text-xl mt-6">
            Total: ${total.toLocaleString()}
          </p>
          <Button
            className="mt-2"
            onClick={async () => {
              if (address.length > 3) {
                const response = await createOrder(cart, address);

                if (response.ok) {
                  clearCart();
                  setAddress("");

                  toast.success("Order made succesfully");
                } else {
                  toast.error(response.message);
                }
              }
            }}
          >
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
}

export { Checkout };
