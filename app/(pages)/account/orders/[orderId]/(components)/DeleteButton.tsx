"use client";

import { Button } from "@/app/(components)/Button";
import { cancelOrder } from "@/app/(lib)/actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function DeleteButton({ orderId }: { orderId: number }) {
  const router = useRouter();
  return (
    <form
      onSubmit={async () => {
        const response = await cancelOrder(orderId);

        if (response.ok) {
          router.back();
          router.refresh();
          toast.success("Order deleted successfully");
        } else {
          toast.error(response.message);
        }
      }}
    >
      <Button variant="danger" type="submit">
        Delete Order
      </Button>
    </form>
  );
}

export { DeleteButton };
