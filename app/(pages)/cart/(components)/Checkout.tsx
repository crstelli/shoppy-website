import { Button } from "@/app/(components)/Button";
import { useCart } from "@/app/(contexts)/useCart";

import { createOrder } from "@/app/(lib)/actions";

function Checkout() {
  const { cart } = useCart();

  return (
    <div className="bg-gray-800 p-4 row-span-2 rounded-md flex flex-col">
      {cart.length > 0 && (
        <Button
          onClick={() => {
            createOrder(cart);
          }}
          classes="mt-auto"
        >
          Checkout
        </Button>
      )}
    </div>
  );
}

export { Checkout };
